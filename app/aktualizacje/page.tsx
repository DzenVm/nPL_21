import type { Metadata } from "next";
import { changelog, roadmap } from "@/lib/content";

export const metadata: Metadata = {
  title: "Aktualizacje",
  description: "Dziennik zmian i lista prac trwających nad grą.",
  alternates: { canonical: "/aktualizacje" },
};

export default function ChangelogPage() {
  return (
    <div className="container section">
      <div className="section-head">
        <span className="eyebrow">Rozwój projektu</span>
        <h1>Aktualizacje</h1>
        <p>Notujemy tu każdą zmianę, która wpływa na rozgrywkę albo dostępność.</p>
      </div>

      <div className="grid grid-2" style={{ alignItems: "start", gap: 48 }}>
        <div>
          <h2 style={{ fontSize: "1.2rem", marginBottom: 20 }}>Dziennik zmian</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 26 }}>
            {changelog.map((c) => (
              <li key={c.version} className="card">
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <strong>Wersja {c.version}</strong>
                  <span style={{ color: "var(--text-faint)", fontSize: "0.86rem" }}>{c.date}</span>
                </div>
                <ul style={{ margin: 0, paddingLeft: "1.1em", color: "var(--text-muted)" }}>
                  {c.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: "1.2rem", marginBottom: 20 }}>W trakcie i w planach</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
            {roadmap.map((r) => (
              <li key={r.label} className="card">
                <span className="tag" style={{ marginBottom: 10, display: "inline-block" }}>{r.status}</span>
                <p style={{ margin: 0, color: "var(--text-muted)" }}>{r.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
