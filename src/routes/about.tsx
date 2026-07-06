import { createFileRoute } from "@tanstack/react-router";
import moonValleyArt from "@/assets/about-moon-valley.jpg";
import lotusArchArt from "@/assets/about-lotus-arch.jpg";
import {
  SiteNav,
  StarfieldBackdrop,
  SiteFooter,
  Divider,
  midnight,
  deepSpace,
  gold,
  goldSoft,
  goldBright,
  ivory,
  mystic,
} from "@/components/SiteChrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Soul Seeker" },
      {
        name: "description",
        content:
          "Soul Seeker was born from a deep love of tarot and intuition. Discover our mission, vision, values and the artistry of our custom cards.",
      },
      { property: "og:title", content: "About Soul Seeker" },
      {
        property: "og:description",
        content: "Ancient wisdom, modern intuition and hand-crafted custom decks.",
      },
    ],
  }),
  component: AboutPage,
});

/* ---------- Custom emblem icons ---------- */

function EmblemFrame({ children, size = 88 }: { children: React.ReactNode; size?: number }) {
  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <defs>
          <radialGradient id="frameGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1a1740" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#0a0a1e" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#050816" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="frameRing" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f1d27a" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#8a6a1f" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="url(#frameGlow)" />
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="url(#frameRing)"
          strokeWidth="1.2"
        />
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="#c9a75d"
          strokeWidth="0.4"
          strokeDasharray="1 3"
          opacity="0.6"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  );
}

const goldDefs = (idPrefix: string) => (
  <defs>
    <linearGradient id={`${idPrefix}-gold`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#fbe6a3" />
      <stop offset="50%" stopColor="#e8c56a" />
      <stop offset="100%" stopColor="#8f6b1e" />
    </linearGradient>
    <radialGradient id={`${idPrefix}-glow`} cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#f1d27a" stopOpacity="0.9" />
      <stop offset="100%" stopColor="#f1d27a" stopOpacity="0" />
    </radialGradient>
    <linearGradient id={`${idPrefix}-mystic`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#c9b3ff" />
      <stop offset="100%" stopColor="#6a49c8" />
    </linearGradient>
  </defs>
);

function StarBurstEmblem() {
  return (
    <svg viewBox="0 0 60 60" width={52} height={52}>
      {goldDefs("sb")}
      <circle cx="30" cy="30" r="18" fill="url(#sb-glow)" opacity="0.7" />
      <g stroke="url(#sb-gold)" strokeWidth="0.9" fill="none">
        <path d="M30 6 L32 28 L54 30 L32 32 L30 54 L28 32 L6 30 L28 28 Z" fill="url(#sb-gold)" opacity="0.95" />
        <path d="M30 14 L31 29 L46 30 L31 31 L30 46 L29 31 L14 30 L29 29 Z" fill="#fff5cf" opacity="0.6" />
      </g>
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <circle
          key={a}
          cx={30 + Math.cos((a * Math.PI) / 180) * 22}
          cy={30 + Math.sin((a * Math.PI) / 180) * 22}
          r="0.9"
          fill="#f1d27a"
        />
      ))}
      <circle cx="30" cy="30" r="2" fill="#fff" opacity="0.95" />
    </svg>
  );
}

function LotusEyeEmblem() {
  return (
    <svg viewBox="0 0 60 60" width={52} height={52}>
      {goldDefs("le")}
      <g stroke="url(#le-gold)" strokeWidth="0.9" fill="none">
        {/* back petals */}
        <path d="M30 34 C14 30 10 20 18 12 C22 20 26 26 30 30 Z" fill="url(#le-mystic)" opacity="0.75" />
        <path d="M30 34 C46 30 50 20 42 12 C38 20 34 26 30 30 Z" fill="url(#le-mystic)" opacity="0.75" />
        {/* front petals */}
        <path d="M30 36 C20 36 14 28 18 20 C24 26 28 30 30 34 Z" fill="url(#le-gold)" opacity="0.9" />
        <path d="M30 36 C40 36 46 28 42 20 C36 26 32 30 30 34 Z" fill="url(#le-gold)" opacity="0.9" />
        {/* center petal — eye */}
        <path d="M22 34 C26 22 34 22 38 34 C34 40 26 40 22 34 Z" fill="#1a1740" />
        <circle cx="30" cy="32" r="3" fill="url(#le-gold)" />
        <circle cx="30" cy="32" r="1" fill="#050816" />
        {/* base ripples */}
        <path d="M14 42 C22 46 38 46 46 42" opacity="0.7" />
        <path d="M18 46 C24 48 36 48 42 46" opacity="0.5" />
      </g>
      <circle cx="30" cy="18" r="0.9" fill="#f1d27a" />
      <circle cx="20" cy="24" r="0.6" fill="#f1d27a" />
      <circle cx="40" cy="24" r="0.6" fill="#f1d27a" />
    </svg>
  );
}

