import { cellAt, hexGrid, hexPoints, smoothPath } from "@/lib/hexgrid";

export default function DailyBoard() {
  const size = 28;
  const cells = hexGrid(6, 5, size, 16, 16);
  const width = 380;
  const height = 300;

  const route = [cellAt(cells, 1, 1), cellAt(cells, 2, 2), cellAt(cells, 3, 1), cellAt(cells, 4, 3)];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-labelledby="daily-board-title">
      <title id="daily-board-title">
        Plansza z jednym, z góry ustalonym układem, oznaczona odznaką dnia w rogu.
      </title>

      {cells.map((c) => (
        <polygon
          key={`${c.col}-${c.row}`}
          points={hexPoints(c.cx, c.cy, size - 3)}
          fill="#171d25"
          stroke="#29323d"
          strokeWidth={1}
        />
      ))}

      <path d={smoothPath(route)} fill="none" stroke="var(--prad, #f5b23b)" strokeWidth={4} strokeLinecap="round" />
      {route.map((c, i) => (
        <circle key={i} cx={c.cx} cy={c.cy} r={3.4} fill="#0c1116" stroke="#e8edf3" strokeWidth={1.2} />
      ))}

      <g transform="translate(300, 22)">
        <rect x={0} y={0} width={54} height={44} rx={8} fill="#1b222c" stroke="#333e4a" strokeWidth={1.2} />
        <rect x={0} y={0} width={54} height={14} rx={8} fill="#333e4a" />
        <line x1={12} y1={0} x2={12} y2={10} stroke="#e8edf3" strokeWidth={2} />
        <line x1={42} y1={0} x2={42} y2={10} stroke="#e8edf3" strokeWidth={2} />
        <text x={27} y={33} textAnchor="middle" fontSize={18} fontWeight={700} fill="#e8edf3">
          24h
        </text>
      </g>
    </svg>
  );
}
