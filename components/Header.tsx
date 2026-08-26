import Link from "next/link";

const links = [
  { href: "/#mechanika", label: "Mechanika" },
  { href: "/#tryby", label: "Tryby gry" },
  { href: "/o-rozgrywce", label: "O rozgrywce" },
  { href: "/aktualizacje", label: "Aktualizacje" },
  { href: "/najczestsze-pytania", label: "Pytania" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <span className="site-header__mark" aria-hidden="true" />
        <nav aria-label="Nawigacja główna" className="site-header__nav">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/#galeria" className="btn btn-primary site-header__cta">
          Zobacz planszę
        </Link>
      </div>

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 40;
          background: rgba(16, 20, 26, 0.82);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--line);
        }
        .site-header__inner {
          display: flex;
          align-items: center;
          gap: 24px;
          height: 68px;
        }
        .site-header__mark {
          width: 22px;
          height: 22px;
          flex: none;
        }
        .site-header__nav {
          flex: 1;
          overflow-x: auto;
        }
        .site-header__nav ul {
          display: flex;
          gap: 22px;
          list-style: none;
          margin: 0;
          padding: 0;
          white-space: nowrap;
        }
        .site-header__nav a {
          text-decoration: none;
          font-size: 0.92rem;
          color: var(--text-muted);
        }
        .site-header__nav a:hover {
          color: var(--text);
        }
        .site-header__cta {
          flex: none;
          padding: 9px 18px;
          font-size: 0.85rem;
        }
        @media (max-width: 640px) {
          .site-header__cta { display: none; }
        }
      `}</style>
    </header>
  );
}
