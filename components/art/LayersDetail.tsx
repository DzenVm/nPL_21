import { cellAt, hexGrid, hexPoints } from "@/lib/hexgrid";

export default function LayersDetail() {
  const size = 46;
  const cells = hexGrid(4, 3, size, 10, 10);
  const width = 360;
  const height = 260;

  const center = cellAt(cells, 2, 1);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-labelledby="layers-detail-title">
      <title id="layers-detail-title">
        Zbliżenie na jedno pole planszy, przez które równolegle przechodzą trzy warstwy tras.
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

      <path
        d={`M 0 ${center.cy - 14} L ${width} ${center.cy - 14}`}
        stroke="var(--tram, #ff5d73)"
        strokeWidth={5}
        strokeLinecap="round"
      />
      <path
        d={`M 0 ${center.cy} L ${width} ${center.cy}`}
        stroke="var(--prad, #f5b23b)"
        strokeWidth={5}
        strokeLinecap="round"
      />
      <path
        d={`M 0 ${center.cy + 14} L ${width} ${center.cy + 14}`}
        stroke="var(--woda, #3fc9d0)"
        strokeWidth={5}
        strokeLinecap="round"
      />

      <polygon
        points={hexPoints(center.cx, center.cy, size - 3)}
        fill="none"
        stroke="#e8edf3"
        strokeWidth={1.5}
        strokeDasharray="3 4"
      />
    </svg>
  );
}
