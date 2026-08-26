import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dostępność",
  description: "Deklaracja dostępności serwisu oraz stan prac nad dostępnością samej gry.",
  alternates: { canonical: "/dostepnosc" },
};

export default function AccessibilityPage() {
  return (
    <div className="container section prose">
      <div className="section-head">
        <span className="eyebrow">Deklaracja</span>
        <h1>Dostępność</h1>
        <p>Ostatnia aktualizacja: sierpień 2026.</p>
      </div>

      <h2>Ta strona</h2>
      <p>
        Serwis buduliśmy z myślą o obsłudze klawiaturą, czytnikach ekranu i kontraście
        zgodnym z wytycznymi WCAG 2.1 na poziomie AA. Nagłówki mają logiczną hierarchię,
        linki opisują swój cel bez potrzeby czytania otaczającego kontekstu, a animacje
        ograniczyliśmy do minimum.
      </p>

      <h2>Co jeszcze poprawiamy</h2>
      <ul>
        <li>Testujemy kontrast ilustracji planszy na jasnych ekranach zewnętrznych — część z nich planujemy dociemnić.</li>
        <li>Sprawdzamy kolejność fokusu w banerze zgody na cookies na małych ekranach.</li>
      </ul>

      <h2>Sama gra</h2>
      <p>
        W samej grze wzory linii zastępujące rozróżnianie kolorem, pełna obsługa z klawiatury
        i etykiety współrzędnych pól dla czytników ekranu są już wdrożone i opisane w sekcji
        dostępności na stronie głównej. Sterowanie dotykowe dopasowane do siatki
        heksagonalnej jest w trakcie prac — aktualny stan śledzimy na stronie aktualizacji.
      </p>

      <h2>Zgłoszenia</h2>
      <p>
        Jeśli natrafisz na barierę dostępności, opisz ją na stronie{" "}
        <a href="/kontakt">kontakt</a> — im dokładniejszy opis (przeglądarka, sposób
        nawigacji, na czym polegał problem), tym szybciej to sprawdzimy.
      </p>
    </div>
  );
}
