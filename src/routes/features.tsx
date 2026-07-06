import { createFileRoute } from "@tanstack/react-router";
import archAsset from "@/assets/mystic-arch.png.asset.json";
import {
  SiteNav,
  StarfieldBackdrop,
  SiteFooter,
  Flourish,
  Divider,
  midnight,
  deepSpace,
  gold,
  goldSoft,
  goldBright,
  ivory,
  mystic,
} from "@/components/SiteChrome";

const archImg = archAsset.url;
const iconGold = goldBright;

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Soul Seeker" },
      {
        name: "description",
        content:
          "Every tool for your journey — intuitive readings, custom decks, journaling and personalised tarot insights.",
      },
      { property: "og:title", content: "Features — Soul Seeker" },
      {
        property: "og:description",
        content: "Ancient tarot wisdom meets modern technology.",
      },
    ],
  }),
  component: FeaturesPage,
});

// Reusable defs for a shiny gold gradient + soft glow.
// Each icon gets a unique id prefix so gradients don't collide when rendered together.
function GoldDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-stroke`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fff2c2" />
        <stop offset="45%" stopColor="#f1d27a" />
        <stop offset="100%" stopColor="#b8892f" />
      </linearGradient>
      <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fbe6a3" />
        <stop offset="60%" stopColor="#e4bf5e" />
        <stop offset="100%" stopColor="#a87a26" />
      </linearGradient>
      <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f1d27a" stopOpacity="0.45" />
        <stop offset="70%" stopColor="#f1d27a" stopOpacity="0.05" />
        <stop offset="100%" stopColor="#f1d27a" stopOpacity="0" />
      </radialGradient>
      <radialGradient id={`${id}-shine`} cx="35%" cy="30%" r="55%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
        <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

// Micro sparkle helper
function Sparkle({ cx, cy, r = 1, id }: { cx: number; cy: number; r?: number; id: string }) {
  return (
    <path
      d={`M${cx} ${cy - r * 1.6}l${r * 0.4} ${r}l${r} ${r * 0.4}l-${r} ${r * 0.4}l-${r * 0.4} ${r}l-${r * 0.4}-${r}l-${r}-${r * 0.4}l${r}-${r * 0.4}z`}
      fill={`url(#${id}-fill)`}
      stroke="none"
    />
  );
}

