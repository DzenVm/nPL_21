import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import { faq } from "@/lib/content";

export const metadata: Metadata = {
  title: "Najczęstsze pytania",
  description: "Odpowiedzi na pytania o zasady, konto, tryb Sąsiedztwa i dostępność mobilną gry.",
  alternates: { canonical: "/najczestsze-pytania" },
};

export default function FaqPage() {
  return (
    <div className="container section">
      <div className="section-head">
        <span className="eyebrow">Pytania</span>
        <h1>Najczęstsze pytania</h1>
        <p>Jeśli czegoś tu nie ma, strona kontaktowa też działa.</p>
      </div>
      <div style={{ maxWidth: 760 }}>
        <FaqAccordion items={faq} />
      </div>
    </div>
  );
}