function HeartFlameEmblem() {
  return (
    <svg viewBox="0 0 60 60" width={52} height={52}>
      {goldDefs("hf")}
      <g stroke="url(#hf-gold)" strokeWidth="0.9" fill="none">
        <path
          d="M30 46 C14 36 10 24 18 18 C24 14 28 18 30 22 C32 18 36 14 42 18 C50 24 46 36 30 46 Z"
          fill="url(#hf-gold)"
          opacity="0.85"
        />
        <path
          d="M30 44 C18 36 16 26 22 22 C26 20 29 22 30 26 C31 22 34 20 38 22 C44 26 42 36 30 44 Z"
          fill="#1a1740"
        />
        {/* inner flame */}
        <path d="M30 24 C26 30 28 34 30 38 C32 34 34 30 30 24 Z" fill="url(#hf-gold)" />
        <path d="M30 28 C28 32 29 34 30 36 C31 34 32 32 30 28 Z" fill="#fff5cf" />
      </g>
      <circle cx="18" cy="14" r="0.7" fill="#f1d27a" />
      <circle cx="42" cy="14" r="0.7" fill="#f1d27a" />
    </svg>
  );
}

function TarotCardsEmblem() {
  return (
    <svg viewBox="0 0 60 60" width={56} height={56}>
      {goldDefs("tc")}
      <g>
        <g transform="translate(14 12) rotate(-14 10 18)">
          <rect x="0" y="0" width="20" height="32" rx="2.5" fill="#1a1740" stroke="url(#tc-gold)" strokeWidth="0.9" />
          <circle cx="10" cy="12" r="4" fill="none" stroke="url(#tc-gold)" strokeWidth="0.7" />
          <path d="M10 8 L11 12 L15 12 L11.5 14.5 L13 18 L10 15.8 L7 18 L8.5 14.5 L5 12 L9 12 Z" fill="url(#tc-gold)" />
          <path d="M4 24 L16 24" stroke="url(#tc-gold)" strokeWidth="0.5" />
        </g>
        <g transform="translate(28 10) rotate(10 10 18)">
          <rect x="0" y="0" width="20" height="32" rx="2.5" fill="#1a1740" stroke="url(#tc-gold)" strokeWidth="0.9" />
          <circle cx="10" cy="18" r="5" fill="none" stroke="url(#tc-gold)" strokeWidth="0.7" />
          <circle cx="10" cy="18" r="1.4" fill="url(#tc-gold)" />
          <path d="M10 4 L10 12 M10 24 L10 30 M4 18 L2 18 M18 18 L16 18" stroke="url(#tc-gold)" strokeWidth="0.6" />
        </g>
      </g>
    </svg>
  );
}

function CrystalBallEmblem() {
  return (
    <svg viewBox="0 0 60 60" width={52} height={52}>
      {goldDefs("cb")}
      <g>
        <circle cx="30" cy="26" r="14" fill="url(#cb-glow)" opacity="0.8" />
        <circle cx="30" cy="26" r="12" fill="#1a1740" stroke="url(#cb-gold)" strokeWidth="0.9" />
        <circle cx="26" cy="22" r="3" fill="#fff" opacity="0.35" />
        <path d="M30 20 L31 25 L35 26 L31 27 L30 32 L29 27 L25 26 L29 25 Z" fill="url(#cb-gold)" />
        <circle cx="22" cy="30" r="0.7" fill="#f1d27a" />
        <circle cx="36" cy="30" r="0.6" fill="#f1d27a" />
        {/* base stand */}
        <path
          d="M18 42 C22 38 38 38 42 42 L38 46 L22 46 Z"
          fill="url(#cb-gold)"
          stroke="url(#cb-gold)"
          strokeWidth="0.6"
        />
        <path d="M20 46 L40 46" stroke="#8f6b1e" strokeWidth="0.5" />
      </g>
    </svg>
  );
}

