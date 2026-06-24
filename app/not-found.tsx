import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section style={{ padding: "120px 0", textAlign: "center" }}>
      <div className="wrap">
        <h1 style={{ color: "var(--yellow)" }}>Page not found</h1>
        <p style={{ color: "var(--muted)" }}>
          The requested page does not exist yet. Return to the homepage.
        </p>
        <Link className="btn btn-solid" href="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}
