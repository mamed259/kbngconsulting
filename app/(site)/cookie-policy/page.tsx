import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Cookie Policy | KB&G",
  description: "How KB&G Consulting uses cookies on kbngconsulting.com.",
};

export default function CookiePolicyPage() {
  return (
    <section style={{ padding: "72px 0 96px" }}>
      <Container>
        <p style={{ color: "var(--yellow)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.78rem" }}>
          Legal
        </p>
        <h1 style={{ margin: "12px 0 20px", fontSize: "clamp(2rem, 4vw, 3rem)" }}>Cookie Policy</h1>
        <p style={{ color: "var(--muted)", maxWidth: "68ch", lineHeight: 1.65 }}>
          KB&G Consulting (“we”, “us”) uses cookies and similar technologies on{" "}
          <a href="https://kbngconsulting.com">kbngconsulting.com</a> to keep the site working, understand
          how it is used, and improve the experience. By continuing to browse, you agree to this policy.
        </p>

        <div style={{ display: "grid", gap: "28px", marginTop: "36px", maxWidth: "68ch", color: "var(--muted)", lineHeight: 1.65 }}>
          <div>
            <h2 style={{ color: "#fff", fontSize: "1.25rem", marginBottom: "8px" }}>What are cookies?</h2>
            <p>
              Cookies are small text files stored on your device. They can be session cookies (deleted when
              you close the browser) or persistent cookies (kept until they expire or you delete them).
            </p>
          </div>
          <div>
            <h2 style={{ color: "#fff", fontSize: "1.25rem", marginBottom: "8px" }}>How we use cookies</h2>
            <ul style={{ paddingLeft: "1.2rem", display: "grid", gap: "8px" }}>
              <li>
                <b style={{ color: "#fff" }}>Essential</b> — required for security, load balancing, and basic
                site functions.
              </li>
              <li>
                <b style={{ color: "#fff" }}>Analytics</b> — help us understand traffic and page performance so
                we can improve content and navigation.
              </li>
              <li>
                <b style={{ color: "#fff" }}>Preference</b> — remember choices such as dismissed notices where
                applicable.
              </li>
            </ul>
          </div>
          <div>
            <h2 style={{ color: "#fff", fontSize: "1.25rem", marginBottom: "8px" }}>Managing cookies</h2>
            <p>
              You can control or delete cookies through your browser settings. Blocking essential cookies may
              affect how the site works. For questions, contact{" "}
              <a href="mailto:julia@kbngconsulting.com">julia@kbngconsulting.com</a>.
            </p>
          </div>
          <div>
            <h2 style={{ color: "#fff", fontSize: "1.25rem", marginBottom: "8px" }}>Related</h2>
            <p>
              See also our{" "}
              <a href="https://kbngconsulting.com/terms-of-use" target="_blank" rel="noopener noreferrer">
                Terms of Use
              </a>
              .
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