function QuillScrollEmblem() {
  return (
    <svg viewBox="0 0 60 60" width={54} height={54}>
      {goldDefs("qs")}
      <g>
        {/* Unfurled scroll */}
        <path
          d="M12 38 C12 34 16 32 20 32 L44 32 C48 32 50 34 50 38 C50 42 46 44 42 44 L18 44 C14 44 12 42 12 38 Z"
          fill="#1a1740"
          stroke="url(#qs-gold)"
          strokeWidth="0.9"
        />
        <path d="M18 38 L42 38" stroke="url(#qs-gold)" strokeWidth="0.5" opacity="0.7" />
        <path d="M20 41 L38 41" stroke="url(#qs-gold)" strokeWidth="0.4" opacity="0.5" />
        <circle cx="14" cy="38" r="2.2" fill="none" stroke="url(#qs-gold)" strokeWidth="0.8" />
        <circle cx="48" cy="38" r="2.2" fill="none" stroke="url(#qs-gold)" strokeWidth="0.8" />
        {/* Quill feather */}
        <g transform="rotate(-32 32 22)">
          <path
            d="M32 8 C36 12 38 18 38 24 C38 28 36 32 32 34 C30 32 28 28 28 24 C28 18 30 12 32 8 Z"
            fill="url(#qs-gold)"
            opacity="0.95"
            stroke="url(#qs-gold)"
            strokeWidth="0.6"
          />
          <path d="M32 12 L36 14 M32 16 L37 18 M32 20 L37 22 M32 24 L36 26 M32 28 L34 30" stroke="#1a1740" strokeWidth="0.5" opacity="0.7" />
          <path d="M32 34 L32 40 L30 42 L34 42 L32 40" fill="url(#qs-gold)" stroke="url(#qs-gold)" strokeWidth="0.5" />
        </g>
        {/* Sparkle stars */}
        <path d="M14 20 L14.6 22 L16.6 22.6 L14.6 23.2 L14 25.2 L13.4 23.2 L11.4 22.6 L13.4 22 Z" fill="url(#qs-gold)" />
        <circle cx="46" cy="16" r="0.9" fill="#f1d27a" />
        <circle cx="50" cy="24" r="0.6" fill="#f1d27a" />
      </g>
    </svg>
  );
}

function ChaliceEmblem() {
  return (
    <svg viewBox="0 0 60 60" width={52} height={52}>
      {goldDefs("ch")}
      <g stroke="url(#ch-gold)" strokeWidth="0.9" fill="none">
        {/* chalice cup */}
        <path d="M18 14 C20 26 26 32 30 32 C34 32 40 26 42 14 Z" fill="url(#ch-gold)" opacity="0.9" />
        <path d="M20 16 C22 24 26 28 30 28 C34 28 38 24 40 16 Z" fill="#1a1740" />
        {/* stars rising from cup */}
        <path d="M30 8 L31 12 L35 13 L31 14 L30 18 L29 14 L25 13 L29 12 Z" fill="url(#ch-gold)" />
        <circle cx="24" cy="10" r="0.6" fill="#f1d27a" />
        <circle cx="36" cy="10" r="0.6" fill="#f1d27a" />
        {/* stem + base */}
        <path d="M30 32 L30 44" strokeWidth="1.2" />
        <path d="M22 48 C26 44 34 44 38 48 L36 50 L24 50 Z" fill="url(#ch-gold)" />
        <circle cx="30" cy="40" r="1.5" fill="url(#ch-gold)" />
      </g>
    </svg>
  );
}

