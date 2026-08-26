import Link from "next/link";
import { layers } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <p className="site-footer__lead">
            Strona informacyjna gry przeglądarkowej rozwijanej dla graczy w Polsce. Adres serwisu
            z samą rozgrywką zostanie podpięty po uruchomieniu docelowej domeny.
          </p>
          <ul className="site-footer__layers">
            {layers.map((l) => (
              <li key={l.id}>
                <span className="dot" style={{ background: l.color }} />
                {l.label}
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Informacje prawne">
          <h3>Informacje</h3>
          <ul>
            <li><Link href="/o-rozgrywce">O rozgrywce</Link></li>
            <li><Link href="/aktualizacje">Aktualizacje</Link></li>
            <li><Link href="/najczestsze-pytania">Najczęstsze pytania</Link></li>
            <li><Link href="/dostepnosc">Dostępność</Link></li>
          </ul>
        </nav>

        <nav aria-label="Dokumenty">
          <h3>Dokumenty</h3>
          <ul>
            <li><Link href="/regulamin">Regulamin</Link></li>
            <li><Link href="/polityka-prywatnosci">Polityka prywatności</Link></li>
            <li><Link href="/polityka-cookies">Polityka cookies</Link></li>
            <li><Link href="/kontakt">Kontakt</Link></li>
          </ul>
        </nav>
      </div>

      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} — projekt gry w fazie rozwoju. Wszystkie treści na tej stronie dotyczą wersji przygotowywanej do premiery.</p>
      </div>

      <style>{`
        .site-footer {
          border-top: 1px solid var(--line);
          padding-block: 52px 24px;
          background: var(--bg-raised);
        }
        .site-footer__grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 32px;
        }
        .site-footer__lead {
          color: var(--text-muted);
          max-width: 42ch;
          font-size: 0.94rem;
        }
        .site-footer__layers {
          list-style: none;
          padding: 0;
          margin: 18px 0 0;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .site-footer__layers li {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .site-footer h3 {
          font-family: var(--font-body);
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-faint);
          margin-bottom: 14px;
        }
        .site-footer ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .site-footer a {
          text-decoration: none;
          color: var(--text-muted);
          font-size: 0.92rem;
        }
        .site-footer a:hover {
          color: var(--text);
        }
        .site-footer__bottom {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid var(--line);
          color: var(--text-faint);
          font-size: 0.8rem;
        }
        @media (max-width: 760px) {
          .site-footer__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}
