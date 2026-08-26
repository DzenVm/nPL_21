import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O rozgrywce",
  description:
    "Szczegółowy opis mechaniki: kolejka odcinków, licznik zaufania, przeszkody terenowe i sposób liczenia wyniku planszy.",
  alternates: { canonical: "/o-rozgrywce" },
};

export default function AboutPage() {
  return (
    <div className="container section prose">
      <div className="section-head">
        <span className="eyebrow">O rozgrywce</span>
        <h1>Jak dokładnie działa jedna plansza</h1>
        <p>Rozpisujemy tu zasady dokładniej, niż mieści się na stronie głównej.</p>
      </div>

      <h2>Punkt wyjścia: kolejka, nie magazyn</h2>
      <p>
        W wielu grach o budowaniu masz nieograniczony dostęp do wszystkich typów odcinków
        i wybierasz z pełnej listy. Tutaj jest odwrotnie — widzisz trzy kolejne elementy
        w kolejności, w jakiej trafią do ciebie, i nie masz na to wpływu. Możesz zużyć
        pierwszy z kolejki albo przepuścić turę bez budowania, ale wtedy kolejka i tak
        przesuwa się do przodu. To jedyny sposób, żeby „poczekać” na lepszy odcinek —
        kosztuje turę, więc licznik zaufania w pobliskich budynkach tyka dalej.
      </p>

      <h2>Licznik zaufania — dlaczego nie jest to system żyć</h2>
      <p>
        Świadomie zrezygnowaliśmy z klasycznego licznika porażek. Każdy budynek z otwartym
        zapotrzebowaniem ma własny pasek, który zmniejsza się o jedną kreskę co ustaloną
        liczbę tur. Kiedy dojdzie do zera, budynek przestaje liczyć się do wyniku tej
        konkretnej planszy — ale plansza się nie kończy i możesz dalej próbować domknąć
        pozostałe sieci. Wynik końcowy to po prostu odsetek budynków, które zdążyłeś obsłużyć,
        oraz liczba odcinków, których do tego użyłeś.
      </p>

      <h2>Skrzyżowania kontra połączenia</h2>
      <p>
        Trzy warstwy — tramwajowa, wodna i energetyczna — mogą zająć to samo pole planszy,
        ale nigdy nie mogą się połączyć w jeden odcinek. Wizualnie oznacza to, że w jednym
        heksagonalnym polu mogą leżeć obok siebie nawet trzy różne linie, każda w swoim pasie.
        Rozgałęzienia i skrzyżowania to osobne kształty odcinków — skrzyżowanie pozwala dwóm
        warstwom minąć się bez kontaktu, rozgałęzienie rozdziela jedną warstwę na dwa kierunki.
      </p>

      <h2>Przeszkody terenowe i mosty jako zasób</h2>
      <p>
        Od trzeciej ery na planszach pojawiają się rzeki i wzniesienia, których żadna warstwa
        nie może przekroczyć bez odpowiedniego elementu — mostu albo tunelu. Mosty nie są
        dostępne od razu w kolejce odcinków. Zdobywa się je w krótkiej łamigłówce pobocznej,
        w której trzeba dopasować kształt brzegu po obu stronach rzeki. To jedyny moment
        w kampanii, w którym rozwiązujesz coś poza główną siatką heksagonalną.
      </p>

      <h2>Jak liczy się wynik plansz tygodnia</h2>
      <p>
        Plansza tygodnia korzysta z tego samego ziarna losowego dla wszystkich, więc kolejność
        odcinków w kolejce jest identyczna niezależnie od tego, kto gra. Różni ludzi różni
        wyłącznie sposób ułożenia tras — dlatego zamiast rankingu czasowego pokazujemy
        rozkład liczby użytych segmentów. To świadomie odchodzi od rywalizacji „kto szybciej”
        na rzecz „kto oszczędniej”, co lepiej pasuje do logicznego charakteru gry.
      </p>

      <h2>Tryb Sąsiedztwa — asynchroniczność jako zasada, nie ograniczenie</h2>
      <p>
        W tym trybie Twoja plansza sąsiaduje krawędzią z planszą innej osoby. Widzisz punkty,
        w których tamta osoba wyprowadziła swoje trzy warstwy na wspólną granicę, i musisz
        domknąć swoją sieć dokładnie w tych miejscach. Odpowiedź może przyjść po kilku
        godzinach, czasem dopiero następnego dnia — to nie jest tryb na refleks, tylko na
        cierpliwe dopasowanie się do cudzego rozwiązania.
      </p>
    </div>
  );
}
