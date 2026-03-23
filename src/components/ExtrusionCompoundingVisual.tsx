import extrusionCompoundingVisual from "../assets/extrusion-compounding-visual.png";

const nodePulses = [
  { cx: 507, cy: 583, delay: "0s" },
  { cx: 692, cy: 583, delay: "1.2s" },
  { cx: 889, cy: 621, delay: "2.1s" },
];

const outputDrops = [
  { left: "76.4%", delay: "0s" },
  { left: "77.7%", delay: "1.55s" },
  { left: "79.1%", delay: "3.05s" },
];

export default function ExtrusionCompoundingVisual() {
  return (
    <div className="extrusion-visual absolute inset-0 overflow-hidden">
      <img
        src={extrusionCompoundingVisual}
        alt="Extrusion and compounding process visualization"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="extrusion-visual__ambient" aria-hidden="true" />
      <div className="extrusion-visual__barrel-glow" aria-hidden="true" />
      <div className="extrusion-visual__barrel-sweep" aria-hidden="true" />

      <div className="extrusion-visual__feed extrusion-visual__feed--left" aria-hidden="true">
        <span />
        <span />
      </div>
      <div className="extrusion-visual__feed extrusion-visual__feed--right" aria-hidden="true">
        <span />
        <span />
      </div>

      <div className="extrusion-visual__drops" aria-hidden="true">
        {outputDrops.map((drop) => (
          <span
            key={drop.delay}
            className="extrusion-visual__drop"
            style={{ left: drop.left, animationDelay: drop.delay }}
          />
        ))}
      </div>

      <svg
        viewBox="0 0 1152 768"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="extrusion-path-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#33ddff" stopOpacity="0.1" />
            <stop offset="48%" stopColor="#7ceeff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffd76e" stopOpacity="0.18" />
          </linearGradient>
          <linearGradient id="extrusion-output-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffd76e" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#33ddff" stopOpacity="0.9" />
          </linearGradient>
          <filter id="extrusion-soft-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M448 185 L448 227"
          className="extrusion-flow extrusion-flow--feed"
          pathLength="100"
          filter="url(#extrusion-soft-glow)"
        />
        <path
          d="M514 185 L514 227"
          className="extrusion-flow extrusion-flow--feed extrusion-flow--delay"
          pathLength="100"
          filter="url(#extrusion-soft-glow)"
        />

        <path
          d="M448 227 H513"
          className="extrusion-flow extrusion-flow--merge extrusion-flow--delay-2"
          pathLength="100"
          filter="url(#extrusion-soft-glow)"
        />

        <path
          d="M448 227 V565 H492"
          className="extrusion-flow extrusion-flow--convey"
          pathLength="100"
          filter="url(#extrusion-soft-glow)"
        />

        <path
          d="M492 565 H828"
          className="extrusion-flow extrusion-flow--barrel"
          pathLength="100"
          filter="url(#extrusion-soft-glow)"
        />

        <path
          d="M828 565 H880 V618"
          className="extrusion-flow extrusion-flow--output extrusion-flow--delay-3"
          pathLength="100"
          filter="url(#extrusion-soft-glow)"
        />

        <path
          d="M500 565 H820"
          className="extrusion-dots"
          pathLength="100"
        />

        {nodePulses.map((node) => (
          <g key={node.delay} className="extrusion-node" style={{ animationDelay: node.delay }}>
            <circle cx={node.cx} cy={node.cy} r="10" className="extrusion-node__core" />
            <circle cx={node.cx} cy={node.cy} r="14" className="extrusion-node__ring" />
            <circle cx={node.cx} cy={node.cy} r="22" className="extrusion-node__pulse" />
          </g>
        ))}
      </svg>
    </div>
  );
}
