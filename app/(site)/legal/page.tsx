import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PolicyEditor } from "@/components/legal/PolicyEditor";

export const metadata: Metadata = {
  title: "Legal Center | KB&G",
  description: "Manage Privacy Policy and Terms of Use for KB&G.",
};

const privacyPolicyDefault = `Privacy Policy
Effective Date: June the 1st 2025

1. Information We Collect
2. How We Use Your Information
3. Sharing of Information
4. Cookies and Tracking
5. Data Retention
6. Your Rights
7. Third-Party Links
8. Security
9. Children's Privacy
10. Changes to This Policy
11. Cookies Policy
12. Contact Us`;

const termsOfUseDefault = `Terms of Use
Effective Date: June the 1st 2025

1. Website Purpose
2. Permitted Use
3. Intellectual Property
4. No Warranties
5. Links to Other Websites
6. No Professional Relationship
7. Changes to the Site
8. Limitation of Liability
9. Governing Law
10. Contact Us`;

export default function LegalPage() {
  return (
    <section style={{ padding: "140px 0 96px" }}>
      <Container>
        <h1 style={{ margin: 0, fontSize: "clamp(2.6rem, 5vw, 3.75rem)" }}>
          Legal Center
        </h1>
        <p style={{ color: "var(--muted)", margin: "14px 0 0", fontSize: "1.15rem" }}>
          Unified editor for Privacy Policy and Terms of Use.
        </p>
        <PolicyEditor
          privacyPolicy={privacyPolicyDefault}
          termsOfUse={termsOfUseDefault}
        />
      </Container>
    </section>
  );
}
