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

/* ---------- Background: triple-moon sacred geometry ---------- */

function TripleMoonBackdrop() {
  return (
    <svg
      viewBox="0 0 900 900"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
      style={{ opacity: 0.35 }}
    >
      <defs>
        <radialGradient id="bgHalo" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#2a1a5e" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#0a0a1e" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#050816" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bgGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f1d27a" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8f6b1e" stopOpacity="0.4" />
        </linearGradient>
        <radialGradient id="bgMoon" cx="35%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#d8c9ff" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#6a49c8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1a1740" stopOpacity="0.2" />
        </radialGradient>
      </defs>

      <circle cx="450" cy="450" r="380" fill="url(#bgHalo)" />

      <g stroke="url(#bgGold)" strokeWidth="0.9" fill="none">
        {/* concentric rings */}
        <circle cx="450" cy="450" r="240" opacity="0.75" />
        <circle cx="450" cy="450" r="220" strokeDasharray="2 5" opacity="0.5" />
        <circle cx="450" cy="450" r="260" strokeDasharray="1 8" opacity="0.4" />

        {/* sacred triangles (Metatron-inspired) */}
        <path d="M450 220 L640 540 L260 540 Z" opacity="0.55" />
        <path d="M450 680 L640 360 L260 360 Z" opacity="0.55" />
        <path d="M450 260 L610 520 L290 520 Z" opacity="0.35" />
        <path d="M450 640 L610 380 L290 380 Z" opacity="0.35" />

        {/* upward + downward arrows through center */}
        <path d="M450 200 L450 700" opacity="0.35" strokeDasharray="4 6" />
        <path d="M450 200 L438 226 L462 226 Z" fill="url(#bgGold)" opacity="0.7" />
        <path d="M450 700 L438 674 L462 674 Z" fill="url(#bgGold)" opacity="0.7" />

        {/* orbit dots */}
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * 360) / 24;
          const r = 260;
          const x = 450 + Math.cos((a * Math.PI) / 180) * r;
          const y = 450 + Math.sin((a * Math.PI) / 180) * r;
          return <circle key={i} cx={x} cy={y} r="1.5" fill="#f1d27a" opacity="0.55" />;
        })}
      </g>

      {/* central full moon */}
      <g>
        <circle cx="450" cy="450" r="90" fill="url(#bgMoon)" />
        <circle cx="450" cy="450" r="90" fill="none" stroke="url(#bgGold)" strokeWidth="1" />
        {/* craters */}
        <circle cx="430" cy="430" r="10" fill="#3a2a7a" opacity="0.55" />
        <circle cx="470" cy="470" r="7" fill="#3a2a7a" opacity="0.45" />
        <circle cx="465" cy="425" r="5" fill="#3a2a7a" opacity="0.5" />
        <circle cx="425" cy="470" r="4" fill="#3a2a7a" opacity="0.4" />
      </g>

      {/* waxing crescent (left) */}
      <g transform="translate(210 450)">
        <circle r="60" fill="url(#bgMoon)" />
        <circle cx="18" r="55" fill="#050816" />
        <circle r="60" fill="none" stroke="url(#bgGold)" strokeWidth="0.9" />
      </g>

      {/* waning crescent (right) */}
      <g transform="translate(690 450)">
        <circle r="60" fill="url(#bgMoon)" />
        <circle cx="-18" r="55" fill="#050816" />
        <circle r="60" fill="none" stroke="url(#bgGold)" strokeWidth="0.9" />
      </g>

      {/* tiny sparkles */}
      {[
        [150, 200],
        [780, 220],
        [120, 620],
        [820, 640],
        [450, 140],
        [450, 780],
        [320, 300],
        [580, 300],
        [320, 600],
        [580, 600],
      ].map(([x, y], i) => (
        <path
          key={i}
          d={`M${x} ${y - 6} L${x + 1.5} ${y - 1} L${x + 6} ${y} L${x + 1.5} ${y + 1} L${x} ${y + 6} L${x - 1.5} ${y + 1} L${x - 6} ${y} L${x - 1.5} ${y - 1} Z`}
          fill="#f1d27a"
          opacity="0.75"
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
                  <stop offset="0%" stopColor="#f1d27a" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#8f6b1e" stopOpacity="0.3" />
                </linearGradient>
                <radialGradient id="leftMoonGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#e8dcff" />
                  <stop offset="60%" stopColor="#7c5ad0" />
                  <stop offset="100%" stopColor="#1a1740" />
                </radialGradient>
              </defs>
              <g stroke="url(#leftGold)" strokeWidth="0.9" fill="none">
                <circle cx="150" cy="120" r="70" />
                <circle cx="150" cy="120" r="90" strokeDasharray="2 5" opacity="0.6" />
                <circle cx="150" cy="120" r="55" fill="url(#leftMoonGrad)" />
                <circle cx="130" cy="105" r="6" fill="#3a2a7a" opacity="0.5" />
                <circle cx="165" cy="130" r="4" fill="#3a2a7a" opacity="0.5" />
                {/* trailing vines */}
                <path d="M150 200 C120 230 110 280 130 320 C140 340 150 360 150 400" opacity="0.7" />
                <path d="M150 220 C170 250 190 270 200 300" opacity="0.6" />
                <path d="M150 240 C130 260 118 280 118 300" opacity="0.6" />
                {/* leaves */}
                <path d="M150 260 C140 258 132 262 128 270 C136 272 146 268 150 260 Z" fill="url(#leftGold)" opacity="0.7" />
                <path d="M150 300 C162 298 172 302 176 310 C168 314 156 310 150 300 Z" fill="url(#leftGold)" opacity="0.7" />
                <path d="M140 340 C130 340 124 346 122 354 C132 356 140 350 140 340 Z" fill="url(#leftGold)" opacity="0.65" />
              </g>
              {/* sparkles */}
              {[
                [80, 60],
                [230, 70],
                [70, 180],
                [240, 200],
                [100, 380],
                [220, 360],
              ].map(([x, y], i) => (
                <path
                  key={i}
                  d={`M${x} ${y - 5} L${x + 1} ${y - 1} L${x + 5} ${y} L${x + 1} ${y + 1} L${x} ${y + 5} L${x - 1} ${y + 1} L${x - 5} ${y} L${x - 1} ${y - 1} Z`}
                  fill="#f1d27a"
                  opacity="0.75"
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
              className="mx-auto max-w-[540px] text-[16px] leading-relaxed"
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
