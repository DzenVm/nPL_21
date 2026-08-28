import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Zasady przetwarzania danych osobowych osób odwiedzających serwis.",
  alternates: { canonical: "/polityka-prywatnosci" },
};

export default function PrivacyPage() {
  return (
    <div className="container section prose">
      <div className="section-head">
        <span className="eyebrow">Dokument</span>
        <h1>Polityka prywatności</h1>
        <p>Ostatnia aktualizacja: sierpień 2026. Pełne dane rejestrowe administratora zostaną uzupełnione przed premierą pełnej wersji gry.</p>
      </div>

      <h2>1. Kto przetwarza dane</h2>
      <p>
        Administratorem danych jest zespół odpowiedzialny za rozwój i utrzymanie tej strony
        oraz opisanej na niej gry. Pełne dane rejestrowe podmiotu prowadzącego serwis zostaną
        podane w tym miejscu przed publicznym udostępnieniem pełnej wersji gry. Do tego czasu
        kontakt w sprawach dotyczących danych jest możliwy przez adres podany na stronie
        kontaktowej.
      </p>

      <h2>2. Jakie dane zbieramy</h2>
      <ul>
        <li>Dane techniczne połączenia (adres IP, typ przeglądarki, rozdzielczość ekranu) — automatycznie, przy każdej wizycie.</li>
        <li>Dane zapisane lokalnie w przeglądarce (postęp w kampanii, decyzja o zgodzie na cookies) — nie są przesyłane na nasze serwery.</li>
        <li>Adres e-mail — wyłącznie jeśli sam go podasz, pisząc do nas przez stronę kontaktową.</li>
      </ul>

      <h2>3. Cel przetwarzania</h2>
      <p>
        Dane techniczne wykorzystujemy do zapewnienia bezpieczeństwa serwisu i podstawowej
        analizy ruchu — wyłącznie w zakresie, na który wyrazisz zgodę w banerze cookies. Adres
        e-mail podany w korespondencji służy wyłącznie do udzielenia odpowiedzi.
      </p>

      <h2>4. Podstawa prawna</h2>
      <p>
        Przetwarzanie odbywa się na podstawie prawnie uzasadnionego interesu administratora
        (art. 6 ust. 1 lit. f RODO) w zakresie bezpieczeństwa serwisu oraz na podstawie zgody
        (art. 6 ust. 1 lit. a RODO) w zakresie plików cookies innych niż niezbędne.
      </p>

      <h2>5. Okres przechowywania</h2>
      <p>
        Dane techniczne w logach serwera przechowujemy nie dłużej niż jest to potrzebne do
        celów bezpieczeństwa, standardowo do kilku tygodni. Korespondencję e-mail przechowujemy
        przez czas potrzebny do rozpatrzenia sprawy oraz przez okres wynikający z przepisów
        o przedawnieniu roszczeń.
      </p>

      <h2>6. Twoje prawa</h2>
      <p>
        Masz prawo do dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia
        przetwarzania, przenoszenia oraz wniesienia sprzeciwu. Możesz też złożyć skargę do
        Prezesa Urzędu Ochrony Danych Osobowych. Aby skorzystać z tych praw, napisz na adres
        podany na stronie kontaktowej.
      </p>

      <h2>7. Pliki cookies</h2>
      <p>
        Szczegółowy opis wykorzystywanych plików cookies znajduje się w osobnym dokumencie —{" "}
        <a href="/polityka-cookies">polityce cookies</a>.
      </p>

      <h2>8. Odbiorcy danych</h2>
      <p>
        Dane techniczne mogą być przetwarzane przez dostawcę infrastruktury hostingowej,
        z którym wiąże nas umowa powierzenia przetwarzania danych zgodna z RODO. Nie
        sprzedajemy ani nie udostępniamy danych podmiotom trzecim w celach marketingowych.
      </p>
    </div>
  );
}
