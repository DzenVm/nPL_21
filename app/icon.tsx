import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#10141a",
          borderRadius: 7,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <polygon
            points="12,2 21,7 21,17 12,22 3,17 3,7"
            fill="none"
            stroke="#29323d"
            strokeWidth={1.4}
          />
          <path d="M3 9 L11 9 L11 15 L21 15" fill="none" stroke="#ff5d73" strokeWidth={2.1} strokeLinecap="round" />
          <path d="M3 12 L15 12 L15 5" fill="none" stroke="#f5b23b" strokeWidth={2.1} strokeLinecap="round" />
          <path d="M8 21 L8 12 L21 12" fill="none" stroke="#3fc9d0" strokeWidth={2.1} strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
