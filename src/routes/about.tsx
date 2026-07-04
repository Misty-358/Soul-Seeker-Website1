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
          {/* Left flourish — golden lotus under crescent arch */}
          <div className="relative hidden lg:block h-[520px]">
            <svg viewBox="0 0 320 520" className="w-full h-full" aria-hidden>
              <defs>
                <linearGradient id="leftGold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fbe6a3" stopOpacity="1" />
                  <stop offset="55%" stopColor="#e8c56a" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#8f6b1e" stopOpacity="0.55" />
                </linearGradient>
                <linearGradient id="leftGoldBright" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fff2c2" />
                  <stop offset="60%" stopColor="#f1d27a" />
                  <stop offset="100%" stopColor="#b8892c" />
                </linearGradient>
                <linearGradient id="leftLotusOuter" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c48bff" stopOpacity="0.95" />
                  <stop offset="55%" stopColor="#9b6bff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#4a2a8e" stopOpacity="0.85" />
                </linearGradient>
                <linearGradient id="leftLotusInner" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffd9b0" />
                  <stop offset="45%" stopColor="#ff9fd0" />
                  <stop offset="100%" stopColor="#7c4dff" />
                </linearGradient>
                <radialGradient id="leftLotusCore" cx="50%" cy="45%" r="55%">
                  <stop offset="0%" stopColor="#fff5d6" />
                  <stop offset="60%" stopColor="#f1d27a" />
                  <stop offset="100%" stopColor="#8f6b1e" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="leftMoonAura" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#9b6bff" stopOpacity="0.55" />
                  <stop offset="70%" stopColor="#5aa9ff" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#050816" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Crescent moon + starburst — top */}
              <g>
                <circle cx="160" cy="110" r="95" fill="url(#leftMoonAura)" className="ss-aura-pulse" />
                {/* Crescent */}
                <g transform="translate(160 110)">
                  <path
                    d="M -40 -55
                       A 55 55 0 1 0 -40 55
                       A 42 42 0 1 1 -40 -55 Z"
                    fill="url(#leftGoldBright)"
                    stroke="url(#leftGold)"
                    strokeWidth="0.6"
                  />
                  {/* Star to the right of crescent */}
                  <g transform="translate(45 -10)" className="ss-twinkle" style={{ animationDuration: "3.6s" }}>
                    <path
                      d="M 0 -14 L 3 -3 L 14 0 L 3 3 L 0 14 L -3 3 L -14 0 L -3 -3 Z"
                      fill="url(#leftGoldBright)"
                    />
                    <circle r="2" fill="#fff5d6" />
                  </g>
                </g>
                {/* Dotted orbital arcs around moon */}
                <circle cx="160" cy="110" r="88" fill="none" stroke="url(#leftGold)" strokeWidth="0.5" strokeDasharray="1 5" opacity="0.75" />
                <circle cx="160" cy="110" r="102" fill="none" stroke="url(#leftGold)" strokeWidth="0.4" strokeDasharray="1 8" opacity="0.5" />
                {/* Tiny hanging dot below crescent */}
                <line x1="160" y1="200" x2="160" y2="230" stroke="url(#leftGold)" strokeWidth="0.6" strokeDasharray="1 3" opacity="0.7" />
                <circle cx="160" cy="234" r="2" fill="#f1d27a" />
              </g>

              {/* Golden lotus — bottom center */}
              <g transform="translate(160 400)">
                {/* Radiating light behind lotus */}
                <g className="ss-aura-pulse" style={{ animationDuration: "6s" }}>
                  {Array.from({ length: 18 }).map((_, i) => {
                    const a = (i * 360) / 18;
                    const rad = (a * Math.PI) / 180;
                    const x2 = Math.cos(rad) * 110;
                    const y2 = Math.sin(rad) * 110;
                    return (
                      <line
                        key={i}
                        x1={0}
                        y1={0}
                        x2={x2}
                        y2={y2}
                        stroke="url(#leftGold)"
                        strokeWidth="0.4"
                        opacity="0.55"
                      />
                    );
                  })}
                </g>

                {/* Outer petals (5 - back row) */}
                <g>
                  {[-70, -35, 0, 35, 70].map((a) => (
                    <path
                      key={`outer-${a}`}
                      d="M 0 0
                         C 22 -30, 22 -70, 0 -90
                         C -22 -70, -22 -30, 0 0 Z"
                      fill="url(#leftLotusOuter)"
                      stroke="url(#leftGoldBright)"
                      strokeWidth="0.9"
                      opacity="0.9"
                      transform={`rotate(${a})`}
                    />
                  ))}
                </g>

                {/* Middle petals (4) */}
                <g>
                  {[-52, -18, 18, 52].map((a) => (
                    <path
                      key={`mid-${a}`}
                      d="M 0 0
                         C 18 -25, 18 -60, 0 -74
                         C -18 -60, -18 -25, 0 0 Z"
                      fill="url(#leftLotusInner)"
                      stroke="url(#leftGoldBright)"
                      strokeWidth="0.8"
                      opacity="0.95"
                      transform={`rotate(${a})`}
                    />
                  ))}
                </g>

                {/* Front center petal */}
                <path
                  d="M 0 0
                     C 14 -22, 14 -55, 0 -66
                     C -14 -55, -14 -22, 0 0 Z"
                  fill="url(#leftLotusCore)"
                  stroke="url(#leftGoldBright)"
                  strokeWidth="1"
                />

                {/* Base water line */}
                <path
                  d="M -80 6 Q 0 14 80 6"
                  fill="none"
                  stroke="url(#leftGoldBright)"
                  strokeWidth="0.9"
                  opacity="0.85"
                />
                <path
                  d="M -95 14 Q 0 22 95 14"
                  fill="none"
                  stroke="url(#leftGold)"
                  strokeWidth="0.6"
                  strokeDasharray="2 4"
                  opacity="0.7"
                />
                {/* Little ripple dots */}
                {[-60, -30, 0, 30, 60].map((x) => (
                  <circle key={x} cx={x} cy={22} r="1.4" fill="#f1d27a" opacity="0.85" />
                ))}
              </g>

              {/* Botanical laurels down each side */}
              <g stroke="url(#leftGold)" strokeWidth="0.9" fill="none" opacity="0.85">
                <path d="M 28 260 C 40 300 44 350 40 420" />
                <path d="M 292 260 C 280 300 276 350 280 420" />
              </g>
              {/* Left laurel leaves */}
              {[280, 310, 340, 370, 400].map((y, i) => (
                <g key={`ll-${y}`}>
                  <path
                    d={`M 40 ${y} C 22 ${y - 6}, 12 ${y + 4}, 8 ${y + 14} C 24 ${y + 12}, 36 ${y + 6}, 40 ${y} Z`}
                    fill="url(#leftGold)"
                    opacity={0.85 - i * 0.06}
                  />
                  <path
                    d={`M 40 ${y + 6} C 56 ${y + 2}, 66 ${y + 12}, 68 ${y + 22} C 54 ${y + 20}, 44 ${y + 14}, 40 ${y + 6} Z`}
                    fill="url(#leftGoldBright)"
                    opacity={0.8 - i * 0.05}
                  />
                </g>
              ))}
              {/* Right laurel leaves (mirrored) */}
              {[280, 310, 340, 370, 400].map((y, i) => (
                <g key={`rl-${y}`}>
                  <path
                    d={`M 280 ${y} C 298 ${y - 6}, 308 ${y + 4}, 312 ${y + 14} C 296 ${y + 12}, 284 ${y + 6}, 280 ${y} Z`}
                    fill="url(#leftGold)"
                    opacity={0.85 - i * 0.06}
                  />
                  <path
                    d={`M 280 ${y + 6} C 264 ${y + 2}, 254 ${y + 12}, 252 ${y + 22} C 266 ${y + 20}, 276 ${y + 14}, 280 ${y + 6} Z`}
                    fill="url(#leftGoldBright)"
                    opacity={0.8 - i * 0.05}
                  />
                </g>
              ))}

              {/* Twinkling sparkles */}
              {[
                [55, 60, "#f1d27a", 0],
                [265, 70, "#c48bff", 1.1],
                [40, 180, "#5aa9ff", 2.2],
                [280, 200, "#ff8fd0", 0.6],
                [90, 300, "#f1d27a", 1.8],
                [230, 310, "#9b6bff", 2.6],
                [160, 490, "#f1d27a", 0.4],
              ].map(([x, y, c, d], i) => (
                <path
                  key={i}
                  d={`M${x} ${(y as number) - 7} L${(x as number) + 1.4} ${(y as number) - 1.1} L${(x as number) + 7} ${y} L${(x as number) + 1.4} ${(y as number) + 1.1} L${x} ${(y as number) + 7} L${(x as number) - 1.4} ${(y as number) + 1.1} L${(x as number) - 7} ${y} L${(x as number) - 1.4} ${(y as number) - 1.1} Z`}
                  fill={c as string}
                  className="ss-twinkle"
                  style={{
                    animationDelay: `${d}s`,
                    animationDuration: "4.2s",
                    filter: `drop-shadow(0 0 5px ${c})`,
                  }}
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
