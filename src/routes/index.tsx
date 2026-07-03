import { createFileRoute } from "@tanstack/react-router";
import cardAsset from "@/assets/temperance-card.jpg.asset.json";
const cardImg = cardAsset.url;
import nebulaLeft from "@/assets/nebula-left.jpg";
import nebulaRight from "@/assets/nebula-right.jpg";
import logoAsset from "@/assets/soul-seeker-icon.jpeg.asset.json";
const logo = logoAsset.url;

export const Route = createFileRoute("/")({
  component: Home,
});

// Soul Seeker brand tokens
const midnight = "#050816";
const deepSpace = "#091422";
const gold = "#d4af37";
const goldSoft = "#c9a75d";
const goldBright = "#f1d27a";
const ivory = "#d8e3f7";
const mystic = "#c8b9e8";
const bg = midnight;
const iconGold = goldBright;

const navItems = ["HOME", "FEATURES", "INTRODUCTION", "ABOUT", "CONTACT US"];


const features = [
  {
    title: "TAROT READINGS",
    body: "In-depth, intuitive readings to guide your path.",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        {/* ornate card frame */}
        <path d="M16 8h16a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z" />
        <path d="M17 11h14v26H17z" opacity="0.5" />
        {/* corner flourishes */}
        <path d="M17 13c2 0 3 1 3 3M31 13c-2 0-3 1-3 3M17 35c2 0 3-1 3-3M31 35c-2 0-3-1-3-3" />
        {/* central star + rays */}
        <circle cx="24" cy="24" r="4.5" />
        <path d="M24 15v3M24 30v3M15 24h3M30 24h3M18 18l2 2M28 28l2 2M30 18l-2 2M18 30l2-2" />
        <circle cx="24" cy="24" r="1.2" fill="currentColor" stroke="none" />
        {/* moon dots */}
        <circle cx="21" cy="12" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="27" cy="12" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="21" cy="36" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="27" cy="36" r="0.6" fill="currentColor" stroke="none" />
      </g>
    ),
  },
  {
    title: "CUSTOM DECKS",
    body: "Create and connect with your own unique deck.",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        {/* fanned three cards */}
        <path d="M13 32l4-16 8 2-4 16z" transform="rotate(-14 19 24)" />
        <path d="M20 30l4-16 8 2-4 16z" />
        <path d="M27 32l4-16 8 2-4 16z" transform="rotate(14 32 24)" />
        {/* center card sigil */}
        <circle cx="24" cy="24" r="3" />
        <path d="M24 21v-3M24 27v3M21 24h-3M27 24h3" />
        {/* small stars */}
        <path d="M15 20l.4 1.1L16.5 21.5l-1.1.4L15 23l-.4-1.1L13.5 21.5l1.1-.4z" fill="currentColor" stroke="none" />
        <path d="M33 28l.4 1.1L34.5 29.5l-1.1.4L33 31l-.4-1.1L31.5 29.5l1.1-.4z" fill="currentColor" stroke="none" />
      </g>
    ),
  },
  {
    title: "SAVE & REFLECT",
    body: "Keep your readings, insights and journey.",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        {/* ornate open book */}
        <path d="M8 14c4-2 10-2 16 2 6-4 12-4 16-2v22c-4-2-10-2-16 2-6-4-12-4-16-2z" />
        <path d="M24 16v22" />
        {/* filigree corners */}
        <path d="M10 16c2 0 3 1 4 2M38 16c-2 0-3 1-4 2M10 34c2 0 3-1 4-2M38 34c-2 0-3-1-4-2" />
        {/* central sun/eye */}
        <circle cx="24" cy="26" r="2.5" />
        <path d="M24 20v2M24 30v2M18 26h2M28 26h2M20 22l1.4 1.4M27 30l1.4 1.4M28 22l-1.4 1.4M20 30l1.4-1.4" />
        {/* text dots */}
        <circle cx="14" cy="22" r="0.5" fill="currentColor" stroke="none" />
        <circle cx="17" cy="22" r="0.5" fill="currentColor" stroke="none" />
        <circle cx="34" cy="22" r="0.5" fill="currentColor" stroke="none" />
        <circle cx="31" cy="22" r="0.5" fill="currentColor" stroke="none" />
      </g>
    ),
  },
  {
    title: "SOUL SEEKER INSIGHTS",
    body: "Receive summaries of your past readings and guidance tailored for you.",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        {/* all-seeing eye in a triangle */}
        <path d="M24 8l16 28H8z" />
        <path d="M24 11.5l13 22.5H11z" opacity="0.5" />
        {/* eye */}
        <path d="M16 28c3-4 13-4 16 0-3 4-13 4-16 0z" />
        <circle cx="24" cy="28" r="2.4" fill="currentColor" stroke="none" />
        <circle cx="25" cy="27" r="0.7" fill={iconGold} stroke="none" />
        {/* rays */}
        <path d="M24 14v-3M18 18l-2-2M30 18l2-2" />
        {/* dots at triangle points */}
        <circle cx="24" cy="8" r="0.9" fill="currentColor" stroke="none" />
        <circle cx="8" cy="36" r="0.9" fill="currentColor" stroke="none" />
        <circle cx="40" cy="36" r="0.9" fill="currentColor" stroke="none" />
      </g>
    ),
  },
  {
    title: "YEAR AHEAD READING",
    body: "Receive a personalised 12-month tarot forecast, exploring themes, opportunities and lessons for the year ahead.",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        {/* zodiac wheel */}
        <circle cx="24" cy="24" r="16" />
        <circle cx="24" cy="24" r="12" opacity="0.55" />
        <circle cx="24" cy="24" r="3.5" />
        {/* 12 spokes with dots */}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * Math.PI) / 6;
          const x1 = 24 + Math.cos(a) * 12;
          const y1 = 24 + Math.sin(a) * 12;
          const x2 = 24 + Math.cos(a) * 16;
          const y2 = 24 + Math.sin(a) * 16;
          const dx = 24 + Math.cos(a) * 16;
          const dy = 24 + Math.sin(a) * 16;
          return (
            <g key={i}>
              <path d={`M${x1} ${y1}L${x2} ${y2}`} />
              <circle cx={dx} cy={dy} r="0.7" fill="currentColor" stroke="none" />
            </g>
          );
        })}
        {/* crescent moon */}
        <path d="M27 22a3.5 3.5 0 1 0 0 4 2.6 2.6 0 0 1 0-4z" fill="currentColor" stroke="none" />
      </g>
    ),
  },

];