function CompassEmblem() {
  return (
    <svg viewBox="0 0 60 60" width={54} height={54}>
      {goldDefs("cp")}
      <g stroke="url(#cp-gold)" strokeWidth="0.9" fill="none">
        {/* outer ring */}
        <circle cx="30" cy="30" r="20" fill="#1a1740" />
        <circle cx="30" cy="30" r="20" />
        <circle cx="30" cy="30" r="16" strokeWidth="0.5" opacity="0.7" />
        {/* cardinal ticks */}
        <path d="M30 10 L30 14 M30 46 L30 50 M10 30 L14 30 M46 30 L50 30" strokeWidth="1" />
        {/* diagonal ticks */}
        <path d="M16 16 L18.5 18.5 M41.5 41.5 L44 44 M44 16 L41.5 18.5 M18.5 41.5 L16 44" strokeWidth="0.5" opacity="0.7" />
        {/* compass needle */}
        <path d="M30 14 L34 30 L30 46 L26 30 Z" fill="url(#cp-gold)" opacity="0.95" />
        <path d="M30 14 L34 30 L26 30 Z" fill="#f1d27a" />
        {/* center pivot */}
        <circle cx="30" cy="30" r="1.6" fill="url(#cp-gold)" />
        {/* sparkles */}
        <path d="M8 12 L8.6 14 L10.6 14.6 L8.6 15.2 L8 17.2 L7.4 15.2 L5.4 14.6 L7.4 14 Z" fill="url(#cp-gold)" />
        <circle cx="52" cy="14" r="0.7" fill="#f1d27a" />
      </g>
    </svg>
  );
}

function PaletteEmblem() {
  return (
    <svg viewBox="0 0 60 60" width={54} height={54}>
      {goldDefs("pl")}
      <g>
        {/* palette body */}
        <path
          d="M14 30 C14 20 22 12 32 12 C42 12 48 18 48 26 C48 32 42 34 38 33 C34 32 32 34 33 37 C34 40 32 44 27 44 C19 44 14 38 14 30 Z"
          fill="#1a1740"
          stroke="url(#pl-gold)"
          strokeWidth="0.9"
        />
        {/* thumb hole */}
        <ellipse cx="22" cy="34" rx="2.6" ry="3.4" fill="#050816" stroke="url(#pl-gold)" strokeWidth="0.5" />
        {/* paint dots */}
        <circle cx="24" cy="22" r="2" fill="url(#pl-gold)" />
        <circle cx="32" cy="19" r="2" fill="#f1d27a" opacity="0.9" />
        <circle cx="40" cy="22" r="2" fill="url(#pl-gold)" opacity="0.8" />
        <circle cx="38" cy="29" r="1.6" fill="#f1d27a" opacity="0.7" />
        {/* paintbrush */}
        <g transform="rotate(28 44 42)">
          <path d="M44 38 L58 38 L58 42 L44 42 Z" fill="url(#pl-gold)" stroke="url(#pl-gold)" strokeWidth="0.5" />
          <path d="M40 39 L44 38 L44 42 L40 41 Z" fill="#f1d27a" />
          <path d="M36 40 L40 39 L40 41 Z" fill="url(#pl-gold)" />
        </g>
        {/* sparkles */}
        <path d="M12 14 L12.6 16 L14.6 16.6 L12.6 17.2 L12 19.2 L11.4 17.2 L9.4 16.6 L11.4 16 Z" fill="url(#pl-gold)" />
        <circle cx="52" cy="10" r="0.8" fill="#f1d27a" />
      </g>
    </svg>
  );
}


/* ---------- Right: ornate filigree lotus mandala ---------- */

