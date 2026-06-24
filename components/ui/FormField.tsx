interface FormFieldProps {
  label: string;
  name: string;
  type: "text" | "email" | "textarea";
  placeholder?: string;
  required?: boolean;
}

export function FormField({ label, name, type, placeholder, required }: FormFieldProps) {
  const commonProps = {
    name,
    placeholder,
    required,
    style: {
      width: "100%",
      border: "1px solid var(--line)",
      borderRadius: "12px",
      background: "rgba(255,255,255,0.04)",
      color: "var(--ink)",
      padding: "12px 14px",
      fontFamily: "var(--font)",
      fontSize: "0.95rem",
    } as const,
  };

  return (
    <label style={{ display: "grid", gap: "8px", textAlign: "left" }}>
      <span style={{ color: "var(--muted)", fontSize: "0.86rem" }}>{label}</span>
      {type === "textarea" ? <textarea rows={4} {...commonProps} /> : <input type={type} {...commonProps} />}
    </label>
  );
}
