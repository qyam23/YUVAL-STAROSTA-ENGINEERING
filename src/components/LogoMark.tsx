type LogoMarkProps = {
  className?: string;
};

export default function LogoMark({ className = "h-12 w-12" }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 140 140" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="gearMetal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3f7fb" />
          <stop offset="45%" stopColor="#b8c3cf" />
          <stop offset="100%" stopColor="#6e7988" />
        </linearGradient>
        <linearGradient id="cubeBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6fb4ff" />
          <stop offset="100%" stopColor="#225fbe" />
        </linearGradient>
        <linearGradient id="beamGold" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#f8d26f" />
          <stop offset="100%" stopColor="#c18a15" />
        </linearGradient>
        <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g opacity="0.9" filter="url(#softGlow)">
        <path d="M24 52 H8" stroke="#2b9cff" strokeWidth="3" strokeLinecap="round" />
        <path d="M26 66 H6" stroke="#2b9cff" strokeWidth="3" strokeLinecap="round" />
        <path d="M28 80 H11" stroke="#2b9cff" strokeWidth="3" strokeLinecap="round" />
        <circle cx="6" cy="66" r="3.2" fill="#8ed0ff" />
        <circle cx="11" cy="80" r="2.8" fill="#8ed0ff" />
        <circle cx="8" cy="52" r="2.8" fill="#8ed0ff" />
      </g>

      <g transform="translate(54 70)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation) => (
          <rect
            key={rotation}
            x="-7"
            y="-58"
            width="14"
            height="20"
            rx="3"
            fill="url(#gearMetal)"
            transform={`rotate(${rotation})`}
          />
        ))}
        <circle r="50" fill="url(#gearMetal)" />
        <circle r="39" fill="#08111d" stroke="#dce5f2" strokeWidth="3" />
      </g>

      <g transform="translate(54 70)">
        <polygon points="-20,-7 0,-18 20,-7 0,4" fill="#3b84e3" />
        <polygon points="-20,-7 0,4 0,30 -20,18" fill="url(#cubeBlue)" />
        <polygon points="20,-7 0,4 0,30 20,18" fill="#2d6dcc" />
      </g>

      <g transform="translate(82 69)">
        <path d="M0 -6 L44 -22 L44 -10 L0 6 Z" fill="url(#beamGold)" />
        <path d="M0 6 L53 -10 L53 2 L0 18 Z" fill="url(#beamGold)" />
        <path d="M0 18 L61 2 L61 14 L0 30 Z" fill="url(#beamGold)" />
      </g>

      {[18, 33, 96, 114, 128].map((x, idx) => (
        <circle
          key={x}
          cx={x}
          cy={idx % 2 === 0 ? 30 : 108}
          r="3.5"
          fill="#7fd0ff"
          opacity="0.9"
          filter="url(#softGlow)"
        />
      ))}
    </svg>
  );
}