function TripleMoonBackdrop() {
  // Zodiac wheel signs (unicode)
  const zodiac = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];

  // Deterministic mini-stars for constellation dust
  const dust = Array.from({ length: 60 }).map((_, i) => {
    const r = (s: number) => {
      const x = Math.sin(s) * 43758.5453;
      return x - Math.floor(x);
    };
    return {
      x: 80 + r(i * 1.3 + 1) * 740,
      y: 80 + r(i * 2.7 + 5) * 740,
      s: 0.6 + r(i * 3.1 + 9) * 1.4,
      d: r(i * 4.5 + 3) * 5,
    };
  });

  return (
    <svg
      viewBox="0 0 900 900"
      className="absolute -inset-16 w-[calc(100%+8rem)] h-[calc(100%+8rem)] pointer-events-none"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
      style={{
        opacity: 0.9,
        mixBlendMode: "screen",
        filter: "drop-shadow(0 0 40px rgba(155,107,255,0.28))",
      }}
    >
      <defs>
        <radialGradient id="tmAura" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#7cc7ff" stopOpacity="0.6" />
          <stop offset="45%" stopColor="#5aa9ff" stopOpacity="0.22" />
          <stop offset="80%" stopColor="#1a1740" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#050816" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="tmBlueInk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cfeaff" />
          <stop offset="55%" stopColor="#5aa9ff" />
          <stop offset="100%" stopColor="#1e4d8a" />
        </linearGradient>
        <linearGradient id="tmRoseGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fbe6a3" />
          <stop offset="55%" stopColor="#e8b8a4" />
          <stop offset="100%" stopColor="#8f6b1e" />
        </linearGradient>
        <linearGradient id="tmGoldBright" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff5d6" />
          <stop offset="60%" stopColor="#f1d27a" />
          <stop offset="100%" stopColor="#b8892c" />
        </linearGradient>
        <radialGradient id="tmMoonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="45%" stopColor="#dfeaff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#5aa9ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="tmSideMoon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#cfeaff" />
          <stop offset="70%" stopColor="#5aa9ff" />
          <stop offset="100%" stopColor="#1e4d8a" />
        </radialGradient>
      </defs>

      {/* Outer cosmic aura */}
      <circle cx="450" cy="450" r="440" fill="url(#tmAura)" className="ss-aura-pulse" />

      {/* Zodiac wheel — outer rotating ring */}
      <g className="ss-swirl-slow" style={{ animationDuration: "200s" }}>
        <circle cx="450" cy="450" r="380" fill="none" stroke="url(#tmRoseGold)" strokeWidth="0.6" />
        <circle cx="450" cy="450" r="356" fill="none" stroke="url(#tmRoseGold)" strokeWidth="0.4" strokeDasharray="1 6" />
        {zodiac.map((sign, i) => {
          const a = (i * 360) / 12 - 90;
          const rad = (a * Math.PI) / 180;
          const cx = 450 + Math.cos(rad) * 368;
          const cy = 450 + Math.sin(rad) * 368;
          return (
            <g key={sign}>
              <text
                x={cx}
                y={cy + 6}
                textAnchor="middle"
                fill="url(#tmGoldBright)"
                fontSize="16"
                style={{ fontFamily: "serif" }}
                opacity="0.9"
              >
                {sign}
              </text>
            </g>
          );
        })}
        {/* Segment dividers */}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = ((i * 360) / 12 - 90 + 15) * (Math.PI / 180);
          return (
            <line
              key={i}
              x1={450 + Math.cos(a) * 356}
              y1={450 + Math.sin(a) * 356}
              x2={450 + Math.cos(a) * 380}
              y2={450 + Math.sin(a) * 380}
              stroke="url(#tmRoseGold)"
              strokeWidth="0.5"
              opacity="0.7"
            />
          );
        })}
      </g>

      {/* Moon-phase arc (top) */}
      <g className="ss-aura-pulse" style={{ animationDuration: "9s" }}>
        {Array.from({ length: 9 }).map((_, i) => {
          const a = -140 + (i * 280) / 8;
          const rad = (a * Math.PI) / 180;
          const cx = 450 + Math.cos(rad) * 320;
          const cy = 450 + Math.sin(rad) * 320;
          // Phase: 0 new, 4 full, 8 new
          const phase = i / 8;
          const illum = Math.sin(phase * Math.PI); // 0..1..0
          return (
            <g key={i} transform={`translate(${cx} ${cy})`}>
              <circle r="9" fill="#0a1128" stroke="url(#tmRoseGold)" strokeWidth="0.6" />
              <path
                d={`M 0 -9 A 9 9 0 0 ${i < 4 ? 1 : 0} 0 9 A ${9 * (1 - illum * 2 + (illum > 0.5 ? 2 : 0))} 9 0 0 ${i < 4 ? 0 : 1} 0 -9 Z`}
                fill="url(#tmGoldBright)"
                opacity="0.9"
              />
            </g>
          );
        })}
      </g>

      {/* Constellation dust */}
      <g>
        {dust.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={p.s * 0.7}
            fill="#f1d27a"
            className="ss-twinkle"
            style={{ animationDelay: `${p.d}s`, filter: `drop-shadow(0 0 3px #f1d27a)` }}
          />
        ))}
        {/* A few constellation line clusters */}
        <g stroke="url(#tmRoseGold)" strokeWidth="0.4" fill="none" opacity="0.6">
          <path d="M120 210 L165 240 L210 220 L240 275" />
          <path d="M690 200 L720 245 L770 235 L790 285" />
          <path d="M140 700 L190 720 L230 690 L280 720" />
          <path d="M660 720 L710 700 L755 730 L790 705" />
        </g>
      </g>

      {/* Triple-moon: side crescents + central full moon */}
      {/* Left crescent (waxing, opens right) */}
      <g transform="translate(280 450)">
        <path
          d="M 0 -110
             A 110 110 0 1 0 0 110
             A 84 110 0 1 1 0 -110 Z"
          fill="url(#tmSideMoon)"
          stroke="url(#tmGoldBright)"
          strokeWidth="1"
          opacity="0.95"
        />
        {/* Tribal filigree swirls on crescent */}
        <g fill="none" stroke="url(#tmGoldBright)" strokeWidth="0.8" opacity="0.85">
          <path d="M -34 -70 C -60 -50, -70 -20, -50 0 C -30 20, -60 40, -34 70" />
          <path d="M -20 -50 C -40 -30, -40 30, -20 50" />
          <path d="M -46 -30 C -30 -18, -30 18, -46 30" />
          <circle cx="-58" cy="0" r="2.4" fill="url(#tmGoldBright)" />
        </g>
      </g>

      {/* Right crescent (waning, opens left) */}
      <g transform="translate(620 450)">
        <path
          d="M 0 -110
             A 110 110 0 1 1 0 110
             A 84 110 0 1 0 0 -110 Z"
          fill="url(#tmSideMoon)"
          stroke="url(#tmGoldBright)"
          strokeWidth="1"
          opacity="0.95"
        />
        <g fill="none" stroke="url(#tmGoldBright)" strokeWidth="0.8" opacity="0.85">
          <path d="M 34 -70 C 60 -50, 70 -20, 50 0 C 30 20, 60 40, 34 70" />
          <path d="M 20 -50 C 40 -30, 40 30, 20 50" />
          <path d="M 46 -30 C 30 -18, 30 18, 46 30" />
          <circle cx="58" cy="0" r="2.4" fill="url(#tmGoldBright)" />
        </g>
      </g>

      {/* Central full moon with pentacle */}
      <g transform="translate(450 450)">
        <circle r="130" fill="url(#tmMoonGlow)" opacity="0.4" className="ss-aura-pulse" />
        <circle r="108" fill="#0a1a2e" stroke="url(#tmGoldBright)" strokeWidth="1.2" />
        <circle r="102" fill="none" stroke="url(#tmBlueInk)" strokeWidth="0.5" strokeDasharray="1 4" opacity="0.8" />
        <circle r="94" fill="none" stroke="url(#tmGoldBright)" strokeWidth="0.4" strokeDasharray="2 6" opacity="0.7" />

        {/* Pentacle */}
        <g stroke="url(#tmGoldBright)" strokeWidth="1.3" fill="none">
          <circle r="72" />
          {(() => {
            const pts = Array.from({ length: 5 }).map((_, i) => {
              const a = (-90 + i * 72) * (Math.PI / 180);
              return [Math.cos(a) * 72, Math.sin(a) * 72];
            });
            const order = [0, 2, 4, 1, 3, 0];
            const d = order.map((idx, k) => `${k === 0 ? "M" : "L"} ${pts[idx][0]} ${pts[idx][1]}`).join(" ");
            return <path d={d} />;
          })()}
        </g>
        {/* Pentacle point gems */}
        {Array.from({ length: 5 }).map((_, i) => {
          const a = (-90 + i * 72) * (Math.PI / 180);
          return <circle key={i} cx={Math.cos(a) * 72} cy={Math.sin(a) * 72} r="2.6" fill="url(#tmGoldBright)" />;
        })}
        <circle r="4" fill="url(#tmGoldBright)" />
      </g>

      {/* Tribal ornamental leaves at corners of triple moon */}
      <g fill="none" stroke="url(#tmBlueInk)" strokeWidth="0.9" opacity="0.85">
        {/* Top swirl cluster */}
        <g transform="translate(450 250)">
          <path d="M -80 0 C -60 -30, -30 -40, 0 -30 C 30 -40, 60 -30, 80 0" />
          <path d="M -60 -10 C -50 -26, -30 -30, -14 -20" />
          <path d="M 60 -10 C 50 -26, 30 -30, 14 -20" />
          <path d="M -14 -20 C -6 -30, 6 -30, 14 -20" fill="url(#tmBlueInk)" opacity="0.7" />
          <circle cx="0" cy="-32" r="2.2" fill="url(#tmGoldBright)" />
        </g>
        {/* Bottom swirl cluster */}
        <g transform="translate(450 660)">
          <path d="M -90 0 C -60 30, -30 40, 0 30 C 30 40, 60 30, 90 0" />
          <path d="M -60 10 C -46 30, -22 34, -6 22" />
          <path d="M 60 10 C 46 30, 22 34, 6 22" />
          <path d="M -14 20 C -6 30, 6 30, 14 20" fill="url(#tmBlueInk)" opacity="0.7" />
          <circle cx="0" cy="32" r="2.2" fill="url(#tmGoldBright)" />
        </g>
      </g>

      {/* Rose-gold beaded outer ring */}
      <g>
        {Array.from({ length: 60 }).map((_, i) => {
          const a = (i * 360) / 60;
          const rad = (a * Math.PI) / 180;
          const cx = 450 + Math.cos(rad) * 410;
          const cy = 450 + Math.sin(rad) * 410;
          return <circle key={i} cx={cx} cy={cy} r="1.4" fill="url(#tmGoldBright)" opacity="0.75" />;
        })}
      </g>

      {/* Twinkling accent stars */}
      {[
        [150, 200, "#5aa9ff", 0],
        [780, 220, "#ff8fd0", 1.2],
        [120, 640, "#9b6bff", 2.1],
        [820, 660, "#f1d27a", 0.6],
        [450, 90, "#f1d27a", 3.4],
        [450, 820, "#c48bff", 1.7],
      ].map(([x, y, c, d], i) => (
        <path
          key={i}
          d={`M${x} ${(y as number) - 8} L${(x as number) + 1.8} ${(y as number) - 1.4} L${(x as number) + 8} ${y} L${(x as number) + 1.8} ${(y as number) + 1.4} L${x} ${(y as number) + 8} L${(x as number) - 1.8} ${(y as number) + 1.4} L${(x as number) - 8} ${y} L${(x as number) - 1.8} ${(y as number) - 1.4} Z`}
          fill={c as string}
          className="ss-twinkle"
          style={{
            animationDelay: `${d}s`,
            animationDuration: "4.5s",
            filter: `drop-shadow(0 0 6px ${c})`,
          }}
        />
      ))}
    </svg>
  );
}



