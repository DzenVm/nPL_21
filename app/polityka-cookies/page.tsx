import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka cookies",
  description: "Jakie pliki cookie wykorzystuje serwis i jak nimi zarządzać.",
  alternates: { canonical: "/polityka-cookies" },
};

export default function CookiesPage() {
  return (
    <div className="container section prose">
      <div className="section-head">
        <span className="eyebrow">Dokument</span>
        <h1>Polityka cookies</h1>
        <p>Ostatnia aktualizacja: sierpień 2026.</p>
      </div>

      <h2>Czym są pliki cookie</h2>
      <p>
        To niewielkie pliki tekstowe zapisywane w przeglądarce podczas odwiedzin serwisu.
        Część z nich jest niezbędna do jego działania, inne pomagają nam zrozumieć, jak
        serwis jest używany.
      </p>

      <h2>Jakich plików używamy</h2>
      <table>
        <thead>
          <tr>
            <th>Rodzaj</th>
            <th>Cel</th>
            <th>Czas przechowywania</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Niezbędne</td>
            <td>Zapamiętanie decyzji o zgodzie na cookies oraz postępu w kampanii.</td>
            <td>Do czasu ręcznego wyczyszczenia danych przeglądarki.</td>
          </tr>
          <tr>
            <td>Analityczne (opcjonalne)</td>
            <td>Zbiorcza statystyka odwiedzin, wyłącznie po wyrażeniu zgody w banerze.</td>
            <td>Do 12 miesięcy.</td>
          </tr>
        </tbody>
      </table>

      <h2>Zarządzanie zgodą</h2>
      <p>
        Decyzję podejmujesz w banerze widocznym przy pierwszej wizycie. Możesz ją zmienić
        w dowolnym momencie, czyszcząc dane witryny w ustawieniach przeglądarki — baner
        pojawi się ponownie przy kolejnej wizycie.
      </p>

      <h2>Cookies podmiotów trzecich</h2>
      <p>
        Obecna wersja serwisu nie osadza wtyczek ani treści z domen zewnętrznych, więc nie
        występują tu pliki cookie ustawiane przez podmioty trzecie. Jeśli to się zmieni wraz
        z uruchomieniem pełnej wersji gry, ten dokument zostanie zaktualizowany.
      </p>
    </div>
  );
}
