import { cellAt, hexGrid, hexPoints } from "@/lib/hexgrid";

export default function NeighborBoards() {
  const size = 24;
  const left = hexGrid(4, 5, size, 10, 10);
  const right = hexGrid(4, 5, size, 220, 10);
  const width = 460;
  const height = 260;

  const handoffRows = [1, 2, 3];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-labelledby="neighbor-boards-title">
      <title id="neighbor-boards-title">
        Dwie sąsiadujące ze sobą plansze z zaznaczonymi punktami przekazania trasy na granicy.
      </title>

      {left.map((c) => (
        <polygon key={`l-${c.col}-${c.row}`} points={hexPoints(c.cx, c.cy, size - 3)} fill="#171d25" stroke="#29323d" strokeWidth={1} />
      ))}
      {right.map((c) => (
        <polygon key={`r-${c.col}-${c.row}`} points={hexPoints(c.cx, c.cy, size - 3)} fill="#171d25" stroke="#29323d" strokeWidth={1} />
      ))}

      <line x1={205} y1={10} x2={205} y2={250} stroke="#333e4a" strokeWidth={2} strokeDasharray="4 5" />

      {handoffRows.map((row) => {
        const from = cellAt(left, 3, row);
        const to = cellAt(right, 0, row);
        return (
          <g key={row}>
            <line x1={from.cx} y1={from.cy} x2={to.cx} y2={to.cy} stroke="var(--woda, #3fc9d0)" strokeWidth={2.5} strokeDasharray="2 5" strokeLinecap="round" />
            <rect x={from.cx - 4} y={from.cy - 4} width={8} height={8} fill="var(--woda, #3fc9d0)" transform={`rotate(45 ${from.cx} ${from.cy})`} />
            <rect x={to.cx - 4} y={to.cy - 4} width={8} height={8} fill="var(--woda, #3fc9d0)" transform={`rotate(45 ${to.cx} ${to.cy})`} />
          </g>
        );
      })}
    </svg>
  );
}
