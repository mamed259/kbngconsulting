import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy | KB&G",
  description:
    "How KB&G Consulting collects, uses, and protects personal information on kbngconsulting.com.",
};

const GA_OPT_OUT = "https://tools.google.com/dlpage/gaoptout";

export default function PrivacyPolicyPage() {
  return (
    <section style={{ padding: "140px 0 96px" }}>
      <Container>
        <h1 style={{ margin: "0 0 12px", fontSize: "clamp(2.6rem, 5vw, 3.75rem)" }}>
          Privacy Policy
        </h1>
        <p style={{ color: "var(--muted)", marginBottom: "24px", fontSize: "1.15rem" }}>
          Effective Date: June the 1st 2025
        </p>
        <p style={{ color: "var(--muted)", fontSize: "1.15rem", lineHeight: 1.7 }}>
          At KB&G Consulting (“KB&G,” “we,” “our,” or “us”), we are committed to protecting the
          privacy and security of your personal information. This Privacy Policy describes how we
          collect, use, and disclose your information when you visit our website{" "}
          <a href="https://www.kbngconsulting.com">www.kbngconsulting.com</a> (the “Site”) or
          engage with our services.
        </p>

        <div
          style={{
            display: "grid",
            gap: "36px",
            marginTop: "44px",
            color: "var(--muted)",
            fontSize: "1.15rem",
            lineHeight: 1.7,
          }}
        >
          <div>
            <h2 style={{ color: "#fff", fontSize: "1.6rem", marginBottom: "8px" }}>
              1. Information We Collect
            </h2>
            <p>
              We collect limited personal and business-related information to operate effectively
              and provide you with high-quality services.
            </p>
            <p style={{ color: "#fff", fontWeight: 700, margin: "16px 0 8px" }}>
              Information you provide to us:
            </p>
            <ul style={{ paddingLeft: "1.2rem", display: "grid", gap: "8px" }}>
              <li>Name, job title, company name</li>
              <li>Email address and contact details</li>
              <li>Project-related information (submitted through forms or consultation requests)</li>
            </ul>
            <p style={{ color: "#fff", fontWeight: 700, margin: "16px 0 8px" }}>
              Information we collect automatically:
            </p>
            <ul style={{ paddingLeft: "1.2rem", display: "grid", gap: "8px" }}>
              <li>IP address, browser type, device data</li>
              <li>Pages visited, time spent on the site</li>
              <li>Cookies and analytics data (via Google Analytics and similar tools)</li>
            </ul>
          </div>

          <div>
            <h2 style={{ color: "#fff", fontSize: "1.6rem", marginBottom: "8px" }}>
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul style={{ paddingLeft: "1.2rem", display: "grid", gap: "8px", marginTop: "8px" }}>
              <li>Respond to inquiries or consultation requests</li>
              <li>Provide and improve our services and software tools</li>
              <li>Send updates, insights, and occasional marketing emails (with opt-out options)</li>
              <li>Analyze usage trends to optimize website performance</li>
            </ul>
          </div>

          <div>
            <h2 style={{ color: "#fff", fontSize: "1.6rem", marginBottom: "8px" }}>
              3. Sharing of Information
            </h2>
            <p>
              We do <b style={{ color: "#fff" }}>not</b> sell or rent your data. We may share your
              information with:
            </p>
            <ul style={{ paddingLeft: "1.2rem", display: "grid", gap: "8px", marginTop: "8px" }}>
              <li>Trusted third-party service providers (e.g., hosting, analytics)</li>
              <li>Legal authorities if required to comply with legal obligations</li>
              <li>Affiliates or subcontractors engaged in delivering KB&G services</li>
            </ul>
          </div>

          <div>
            <h2 style={{ color: "#fff", fontSize: "1.6rem", marginBottom: "8px" }}>
              4. Cookies &amp; Tracking
            </h2>
            <p>
              Our site uses cookies and similar technologies to improve user experience and measure
              site performance. You can manage cookie preferences through your browser settings.
            </p>
          </div>

          <div>
            <h2 style={{ color: "#fff", fontSize: "1.6rem", marginBottom: "8px" }}>
              5. Data Retention
            </h2>
            <p>
              We retain personal information only as long as necessary for legitimate business or
              legal purposes. You may request deletion of your data at any time.
            </p>
          </div>

          <div>
            <h2 style={{ color: "#fff", fontSize: "1.6rem", marginBottom: "8px" }}>
              6. Your Rights
            </h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul style={{ paddingLeft: "1.2rem", display: "grid", gap: "8px", marginTop: "8px" }}>
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p style={{ marginTop: "12px" }}>
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:julia@kbngconsulting.com">julia@kbngconsulting.com</a>.
            </p>
          </div>

          <div>
            <h2 style={{ color: "#fff", fontSize: "1.6rem", marginBottom: "8px" }}>
              7. Third-Party Links
            </h2>
            <p>
              Our website may include links to third-party sites. We are not responsible for the
              privacy practices of those external platforms.
            </p>
          </div>

          <div>
            <h2 style={{ color: "#fff", fontSize: "1.6rem", marginBottom: "8px" }}>8. Security</h2>
            <p>
              We take reasonable technical and organizational measures to safeguard your personal
              information against unauthorized access, alteration, or disclosure.
            </p>
          </div>

          <div>
            <h2 style={{ color: "#fff", fontSize: "1.6rem", marginBottom: "8px" }}>
              9. Children’s Privacy
            </h2>
            <p>
              Our services are not directed to individuals under 18. We do not knowingly collect
              personal information from children.
            </p>
          </div>

          <div>
            <h2 style={{ color: "#fff", fontSize: "1.6rem", marginBottom: "8px" }}>
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy occasionally to reflect changes in practices, legal
              requirements, or service offerings. Changes will be posted on this page with an
              updated effective date.
            </p>
          </div>

          <div>
            <h2 style={{ color: "#fff", fontSize: "1.6rem", marginBottom: "8px" }}>
              11. Cookies Policy
            </h2>
            <p>
              We use cookies and similar technologies to improve your browsing experience, analyze
              website traffic, and understand how visitors interact with our site. In particular,
              we use <b style={{ color: "#fff" }}>Google Analytics 4 (GA4)</b> to measure and
              improve website performance. GA4 is a web analytics service provided by{" "}
              <b style={{ color: "#fff" }}>Google Ireland Limited</b> (Gordon House, Barrow Street,
              Dublin 4, Ireland).
            </p>
            <p style={{ marginTop: "12px" }}>
              Google Analytics 4 collects anonymized information such as pages visited, user
              interactions (clicks, scrolls, and events), device type, browser, operating system,
              and approximate geographic location (country and city).{" "}
              <b style={{ color: "#fff" }}>IP addresses are not stored or logged</b> by GA4.
            </p>
            <p style={{ marginTop: "12px" }}>
              The data collected may be processed by Google and stored on servers located within
              the European Union or other countries. Google acts in accordance with applicable data
              protection laws and{" "}
              <b style={{ color: "#fff" }}>EU Standard Contractual Clauses (SCCs)</b>.
            </p>
            <p style={{ marginTop: "12px" }}>
              You can <b style={{ color: "#fff" }}>accept or decline cookies</b> through our cookie
              banner. You can also withdraw your consent at any time or install the{" "}
              <a href={GA_OPT_OUT} target="_blank" rel="noopener noreferrer">
                Google Analytics Opt-out Browser Add-on
              </a>
              . Analytical data is retained for no longer than{" "}
              <b style={{ color: "#fff" }}>14 months</b>, after which it is automatically deleted.
            </p>
          </div>

          <div>
            <h2 style={{ color: "#fff", fontSize: "1.6rem", marginBottom: "8px" }}>
              12. Contact Us
            </h2>
            <p>If you have any questions about this Privacy Policy, please contact:</p>
            <p style={{ marginTop: "8px" }}>
              <b style={{ color: "#fff" }}>KB&G Consulting</b>
              <br />
              Email:{" "}
              <a href="mailto:julia@kbngconsulting.com">julia@kbngconsulting.com</a>
            </p>
            <p style={{ marginTop: "18px" }}>
              See also our{" "}
              <Link href="/cookie-policy">Cookie Policy</Link> and{" "}
              <Link href="/terms-of-use">Terms of Use</Link>.
            </p>
            <p style={{ marginTop: "18px" }}>
              <Link href="/">← Back to home</Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
