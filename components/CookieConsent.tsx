"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "zgoda-cookies-v1";

type Consent = "accepted" | "rejected";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      stored = null;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- baner zależy od odczytu localStorage dostępnego dopiero po zamontowaniu
    setVisible(!stored);
  }, []);

  function decide(value: Consent) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // brak dostępu do localStorage nie powinien blokować zamknięcia banera
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-bar" role="dialog" aria-live="polite" aria-label="Zgoda na pliki cookie">
      <div className="container cookie-bar__inner">
        <p>
          Serwis zapisuje w przeglądarce wyłącznie pliki niezbędne do jej działania oraz —
          po Twojej zgodzie — pliki służące do pomiaru ruchu. Szczegóły opisujemy w{" "}
          <a href="/polityka-cookies">polityce cookies</a>.
        </p>
        <div className="cookie-bar__actions">
          <button type="button" className="btn btn-ghost" onClick={() => decide("rejected")}>
            Tylko niezbędne
          </button>
          <button type="button" className="btn btn-primary" onClick={() => decide("accepted")}>
            Zgadzam się
          </button>
        </div>
      </div>

      <style>{`
        .cookie-bar {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 60;
          background: var(--bg-card);
          border-top: 1px solid var(--line);
          box-shadow: 0 -8px 30px rgba(0,0,0,0.35);
        }
        .cookie-bar__inner {
          padding-block: 18px;
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .cookie-bar__inner p {
          margin: 0;
          flex: 1;
          min-width: 240px;
          font-size: 0.88rem;
          color: var(--text-muted);
        }
        .cookie-bar__inner a {
          color: var(--woda);
        }
        .cookie-bar__actions {
          display: flex;
          gap: 10px;
          flex: none;
        }
      `}</style>
    </div>
  );
}
