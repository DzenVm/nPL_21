import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#10141a",
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(63,201,208,0.16), transparent 45%), radial-gradient(circle at 90% 85%, rgba(255,93,115,0.14), transparent 45%)",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 24 24" style={{ marginBottom: 36 }}>
          <polygon points="12,2 21,7 21,17 12,22 3,17 3,7" fill="none" stroke="#333e4a" strokeWidth={0.9} />
          <path d="M3 9 L11 9 L11 15 L21 15" fill="none" stroke="#ff5d73" strokeWidth={1.4} strokeLinecap="round" />
          <path d="M3 12 L15 12 L15 5" fill="none" stroke="#f5b23b" strokeWidth={1.4} strokeLinecap="round" />
          <path d="M8 21 L8 12 L21 12" fill="none" stroke="#3fc9d0" strokeWidth={1.4} strokeLinecap="round" />
        </svg>
        <div style={{ fontSize: 54, color: "#e8edf3", fontWeight: 600, maxWidth: 920, lineHeight: 1.15 }}>
          Jedna plansza. Trzy sieci do domknięcia, zanim zabraknie miejsca.
        </div>
        <div style={{ fontSize: 26, color: "#93a1b0", marginTop: 26 }}>
          Sieciowa gra logiczna online — kampania, plansza dnia, tryb Sąsiedztwa
        </div>
      </div>
    ),
    { ...size }
  );
}
