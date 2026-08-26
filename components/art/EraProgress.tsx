import { hexGrid, hexPoints } from "@/lib/hexgrid";

export default function EraProgress() {
  const width = 640;
  const height = 280;
  const leftCells = hexGrid(3, 3, 26, 24, 90);
  const rightCells = hexGrid(6, 5, 24, 360, 20);

  const leftFilled = new Set(["1-1"]);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-labelledby="era-progress-title">
      <title id="era-progress-title">
        Porównanie osady z pierwszej ery po lewej i gęstego miasta z ostatniej ery po prawej.
      </title>

      {leftCells.map((c) => (
        <polygon
          key={`l-${c.col}-${c.row}`}
          points={hexPoints(c.cx, c.cy, 23)}
          fill={leftFilled.has(`${c.col}-${c.row}`) ? "#1c242f" : "#151b23"}
          stroke="#29323d"
          strokeWidth={1}
        />
      ))}

      <path
        d="M 220 140 L 320 140"
        stroke="#5f6c7a"
        strokeWidth={2}
        markerEnd="url(#arrow)"
      />
      <defs>
        <marker id="arrow" markerWidth={10} markerHeight={10} refX={6} refY={3} orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#5f6c7a" />
        </marker>
      </defs>

      {rightCells.map((c, i) => {
        const palette = ["#1c242f", "#20293380", "#1c242f"];
        const fill = palette[i % palette.length];
        return (
          <polygon
            key={`r-${c.col}-${c.row}`}
            points={hexPoints(c.cx, c.cy, 21)}
            fill={fill}
            stroke="#333e4a"
            strokeWidth={1}
          />
        );
      })}

      <path
        d="M 400 90 L 460 130 L 520 100 L 580 150"
        fill="none"
        stroke="var(--tram, #ff5d73)"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <path
        d="M 390 200 L 450 180 L 500 210 L 560 190"
        fill="none"
        stroke="var(--woda, #3fc9d0)"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <path
        d="M 410 150 L 470 160 L 530 140 L 590 170"
        fill="none"
        stroke="var(--prad, #f5b23b)"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
}
