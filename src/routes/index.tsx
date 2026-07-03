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

const gold = "#d4af7a";
const goldBright = "#e8c987";
const bg = "#0a0a1e";

const navItems = ["HOME", "FEATURES", "INTRODUCTION", "ABOUT", "CONTACT US"];

const iconGold = "#f5d97a";
const iconGoldSoft = "#e8b84a";

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
        background: `radial-gradient(ellipse at 50% 20%, #131338 0%, ${bg} 55%, #050512 100%)`,
        color: "#e8dfc7",
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
      <header className="relative z-20 max-w-[1400px] mx-auto pl-4 pr-10 pt-6 flex items-center gap-8">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Soul Seeker logo" width={72} height={72} className="drop-shadow-[0_0_12px_rgba(212,175,122,0.4)]" />
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              color: goldBright,
              letterSpacing: "0.22em",
              fontSize: 26,
              fontWeight: 600,
              textShadow: "0 0 18px rgba(232,201,135,0.35)",
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
              className="relative text-[13px] tracking-[0.28em] transition-colors"
              style={{ color: i === 0 ? goldBright : "#c9c1a8", fontWeight: 500 }}
            >
              {item}
              {i === 0 && (
                <span
                  className="absolute left-1/2 -translate-x-1/2 -bottom-2 flex items-center gap-1"
                  style={{ color: gold }}
                >
                  <span className="h-px w-3" style={{ background: gold }} />
                  <Star size={7} />
                  <span className="h-px w-3" style={{ background: gold }} />
                </span>
              )}
            </a>
          ))}
        </nav>
      </header>

      {/* HERO */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-10 pt-16 pb-12 grid grid-cols-2 gap-10 items-center">
        <div className="pl-4">
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: goldBright,
              fontSize: 92,
              lineHeight: 1,
              fontWeight: 500,
              letterSpacing: "0.02em",
              textShadow: "0 0 30px rgba(232,201,135,0.35)",
            }}
          >
            Soul Seeker
          </h1>
          <Divider />
          <p
            className="italic text-center"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#d8cfae",
              fontSize: 24,
              lineHeight: 1.4,
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
            style={{ color: "#bfb69a", fontSize: 16, lineHeight: 1.7, maxWidth: 440 }}
          >
            Soul Seeker is your sacred space for guidance, clarity and transformation. Explore tarot, intuition and ancient wisdom to illuminate your journey.
          </p>
          <div className="mt-8 flex items-center gap-5 justify-center">
            <button
              className="group relative px-8 py-3 flex items-center gap-2 transition-all hover:scale-[1.02]"
              style={{
                border: `1px solid ${gold}`,
                color: goldBright,
                letterSpacing: "0.2em",
                fontSize: 13,
                fontWeight: 500,
                background: "rgba(212,175,122,0.05)",
                boxShadow: "0 0 20px rgba(212,175,122,0.15), inset 0 0 20px rgba(212,175,122,0.05)",
              }}
            >
              <Star size={12} /> EXPLORE THE APP
            </button>
            <button
              className="px-8 py-3 transition-all hover:scale-[1.02]"
              style={{
                border: `1px solid ${gold}80`,
                color: gold,
                letterSpacing: "0.2em",
                fontSize: 13,
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
              filter: "drop-shadow(0 20px 60px rgba(10,10,30,0.7))",
            }}
          >
            <img
              src={cardImg}
              alt="Temperance tarot card"
              width={420}
              height={620}
              className="rounded-md block"
              style={{ width: 420, height: "auto", background: bg }}
            />
          </div>
        </div>

      </section>

      {/* FEATURES BAR */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-10 pb-16">
        <div
          className="rounded-sm px-8 py-8 grid grid-cols-5 gap-6"
          style={{
            background: "linear-gradient(180deg, rgba(20,20,50,0.7), rgba(10,10,30,0.85))",
            border: `1px solid ${gold}55`,
            boxShadow: `0 0 40px rgba(0,0,0,0.6), inset 0 0 30px rgba(212,175,122,0.05)`,
          }}
        >
          {features.map((f, i) => (
            <div key={f.title} className="flex gap-4 relative">
              {i > 0 && (
                <span
                  className="absolute -left-3 top-2 bottom-2 w-px"
                  style={{ background: `linear-gradient(to bottom, transparent, ${gold}55, transparent)` }}
                />
              )}
              <div
                className="shrink-0 rounded-full flex items-center justify-center"
                style={{
                  width: 56,
                  height: 56,
                  border: `1px solid ${gold}`,
                  color: goldBright,
                  boxShadow: `0 0 15px rgba(212,175,122,0.2), inset 0 0 10px rgba(212,175,122,0.08)`,
                }}
              >
                <svg width="40" height="40" viewBox="0 0 48 48">{f.icon}</svg>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: goldBright,
                    fontSize: 13,
                    letterSpacing: "0.15em",
                    fontWeight: 600,
                  }}
                  className="mb-2"
                >
                  {f.title}
                </h3>
                <p style={{ color: "#a9a189", fontSize: 12, lineHeight: 1.6 }}>{f.body}</p>
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
                style={{ color: "#c9c1a8" }}
              >
                {l}
              </a>
              {i < footerLinks.length - 1 && <Star size={7} className="text-[color:var(--gold)]" />}
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
        <p className="text-center text-[11px] tracking-[0.2em]" style={{ color: "#8a8371" }}>
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
