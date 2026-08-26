// Mały, własny generator siatki heksagonalnej — służy wyłącznie do rysowania
// ilustracji na stronie (SVG budowane po stronie serwera, bez plików graficznych).

export type HexCell = {
  col: number;
  row: number;
  cx: number;
  cy: number;
};

export function hexPoints(cx: number, cy: number, size: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 180) * (60 * i - 30);
    const x = cx + size * Math.cos(angle);
    const y = cy + size * Math.sin(angle);
    pts.push(`${round(x)},${round(y)}`);
  }
  return pts.join(" ");
}

export function hexGrid(cols: number, rows: number, size: number, originX = 0, originY = 0): HexCell[] {
  const w = Math.sqrt(3) * size;
  const h = size * 2;
  const cells: HexCell[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const offset = row % 2 === 1 ? w / 2 : 0;
      const cx = originX + col * w + offset + w / 2;
      const cy = originY + row * h * 0.75 + h / 2;
      cells.push({ col, row, cx, cy });
    }
  }
  return cells;
}

export function cellAt(cells: HexCell[], col: number, row: number): HexCell {
  const found = cells.find((c) => c.col === col && c.row === row);
  if (!found) {
    throw new Error(`Brak komórki (${col}, ${row}) w siatce`);
  }
  return found;
}

// Ścieżka po podanych punktach z lekko zaokrąglonymi narożnikami
// (klasyczne "obcinanie rogów" krzywą kwadratową).
export function smoothPath(points: { cx: number; cy: number }[], corner = 0.28): string {
  if (points.length === 0) return "";
  const first = points[0];
  if (!first) return "";
  if (points.length === 1) return `M ${round(first.cx)} ${round(first.cy)}`;

  const p = points.map((pt) => ({ x: pt.cx, y: pt.cy }));
  const p0 = p[0];
  if (!p0) return "";
  let d = `M ${round(p0.x)} ${round(p0.y)}`;

  for (let i = 1; i < p.length; i++) {
    const curr = p[i];
    const prev = p[i - 1];
    const next = p[i + 1];

    if (!curr || !prev) continue;

    if (!next) {
      d += ` L ${round(curr.x)} ${round(curr.y)}`;
      continue;
    }

    const inX = prev.x + (curr.x - prev.x) * (1 - corner);
    const inY = prev.y + (curr.y - prev.y) * (1 - corner);
    const outX = curr.x + (next.x - curr.x) * corner;
    const outY = curr.y + (next.y - curr.y) * corner;

    d += ` L ${round(inX)} ${round(inY)} Q ${round(curr.x)} ${round(curr.y)} ${round(outX)} ${round(outY)}`;
  }

  return d;
}

function round(n: number): number {
  return Math.round(n * 100) / 100;
}
