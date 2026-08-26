import { cellAt, hexGrid, hexPoints, smoothPath } from "@/lib/hexgrid";

export default function HeroBoard() {
  const size = 30;
  const cols = 10;
  const rows = 6;
  const cells = hexGrid(cols, rows, size, 14, 10);
  const width = 640;
  const height = 400;

  const claimed = new Set([
    "1-1", "2-1", "3-1", "4-1", "5-1",
    "2-2", "3-2", "4-2", "6-2",
    "1-3", "2-3", "5-3", "6-3", "7-3",
    "3-4", "4-4", "5-4", "7-4",
  ]);

  const tram = [cellAt(cells, 1, 1), cellAt(cells, 2, 1), cellAt(cells, 3, 1), cellAt(cells, 4, 2), cellAt(cells, 6, 2), cellAt(cells, 7, 3)];
  const woda = [cellAt(cells, 1, 3), cellAt(cells, 2, 3), cellAt(cells, 3, 4), cellAt(cells, 4, 4), cellAt(cells, 5, 4)];
  const prad = [cellAt(cells, 2, 2), cellAt(cells, 3, 2), cellAt(cells, 4, 1), cellAt(cells, 5, 1), cellAt(cells, 5, 3), cellAt(cells, 6, 3)];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-labelledby="hero-board-title">
      <title id="hero-board-title">
        Widok planszy: sześciokątne pola miasta połączone trasami tramwaju, wody i prądu.
      </title>
      <defs>
        <linearGradient id="riverGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#243547" />
          <stop offset="1" stopColor="#18242f" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width={width} height={height} fill="none" />

      {cells.map((c) => {
        const key = `${c.col}-${c.row}`;
        const isClaimed = claimed.has(key);
        return (
          <polygon
            key={key}
            points={hexPoints(c.cx, c.cy, size - 2)}
            fill={isClaimed ? "#1c242f" : "#151b23"}
            stroke="#29323d"
            strokeWidth={1}
          />
        );
      })}

      <path
        d="M 40 260 C 140 300, 220 210, 320 250 C 420 290, 480 220, 600 240"
        fill="none"
        stroke="url(#riverGrad)"
        strokeWidth={22}
        strokeLinecap="round"
        opacity={0.85}
      />

      <path d={smoothPath(tram)} fill="none" stroke="var(--tram, #ff5d73)" strokeWidth={4} strokeLinecap="round" />
      <path d={smoothPath(prad)} fill="none" stroke="var(--prad, #f5b23b)" strokeWidth={4} strokeLinecap="round" />
      <path d={smoothPath(woda)} fill="none" stroke="var(--woda, #3fc9d0)" strokeWidth={4} strokeLinecap="round" />

      {[...tram, ...woda, ...prad].map((c, i) => (
        <circle key={i} cx={c.cx} cy={c.cy} r={3.2} fill="#0c1116" stroke="#e8edf3" strokeWidth={1.2} />
      ))}

      <g opacity={0.9}>
        <rect x={cellAt(cells, 4, 4).cx - 8} y={cellAt(cells, 4, 4).cy - 6} width={16} height={12} rx={2} fill="#0c1116" stroke="#e8edf3" strokeWidth={1} />
        <path d={`M ${cellAt(cells, 4, 4).cx - 10} ${cellAt(cells, 4, 4).cy - 6} L ${cellAt(cells, 4, 4).cx} ${cellAt(cells, 4, 4).cy - 14} L ${cellAt(cells, 4, 4).cx + 10} ${cellAt(cells, 4, 4).cy - 6}`} fill="none" stroke="#e8edf3" strokeWidth={1} />
      </g>
    </svg>
  );
}