const footerLinks = [
  "INTRODUCTION TO SOUL SEEKER",
  "FEATURES",
  "TERMS & CONDITIONS",
  "PRIVACY POLICY",
  "COOKIES POLICY",
  "CONTACT US",
];

function Star({ className = "", size = 12 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2l1.5 8.5L22 12l-8.5 1.5L12 22l-1.5-8.5L2 12l8.5-1.5z" />
    </svg>
  );
}

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 my-4" style={{ color: gold }}>
      <span className="h-px w-16" style={{ background: `linear-gradient(to right, transparent, ${gold})` }} />
      <Star size={10} />
      <span className="h-px w-16" style={{ background: `linear-gradient(to left, transparent, ${gold})` }} />
    </div>
  );
}

function Home() {
  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at 50% 0%, #0d1930 0%, ${deepSpace} 45%, ${midnight} 100%)`,
        color: ivory,
        fontFamily: "'Inter', sans-serif",
      }}
    >

      {/* starfield */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, #fff8, transparent), radial-gradient(1px 1px at 70% 80%, #fff6, transparent), radial-gradient(1px 1px at 40% 60%, #fff5, transparent), radial-gradient(1px 1px at 85% 15%, #fff7, transparent), radial-gradient(1px 1px at 10% 80%, #fff4, transparent), radial-gradient(2px 2px at 60% 40%, #fff3, transparent), radial-gradient(1px 1px at 90% 55%, #fff5, transparent)",
          backgroundSize: "400px 400px, 500px 500px, 350px 350px, 450px 450px, 600px 600px, 700px 700px, 500px 500px",
        }}
      />
      {/* nebulae flanking hero */}
      <img
        src={nebulaLeft}
        aria-hidden
        alt=""
        className="absolute left-0 top-16 h-[720px] w-auto opacity-70 pointer-events-none mix-blend-screen"
        style={{
          filter: "blur(6px)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 75%)",
          maskImage:
            "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 75%)",
        }}
      />
      <img
        src={nebulaRight}
        aria-hidden
        alt=""
        className="absolute right-0 top-16 h-[720px] w-auto opacity-70 pointer-events-none mix-blend-screen"
        style={{
          filter: "blur(6px)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 75%)",
          maskImage:
            "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 75%)",
        }}
      />


      {/* NAV */}
      <header
        className="fixed top-0 inset-x-0 z-30"
        style={{
          background: "rgba(5,8,22,0.55)",
          backdropFilter: "blur(10px)",
          borderBottom: `1px solid rgba(201,167,93,0.25)`,
        }}
      >
        <div className="max-w-[1400px] mx-auto pl-6 pr-10 py-4 flex items-center gap-8">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Soul Seeker logo" width={56} height={56} className="drop-shadow-[0_0_12px_rgba(241,210,122,0.35)]" />
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: gold,
                letterSpacing: "0.14em",
                fontSize: 22,
                fontWeight: 500,
                textShadow: "0 0 18px rgba(241,210,122,0.25)",
              }}
            >
              SOUL SEEKER
            </span>
          </div>
          <nav className="ml-auto flex items-center gap-10">
            {navItems.map((item, i) => (
              <a
                key={item}
                href="#"
                className="relative text-[12px] tracking-[0.28em] transition-colors hover:text-[color:var(--ss-gold-light,#f1d27a)]"
                style={{
                  color: i === 0 ? goldBright : ivory,
                  fontWeight: 500,
                }}
              >
                {item}
                {i === 0 && (
                  <span
                    aria-hidden
                    className="absolute left-1/2 -translate-x-1/2 -bottom-2 block h-[2px] w-6 rounded-full"
                    style={{
                      background: goldBright,
                      boxShadow: `0 0 10px ${goldBright}`,
                    }}
                  />
                )}
              </a>
            ))}
          </nav>
        </div>
      </header>


      {/* HERO */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-10 pt-40 pb-24 grid grid-cols-2 gap-12 items-center">
        <div className="pl-4">
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: gold,
              fontSize: 96,
              lineHeight: 1,
              fontWeight: 500,
              letterSpacing: "0.04em",
              textShadow: "0 0 40px rgba(241,210,122,0.25)",
            }}
          >
            Soul Seeker
          </h1>
          <Divider />
          <p
            className="italic text-center"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: mystic,
              fontSize: 24,
              lineHeight: 1.5,
              maxWidth: 480,
            }}
          >
            Seek the soul. Reveal the path.
            <br />
            Awaken the wisdom within.
          </p>
          <Divider />
          <p
            className="text-center mx-auto"
            style={{ color: ivory, fontSize: 15, lineHeight: 1.8, maxWidth: 460, opacity: 0.85 }}
          >
            Soul Seeker is your sacred space for guidance, clarity and transformation. Explore tarot, intuition and ancient wisdom to illuminate your journey.
          </p>
          <div className="mt-10 flex items-center gap-5 justify-center">
            <button
              className="group relative px-9 py-3.5 flex items-center gap-2 transition-all hover:scale-[1.02] rounded-full"
              style={{
                border: `1px solid ${gold}`,
                color: goldBright,
                letterSpacing: "0.22em",
                fontSize: 12,
                fontWeight: 500,
                background: "rgba(212,175,55,0.06)",
                boxShadow: "0 0 30px rgba(241,210,122,0.18), inset 0 0 20px rgba(241,210,122,0.05)",
              }}
            >
              <Star size={11} /> EXPLORE THE APP
            </button>
            <button
              className="px-9 py-3.5 transition-all hover:scale-[1.02] rounded-full"
              style={{
                border: `1px solid ${goldSoft}80`,
                color: goldSoft,
                letterSpacing: "0.22em",
                fontSize: 12,
                fontWeight: 500,
              }}
            >
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Card */}
        <div className="flex justify-center">
          <div
            className="relative"
            style={{
              filter: "drop-shadow(0 30px 80px rgba(124,77,255,0.25)) drop-shadow(0 0 40px rgba(5,8,22,0.9))",
            }}
          >
            <img
              src={cardImg}
              alt="Temperance tarot card"
              width={420}
              height={620}
              className="rounded-lg block"
              style={{ width: 420, height: "auto", background: midnight }}
            />
          </div>
        </div>

      </section>

      {/* FEATURES PANEL */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-10 pb-24">
        <div
          className="px-10 py-10 grid grid-cols-5 gap-8"
          style={{
            background: "rgba(9,20,34,0.6)",
            border: `1px solid rgba(212,175,55,0.25)`,
            borderRadius: 24,
            backdropFilter: "blur(8px)",
            boxShadow: `0 20px 60px rgba(0,0,0,0.5)`,
          }}
        >
          {features.map((f, i) => (
            <div key={f.title} className="flex flex-col items-center text-center gap-4 relative">
              {i > 0 && (
                <span
                  aria-hidden
                  className="absolute -left-4 top-4 bottom-4 w-px"
                  style={{ background: `linear-gradient(to bottom, transparent, rgba(201,167,93,0.35), transparent)` }}
                />
              )}
              <div
                className="shrink-0 rounded-full flex items-center justify-center"
                style={{
                  width: 64,
                  height: 64,
                  border: `1px solid ${goldBright}`,
                  color: goldBright,
                  background: "radial-gradient(circle, rgba(241,210,122,0.12), rgba(124,77,255,0.04))",
                  boxShadow: `0 0 24px rgba(241,210,122,0.3), inset 0 0 14px rgba(241,210,122,0.12)`,
                }}
              >
                <svg width="42" height="42" viewBox="0 0 48 48">{f.icon}</svg>
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: gold,
                    fontSize: 15,
                    letterSpacing: "0.12em",
                    fontWeight: 500,
                  }}
                  className="mb-2"
                >
                  {f.title}
                </h3>
                <p style={{ color: ivory, fontSize: 12, lineHeight: 1.7, opacity: 0.75 }}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* FOOTER */}
      <footer className="relative z-10 max-w-[1400px] mx-auto px-10 pb-10">
        <Divider />
        <ul className="flex flex-wrap justify-center items-center gap-6 mb-6">
          {footerLinks.map((l, i) => (
            <li key={l} className="flex items-center gap-6">
              <a
                href="#"
                className="text-[11px] tracking-[0.25em] transition-colors hover:text-white"
                style={{ color: ivory, opacity: 0.75 }}
              >
                {l}
              </a>
              {i < footerLinks.length - 1 && <span style={{ color: goldSoft }}><Star size={7} /></span>}
            </li>
          ))}
        </ul>
        <div className="flex justify-center gap-6 mb-4" style={{ color: goldBright }}>
          {["instagram", "facebook", "twitter", "mail"].map((n) => (
            <a key={n} href="#" aria-label={n} className="opacity-80 hover:opacity-100">
              <SocialIcon name={n} />
            </a>
          ))}
        </div>
        <p className="text-center text-[11px] tracking-[0.2em]" style={{ color: ivory, opacity: 0.5 }}>
          © 2024 SOUL SEEKER. ALL RIGHTS RESERVED.
        </p>

      </footer>
    </div>
  );
}

function SocialIcon({ name }: { name: string }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5 } as const;
  switch (name) {
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2l1-3h-3V8.5c0-.3.2-.5.5-.5H14z" />
        </svg>
      );
    case "twitter":
      return (
        <svg {...common}>
          <path d="M4 4l7 9-7 7h2l6-6 5 6h4l-8-10 7-6h-2l-5 5-4-5z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="12" rx="1.5" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    default:
      return null;
  }
}
