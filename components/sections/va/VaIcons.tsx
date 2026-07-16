export function VaSafetyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3 5 6.5v5.2c0 4.2 2.9 7.9 7 8.8 4.1-.9 7-4.6 7-8.8V6.5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M9.2 12.2 11 14l3.8-3.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function VaCountIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="8" cy="16" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16" cy="16" r="2.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function VaBrandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7.5h16v11H4z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M8 7.5V5.8A2.8 2.8 0 0 1 10.8 3h2.4A2.8 2.8 0 0 1 16 5.8V7.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 12h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function VaPhotoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="9" cy="11" r="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="m12.5 14.5 2.2-2.2L19 16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function VaBuildIcon({ type }: { type?: "safety" | "count" | "brand" | "photo" | null }) {
  if (type === "count") return <VaCountIcon />;
  if (type === "brand") return <VaBrandIcon />;
  if (type === "photo") return <VaPhotoIcon />;
  return <VaSafetyIcon />;
}