const features = [
  {
    title: "INTUITIVE READINGS",
    body: "Choose from a variety of spreads. Get in-depth, personalised insights.",
    icon: (
      <>
        <GoldDefs id="i1" />
        <circle cx="24" cy="24" r="20" fill="url(#i1-glow)" />
        <g
          fill="none"
          stroke="url(#i1-stroke)"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* left card */}
          <g transform="rotate(-22 24 30)">
            <rect x="11" y="14" width="10" height="18" rx="1.6" fill="rgba(241,210,122,0.08)" />
            <path d="M13 17h6M13 29h6" opacity="0.7" />
          </g>
          {/* right card */}
          <g transform="rotate(22 24 30)">
            <rect x="27" y="14" width="10" height="18" rx="1.6" fill="rgba(241,210,122,0.08)" />
            <path d="M29 17h6M29 29h6" opacity="0.7" />
          </g>
          {/* center card */}
          <rect x="19" y="10" width="10" height="22" rx="1.8" fill="url(#i1-fill)" fillOpacity="0.18" />
          <path d="M21 14h6M21 28h6" opacity="0.85" />
          {/* center star emblem */}
          <path
            d="M24 17l1 3 3 1-3 1L24 25l-1-3-3-1 3-1z"
            fill="url(#i1-fill)"
            stroke="none"
          />
          <circle cx="24" cy="27" r="0.7" fill="url(#i1-fill)" stroke="none" />
        </g>
        {/* highlight shine */}
        <circle cx="24" cy="24" r="18" fill="url(#i1-shine)" opacity="0.35" />
      </>
    ),
  },
  {
    title: "CUSTOM DECK CREATION",
    body: "Design your own tarot decks with AI-powered creation. Bring your vision to life and make it truly yours.",
    icon: (
      <>
        <GoldDefs id="i2" />
        <circle cx="24" cy="24" r="20" fill="url(#i2-glow)" />
        <g
          fill="none"
          stroke="url(#i2-stroke)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* stacked deck — three offset cards */}
          <g transform="rotate(-10 24 26)">
            <rect x="12" y="18" width="18" height="16" rx="2" fill="rgba(241,210,122,0.08)" />
          </g>
          <g transform="rotate(-3 24 26)">
            <rect x="14" y="16" width="18" height="16" rx="2" fill="rgba(241,210,122,0.10)" />
          </g>
          <rect x="16" y="14" width="18" height="16" rx="2" fill="url(#i2-fill)" fillOpacity="0.16" />
          {/* card frame */}
          <rect x="18" y="16" width="14" height="12" rx="1" opacity="0.7" />
          {/* magic wand */}
          <path d="M34 8l-14 14" strokeWidth="1.3" />
          <path d="M32 6l4 4" />
        </g>
        {/* sparkles from wand tip */}
        <path
          d="M35 7l.6 1.9 1.9.6-1.9.6L35 12l-.6-1.9L32.5 9.5l1.9-.6z"
          fill="url(#i2-fill)"
          stroke="none"
        />
        <Sparkle id="i2" cx={38} cy={12} r={0.9} />
        <Sparkle id="i2" cx={22} cy={22} r={1.1} />
        <circle cx="26" cy="22" r="0.7" fill="url(#i2-fill)" stroke="none" />
        <circle cx="24" cy="26" r="0.5" fill="url(#i2-fill)" stroke="none" opacity="0.8" />
        <circle cx="24" cy="24" r="18" fill="url(#i2-shine)" opacity="0.3" />
      </>
    ),
  },
  {
    title: "SAVE & REFLECT",
    body: "Save your readings, decks and notes in your personal space and reflect on your growth over time.",
    icon: (
      <>
        <GoldDefs id="i3" />
        <circle cx="24" cy="24" r="20" fill="url(#i3-glow)" />
        <g
          fill="none"
          stroke="url(#i3-stroke)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* orbit arcs — reflection */}
          <path d="M9 24a15 15 0 0 1 6-12" opacity="0.55" />
          <path d="M39 24a15 15 0 0 0-6-12" opacity="0.55" />
          {/* ornate bookmark / lotus-heart */}
          <path d="M24 36s-9-6-9-14a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 8-9 14-9 14z" fill="url(#i3-fill)" fillOpacity="0.14" />
          {/* inner crescent detail */}
          <path d="M19 20a4 4 0 0 0 5 5" opacity="0.75" />
        </g>
        {/* central sparkle star */}
        <path
          d="M24 20l1.1 3.2 3.2 1.1-3.2 1.1L24 28.6l-1.1-3.2-3.2-1.1 3.2-1.1z"
          fill="url(#i3-fill)"
          stroke="none"
        />
        <Sparkle id="i3" cx={12} cy={14} r={0.9} />
        <Sparkle id="i3" cx={36} cy={14} r={0.9} />
        <circle cx="24" cy="14" r="0.6" fill="url(#i3-fill)" stroke="none" opacity="0.9" />
        <circle cx="24" cy="24" r="18" fill="url(#i3-shine)" opacity="0.3" />
      </>
    ),
  },
  {
    title: "CALENDAR & JOURNAL",
    body: "Track your daily readings, moods and milestones. Your journey, beautifully organised.",
    icon: (
      <>
        <GoldDefs id="i4" />
        <circle cx="24" cy="24" r="20" fill="url(#i4-glow)" />
        <g
          fill="none"
          stroke="url(#i4-stroke)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* open journal */}
          <path d="M8 14c5-2 10-2 15 1v22c-5-3-10-3-15-1z" fill="rgba(241,210,122,0.08)" />
          <path d="M40 14c-5-2-10-2-15 1v22c5-3 10-3 15-1z" fill="rgba(241,210,122,0.08)" />
          <path d="M24 15v22" opacity="0.7" />
          {/* left page lines */}
          <path d="M12 20h8M12 24h8M12 28h6" opacity="0.55" />
          {/* right page — calendar grid */}
          <rect x="27" y="19" width="10" height="10" rx="1" opacity="0.75" />
          <path d="M27 22h10M30 19v10M34 19v10" opacity="0.55" />
        </g>
        {/* crescent moon on left page */}
        <path
          d="M20 26a3.4 3.4 0 1 1-3.4-3.4A2.8 2.8 0 0 0 20 26z"
          fill="url(#i4-fill)"
          stroke="none"
          opacity="0.95"
        />
        {/* marked date */}
        <circle cx="32" cy="25.5" r="1.4" fill="url(#i4-fill)" stroke="none" />
        <Sparkle id="i4" cx={36} cy={12} r={0.9} />
        <Sparkle id="i4" cx={12} cy={12} r={0.8} />
        <circle cx="24" cy="24" r="18" fill="url(#i4-shine)" opacity="0.3" />
      </>
    ),
  },
  {
    title: "SOUL SEEKER INSIGHTS",
    body: "Receive summaries of your past readings, recurring themes and personalised guidance tailored for you.",
    icon: (
      <>
        <GoldDefs id="i5" />
        <circle cx="24" cy="24" r="20" fill="url(#i5-glow)" />
        <g
          fill="none"
          stroke="url(#i5-stroke)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* crystal orb */}
          <circle cx="24" cy="20" r="9" fill="url(#i5-fill)" fillOpacity="0.14" />
          {/* orb inner highlight */}
          <path d="M18 16a6 6 0 0 1 4-3" opacity="0.85" />
          {/* ornate stand */}
          <path d="M15 32c2-3 5-4 9-4s7 1 9 4" />
          <path d="M13 32h22" />
          <path d="M15 36h18" />
          <path d="M18 32v4M30 32v4" opacity="0.75" />
        </g>
        {/* inner cosmos */}
        <path
          d="M24 15l1 3 3 1-3 1L24 23l-1-3-3-1 3-1z"
          fill="url(#i5-fill)"
          stroke="none"
        />
        <circle cx="20" cy="23" r="0.8" fill="url(#i5-fill)" stroke="none" />
        <circle cx="28" cy="24" r="0.7" fill="url(#i5-fill)" stroke="none" opacity="0.85" />
        <circle cx="26" cy="17" r="0.5" fill="url(#i5-fill)" stroke="none" opacity="0.85" />
        {/* stand jewel */}
        <circle cx="24" cy="34" r="1" fill="url(#i5-fill)" stroke="none" />
        <circle cx="24" cy="20" r="9" fill="url(#i5-shine)" opacity="0.55" />
      </>
    ),
  },
  {
    title: "YEAR AHEAD READING",
    body: "Receive a personalised 12-month tarot forecast, exploring themes, opportunities and lessons for the year ahead.",
    icon: (
      <>
        <GoldDefs id="i6" />
        <circle cx="24" cy="24" r="20" fill="url(#i6-glow)" />
        <g
          fill="none"
          stroke="url(#i6-stroke)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* zodiac wheel — outer and inner rings */}
          <circle cx="24" cy="24" r="13" opacity="0.9" />
          <circle cx="24" cy="24" r="9" opacity="0.55" />
          <circle cx="24" cy="24" r="5" opacity="0.4" />
          {/* 12 tick rays for the months */}
          {Array.from({ length: 12 }).map((_, i) => {
            const a = ((i * 30 - 90) * Math.PI) / 180;
            const inner = 13;
            const outer = 15.5;
            const x1 = 24 + Math.cos(a) * inner;
            const y1 = 24 + Math.sin(a) * inner;
            const x2 = 24 + Math.cos(a) * outer;
            const y2 = 24 + Math.sin(a) * outer;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </g>
        {/* central 8-point compass star */}
        <path
          d="M24 15l1.4 5.6 5.6 1.4-5.6 1.4L24 29l-1.4-5.6-5.6-1.4 5.6-1.4z"
          fill="url(#i6-fill)"
          stroke="none"
        />
        <path
          d="M24 18.5l.6 3.9 3.9.6-3.9.6L24 27.5l-.6-3.9-3.9-.6 3.9-.6z"
          fill="#fff8dc"
          stroke="none"
          opacity="0.6"
        />
        {/* orbiting sparkles */}
        <Sparkle id="i6" cx={12} cy={12} r={0.9} />
        <Sparkle id="i6" cx={36} cy={12} r={0.9} />
        <Sparkle id="i6" cx={12} cy={36} r={0.9} />
        <Sparkle id="i6" cx={36} cy={36} r={0.9} />
        <circle cx="24" cy="24" r="18" fill="url(#i6-shine)" opacity="0.3" />
      </>
    ),
  },
];

function FeaturesPage() {
  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at 50% 0%, #0d1930 0%, ${deepSpace} 45%, ${midnight} 100%)`,
        color: ivory,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <StarfieldBackdrop />
      <SiteNav />

      <section className="relative z-10 max-w-[1400px] mx-auto px-10 pt-36 pb-8 text-center">
        <Flourish label="FEATURES" />
        <h1
          className="mt-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: gold,
            fontSize: 68,
            lineHeight: 1.05,
            fontWeight: 500,
            letterSpacing: "0.03em",
            textShadow: "0 0 40px rgba(241,210,122,0.2)",
          }}
        >
          Every Tool for Your Journey
        </h1>
        <Divider width={90} />
        <p
          className="mx-auto italic"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: mystic,
            fontSize: 20,
            lineHeight: 1.6,
            maxWidth: 720,
          }}
        >
          Soul Seeker combines ancient tarot wisdom with modern technology
          <br />
          to support your path of discovery, insight and transformation.
        </p>
      </section>

      <section className="relative z-10 max-w-[1400px] mx-auto px-10 pb-20 grid grid-cols-[minmax(280px,360px)_1fr] gap-14 items-center">
        <div className="relative">
          <img
            src={archImg}
            alt="Mystic arch with moon and lotus"
            className="w-full h-auto pointer-events-none select-none"
            style={{
              mixBlendMode: "screen",
              filter: "drop-shadow(0 0 40px rgba(124,77,255,0.35))",
              WebkitMaskImage:
                "radial-gradient(ellipse 75% 80% at 50% 50%, black 55%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 75% 80% at 50% 50%, black 55%, transparent 100%)",
            }}
          />
        </div>

        <div className="grid grid-cols-3 gap-x-10 gap-y-14">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-5">
              <div
                className="shrink-0 rounded-full flex items-center justify-center"
                style={{
                  width: 70,
                  height: 70,
                  border: `1px solid ${goldBright}`,
                  color: goldBright,
                  background:
                    "radial-gradient(circle, rgba(241,210,122,0.10), rgba(124,77,255,0.06))",
                  boxShadow: `0 0 22px rgba(241,210,122,0.28), inset 0 0 14px rgba(241,210,122,0.10)`,
                }}
              >
                <svg width="42" height="42" viewBox="0 0 48 48">
                  {f.icon}
                </svg>
              </div>
              <div>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: gold,
                    fontSize: 16,
                    letterSpacing: "0.16em",
                    fontWeight: 500,
                  }}
                  className="mb-2"
                >
                  {f.title}
                </h2>
                <p style={{ color: ivory, fontSize: 13, lineHeight: 1.75, opacity: 0.8 }}>
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-[1400px] mx-auto px-10 pb-16 text-center">
        <div
          className="mx-auto h-px mb-8"
          style={{
            maxWidth: 900,
            background: `linear-gradient(to right, transparent, ${goldSoft}, transparent)`,
          }}
        />
        <p
          className="italic mx-auto"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: ivory,
            fontSize: 22,
            lineHeight: 1.6,
            maxWidth: 900,
          }}
        >
          Explore Tarot. Create Your Cards. Discover Yourself.
        </p>
        <div className="mt-6">
          <Divider width={60} />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
