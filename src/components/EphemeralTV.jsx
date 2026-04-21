export default function EphemeralTV() {
  return (
    <svg
      viewBox="0 0 720 520"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="tv-bg" cx="60%" cy="45%" r="75%">
          <stop offset="0%" stopColor="#1d1b27" />
          <stop offset="100%" stopColor="#0a080f" />
        </radialGradient>
        {/* TV body */}
        <linearGradient id="tv-case-top" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#4b4754" />
          <stop offset="100%" stopColor="#1e1c28" />
        </linearGradient>
        <linearGradient id="tv-case-front" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#3a3744" />
          <stop offset="100%" stopColor="#141220" />
        </linearGradient>
        <linearGradient id="tv-case-side" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#2a2834" />
          <stop offset="100%" stopColor="#15131e" />
        </linearGradient>
        {/* Screen — teal/cyan glow */}
        <radialGradient id="tv-screen" cx="50%" cy="45%" r="80%">
          <stop offset="0%" stopColor="#6dd6df" />
          <stop offset="60%" stopColor="#2e94a4" />
          <stop offset="100%" stopColor="#0f4b5c" />
        </radialGradient>
        <linearGradient id="tv-glass" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.25" />
          <stop offset="40%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>

        <filter id="tv-soft">
          <feGaussianBlur stdDeviation="12" />
        </filter>
        <filter id="tv-soft-sm">
          <feGaussianBlur stdDeviation="1.4" />
        </filter>
      </defs>

      <rect width="720" height="520" fill="url(#tv-bg)" />

      {/* Ground glow from screen */}
      <ellipse
        cx="360"
        cy="450"
        rx="260"
        ry="18"
        fill="#49bfcf"
        opacity="0.35"
        filter="url(#tv-soft)"
      />
      {/* Ambient teal wash */}
      <ellipse
        cx="360"
        cy="260"
        rx="340"
        ry="170"
        fill="#2a7f8a"
        opacity="0.15"
        filter="url(#tv-soft)"
      />

      {/* Base plinth */}
      <rect x="240" y="410" width="240" height="18" rx="2" fill="#24222d" />
      <rect x="220" y="425" width="280" height="6" rx="1" fill="#15131e" />

      {/* TV body group — low angle */}
      <g transform="translate(150 110)">
        {/* Back/right side */}
        <path
          d="M 50 10 L 380 10 L 410 30 L 410 310 L 380 310 L 50 310 Z"
          fill="url(#tv-case-side)"
        />
        {/* Top face */}
        <path
          d="M 50 10 L 380 10 L 410 30 L 80 30 Z"
          fill="url(#tv-case-top)"
        />
        {/* Front face */}
        <rect
          x="0"
          y="30"
          width="380"
          height="280"
          rx="18"
          fill="url(#tv-case-front)"
        />
        {/* Subtle front bevel */}
        <rect
          x="6"
          y="36"
          width="368"
          height="268"
          rx="16"
          fill="none"
          stroke="#1a1822"
          strokeWidth="1"
        />

        {/* Screen recess */}
        <rect x="30" y="58" width="320" height="224" rx="24" fill="#06050b" />
        {/* Screen glow */}
        <rect x="36" y="64" width="308" height="212" rx="20" fill="url(#tv-screen)" />

        {/* Scanlines */}
        <g opacity="0.28">
          {Array.from({ length: 36 }).map((_, i) => (
            <rect
              key={i}
              x="36"
              y={65 + i * 6}
              width="308"
              height="1"
              fill="#0a1a24"
            />
          ))}
        </g>

        {/* Glass reflection */}
        <rect x="36" y="64" width="308" height="90" rx="16" fill="url(#tv-glass)" />

        {/* Screen vignette */}
        <rect
          x="36"
          y="64"
          width="308"
          height="212"
          rx="20"
          fill="url(#tv-inner-vign)"
          opacity="0.65"
        />
        <defs>
          <radialGradient id="tv-inner-vign" cx="50%" cy="50%" r="75%">
            <stop offset="55%" stopColor="#000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.8" />
          </radialGradient>
        </defs>

        {/* Brand label */}
        <rect x="165" y="294" width="50" height="4" rx="1" fill="#2a2832" />
        {/* Dial */}
        <circle cx="350" cy="200" r="4" fill="#5b5867" />
        <circle cx="350" cy="216" r="4" fill="#5b5867" />
      </g>

      {/* Key vignette */}
      <rect width="720" height="520" fill="url(#tv-vign)" opacity="0.55" />
      <defs>
        <radialGradient id="tv-vign" cx="50%" cy="50%" r="80%">
          <stop offset="55%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.7" />
        </radialGradient>
      </defs>
    </svg>
  );
}
