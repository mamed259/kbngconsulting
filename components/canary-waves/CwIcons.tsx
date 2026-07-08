export function CwWaveformIcon({ color = "currentColor" }: { color?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden>
      <g fill={color}>
        <rect x="2" y="10" width="2.4" height="4" rx="1.2" />
        <rect x="7" y="6" width="2.4" height="12" rx="1.2" />
        <rect x="12" y="3" width="2.4" height="18" rx="1.2" />
        <rect x="17" y="8" width="2.4" height="8" rx="1.2" />
      </g>
    </svg>
  );
}

export function CwRadioIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="6" cy="12" r="2" />
      <path d="M11 8a5.5 5.5 0 0 1 0 8" />
      <path d="M14.5 5a10 10 0 0 1 0 14" />
    </svg>
  );
}

export function CwToneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M7 8v8" />
      <path d="M11 5v14" />
      <path d="M15 9v6" />
      <path d="M19 7v10" />
    </svg>
  );
}

export function CwNetworkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
      <line x1="15.4" y1="6.5" x2="8.6" y2="10.5" />
    </svg>
  );
}
