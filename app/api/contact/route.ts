import { NextRequest, NextResponse } from "next/server";

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
  [key: string]: unknown;
}

function normalizeKey(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function toStringRecord(value: unknown) {
  if (!isRecord(value)) return {} as Record<string, string>;
  return Object.fromEntries(Object.entries(value).filter(([, v]) => typeof v === "string")) as Record<
    string,
    string
  >;
}

function inferFieldValue(
  values: Record<string, string>,
  fields: FormFieldMeta[],
  options: { types?: string[]; labelIncludes?: string[]; keyIncludes?: string[] },
) {
  const lowerTypes = new Set((options.types || []).map((item) => item.toLowerCase()));
  const labelPatterns = (options.labelIncludes || []).map(normalizeKey);
  const keyPatterns = (options.keyIncludes || []).map(normalizeKey);

  for (const field of fields) {
    const normalizedLabel = normalizeKey(field.label || "");
    const fieldKey = (field.label || "").toLowerCase().replace(/\s+/g, "_");
    const normalizedFieldKey = normalizeKey(fieldKey);
    const value = typeof values[fieldKey] === "string" ? values[fieldKey].trim() : "";

    if (!value) continue;
    if (field.type && lowerTypes.has(field.type.toLowerCase())) return value;
    if (labelPatterns.some((pattern) => normalizedLabel.includes(pattern))) return value;
    if (keyPatterns.some((pattern) => normalizedFieldKey.includes(pattern))) return value;
  }

  for (const [key, rawValue] of Object.entries(values)) {
    const value = typeof rawValue === "string" ? rawValue.trim() : "";
    if (!value) continue;

    const normalizedFieldKey = normalizeKey(key);
    if (keyPatterns.some((pattern) => normalizedFieldKey.includes(pattern))) return value;
  }

  return "";
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;
    const values = body.values ? toStringRecord(body.values) : toStringRecord(body);
    const fields = Array.isArray(body.fields) ? body.fields : [];

    const name = inferFieldValue(values, fields, {
      labelIncludes: ["name", "fullname", "yourname"],
      keyIncludes: ["name", "fullname", "yourname"],
    });
    const email = inferFieldValue(values, fields, {
      types: ["email"],
      labelIncludes: ["email", "businessemail", "workemail"],
      keyIncludes: ["email", "businessemail", "workemail"],
    });
    const company = inferFieldValue(values, fields, {
      labelIncludes: ["company", "organization", "business", "firm"],
      keyIncludes: ["company", "organization", "business", "firm"],
    });
    const message = inferFieldValue(values, fields, {
      types: ["textarea"],
      labelIncludes: ["message", "details", "help", "comment", "notes", "inquiry"],
      keyIncludes: ["message", "details", "help", "comment", "notes", "inquiry"],
    });

    if (!name || !email) {
      return NextResponse.json({ message: "Name and email are required" }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Invalid email address" }, { status: 400 });
    }

    if (!STRAPI_TOKEN) {
      return NextResponse.json({ message: "Server configuration error" }, { status: 500 });
    }

    const response = await fetch(`${STRAPI_URL}/api/form-submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          name,
          email,
          company,
          message,
          source: "website-contact",
          payload: {
            values,
            fields,
            submittedFrom: request.headers.get("origin") || request.headers.get("referer") || "",
          },
        },
      }),
    });

    if (!response.ok) {
      const bodyText = await response.text();
      console.error("Strapi form submission failed:", response.status, bodyText);
      return NextResponse.json({ message: "Failed to submit form" }, { status: 502 });
    }

    return NextResponse.json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
