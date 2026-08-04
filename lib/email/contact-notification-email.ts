export interface ContactNotificationData {
  name: string;
  email: string;
  company: string;
  message: string;
  source: string;
  submittedFrom?: string;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatSource(source: string) {
  if (source === "founder-diagnostic") return "Founder Diagnostic";
  if (source === "website-contact") return "Contact section";
  if (source === "contact-modal") return "Let's talk modal";
  return source.replace(/-/g, " ");
}

function formatSubmittedAt() {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(new Date());
}

function isFounderDiagnostic(source: string) {
  return source === "founder-diagnostic";
}

export function buildContactNotificationSubject(data: ContactNotificationData) {
  const companySuffix = data.company ? ` · ${data.company}` : "";
  if (isFounderDiagnostic(data.source)) {
    return `New Founder Diagnostic request from ${data.name}${companySuffix}`;
  }
  return `New contact request from ${data.name}${companySuffix}`;
}

export function buildContactNotificationText(data: ContactNotificationData) {
  const title = isFounderDiagnostic(data.source)
    ? "New Founder Diagnostic booking request"
    : "New KB&G contact request";

  const lines = [
    title,
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
  ];

  if (data.company) {
    lines.push(`Company: ${data.company}`);
  }

  lines.push(
    `Source: ${formatSource(data.source)}`,
    `Submitted: ${formatSubmittedAt()} UTC`,
  );

  if (data.submittedFrom) {
    lines.push(`Page: ${data.submittedFrom}`);
  }

  lines.push("", "Answers:", data.message || "—", "", `Reply directly to ${data.email}`);

  return lines.join("\n");
}

function detailBlock(label: string, value: string) {
  return `<div style="padding:14px 16px;background:#F3F8F7;border-radius:12px;margin-bottom:12px;">
  <div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#5A7A7E;font-weight:700;margin-bottom:4px;">${label}</div>
  <div style="font-size:16px;font-weight:700;line-height:1.45;">${value}</div>
</div>`;
}

export function buildContactNotificationHtml(data: ContactNotificationData) {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeCompany = data.company ? escapeHtml(data.company) : "";
  const safeMessage = escapeHtml(data.message || "No message provided.").replace(/\n/g, "<br />");
  const safeSource = escapeHtml(formatSource(data.source));
  const safeSubmittedFrom = data.submittedFrom ? escapeHtml(data.submittedFrom) : "";
  const submittedAt = escapeHtml(formatSubmittedAt());
  const founder = isFounderDiagnostic(data.source);
  const headline = founder ? "New Founder Diagnostic request" : "New contact request";
  const subline = founder
    ? "Someone wants to book the Founder Blind Spot Diagnostic."
    : "Someone submitted a form on the KB&G site.";

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${headline}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#E8F2F1;font-family:Arial,sans-serif;color:#082B31;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#E8F2F1;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:620px;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid rgba(8,43,49,0.08);">
            <tr>
              <td style="background:#082B31;padding:28px 32px;">
                <div style="font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#68FFCF;font-weight:700;margin-bottom:10px;">KB&amp;G</div>
                <div style="font-size:26px;line-height:1.2;font-weight:700;color:#ffffff;margin:0;">${headline}</div>
                <div style="font-size:15px;line-height:1.6;color:rgba(255,255,255,0.78);margin-top:8px;">${subline}</div>
                <div style="display:inline-block;margin-top:14px;padding:6px 12px;border-radius:999px;background:rgba(104,255,207,0.16);color:#68FFCF;font-size:12px;font-weight:700;">${safeSource}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px;">
                ${detailBlock("Name", safeName)}
                ${detailBlock("Email", `<a href="mailto:${safeEmail}" style="color:#0C5A4A;text-decoration:none;">${safeEmail}</a>`)}
                ${safeCompany ? detailBlock("Company", safeCompany) : ""}
                <div style="padding:16px 18px;background:#FFF5F7;border:1px solid rgba(255,90,117,0.18);border-radius:12px;">
                  <div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#FF5A75;font-weight:700;margin-bottom:8px;">${founder ? "Diagnostic answers" : "Details"}</div>
                  <div style="font-size:15px;line-height:1.7;font-weight:500;">${safeMessage}</div>
                </div>
                <div style="text-align:center;margin-top:24px;">
                  <a href="mailto:${safeEmail}?subject=${encodeURIComponent(`Re: Founder Diagnostic — ${data.name}`)}"
                     style="display:inline-block;padding:12px 24px;background:#082B31;color:#fff;text-decoration:none;border-radius:999px;font-size:14px;font-weight:700;">
                    Reply to ${safeName}
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 32px 24px;border-top:1px solid rgba(8,43,49,0.08);background:#F7FBFA;text-align:center;font-size:13px;line-height:1.6;color:#5A7A7E;">
                Submitted ${submittedAt} UTC
                ${safeSubmittedFrom ? `<br />From ${safeSubmittedFrom}` : ""}
                <br />KB&amp;G · Founder Blind Spot Diagnostic
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
