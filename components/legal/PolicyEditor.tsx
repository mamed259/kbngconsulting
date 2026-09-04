"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type PolicyEditorProps = {
  privacyPolicy: string;
  termsOfUse: string;
};

export function PolicyEditor({ privacyPolicy, termsOfUse }: PolicyEditorProps) {
  const searchParams = useSearchParams();
  const initialDoc = useMemo(
    () => (searchParams.get("doc") === "terms" ? "terms" : "privacy"),
    [searchParams],
  );
  const [activeDoc, setActiveDoc] = useState<"privacy" | "terms">(initialDoc);
  const [privacyDraft, setPrivacyDraft] = useState(privacyPolicy);
  const [termsDraft, setTermsDraft] = useState(termsOfUse);

  const isPrivacy = activeDoc === "privacy";
  const editorValue = isPrivacy ? privacyDraft : termsDraft;

  return (
    <div style={{ display: "grid", gap: "16px", marginTop: "28px" }}>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button
          type="button"
          onClick={() => setActiveDoc("privacy")}
          style={{
            borderRadius: "999px",
            border: "1px solid var(--line)",
            padding: "10px 16px",
            fontWeight: 700,
            cursor: "pointer",
            background: isPrivacy ? "#fff" : "transparent",
            color: isPrivacy ? "#082b31" : "var(--ink)",
          }}
        >
          Privacy Policy
        </button>
        <button
          type="button"
          onClick={() => setActiveDoc("terms")}
          style={{
            borderRadius: "999px",
            border: "1px solid var(--line)",
            padding: "10px 16px",
            fontWeight: 700,
            cursor: "pointer",
            background: !isPrivacy ? "#fff" : "transparent",
            color: !isPrivacy ? "#082b31" : "var(--ink)",
          }}
        >
          Terms of Use
        </button>
      </div>

      <label style={{ display: "grid", gap: "10px" }}>
        <span style={{ color: "var(--muted)", fontWeight: 600 }}>
          Editor ({isPrivacy ? "Privacy Policy" : "Terms of Use"})
        </span>
        <textarea
          value={editorValue}
          onChange={(event) =>
            isPrivacy
              ? setPrivacyDraft(event.target.value)
              : setTermsDraft(event.target.value)
          }
          style={{
            width: "100%",
            minHeight: "420px",
            borderRadius: "14px",
            border: "1px solid var(--line)",
            background: "rgba(255,255,255,0.04)",
            color: "var(--ink)",
            padding: "16px",
            font: "inherit",
            lineHeight: 1.65,
            resize: "vertical",
          }}
        />
      </label>

      <div
        style={{
          borderRadius: "14px",
          border: "1px solid var(--line)",
          background: "rgba(255,255,255,0.02)",
          padding: "16px",
        }}
      >
        <p style={{ margin: 0, color: "var(--muted)", fontWeight: 600 }}>
          Live Preview
        </p>
        <pre
          style={{
            margin: "12px 0 0",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            color: "var(--ink)",
            font: "inherit",
            lineHeight: 1.75,
          }}
        >
          {editorValue}
        </pre>
      </div>
    </div>
  );
}
