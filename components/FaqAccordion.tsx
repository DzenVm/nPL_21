"use client";

import { useState } from "react";

export default function FaqAccordion({ items }: { items: readonly { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq">
      {items.map((item, i) => {
        const expanded = open === i;
        return (
          <div className="faq__item" key={item.q}>
            <h3>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpen(expanded ? null : i)}
              >
                {item.q}
                <span className="faq__icon" aria-hidden="true">{expanded ? "–" : "+"}</span>
              </button>
            </h3>
            {expanded && (
              <div id={`faq-panel-${i}`} className="faq__panel">
                <p>{item.a}</p>
              </div>
            )}
          </div>
        );
      })}

      <style>{`
        .faq__item {
          border-bottom: 1px solid var(--line);
        }
        .faq__item h3 {
          margin: 0;
          font-family: var(--font-body);
          font-size: 1rem;
        }
        .faq__item button {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          background: none;
          border: none;
          color: var(--text);
          text-align: left;
          padding: 18px 4px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
        }
        .faq__icon {
          flex: none;
          color: var(--text-faint);
          font-size: 1.2rem;
        }
        .faq__panel {
          padding: 0 4px 18px;
        }
        .faq__panel p {
          margin: 0;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}
