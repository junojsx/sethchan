/* ---------------------------------------------------------------- */
/* 1. Staircase descending into still water                         */
/* ---------------------------------------------------------------- */
export function StairsArt() {
  return (
    <svg viewBox="0 0 800 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="stair-sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#0d1530" />
          <stop offset="60%" stopColor="#1a244a" />
          <stop offset="100%" stopColor="#0a1024" />
        </linearGradient>
        <linearGradient id="stair-wall" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#1d2a52" />
          <stop offset="100%" stopColor="#0f1632" />
        </linearGradient>
        <linearGradient id="stair-front" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#32416e" />
          <stop offset="100%" stopColor="#18214a" />
        </linearGradient>
        <linearGradient id="stair-top" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#556aa0" />
          <stop offset="100%" stopColor="#3a4a7c" />
        </linearGradient>
        <linearGradient id="water" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#162045" />
          <stop offset="50%" stopColor="#0a1230" />
          <stop offset="100%" stopColor="#05081c" />
        </linearGradient>
        <radialGradient id="stair-moon" cx="68%" cy="18%" r="55%">
          <stop offset="0%" stopColor="#8294d6" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#8294d6" stopOpacity="0" />
        </radialGradient>
        <filter id="stair-blur" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur stdDeviation="1" />
        </filter>
      </defs>

      {/* Sky / atmosphere */}
      <rect width="800" height="1000" fill="url(#stair-sky)" />
      <rect width="800" height="1000" fill="url(#stair-moon)" />

      {/* Back wall */}
      <polygon points="0,0 800,0 800,600 0,640" fill="url(#stair-wall)" />

      {/* Stair stack — seven steps descending right */}
      {Array.from({ length: 7 }).map((_, i) => {
        const y = 300 + i * 45;
        const xL = 60 + i * 50;
        const xR = 800;
        const d = 28;
        return (
          <g key={i}>
            {/* riser */}
            <polygon
              points={`${xL},${y} ${xR},${y} ${xR},${y + d} ${xL},${y + d}`}
              fill="url(#stair-front)"
              opacity={0.85 - i * 0.05}
            />
            {/* tread */}
            <polygon
              points={`${xL},${y} ${xR},${y} ${xR + 20},${y - 14} ${xL + 20},${y - 14}`}
              fill="url(#stair-top)"
              opacity={0.9 - i * 0.06}
            />
          </g>
        );
      })}

      {/* Water line */}
      <rect y="650" width="800" height="350" fill="url(#water)" />

      {/* Reflections — faint mirrored gradients */}
      <g opacity="0.35" filter="url(#stair-blur)">
        {Array.from({ length: 4 }).map((_, i) => (
          <rect
            key={i}
            x="100"
            y={690 + i * 30}
            width="600"
            height="1.5"
            fill="#5a6ea6"
            opacity={0.7 - i * 0.15}
          />
        ))}
      </g>

      {/* Specular highlight on top edge of water */}
      <rect y="650" width="800" height="1.5" fill="#7a8cc4" opacity="0.6" />

      {/* Subtle vignette */}
      <rect width="800" height="1000" fill="url(#vignette-stair)" opacity="0.6" />
      <defs>
        <radialGradient id="vignette-stair" cx="50%" cy="50%" r="75%">
          <stop offset="55%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.6" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* 2. Glowing diamond prism on pink/magenta plane                   */
/* ---------------------------------------------------------------- */
export function DiamondArt() {
  return (
    <svg viewBox="0 0 800 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="di-bg" cx="50%" cy="62%" r="70%">
          <stop offset="0%" stopColor="#c04b8c" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#5a1a48" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0f0815" />
        </radialGradient>
        <radialGradient id="di-glow" cx="50%" cy="48%" r="45%">
          <stop offset="0%" stopColor="#ffd7ec" stopOpacity="0.65" />
          <stop offset="35%" stopColor="#ff7ab8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ff7ab8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="di-line" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffe2f0" />
          <stop offset="100%" stopColor="#ff6aa8" />
        </linearGradient>
        <filter id="di-blur">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
        <filter id="di-softblur">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      <rect width="800" height="700" fill="url(#di-bg)" />

      {/* Ground reflection glow */}
      <ellipse
        cx="400"
        cy="520"
        rx="320"
        ry="34"
        fill="#ff86c2"
        opacity="0.55"
        filter="url(#di-softblur)"
      />

      {/* Aura */}
      <rect width="800" height="700" fill="url(#di-glow)" />

      {/* Diamond wireframe */}
      <g
        transform="translate(400 360)"
        fill="none"
        stroke="url(#di-line)"
        strokeWidth="1.4"
        strokeLinejoin="round"
      >
        {/* Outer silhouette — elongated 2D rhombus */}
        <path
          d="M 0 -170 L 150 0 L 0 170 L -150 0 Z"
          filter="url(#di-blur)"
          opacity="0.7"
        />
        <path d="M 0 -170 L 150 0 L 0 170 L -150 0 Z" />
        {/* Inner facets */}
        <path d="M 0 -170 L 0 170" opacity="0.9" />
        <path d="M -150 0 L 150 0" opacity="0.9" />
        <path d="M -75 -85 L 75 -85 L 75 85 L -75 85 Z" opacity="0.85" />
        <path d="M -75 -85 L 75 85" opacity="0.6" />
        <path d="M 75 -85 L -75 85" opacity="0.6" />
        {/* Outer small octagon */}
        <path
          d="M -38 -190 L 38 -190 L 170 -30 L 170 30 L 38 190 L -38 190 L -170 30 L -170 -30 Z"
          opacity="0.35"
        />
      </g>

      {/* Glow specks */}
      <g fill="#fff" opacity="0.55">
        <circle cx="250" cy="280" r="1" />
        <circle cx="560" cy="340" r="1.5" />
        <circle cx="600" cy="210" r="1" />
        <circle cx="200" cy="420" r="1" />
        <circle cx="480" cy="190" r="1" />
      </g>

      <rect width="800" height="700" fill="url(#di-vignette)" opacity="0.55" />
      <defs>
        <radialGradient id="di-vignette" cx="50%" cy="55%" r="80%">
          <stop offset="60%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.7" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* 3. Warm ambient gradient — almost painterly                      */
/* ---------------------------------------------------------------- */
export function WarmArt() {
  return (
    <svg viewBox="0 0 800 540" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="warm-core" cx="30%" cy="55%" r="55%">
          <stop offset="0%" stopColor="#ffb47a" />
          <stop offset="45%" stopColor="#d06a3c" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#0c0810" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="warm-2" cx="78%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#ffd3a5" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#ffd3a5" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="warm-base" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#13090f" />
          <stop offset="100%" stopColor="#070409" />
        </linearGradient>
        <filter id="warm-blur">
          <feGaussianBlur stdDeviation="40" />
        </filter>
      </defs>

      <rect width="800" height="540" fill="url(#warm-base)" />
      <g filter="url(#warm-blur)">
        <rect width="800" height="540" fill="url(#warm-core)" />
        <rect width="800" height="540" fill="url(#warm-2)" />
      </g>

      {/* Soft horizon band */}
      <rect y="300" width="800" height="0.6" fill="#ffc28d" opacity="0.35" />
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* 4. Prism on dark surface, rainbow refraction                      */
/* ---------------------------------------------------------------- */
export function PrismArt() {
  return (
    <svg viewBox="0 0 1000 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="pr-bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#15131c" />
          <stop offset="100%" stopColor="#05040a" />
        </linearGradient>
        <linearGradient id="pr-surface" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#1a1822" />
          <stop offset="100%" stopColor="#0a080e" />
        </linearGradient>
        <linearGradient id="pr-glass" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#c9cde4" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#6a7094" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="pr-glass-top" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#9ba2c6" stopOpacity="0.5" />
        </linearGradient>
        <filter id="pr-blur">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="pr-blur-sm">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>

      <rect width="1000" height="640" fill="url(#pr-bg)" />
      {/* Tabletop */}
      <rect y="340" width="1000" height="300" fill="url(#pr-surface)" />

      {/* Rainbow refraction fan — blurred on table */}
      <g filter="url(#pr-blur)" opacity="0.85">
        {[
          '#ff5a5a',
          '#ff8a3d',
          '#f5d24a',
          '#5ad67a',
          '#4dc5ff',
          '#6a78ff',
          '#c36aff',
        ].map((c, i) => (
          <rect
            key={i}
            x={30 + i * 20}
            y={360 + i * 4}
            width={220 + i * 18}
            height="6"
            fill={c}
            opacity="0.75"
            transform={`rotate(-4 ${30 + i * 20} ${360 + i * 4})`}
          />
        ))}
      </g>

      {/* Cast spectral rays radiating out from prism */}
      <g opacity="0.85" filter="url(#pr-blur-sm)">
        {[
          ['#ff5050', -6],
          ['#ff943a', -2],
          ['#ffd84a', 2],
          ['#6ae0b0', 6],
          ['#5ac3ff', 10],
          ['#7a82ff', 14],
          ['#c078ff', 18],
        ].map(([c, deg], i) => (
          <rect
            key={i}
            x="620"
            y="380"
            width="380"
            height="3"
            fill={c}
            transform={`rotate(${deg} 620 380)`}
            opacity="0.55"
          />
        ))}
      </g>

      {/* Glass prism — rectangular block in low perspective */}
      <g transform="translate(490 300)">
        {/* Shadow */}
        <ellipse
          cx="60"
          cy="115"
          rx="150"
          ry="14"
          fill="#000"
          opacity="0.45"
          filter="url(#pr-blur)"
        />

        {/* Front face */}
        <polygon
          points="-80,20 140,20 160,100 -60,100"
          fill="url(#pr-glass)"
          stroke="#c2c6e4"
          strokeWidth="0.8"
          opacity="0.9"
        />
        {/* Top face */}
        <polygon
          points="-80,20 140,20 160,-10 -60,-10"
          fill="url(#pr-glass-top)"
          stroke="#e4e7f4"
          strokeWidth="0.8"
          opacity="0.95"
        />
        {/* Right face */}
        <polygon
          points="140,20 160,-10 180,70 160,100"
          fill="#2a2d44"
          opacity="0.75"
          stroke="#7c82a6"
          strokeWidth="0.6"
        />
        {/* Inner highlight on top */}
        <polygon
          points="-40,8 110,8 115,2 -38,2"
          fill="#ffffff"
          opacity="0.45"
        />

        {/* Refracted light spot inside */}
        <ellipse cx="60" cy="55" rx="34" ry="8" fill="#fff" opacity="0.4" filter="url(#pr-blur-sm)" />
      </g>

      {/* Tiny highlights on the table */}
      <g fill="#fff" opacity="0.3">
        <circle cx="180" cy="470" r="1" />
        <circle cx="780" cy="430" r="0.8" />
        <circle cx="420" cy="560" r="0.8" />
      </g>

      <rect width="1000" height="640" fill="url(#pr-vignette)" opacity="0.55" />
      <defs>
        <radialGradient id="pr-vignette" cx="50%" cy="55%" r="80%">
          <stop offset="55%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.65" />
        </radialGradient>
      </defs>
    </svg>
  );
}
