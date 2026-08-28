import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Dane kontaktowe zespołu odpowiedzialnego za projekt gry.",
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <div className="container section prose">
      <div className="section-head">
        <span className="eyebrow">Kontakt</span>
        <h1>Napisz do nas</h1>
        <p>
          Projekt jest jeszcze przed premierą, więc odpowiadamy z jednej skrzynki — bez
          działu obsługi klienta i bez czatu na żywo.
        </p>
      </div>

      <h2>Zgłoszenia dotyczące gry</h2>
      <p>
        Błędy w mechanice, sugestie dotyczące plansz albo pytania o dostępność —
        wszystko trafia pod adres{" "}
        <a href="mailto:kontakt@aartyuni.pro">kontakt@aartyuni.pro</a>.
      </p>

      <h2>Sprawy prawne i dotyczące danych</h2>
      <p>
        Pytania związane z przetwarzaniem danych, zgodne z opisem w{" "}
        <a href="/polityka-prywatnosci">polityce prywatności</a>, prosimy kierować pod ten sam
        adres z dopiskiem „dane osobowe” w temacie wiadomości.
      </p>

      <h2>Czas odpowiedzi</h2>
      <p>
        Staramy się odpisywać w ciągu kilku dni roboczych. W okresach intensywnych prac nad
        kolejną erą kampanii bywa to dłużej — jeśli sprawa jest pilna, proszę zaznaczyć to
        w temacie wiadomości.
      </p>
    </div>
  );
}
