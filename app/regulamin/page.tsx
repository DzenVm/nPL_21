import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin",
  description: "Zasady korzystania z serwisu i opisanej na nim gry.",
  alternates: { canonical: "/regulamin" },
};

export default function TermsPage() {
  return (
    <div className="container section prose">
      <div className="section-head">
        <span className="eyebrow">Dokument</span>
        <h1>Regulamin serwisu</h1>
        <p>Ostatnia aktualizacja: sierpień 2026.</p>
      </div>

      <h2>1. Przedmiot regulaminu</h2>
      <p>
        Regulamin określa zasady korzystania z serwisu informacyjnego opisującego grę
        przeglądarkową będącą w fazie przygotowań do premiery, w tym z treści, ilustracji
        i dokumentów tu opublikowanych.
      </p>

      <h2>2. Charakter gry</h2>
      <p>
        Opisana gra jest logiczną łamigłówką umiejętności — rozgrywka polega na planowaniu
        tras w ramach ustalonych zasad i nie zawiera elementów gry na pieniądze ani stawiania
        zakładów. Udział w kampanii, planszy dnia i trybie Sąsiedztwa jest bezpłatny.
      </p>

      <h2>3. Wymagany wiek</h2>
      <p>
        Serwis oraz gra są przeznaczone dla osób, które ukończyły 13 lat. Osoby niepełnoletnie
        powinny korzystać z serwisu za wiedzą opiekuna prawnego.
      </p>

      <h2>4. Konto w trybie Sąsiedztwa</h2>
      <p>
        Założenie konta jest wymagane wyłącznie do udziału w trybie Sąsiedztwa. Konto jest
        przypisane do jednej osoby i nie podlega odsprzedaży ani przekazaniu. Dane potrzebne
        do rejestracji zostaną opisane w chwili udostępnienia tego trybu poza fazą zamkniętą.
      </p>

      <h2>5. Zasady korzystania</h2>
      <ul>
        <li>Zabronione jest korzystanie z automatyzacji rozwiązującej plansze za grającego w trybie Sąsiedztwa.</li>
        <li>Zabronione jest utrudnianie korzystania z serwisu innym osobom, w tym nadmierne obciążanie infrastruktury.</li>
        <li>Treści zamieszczone w serwisie (opisy, ilustracje, dokumenty) można cytować z podaniem źródła, ale nie w celach komercyjnych bez zgody administratora.</li>
      </ul>

      <h2>6. Odpowiedzialność</h2>
      <p>
        Serwis i gra są udostępniane w fazie rozwoju — postęp zapisany lokalnie w przeglądarce
        może zostać utracony w wyniku wyczyszczenia danych przeglądarki lub zmiany urządzenia.
        Administrator dokłada starań, aby ograniczyć przerwy w dostępności serwisu, ale nie
        gwarantuje jego nieprzerwanego działania.
      </p>

      <h2>7. Zmiany regulaminu</h2>
      <p>
        Regulamin może być aktualizowany wraz z rozwojem projektu, w szczególności przy
        uruchomieniu docelowej domeny i pełnej wersji gry. Data ostatniej aktualizacji jest
        widoczna na początku tego dokumentu.
      </p>

      <h2>8. Kontakt</h2>
      <p>
        Pytania dotyczące regulaminu można kierować przez stronę <a href="/kontakt">kontakt</a>.
      </p>
    </div>
  );
}