/* ---------- Small pieces ---------- */

function PillarCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <EmblemFrame size={92}>{icon}</EmblemFrame>
      <div>
        <h2
          style={{
            fontFamily: "'Cinzel', serif",
            color: goldBright,
            letterSpacing: "0.14em",
            fontSize: 16,
            textShadow: "0 0 12px rgba(241,210,122,0.35)",
          }}
        >
          {title}
        </h2>
        <p
          className="mt-2 text-[13px] leading-relaxed"
          style={{
            color: ivory,
            opacity: 0.82,
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: 15,
          }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at top, ${deepSpace} 0%, ${midnight} 60%, #02040d 100%)`,
        color: ivory,
      }}
    >
      <StarfieldBackdrop />
      <SiteNav />

      <main className="relative z-10 max-w-[1400px] mx-auto px-8 pt-32 pb-16">
        {/* Hero */}
        <section className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.15fr_1fr] gap-8 items-center min-h-[520px]">
          {/* Left flourish — golden crescent cradling a tree of life, moon-phase crown, geometric pendant */}
          <div className="relative hidden lg:block h-[520px]">
            <img
              src={moonValleyArt}
              alt=""
              aria-hidden
              loading="lazy"
              className="w-full h-full object-contain ss-aura-pulse"
              style={{
                filter: "drop-shadow(0 0 40px rgba(241,210,122,0.25))",
              }}
            />
          </div>




          {/* Center headline */}
          <div className="text-center">
            <h1
              style={{
                fontFamily: "'Cinzel', serif",
                color: goldBright,
                fontSize: 68,
                letterSpacing: "0.14em",
                textShadow: "0 0 30px rgba(241,210,122,0.35)",
              }}
            >
              ABOUT
            </h1>
            <Divider width={90} />
            <p
              className="mx-auto max-w-[620px] text-[22px] leading-relaxed"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: ivory,
                opacity: 0.9,
                fontStyle: "italic",
              }}
            >
              Soul Seeker was born from a deep love of tarot, intuition, and
              the transformative power of self-awareness. Our mission is to
              make ancient wisdom accessible by blending traditional tarot
              knowledge with modern technology, creating a space where seekers
              can explore self-reflection, gain meaningful insight, and nurture
              their personal and spiritual journey.
            </p>
          </div>

          {/* Right custom art — lotus arch */}
          <div className="relative hidden lg:block h-[520px]">
            <img
              src={lotusArchArt}
              alt=""
              aria-hidden
              loading="lazy"
              className="w-full h-full object-contain ss-aura-pulse"
              style={{
                filter: "drop-shadow(0 0 50px rgba(155,107,255,0.35))",
              }}
            />
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section
          className="relative mt-14 rounded-2xl px-10 py-10"
          style={{
            background: "rgba(9,20,34,0.55)",
            border: "1px solid rgba(201,167,93,0.25)",
            boxShadow: "0 0 40px rgba(124,77,255,0.08) inset",
          }}
        >
          <div className="grid md:grid-cols-3 gap-10">
            <PillarCard
              icon={<StarBurstEmblem />}
              title="OUR MISSION"
              body="To empower you with intuitive tools, personalised insights and meaningful connections that illuminate your path and inspire growth."
            />
            <PillarCard
              icon={<LotusEyeEmblem />}
              title="OUR VISION"
              body="A world where ancient wisdom and modern technology come together to help every soul discover their truth and purpose."
            />
            <PillarCard
              icon={<HeartFlameEmblem />}
              title="OUR VALUES"
              body="Intuition, authenticity, inclusivity and integrity guide everything we do. You are at the heart of our sacred community."
            />
          </div>
        </section>

        {/* Pillars grid */}
        <section
          className="relative mt-10 rounded-2xl px-10 py-10"
          style={{
            background: "rgba(9,20,34,0.55)",
            border: "1px solid rgba(201,167,93,0.25)",
          }}
        >
          <div className="grid md:grid-cols-3 gap-10">
            <PillarCard
              icon={<TarotCardsEmblem />}
              title="ANCIENT WISDOM"
              body="Rooted in traditional tarot wisdom, Soul Seeker blends the timeless symbolism and archetypes of tarot with modern AI, helping you explore meaningful insights while creating a more personal and immersive reading experience."
            />
            <PillarCard
              icon={<CompassEmblem />}
              title="SIMPLE AND INTUITIVE"
              body="The app is designed to be intuitive with simple navigation, making it easy to explore readings, track your journey, create custom cards, and access insights whenever you need them."
            />
            <PillarCard
              icon={<PaletteEmblem />}
              title="CRAFTED CREATIVITY"
              body="Using AI-powered design tools, bring your ideas to life and build a personalised deck that reflects your own vision and style."
            />

          </div>
        </section>

        {/* Closing */}
        <section className="mt-14 text-center">
          <Divider width={120} />
          <p
            className="mx-auto max-w-[720px] text-[20px] leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              color: goldSoft,
              textShadow: "0 0 18px rgba(241,210,122,0.2)",
            }}
          >
            Whether you seek answers, clarity, healing or growth,
            <br />
            <span style={{ color: goldBright }}>
              Soul Seeker has everything you need to walk your path with confidence.
            </span>
          </p>
          <Divider width={120} />
          <p
            className="mt-2 text-[12px] tracking-[0.3em]"
            style={{ color: mystic, opacity: 0.7 }}
          >
            ✦ SEEK · REVEAL · AWAKEN ✦
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
