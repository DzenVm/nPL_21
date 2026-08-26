import { hexPoints } from "@/lib/hexgrid";

const badges = [
  { x: 90, y: 90, color: "var(--woda, #3fc9d0)", icon: "check" },
  { x: 230, y: 60, color: "var(--tram, #ff5d73)", icon: "ruler" },
  { x: 340, y: 130, color: "var(--prad, #f5b23b)", icon: "dots" },
  { x: 180, y: 200, color: "#8b95a3", icon: "bridge" },
];

export default function BadgeCluster() {
  const width = 420;
  const height = 260;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-labelledby="badge-cluster-title">
      <title id="badge-cluster-title">
        Cztery odznaki inżynierskie w kształcie sześciokątnych medali, każda z innym symbolem.
      </title>

      {badges.map((b, i) => (
        <g key={i} transform={`translate(${b.x}, ${b.y})`}>
          <polygon points={hexPoints(0, 0, 46)} fill="#171d25" stroke={b.color} strokeWidth={2.5} />
          <polygon points={hexPoints(0, 0, 34)} fill="none" stroke={b.color} strokeWidth={1} opacity={0.5} />
          {b.icon === "check" && (
            <path d="M -14 0 L -4 12 L 16 -12" fill="none" stroke={b.color} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
          )}
          {b.icon === "ruler" && (
            <g stroke={b.color} strokeWidth={3} strokeLinecap="round">
              <line x1={-18} y1={10} x2={18} y2={-10} />
              <line x1={-10} y1={10} x2={-4} y2={2} />
              <line x1={2} y1={-2} x2={8} y2={-10} />
            </g>
          )}
          {b.icon === "dots" && (
            <g fill={b.color}>
              <circle cx={-16} cy={0} r={5} />
              <circle cx={0} cy={0} r={5} />
              <circle cx={16} cy={0} r={5} />
            </g>
          )}
          {b.icon === "bridge" && (
            <g stroke={b.color} strokeWidth={3} fill="none" strokeLinecap="round">
              <path d="M -20 8 Q 0 -18 20 8" />
              <line x1={-14} y1={8} x2={-14} y2={16} />
              <line x1={14} y1={8} x2={14} y2={16} />
            </g>
          )}
        </g>
      ))}
    </svg>
  );
}
