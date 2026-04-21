function MonitorIllustration() {
  return (
    <svg viewBox="0 0 800 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="mon-room" cx="60%" cy="40%" r="75%">
          <stop offset="0%" stopColor="#2a2636" />
          <stop offset="70%" stopColor="#110f18" />
          <stop offset="100%" stopColor="#07060c" />
        </radialGradient>
        <linearGradient id="mon-case" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#3b3844" />
          <stop offset="100%" stopColor="#1e1c26" />
        </linearGradient>
        <linearGradient id="mon-case-side" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#2a2832" />
          <stop offset="100%" stopColor="#151320" />
        </linearGradient>
        <radialGradient id="mon-screen" cx="45%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#4b577d" />
          <stop offset="55%" stopColor="#1b2038" />
          <stop offset="100%" stopColor="#0a0c18" />
        </radialGradient>
        <linearGradient id="mon-glass" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="mon-key" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#4b4854" />
          <stop offset="100%" stopColor="#1e1c26" />
        </linearGradient>
        <filter id="mon-soft">
          <feGaussianBlur stdDeviation="1" />
        </filter>
      </defs>

      <rect width="800" height="640" fill="url(#mon-room)" />

      {/* Shadow under monitor */}
      <ellipse cx="400" cy="500" rx="280" ry="18" fill="#000" opacity="0.55" filter="url(#mon-soft)" />

      {/* Monitor group */}
      <g transform="translate(150 90)">
        {/* Back panel */}
        <rect x="30" y="50" width="420" height="270" rx="14" fill="url(#mon-case-side)" />
        {/* Front bezel */}
        <rect x="10" y="40" width="420" height="270" rx="12" fill="url(#mon-case)" />
        {/* Screen inset */}
        <rect x="28" y="58" width="384" height="234" rx="4" fill="#0a0c14" />
        <rect x="32" y="62" width="376" height="226" rx="3" fill="url(#mon-screen)" />
        {/* Scanlines */}
        <g opacity="0.35">
          {Array.from({ length: 40 }).map((_, i) => (
            <rect
              key={i}
              x="32"
              y={63 + i * 5.7}
              width="376"
              height="0.7"
              fill="#000"
              opacity={0.25 + (i % 2) * 0.15}
            />
          ))}
        </g>
        {/* Glass reflection */}
        <rect x="32" y="62" width="376" height="80" fill="url(#mon-glass)" />
        {/* Soft cursor */}
        <rect x="54" y="250" width="9" height="14" fill="#9fb0e8" opacity="0.85" />
        {/* Brand dot */}
        <circle cx="220" cy="302" r="2" fill="#5a5566" />
        {/* Stand */}
        <rect x="190" y="310" width="60" height="14" fill="#1e1c26" />
        <rect x="150" y="320" width="140" height="8" rx="2" fill="#262430" />

        {/* Keyboard */}
        <g transform="translate(-30 360)">
          <rect x="0" y="0" width="490" height="20" rx="2" fill="url(#mon-key)" />
          <rect x="10" y="4" width="470" height="12" rx="1" fill="#15131c" />
          {/* Key rows */}
          {Array.from({ length: 3 }).map((_, row) =>
            Array.from({ length: 18 }).map((_, col) => (
              <rect
                key={`${row}-${col}`}
                x={18 + col * 25}
                y={5 + row * 3.4}
                width="20"
                height="2.6"
                rx="0.4"
                fill="#2a2832"
                opacity={0.9 - row * 0.15}
              />
            ))
          )}
        </g>
      </g>

      {/* Rim light from screen glow */}
      <ellipse cx="340" cy="210" rx="260" ry="120" fill="#4b5a8e" opacity="0.1" filter="url(#mon-soft)" />

      {/* Vignette */}
      <rect width="800" height="640" fill="url(#mon-vign)" opacity="0.6" />
      <defs>
        <radialGradient id="mon-vign" cx="50%" cy="45%" r="80%">
          <stop offset="55%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.7" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default function Methodology() {
  return (
    <section className="method container" id="process">
      <div className="method__card">
        <div className="method__body">
          <div className="eyebrow method__label">
            <span className="method__label-dot" />
            The Methodology
          </div>

          <h3 className="method__title">
            Where technical precision meets <em>fluid chaos</em>.
          </h3>

          <p className="method__copy">
            I start with a rigid mathematical framework, then introduce
            variables whose weight and light find the human element within the
            digital void. Every frame is a negotiation between what the
            algorithm wants and what the eye remembers.
          </p>

          <a className="method__cta" href="#">
            See the Process
            <svg
              className="method__cta-arrow"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <path d="M2 6h8M6 2l4 4-4 4" />
            </svg>
          </a>
        </div>

        <div className="method__visual">
          <MonitorIllustration />
        </div>
      </div>
    </section>
  );
}
