export default function WaveBackground() {
  return (
    <svg
      viewBox="0 0 1600 1200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {/* Organic flowing distortion */}
        <filter id="flow" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.0032 0.018"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="220"
            xChannelSelector="R"
            yChannelSelector="G"
          />
          <feGaussianBlur stdDeviation="0.35" />
        </filter>

        {/* Horizontal line stock that gets distorted by the filter */}
        <pattern id="bands" patternUnits="userSpaceOnUse" width="1600" height="7">
          <rect width="1600" height="0.9" y="0" fill="#5a4267" opacity="0.55" />
        </pattern>

        {/* Base gradient wash */}
        <radialGradient id="wash" cx="50%" cy="15%" r="85%">
          <stop offset="0%" stopColor="#2c1e3a" />
          <stop offset="50%" stopColor="#1a1324" />
          <stop offset="100%" stopColor="#0d0914" />
        </radialGradient>

        {/* Blue accent glow from above */}
        <radialGradient id="glow-blue" cx="52%" cy="-5%" r="45%">
          <stop offset="0%" stopColor="#3e4a9e" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#3e4a9e" stopOpacity="0" />
        </radialGradient>

        {/* Warm glow from lower-right */}
        <radialGradient id="glow-warm" cx="88%" cy="98%" r="52%">
          <stop offset="0%" stopColor="#8a4a3a" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#8a4a3a" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="fade-bottom" x1="0" x2="0" y1="0" y2="1">
          <stop offset="60%" stopColor="#0a0910" stopOpacity="0" />
          <stop offset="100%" stopColor="#0a0910" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Deep wash */}
      <rect width="1600" height="1200" fill="url(#wash)" />

      {/* Distorted band pattern — the liquid silk texture */}
      <g filter="url(#flow)" opacity="0.9">
        <rect width="1600" height="1200" fill="url(#bands)" />
      </g>

      {/* Color atmospherics */}
      <rect width="1600" height="1200" fill="url(#glow-blue)" />
      <rect width="1600" height="1200" fill="url(#glow-warm)" />
      <rect width="1600" height="1200" fill="url(#fade-bottom)" />
    </svg>
  );
}
