export default function Portrait() {
  return (
    <svg
      viewBox="0 0 720 900"
      preserveAspectRatio="xMidYMid slice"
      aria-label="Stylized portrait illustration of Seth Chan"
    >
      <defs>
        <radialGradient id="p-bg" cx="52%" cy="36%" r="78%">
          <stop offset="0%" stopColor="#25222e" />
          <stop offset="55%" stopColor="#141220" />
          <stop offset="100%" stopColor="#08070e" />
        </radialGradient>

        {/* Skin tonal gradient (monochrome cool) */}
        <linearGradient id="p-skin" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#d6d1c4" />
          <stop offset="60%" stopColor="#8c8799" />
          <stop offset="100%" stopColor="#3b3748" />
        </linearGradient>
        <linearGradient id="p-skin-shadow" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#5a5466" />
          <stop offset="100%" stopColor="#1e1a28" />
        </linearGradient>
        {/* Hair */}
        <linearGradient id="p-hair" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#191520" />
          <stop offset="100%" stopColor="#080610" />
        </linearGradient>
        <linearGradient id="p-hair-light" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#4a4558" />
          <stop offset="100%" stopColor="#15121e" />
        </linearGradient>
        {/* Shirt */}
        <linearGradient id="p-shirt" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#1a1724" />
          <stop offset="100%" stopColor="#06050b" />
        </linearGradient>
        {/* Rim light from right */}
        <radialGradient id="p-rim" cx="80%" cy="28%" r="55%">
          <stop offset="0%" stopColor="#8097cc" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#8097cc" stopOpacity="0" />
        </radialGradient>

        <filter id="p-soft">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <filter id="p-softer">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="720" height="900" fill="url(#p-bg)" />
      <rect width="720" height="900" fill="url(#p-rim)" />

      {/* Ambient background shapes — atmospheric depth */}
      <g opacity="0.6" filter="url(#p-softer)">
        <ellipse cx="540" cy="140" rx="240" ry="160" fill="#5a6a9c" opacity="0.18" />
        <ellipse cx="120" cy="720" rx="200" ry="120" fill="#8f6b82" opacity="0.10" />
      </g>

      {/* Shoulders / torso silhouette */}
      <path
        d="M 20 900 L 20 760 Q 60 690 160 660 L 240 640 L 300 660 Q 360 700 420 680 L 500 650 Q 600 680 650 720 L 700 760 L 700 900 Z"
        fill="url(#p-shirt)"
      />

      {/* Neck */}
      <path
        d="M 300 600 Q 300 660 320 680 L 420 680 Q 440 660 440 600 L 420 560 L 320 560 Z"
        fill="url(#p-skin-shadow)"
      />
      {/* Neck shadow under jaw */}
      <path
        d="M 300 600 Q 370 640 440 600 L 430 570 L 310 570 Z"
        fill="#14101c"
        opacity="0.55"
        filter="url(#p-soft)"
      />

      {/* Head — 3/4 facing slightly left */}
      <g>
        {/* Head silhouette */}
        <path
          d="M 250 250
             Q 220 170 290 130
             Q 330 100 400 110
             Q 470 120 490 180
             Q 510 230 500 290
             Q 498 340 490 380
             Q 490 430 475 460
             Q 460 495 430 525
             Q 410 555 380 565
             Q 340 575 310 560
             Q 280 540 265 510
             Q 250 470 248 420
             Q 240 360 250 300 Z"
          fill="url(#p-skin)"
        />

        {/* Shadow on left side (light source from right) */}
        <path
          d="M 250 250
             Q 220 170 290 130
             Q 300 180 290 260
             Q 280 340 275 420
             Q 272 490 290 540
             Q 280 540 265 510
             Q 250 470 248 420
             Q 240 360 250 300 Z"
          fill="url(#p-skin-shadow)"
          opacity="0.8"
        />

        {/* Cheekbone highlight */}
        <ellipse cx="440" cy="340" rx="42" ry="22" fill="#d9d3c5" opacity="0.42" filter="url(#p-soft)" />
        <ellipse cx="360" cy="345" rx="30" ry="16" fill="#d9d3c5" opacity="0.22" filter="url(#p-soft)" />

        {/* Forehead highlight */}
        <ellipse cx="415" cy="200" rx="55" ry="28" fill="#e0dbcd" opacity="0.35" filter="url(#p-soft)" />

        {/* Nose bridge */}
        <path
          d="M 385 240 Q 390 300 380 370 Q 395 385 410 375"
          fill="none"
          stroke="#3e3948"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />
        {/* Nose tip highlight */}
        <ellipse cx="395" cy="370" rx="10" ry="5" fill="#e2ddce" opacity="0.7" filter="url(#p-soft)" />
        <ellipse cx="395" cy="382" rx="14" ry="6" fill="#1e1a28" opacity="0.5" filter="url(#p-soft)" />

        {/* Brow */}
        <path
          d="M 330 240 Q 360 228 395 234"
          stroke="#0f0c18"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 420 234 Q 450 228 475 240"
          stroke="#0f0c18"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Eyes — almond shaped */}
        <g>
          <path d="M 330 275 Q 355 262 385 272 Q 360 285 335 282 Z" fill="#e6e1d4" />
          <path d="M 420 272 Q 450 262 475 275 Q 450 285 425 282 Z" fill="#e6e1d4" />
          {/* Iris */}
          <circle cx="358" cy="275" r="6.5" fill="#1a2640" />
          <circle cx="448" cy="275" r="6.5" fill="#1a2640" />
          {/* Pupil */}
          <circle cx="358" cy="275" r="2.5" fill="#000" />
          <circle cx="448" cy="275" r="2.5" fill="#000" />
          {/* Catch light */}
          <circle cx="361" cy="272" r="1.4" fill="#fff" />
          <circle cx="451" cy="272" r="1.4" fill="#fff" />
          {/* Upper lid */}
          <path d="M 328 272 Q 355 260 388 270" stroke="#1a1520" strokeWidth="2" fill="none" />
          <path d="M 418 270 Q 448 260 478 272" stroke="#1a1520" strokeWidth="2" fill="none" />
          {/* Lashes dark base */}
          <path d="M 332 276 Q 355 270 385 275" stroke="#000" strokeWidth="1" fill="none" opacity="0.6" />
          <path d="M 422 275 Q 448 270 476 276" stroke="#000" strokeWidth="1" fill="none" opacity="0.6" />
        </g>

        {/* Mouth */}
        <g>
          <path
            d="M 355 445 Q 385 438 410 444 Q 430 440 450 448"
            stroke="#2a1824"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Upper lip subtle shadow */}
          <path
            d="M 355 445 Q 385 432 410 440 Q 430 432 450 448 Q 430 450 410 448 Q 385 452 355 445 Z"
            fill="#4a3644"
            opacity="0.55"
          />
          {/* Lower lip highlight */}
          <path
            d="M 362 452 Q 400 470 448 454"
            stroke="#c4a89c"
            strokeWidth="1.2"
            fill="none"
            opacity="0.55"
          />
        </g>

        {/* Jaw line highlight */}
        <path
          d="M 475 420 Q 470 480 430 520"
          stroke="#d9d3c5"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
          filter="url(#p-soft)"
        />

        {/* Ear hint */}
        <path
          d="M 490 320 Q 505 330 502 360 Q 498 380 488 386"
          fill="#4e4958"
          opacity="0.8"
        />
      </g>

      {/* Hair — sweeping cut, top and side */}
      <g>
        {/* Main mass */}
        <path
          d="M 240 260
             Q 215 140 300 95
             Q 380 55 470 90
             Q 540 120 540 220
             Q 536 260 518 290
             Q 510 260 500 240
             Q 490 200 470 180
             Q 430 155 390 160
             Q 340 165 310 195
             Q 280 225 270 270
             Q 255 300 248 320
             Z"
          fill="url(#p-hair)"
        />
        {/* Side-swept bang over forehead */}
        <path
          d="M 300 160
             Q 340 140 410 150
             Q 460 160 485 190
             Q 455 195 420 200
             Q 380 205 345 200
             Q 315 200 300 210 Z"
          fill="url(#p-hair-light)"
          opacity="0.9"
        />
        {/* Small wisps */}
        <path
          d="M 252 320 Q 250 380 260 430 Q 258 360 258 310 Z"
          fill="#0d0b15"
          opacity="0.85"
        />
        {/* Rim light strand on right of hair */}
        <path
          d="M 516 170 Q 540 220 534 290"
          stroke="#8597c4"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
          filter="url(#p-soft)"
        />
      </g>

      {/* Shirt collar detail — open neckline */}
      <path
        d="M 280 720 Q 360 760 440 720 L 430 780 Q 360 810 290 780 Z"
        fill="#0a080f"
      />

      {/* Grain-ish speckles */}
      <g fill="#fff" opacity="0.1">
        <circle cx="120" cy="220" r="0.8" />
        <circle cx="580" cy="440" r="0.8" />
        <circle cx="640" cy="160" r="0.6" />
        <circle cx="80" cy="540" r="0.7" />
        <circle cx="560" cy="620" r="0.6" />
      </g>

      {/* Vignette */}
      <defs>
        <radialGradient id="p-vign" cx="50%" cy="45%" r="85%">
          <stop offset="55%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.72" />
        </radialGradient>
      </defs>
      <rect width="720" height="900" fill="url(#p-vign)" />
    </svg>
  );
}
