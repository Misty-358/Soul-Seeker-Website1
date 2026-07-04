import { createFileRoute } from "@tanstack/react-router";
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

/* ---------- Background: sacred lotus mandala (blended) ---------- */

function TripleMoonBackdrop() {
  // Build 16 lotus petals radially.
  const petals = Array.from({ length: 16 }).map((_, i) => (i * 360) / 16);
  // Inner petals (offset)
  const petalsInner = Array.from({ length: 12 }).map((_, i) => (i * 360) / 12 + 15);

  return (
    <svg
      viewBox="0 0 900 900"
      className="absolute -inset-16 w-[calc(100%+8rem)] h-[calc(100%+8rem)] pointer-events-none"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
      style={{
        opacity: 0.75,
        mixBlendMode: "screen",
        filter: "drop-shadow(0 0 40px rgba(155,107,255,0.25))",
      }}
    >
      <defs>
        <radialGradient id="lotusAura" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#9b6bff" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#5aa9ff" stopOpacity="0.22" />
          <stop offset="80%" stopColor="#1a1740" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#050816" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lotusPrism" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f1d27a" stopOpacity="0.95" />
          <stop offset="35%" stopColor="#ff8fd0" stopOpacity="0.85" />
          <stop offset="70%" stopColor="#c48bff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#5aa9ff" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="lotusPrismSoft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5aa9ff" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#c48bff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffa4d8" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="lotusGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fbe6a3" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#e8c56a" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#8f6b1e" stopOpacity="0.35" />
        </linearGradient>
        <radialGradient id="lotusCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff5d6" stopOpacity="1" />
          <stop offset="40%" stopColor="#f1d27a" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8f6b1e" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer aura */}
      <circle cx="450" cy="450" r="440" fill="url(#lotusAura)" className="ss-aura-pulse" />

      {/* Concentric mandala rings — rotating slowly */}
      <g className="ss-swirl-slow">
        <g fill="none">
          <circle cx="450" cy="450" r="410" stroke="url(#lotusPrismSoft)" strokeWidth="0.6" strokeDasharray="1 12" opacity="0.55" />
          <circle cx="450" cy="450" r="360" stroke="url(#lotusGold)" strokeWidth="0.5" strokeDasharray="2 10" opacity="0.55" />
          <circle cx="450" cy="450" r="310" stroke="url(#lotusPrism)" strokeWidth="0.7" strokeDasharray="1 6" opacity="0.6" />
          {/* Radiating spokes */}
          {Array.from({ length: 32 }).map((_, i) => {
            const a = (i * 360) / 32;
            const rad = (a * Math.PI) / 180;
            const x2 = 450 + Math.cos(rad) * 420;
            const y2 = 450 + Math.sin(rad) * 420;
            const x1 = 450 + Math.cos(rad) * 310;
            const y1 = 450 + Math.sin(rad) * 310;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#lotusGold)"
                strokeWidth="0.4"
                opacity="0.45"
              />
            );
          })}
        </g>
      </g>

      {/* Counter-rotating sacred geometry — Metatron-style triangles */}
      <g className="ss-swirl-rev" style={{ animationDuration: "160s" }}>
        <g fill="none" stroke="url(#lotusPrismSoft)" strokeWidth="0.7" opacity="0.55">
          <path d="M450 180 L680 570 L220 570 Z" />
          <path d="M450 720 L680 330 L220 330 Z" />
          <circle cx="450" cy="450" r="250" strokeDasharray="4 8" />
        </g>
      </g>

      {/* Outer lotus petals */}
      <g>
        {petals.map((a) => (
          <path
            key={`p1-${a}`}
            d="M450 450
               C 500 340, 500 220, 450 130
               C 400 220, 400 340, 450 450 Z"
            fill="url(#lotusPrism)"
            opacity="0.35"
            stroke="url(#lotusGold)"
            strokeWidth="0.6"
            transform={`rotate(${a} 450 450)`}
          />
        ))}
      </g>

      {/* Middle lotus petals */}
      <g>
        {petalsInner.map((a) => (
          <path
            key={`p2-${a}`}
            d="M450 450
               C 490 370, 490 280, 450 210
               C 410 280, 410 370, 450 450 Z"
            fill="url(#lotusPrismSoft)"
            opacity="0.45"
            stroke="url(#lotusPrism)"
            strokeWidth="0.5"
            transform={`rotate(${a} 450 450)`}
          />
        ))}
      </g>

      {/* Inner lotus (8 petals) */}
      <g>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <path
            key={`p3-${a}`}
            d="M450 450
               C 478 400, 478 340, 450 300
               C 422 340, 422 400, 450 450 Z"
            fill="url(#lotusGold)"
            opacity="0.55"
            transform={`rotate(${a} 450 450)`}
          />
        ))}
      </g>

      {/* Central bindu / core moon */}
      <g>
        <circle cx="450" cy="450" r="70" fill="url(#lotusCore)" className="ss-aura-pulse" style={{ animationDuration: "5s" }} />
        <circle cx="450" cy="450" r="34" fill="url(#lotusGold)" opacity="0.9" />
        <circle cx="450" cy="450" r="18" fill="#fff5d6" opacity="0.9" />
        <circle cx="450" cy="450" r="70" fill="none" stroke="url(#lotusPrism)" strokeWidth="0.8" />
      </g>

      {/* Twinkling accent stars around the lotus */}
      {[
        [150, 200, "#5aa9ff", 0],
        [780, 220, "#ff8fd0", 1.2],
        [120, 640, "#9b6bff", 2.1],
        [820, 660, "#f1d27a", 0.6],
        [450, 90, "#f1d27a", 3.4],
        [450, 820, "#c48bff", 1.7],
        [260, 760, "#ffa4d8", 2.8],
        [660, 760, "#5aa9ff", 0.9],
        [80, 420, "#c48bff", 3.9],
        [830, 430, "#f1d27a", 2.4],
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
        <h3
          style={{
            fontFamily: "'Cinzel', serif",
            color: goldBright,
            letterSpacing: "0.14em",
            fontSize: 16,
            textShadow: "0 0 12px rgba(241,210,122,0.35)",
          }}
        >
          {title}
        </h3>
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
          {/* Left flourish */}
          <div className="relative hidden lg:block h-[420px]">
            <svg viewBox="0 0 300 420" className="w-full h-full" aria-hidden>
              <defs>
                <linearGradient id="leftGold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f6e0a3" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#8f6b1e" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="leftPrism" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#5aa9ff" />
                  <stop offset="40%" stopColor="#9b6bff" />
                  <stop offset="75%" stopColor="#ff8fd0" />
                  <stop offset="100%" stopColor="#f1d27a" />
                </linearGradient>
                <linearGradient id="leftPrismSoft" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5aa9ff" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#c48bff" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#ffa4d8" stopOpacity="0.6" />
                </linearGradient>
                <radialGradient id="leftMoonGrad" cx="45%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#e6f0ff" />
                  <stop offset="45%" stopColor="#ffd4ec" />
                  <stop offset="80%" stopColor="#7c5ad0" />
                  <stop offset="100%" stopColor="#1a1740" />
                </radialGradient>
                <radialGradient id="leftAura" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#9b6bff" stopOpacity="0.55" />
                  <stop offset="60%" stopColor="#5aa9ff" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#050816" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* moon aura */}
              <circle cx="150" cy="120" r="110" fill="url(#leftAura)" />

              <g fill="none">
                <circle cx="150" cy="120" r="90" stroke="url(#leftPrismSoft)" strokeWidth="0.9" strokeDasharray="2 5" opacity="0.85" />
                <circle cx="150" cy="120" r="70" stroke="url(#leftPrism)" strokeWidth="1.1" />
                <circle cx="150" cy="120" r="100" stroke="url(#leftGold)" strokeWidth="0.5" strokeDasharray="1 6" opacity="0.7" />
                <circle cx="150" cy="120" r="55" fill="url(#leftMoonGrad)" stroke="url(#leftPrism)" strokeWidth="0.7" />
                <circle cx="130" cy="105" r="6" fill="#7c5ad0" opacity="0.55" />
                <circle cx="165" cy="130" r="4" fill="#ff8fd0" opacity="0.55" />
                <circle cx="140" cy="140" r="3" fill="#5aa9ff" opacity="0.5" />

                {/* trailing vines — prismatic + gold pair */}
                <path d="M150 200 C120 230 110 280 130 320 C140 340 150 360 150 400" stroke="url(#leftPrism)" strokeWidth="1.1" opacity="0.85" />
                <path d="M150 220 C170 250 190 270 200 300 C205 330 195 360 180 380" stroke="url(#leftPrismSoft)" strokeWidth="0.9" opacity="0.7" />
                <path d="M150 240 C130 260 118 280 118 300 C118 330 128 360 140 380" stroke="url(#leftGold)" strokeWidth="0.8" opacity="0.75" />
                <path d="M150 210 C165 230 175 250 178 275" stroke="url(#leftPrismSoft)" strokeWidth="0.7" opacity="0.6" />

                {/* leaves — mix of gold + prismatic */}
                <path d="M150 260 C140 258 132 262 128 270 C136 272 146 268 150 260 Z" fill="url(#leftGold)" opacity="0.85" />
                <path d="M150 300 C162 298 172 302 176 310 C168 314 156 310 150 300 Z" fill="url(#leftPrismSoft)" opacity="0.85" />
                <path d="M140 340 C130 340 124 346 122 354 C132 356 140 350 140 340 Z" fill="url(#leftGold)" opacity="0.75" />
                <path d="M175 250 C182 246 190 250 192 258 C186 262 178 258 175 250 Z" fill="url(#leftPrism)" opacity="0.7" />
                <path d="M118 290 C110 292 106 300 108 308 C116 306 120 300 118 290 Z" fill="url(#leftPrismSoft)" opacity="0.75" />
                <path d="M160 375 C170 372 178 378 178 386 C170 388 162 384 160 375 Z" fill="url(#leftGold)" opacity="0.8" />

                {/* tiny buds */}
                <circle cx="182" cy="260" r="2" fill="#ff8fd0" opacity="0.9" />
                <circle cx="120" cy="320" r="1.8" fill="#5aa9ff" opacity="0.9" />
                <circle cx="150" cy="400" r="2.2" fill="#f1d27a" opacity="0.95" />
              </g>

              {/* colorful sparkles */}
              {[
                [80, 60, "#5aa9ff"],
                [230, 70, "#ff8fd0"],
                [70, 180, "#9b6bff"],
                [240, 200, "#f1d27a"],
                [100, 380, "#ffa4d8"],
                [220, 360, "#5aa9ff"],
                [55, 100, "#f1d27a"],
                [250, 130, "#c48bff"],
              ].map(([x, y, c], i) => (
                <path
                  key={i}
                  d={`M${x} ${(y as number) - 6} L${(x as number) + 1.2} ${(y as number) - 1} L${(x as number) + 6} ${y} L${(x as number) + 1.2} ${(y as number) + 1} L${x} ${(y as number) + 6} L${(x as number) - 1.2} ${(y as number) + 1} L${(x as number) - 6} ${y} L${(x as number) - 1.2} ${(y as number) - 1} Z`}
                  fill={c as string}
                  opacity="0.9"
                />
              ))}
            </svg>
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
              Soul Seeker was born from a deep love of tarot, intuition and the
              transformative power of self-awareness. Our mission is to make
              ancient wisdom accessible, personal and empowering for everyone on
              their unique journey.
            </p>
          </div>

          {/* Right custom art — triple moon flourish */}
          <div className="relative hidden lg:block h-[520px]">
            <TripleMoonBackdrop />
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <PillarCard
              icon={<TarotCardsEmblem />}
              title="ANCIENT WISDOM"
              body="Rooted in traditional tarot knowledge, Soul Seeker honours the timeless symbols and archetypes that have guided seekers for centuries."
            />
            <PillarCard
              icon={<CrystalBallEmblem />}
              title="MODERN TECHNOLOGY"
              body="We blend ancient guidance with intelligent technology to deliver accurate, intuitive and deeply personalised experiences."
            />
            <PillarCard
              icon={<StarBurstEmblem />}
              title="MADE FOR YOU"
              body="Every reading, insight and feature is designed to support your unique journey, at your pace, in your way."
            />
            <PillarCard
              icon={<ChaliceEmblem />}
              title="CRAFTED CREATIVITY"
              body="Our custom decks are hand-illustrated works of art — each card a small painting, blending symbolism, colour and story crafted just for you."
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
