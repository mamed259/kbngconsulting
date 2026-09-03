import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Use | KB&G",
  description:
    "Terms of Use for the KB&G Consulting website at kbngconsulting.com.",
};

const h2 = { color: "#fff", fontSize: "1.6rem", marginBottom: "8px" } as const;
const list = {
  paddingLeft: "1.2rem",
  display: "grid",
  gap: "8px",
  marginTop: "8px",
} as const;

export default function TermsOfUsePage() {
  return (
    <section style={{ padding: "140px 0 96px" }}>
      <Container>
        <h1 style={{ margin: "0 0 12px", fontSize: "clamp(2.6rem, 5vw, 3.75rem)" }}>
          Terms of Use
        </h1>
        <p style={{ color: "var(--muted)", marginBottom: "24px", fontSize: "1.15rem" }}>
          Effective Date: June the 1st 2025
        </p>
        <p style={{ color: "var(--muted)", fontSize: "1.15rem", lineHeight: 1.7 }}>
          Welcome to{" "}
          <a href="https://www.kbngconsulting.com">www.kbngconsulting.com</a> (the “Site”),
          operated by KB&G Consulting (“KB&G,” “we,” “our,” or “us”). By accessing or using this
          Site, you agree to be bound by the following Terms of Use (“Terms”). If you do not agree
          to these Terms, please do not use the Site.
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
            <h2 style={h2}>1. Website Purpose</h2>
            <p>
              This Site is intended for professional and informational purposes related to KB&G’s
              consulting, operations, and software innovation services. It provides insights about
              our offerings, sectors served, and ways to engage with our team.
            </p>
          </div>

          <div>
            <h2 style={h2}>2. Permitted Use</h2>
            <p>
              You agree to use the Site only for lawful purposes, in a manner that does not
              infringe on the rights of, restrict, or inhibit anyone else’s use of the Site.
              Prohibited conduct includes:
            </p>
            <ul style={list}>
              <li>Attempting to gain unauthorized access to Site systems</li>
              <li>Introducing malicious code or conducting denial-of-service attacks</li>
              <li>Scraping or automated extraction of data without express permission</li>
            </ul>
          </div>

          <div>
            <h2 style={h2}>3. Intellectual Property</h2>
            <p>
              All materials on the Site—including design, logos, text, graphics, and downloadable
              files—are the property of KB&G or used under appropriate license. These materials may
              not be reproduced, distributed, or modified without our prior written consent.
              Permitted usage includes:
            </p>
            <ul style={list}>
              <li>Sharing of blog content or insights with proper attribution</li>
              <li>
                Referencing our services in professional or academic settings, with clear
                acknowledgment
              </li>
            </ul>
          </div>

          <div>
            <h2 style={h2}>4. No Warranties</h2>
            <p>
              The content on this Site is provided “as is” for general informational purposes only.
              We make no representations or warranties regarding:
            </p>
            <ul style={list}>
              <li>The completeness or accuracy of information presented</li>
              <li>The suitability of any content for a particular use</li>
              <li>The uninterrupted or error-free operation of the Site</li>
            </ul>
            <p style={{ marginTop: "12px" }}>All use of content is at your own risk.</p>
          </div>

          <div>
            <h2 style={h2}>5. Links to Other Websites</h2>
            <p>
              The Site may contain links to third-party websites. KB&G is not responsible for the
              content, accuracy, or practices of these external sites. We encourage you to review
              the terms of use of any third-party site you visit.
            </p>
          </div>

          <div>
            <h2 style={h2}>6. No Professional Relationship</h2>
            <p>
              Your use of the Site or submission of inquiries through contact forms does not
              constitute a consulting relationship with KB&G. Any service engagement must be
              formalized through a signed agreement outlining terms, scope, and deliverables.
            </p>
          </div>

          <div>
            <h2 style={h2}>7. Changes to the Site</h2>
            <p>
              We reserve the right to update or modify the content and structure of the Site at any
              time without notice. This includes the right to revise these Terms. Continued use of
              the Site after any changes constitutes acceptance of the updated Terms.
            </p>
          </div>

          <div>
            <h2 style={h2}>8. Limitation of Liability</h2>
            <p>
              To the extent permitted by law, KB&G disclaims liability for any damages or losses
              resulting from:
            </p>
            <ul style={list}>
              <li>Site access interruptions</li>
              <li>Reliance on content provided</li>
              <li>Security breaches outside our reasonable control</li>
            </ul>
          </div>

          <div>
            <h2 style={h2}>9. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Estonia. Any disputes arising in relation to
              the Site will be subject to the exclusive jurisdiction of the courts of that region.
            </p>
          </div>

          <div>
            <h2 style={h2}>10. Contact Us</h2>
            <p>For questions about these Terms, please contact:</p>
            <p style={{ marginTop: "8px" }}>
              <b style={{ color: "#fff" }}>KB&G Consulting</b>
              <br />
              Email:{" "}
              <a href="mailto:julia@kbngconsulting.com">julia@kbngconsulting.com</a>
              <br />
              <a href="https://www.kbngconsulting.com">www.kbngconsulting.com</a>
            </p>
            <p style={{ marginTop: "18px" }}>
              See also our <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
              <Link href="/cookie-policy">Cookie Policy</Link>.
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
