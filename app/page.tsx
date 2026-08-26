import type { Metadata } from "next";
import Link from "next/link";
import HeroBoard from "@/components/art/HeroBoard";
import LayersDetail from "@/components/art/LayersDetail";
import EraProgress from "@/components/art/EraProgress";
import DailyBoard from "@/components/art/DailyBoard";
import NeighborBoards from "@/components/art/NeighborBoards";
import BadgeCluster from "@/components/art/BadgeCluster";
import FaqAccordion from "@/components/FaqAccordion";
import {
  badges,
  changelog,
  eras,
  faq,
  glossary,
  layers,
  modes,
  requirements,
  roadmap,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Strona główna",
};

export default function HomePage() {
  return (
    <>
      <section className="hero section">
        <div className="container hero__grid">
          <div>
            <span className="tag">W przygotowaniu do premiery — Polska</span>
            <h1>
              Jedna plansza. Trzy sieci, które trzeba doprowadzić na czas, zanim braknie miejsca.
            </h1>
            <p className="hero__lead">
              To gra logiczna rozgrywana w przeglądarce: prowadzisz trasę tramwaju, sieć wodociągową
              i linię energetyczną przez tę samą siatkę sześciokątnych pól. Każdy odcinek trasy
              zajmuje miejsce na stałe — cofnięcie ruchu jest możliwe, ale kosztuje turę, więc plansza
              szybko robi się ciasna.
            </p>
            <div className="hero__cta">
              <a href="#mechanika" className="btn btn-primary">Jak to działa</a>
              <a href="#galeria" className="btn btn-ghost">Zobacz plansze</a>
            </div>
            <dl className="hero__stats">
              <div>
                <dt>Plansz w kampanii</dt>
                <dd>58</dd>
              </div>
              <div>
                <dt>Er rozwoju osiedla</dt>
                <dd>6</dd>
              </div>
              <div>
                <dt>Warstwy tras naraz</dt>
                <dd>3</dd>
              </div>
              <div>
                <dt>Cena wejścia</dt>
                <dd>0 zł</dd>
              </div>
            </dl>
          </div>
          <div className="hero__art">
            <HeroBoard />
            <p className="hero__caption">
              Fragment planszy z trzeciej ery — most na rzece odblokowany, wszystkie trzy warstwy
              domknięte w tej samej turze.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <div className="section-head">
            <span className="eyebrow">Skąd ten pomysł</span>
            <h2>Nie kolejna gra o budowaniu miasta</h2>
          </div>
          <p>
            Większość gier o rozbudowie osiedla sprowadza się do klikania budynków i czekania,
            aż licznik się napełni. Chcieliśmy czegoś, co bardziej przypomina łamigłówkę
            inżynierską niż symulator — dlatego całą rozgrywkę oparliśmy na jednym problemie:
            jak upchnąć trzy niezależne sieci na tej samej, ograniczonej powierzchni, mając do
            dyspozycji tylko trzy najbliższe odcinki z kolejki.
          </p>
          <p>
            Nie widzisz całej puli elementów, którymi będziesz dysponować — tylko podgląd
            najbliższej trójki. To wymusza planowanie na krótki dystans i akceptowanie tego, że
            czasem trzeba poprowadzić trasę okrężnie, bo prostego odcinka po prostu jeszcze nie
            dostałeś. Plansza nie jest przeciwnikiem w tradycyjnym sensie — ogranicza cię
            wyłącznie geometria pól i kolejność, w jakiej pojawiają się elementy.
          </p>
        </div>
      </section>

      <section className="section" id="mechanika">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Mechanika</span>
            <h2>Trzy warstwy, jedna siatka pól</h2>
            <p>
              Tramwaj, woda i prąd poruszają się po tej samej planszy, ale nie mogą się ze sobą
              łączyć. Mogą się za to krzyżować — i właśnie w tych skrzyżowaniach rozgrywa się
              większość decyzji.
            </p>
          </div>

          <div className="mechanika__grid">
            <div className="mechanika__art">
              <LayersDetail />
            </div>
            <ul className="mechanika__list">
              {layers.map((l) => (
                <li key={l.id}>
                  <span className="dot" style={{ background: l.color }} />
                  <div>
                    <strong>{l.label}</strong>
                    <p>{l.short}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-3" style={{ marginTop: 40 }}>
            <div className="card">
              <h3>Kolejka trzech odcinków</h3>
              <p>
                Widzisz zawsze trzy nadchodzące elementy — proste, zakręty, rozgałęzienia
                i skrzyżowania. Nie da się ich przełożyć ani wymienić, więc plan trasy trzeba
                dopasowywać do tego, co akurat przyszło, a nie odwrotnie.
              </p>
            </div>
            <div className="card">
              <h3>Licznik zaufania</h3>
              <p>
                Każdy budynek z niedokończoną dostawą traci punkt zaufania co kilka tur. Po
                wyzerowaniu przestaje liczyć się do wyniku planszy — ale gra toczy się dalej,
                więc jedna pomyłka nie kończy rozgrywki.
              </p>
            </div>
            <div className="card">
              <h3>Ograniczenia terenu</h3>
              <p>
                Rzeki, wzniesienia i późniejsze granice dzielnic blokują część pól. Mosty
                i tunele to osobny, policzalny zasób — trzeba go wcześniej zdobyć w krótkiej
                łamigłówce pobocznej.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="tryby">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Tryby gry</span>
            <h2>Kampania, plansza dnia i Sąsiedztwa</h2>
            <p>
              Trzy sposoby na tę samą mechanikę — jeden ustalony z góry przebieg, jeden rytm
              codzienny i jeden asynchroniczny, oparty na cudzej planszy.
            </p>
          </div>

          <div className="grid grid-3">
            {modes.map((m) => (
              <div className="card" key={m.id}>
                <h3>{m.title}</h3>
                <p className="tag" style={{ marginBottom: 14 }}>{m.length}</p>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Kampania</span>
            <h2>Sześć er, od czterech domów po gęste miasto</h2>
            <p>
              Każda era wprowadza jeden nowy element zasad i nie da się jej przejść tempem
              z poprzedniej — plansze rosną, a kolejka odcinków robi się krótsza.
            </p>
          </div>

          <div className="era__art">
            <EraProgress />
          </div>

          <ol className="era__list">
            {eras.map((e) => (
              <li key={e.n}>
                <span className="era__n">{String(e.n).padStart(2, "0")}</span>
                <div>
                  <strong>{e.name}</strong>
                  <p>{e.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="galeria">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Plansza dnia, Sąsiedztwa i odznaki</span>
            <h2>Poza kampanią</h2>
            <p>
              Trzy dodatkowe elementy rozgrywki, które nie należą do głównej ścieżki, ale
              regularnie do nich wracamy przy testach.
            </p>
          </div>

          <div className="grid grid-3">
            <figure className="card gallery__figure">
              <DailyBoard />
              <figcaption>
                <strong>Plansza dnia</strong>
                <p>Identyczny układ dla wszystkich grających w danej dobie, reset o północy CET.</p>
              </figcaption>
            </figure>
            <figure className="card gallery__figure">
              <NeighborBoards />
              <figcaption>
                <strong>Sąsiedztwa</strong>
                <p>Trasa musi trafić dokładnie w punkty, które ktoś inny wyprowadził na granicę.</p>
              </figcaption>
            </figure>
            <figure className="card gallery__figure">
              <BadgeCluster />
              <figcaption>
                <strong>Odznaki inżynierskie</strong>
                <p>Stałe, wyliczalne warunki — żadnych losowych nagród ani otwieranych skrzynek.</p>
              </figcaption>
            </figure>
          </div>

          <div className="grid grid-2" style={{ marginTop: 32 }}>
            {badges.map((b) => (
              <div className="badge-row" key={b.name}>
                <strong>{b.name}</strong>
                <p>{b.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Dla kogo</span>
            <h2>Trudność, tempo i dostępność</h2>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <h3>Bez presji czasu w tle</h3>
              <p>
                Licznik zaufania liczy tury, nie sekundy — możesz zostawić otwartą kartę
                i wrócić za kwadrans, plansza na ciebie poczeka. Jedyny tryb z realnym
                opóźnieniem to Sąsiedztwa, i tam opóźnienie jest częścią zasad, nie usterką.
              </p>
            </div>
            <div className="card">
              <h3>Rozpoznawanie warstw bez kolorów</h3>
              <p>
                Dla osób z zaburzeniami rozpoznawania barw każda z trzech warstw ma dodatkowo
                osobny wzór linii — kropkowany, kreskowany i ciągły. Włącza się go w ustawieniach
                jednym przełącznikiem, bez utraty pozostałych opcji graficznych.
              </p>
            </div>
            <div className="card">
              <h3>Sterowanie z klawiatury</h3>
              <p>
                Każde pole planszy ma przypisaną etykietę współrzędnych odczytywaną przez
                czytniki ekranu, a całą rozgrywkę da się przejść bez myszy — strzałki plus
                Enter wystarczą do postawienia i obrócenia odcinka.
              </p>
            </div>
            <div className="card">
              <h3>Zapis tylko lokalny</h3>
              <p>
                Postęp w kampanii trzyma się w pamięci przeglądarki, nie na naszym serwerze.
                To wygodne, dopóki nie zmienisz urządzenia — eksport zapisu do pliku jest
                w planach, patrz sekcja aktualizacji niżej.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "start", gap: 48 }}>
            <div>
              <div className="section-head">
                <span className="eyebrow">Zanim zaczniesz</span>
                <h2>Wymagania techniczne</h2>
              </div>
              <ul className="req__list">
                {requirements.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="section-head">
                <span className="eyebrow">Słowniczek</span>
                <h2>Kilka pojęć z gry</h2>
              </div>
              <dl className="glossary">
                {glossary.map((g) => (
                  <div key={g.term}>
                    <dt>{g.term}</dt>
                    <dd>{g.def}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "start", gap: 48 }}>
            <div>
              <div className="section-head">
                <span className="eyebrow">Dziennik zmian</span>
                <h2>Co ostatnio poprawiliśmy</h2>
                <p>Pełna lista wpisów znajduje się na stronie aktualizacji.</p>
              </div>
              <ul className="changelog">
                {changelog.map((c) => (
                  <li key={c.version}>
                    <div className="changelog__head">
                      <strong>v{c.version}</strong>
                      <span>{c.date}</span>
                    </div>
                    <ul>
                      {c.notes.map((n) => (
                        <li key={n}>{n}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              <Link href="/aktualizacje" className="btn btn-ghost" style={{ marginTop: 20 }}>
                Cały dziennik zmian
              </Link>
            </div>
            <div>
              <div className="section-head">
                <span className="eyebrow">Co dalej</span>
                <h2>Nad czym teraz pracujemy</h2>
              </div>
              <ul className="roadmap">
                {roadmap.map((r) => (
                  <li key={r.label}>
                    <span className={`tag roadmap__status roadmap__status--${r.status === "w toku" ? "progress" : "planned"}`}>
                      {r.status}
                    </span>
                    <p>{r.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Pytania</span>
            <h2>Najczęstsze pytania</h2>
          </div>
          <FaqAccordion items={faq.slice(0, 4)} />
          <Link href="/najczestsze-pytania" className="btn btn-ghost" style={{ marginTop: 24 }}>
            Zobacz wszystkie pytania
          </Link>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container final-cta__inner">
          <div>
            <h2>Domena z samą grą pojawi się wkrótce</h2>
            <p>
              Ta strona opisuje projekt na etapie przygotowań do premiery. Adres, pod którym
              zagrasz, dodamy tutaj i w nagłówku, gdy tylko zostanie uruchomiony. Do tego czasu
              możesz sprawdzić szczegóły rozgrywki albo napisać do nas przez stronę kontaktową.
            </p>
          </div>
          <div className="final-cta__actions">
            <Link href="/o-rozgrywce" className="btn btn-primary">Poznaj szczegóły rozgrywki</Link>
            <Link href="/kontakt" className="btn btn-ghost">Kontakt</Link>
          </div>
        </div>
      </section>

      <style>{`
        .hero__grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 48px;
          align-items: center;
        }
        .hero h1 {
          font-size: clamp(2rem, 4vw, 2.9rem);
          margin-top: 14px;
        }
        .hero__lead {
          color: var(--text-muted);
          font-size: 1.08rem;
          max-width: 54ch;
        }
        .hero__cta {
          display: flex;
          gap: 12px;
          margin: 26px 0 34px;
          flex-wrap: wrap;
        }
        .hero__stats {
          display: grid;
          grid-template-columns: repeat(4, auto);
          gap: 26px;
          margin: 0;
        }
        .hero__stats dt {
          font-size: 0.76rem;
          color: var(--text-faint);
          margin-bottom: 4px;
        }
        .hero__stats dd {
          margin: 0;
          font-family: var(--font-display);
          font-size: 1.5rem;
        }
        .hero__art {
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: var(--radius-l);
          padding: 18px;
        }
        .hero__caption {
          color: var(--text-faint);
          font-size: 0.82rem;
          margin: 10px 4px 0;
        }
        .mechanika__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        .mechanika__art {
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: var(--radius-m);
          padding: 16px;
        }
        .mechanika__list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .mechanika__list li {
          display: flex;
          gap: 14px;
        }
        .mechanika__list .dot {
          margin-top: 6px;
          width: 12px;
          height: 12px;
        }
        .mechanika__list p {
          color: var(--text-muted);
          margin: 4px 0 0;
        }
        .era__art {
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: var(--radius-m);
          padding: 16px;
          margin-bottom: 30px;
        }
        .era__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px 32px;
        }
        .era__list li {
          display: flex;
          gap: 14px;
          padding-block: 6px;
        }
        .era__n {
          font-family: var(--font-display);
          color: var(--text-faint);
          font-size: 1.2rem;
        }
        .era__list p {
          margin: 4px 0 0;
          color: var(--text-muted);
          font-size: 0.94rem;
        }
        .gallery__figure svg { margin-bottom: 14px; }
        .gallery__figure figcaption p {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin: 4px 0 0;
        }
        .badge-row {
          border: 1px solid var(--line);
          border-radius: var(--radius-s);
          padding: 14px 18px;
        }
        .badge-row p {
          margin: 4px 0 0;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        .req__list {
          padding-left: 1.1em;
          color: var(--text-muted);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .glossary {
          margin: 0;
        }
        .glossary div {
          border-bottom: 1px solid var(--line);
          padding: 12px 0;
        }
        .glossary dt {
          font-weight: 700;
        }
        .glossary dd {
          margin: 4px 0 0;
          color: var(--text-muted);
          font-size: 0.92rem;
        }
        .changelog {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .changelog__head {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          color: var(--text-faint);
          margin-bottom: 6px;
        }
        .changelog ul {
          margin: 0;
          padding-left: 1.1em;
          color: var(--text-muted);
          font-size: 0.92rem;
        }
        .roadmap {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .roadmap__status--progress { border-color: var(--woda); color: var(--woda); }
        .roadmap__status--planned { border-color: var(--text-faint); }
        .roadmap p {
          margin: 8px 0 0;
          color: var(--text-muted);
        }
        .final-cta__inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
        }
        .final-cta h2 { max-width: 22ch; }
        .final-cta p { color: var(--text-muted); max-width: 52ch; }
        .final-cta__actions {
          display: flex;
          gap: 12px;
          flex: none;
        }
        @media (max-width: 860px) {
          .hero__grid, .mechanika__grid, .era__list { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .hero__stats { grid-template-columns: repeat(2, auto); row-gap: 18px; }
        }
      `}</style>
    </>
  );
}
