import { NextRequest, NextResponse } from "next/server";
import {
  isContactEmailConfigured,
  sendContactNotificationEmail,
} from "@/lib/email/send-contact-notification";

function normalizeStrapiUrl(rawUrl?: string) {
  const fallback = "http://localhost:1337";
  if (!rawUrl) return fallback;
  return rawUrl.trim().replace(/\/+$/, "").replace(/\/admin$/, "").replace(/\/api$/, "");
}

const STRAPI_URL = normalizeStrapiUrl(process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL);
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

interface FormFieldMeta {
  id?: number;
  label: string;
  type?: string;
  required?: boolean;
}

interface ContactPayload {
  fields?: FormFieldMeta[];
  values?: Record<string, string>;
  source?: string;
  [key: string]: unknown;
}

interface StrapiSubmissionPayload {
  name: string;
  email: string;
  company: string;
  message: string;
  source: string;
  payload: Record<string, unknown>;
}

function normalizeKey(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getStringValue(record: Record<string, string>, key: string) {
  const value = record[key];
  return typeof value === "string" ? value.trim() : "";
}

function toStringRecord(value: unknown) {
  if (!isRecord(value)) return {} as Record<string, string>;
  return Object.fromEntries(
    Object.entries(value).filter(([, entryValue]) => typeof entryValue === "string"),
  ) as Record<string, string>;
}

function isNameKey(normalized: string) {
  if (!normalized) return false;
  if (
    normalized.includes("company") ||
    normalized.includes("organization") ||
    normalized.includes("firm") ||
    normalized.includes("username")
  ) {
    return false;
  }
  return (
    normalized === "name" ||
    normalized === "fullname" ||
    normalized === "yourname" ||
    normalized.includes("fullname") ||
    (normalized.includes("name") && !normalized.includes("team"))
  );
}

function inferFieldValue(
  values: Record<string, string>,
  fields: FormFieldMeta[],
  options: {
    types?: string[];
    labelIncludes?: string[];
    keyIncludes?: string[];
    isMatch?: (normalized: string) => boolean;
  },
) {
  const lowerTypes = new Set((options.types || []).map((type) => type.toLowerCase()));
  const labelPatterns = (options.labelIncludes || []).map(normalizeKey);
  const keyPatterns = (options.keyIncludes || []).map(normalizeKey);
  const targetingEmail =
    lowerTypes.has("email") ||
    labelPatterns.some((pattern) => pattern.includes("email")) ||
    keyPatterns.some((pattern) => pattern.includes("email"));

  for (const field of fields) {
    const normalizedLabel = normalizeKey(field.label || "");
    const fieldKey = (field.label || "").toLowerCase().replace(/\s+/g, "_");
    const normalizedKey = normalizeKey(fieldKey);
    const value = getStringValue(values, fieldKey);

    if (!value) continue;

    // "Business email" must not be treated as Company (label contains "business").
    if (
      !targetingEmail &&
      (field.type?.toLowerCase() === "email" ||
        normalizedLabel.includes("email") ||
        normalizedKey.includes("email"))
    ) {
      continue;
    }

    if (field.type && lowerTypes.has(field.type.toLowerCase())) return value;
    if (options.isMatch) {
      if (options.isMatch(normalizedLabel) || options.isMatch(normalizedKey)) return value;
      continue;
    }
    if (labelPatterns.some((pattern) => normalizedLabel.includes(pattern))) return value;
    if (keyPatterns.some((pattern) => normalizedKey.includes(pattern))) return value;
  }

  for (const [key, rawValue] of Object.entries(values)) {
    const value = typeof rawValue === "string" ? rawValue.trim() : "";
    if (!value) continue;

    const normalizedKey = normalizeKey(key);
    if (!targetingEmail && normalizedKey.includes("email")) continue;

    if (options.isMatch) {
      if (options.isMatch(normalizedKey)) return value;
      continue;
    }
    if (keyPatterns.some((pattern) => normalizedKey.includes(pattern))) return value;
  }

  return "";
}

function buildFounderDiagnosticMessage(values: Record<string, string>) {
  const problem = getStringValue(values, "problem");
  const teamSize = getStringValue(values, "team_size");
  const canSignup = getStringValue(values, "can_signup");

  if (!problem && !teamSize && !canSignup) return "";

  return [
    "1. What problem do you solve, for whom, and in which country?",
    problem || "—",
    "",
    "2. How many people are in the team?",
    teamSize || "—",
    "",
    "3. Can someone sign up and use your product today?",
    canSignup || "—",
  ].join("\n");
}

function buildMessageFromValues(
  values: Record<string, string>,
  source: string,
  inferredMessage: string,
) {
  if (source === "founder-diagnostic") {
    const composed = buildFounderDiagnosticMessage(values);
    if (composed) return composed;
  }

  const explicitMessage = getStringValue(values, "message");
  if (explicitMessage) return explicitMessage;
  return inferredMessage;
}

async function submitToStrapi(payload: StrapiSubmissionPayload) {
  const data = {
    name: payload.name,
    email: payload.email,
    company: payload.company,
    message: payload.message,
    source: payload.source,
    payload: payload.payload,
  };

  const jsonHeaders = { "Content-Type": "application/json" };
  const attempts: Array<{ url: string; init: RequestInit }> = [];

  if (STRAPI_TOKEN) {
    attempts.push({
      url: `${STRAPI_URL}/api/form-submissions`,
      init: {
        method: "POST",
        headers: { ...jsonHeaders, Authorization: `Bearer ${STRAPI_TOKEN}` },
        body: JSON.stringify({ data }),
      },
    });
  }

  attempts.push({
    url: `${STRAPI_URL}/api/form-submissions`,
    init: {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify({ data }),
    },
  });

  let lastResponse: Response | null = null;

  for (const attempt of attempts) {
    const response = await fetch(attempt.url, attempt.init);
    lastResponse = response;
    if (response.ok) return response;
    if (response.status !== 404 && response.status !== 405 && response.status !== 403) {
      return response;
    }
  }

  return lastResponse ?? new Response(null, { status: 502 });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;
    const values = body.values ? toStringRecord(body.values) : toStringRecord(body);
    const fields = Array.isArray(body.fields) ? body.fields : [];
    const source =
      request.headers.get("x-form-source")?.trim() ||
      (typeof body.source === "string" && body.source.trim() ? body.source.trim() : "website-contact");
    const submittedFrom = request.headers.get("origin") || request.headers.get("referer") || "";

    const name = inferFieldValue(values, fields, { isMatch: isNameKey });
    const email = inferFieldValue(values, fields, {
      types: ["email"],
      labelIncludes: ["email", "businessemail", "workemail"],
      keyIncludes: ["email", "businessemail", "workemail"],
    });
    const company = inferFieldValue(values, fields, {
      labelIncludes: ["company", "organization", "organisation", "firm", "businessname"],
      keyIncludes: ["company", "organization", "organisation", "firm", "businessname"],
    });
    const rawMessage = inferFieldValue(values, fields, {
      types: ["textarea"],
      labelIncludes: ["message", "details", "help", "comment", "notes", "inquiry"],
      keyIncludes: ["message", "details", "help", "comment", "notes", "inquiry"],
    });
    const message = buildMessageFromValues(values, source, rawMessage);

    if (!name || !email) {
      return NextResponse.json({ message: "Name and email are required" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Invalid email address" }, { status: 400 });
    }

    const emailConfigured = isContactEmailConfigured();
    const strapiConfigured = Boolean(STRAPI_TOKEN);

    if (!emailConfigured && !strapiConfigured) {
      console.error("Missing RESEND_API_KEY / GMAIL_* and STRAPI_API_TOKEN in environment");
      return NextResponse.json({ message: "Server configuration error" }, { status: 500 });
    }

    const notificationData = {
      name,
      email,
      company,
      message,
      source,
      submittedFrom,
    };

    const strapiPayload = {
      name,
      email,
      company,
      message,
      source,
      payload: {
        values,
        fields,
        submittedFrom,
      },
    };

    const [strapiResponse, emailSent] = await Promise.all([
      strapiConfigured ? submitToStrapi(strapiPayload) : Promise.resolve(new Response(null, { status: 503 })),
      sendContactNotificationEmail(notificationData),
    ]);

    const strapiOk = strapiResponse.ok;
    const deliveryOk = strapiOk || emailSent;

    if (!deliveryOk) {
      if (!strapiOk) {
        const errorText = await strapiResponse.text();
        console.error("Strapi submission failed:", {
          status: strapiResponse.status,
          body: errorText,
          emailSent,
        });
      }

      if (strapiResponse.status === 403) {
        return NextResponse.json(
          { message: "Form submission is blocked by Strapi permissions" },
          { status: 502 },
        );
      }

      return NextResponse.json(
        { message: "Failed to submit form. Please try again." },
        { status: 502 },
      );
    }

    if (!strapiOk) {
      console.warn("Strapi submission failed, but contact notification email was sent.");
    }

    if (!emailSent && emailConfigured) {
      console.warn("Contact notification email failed, but Strapi submission succeeded.");
    }

    return NextResponse.json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
