import { createFileRoute } from "@tanstack/react-router";
import nebulaLeft from "@/assets/nebula-left.jpg";
import nebulaRight from "@/assets/nebula-right.jpg";
import logoAsset from "@/assets/soul-seeker-icon.jpeg.asset.json";
import archAsset from "@/assets/mystic-arch.png.asset.json";
const logo = logoAsset.url;
const archImg = archAsset.url;

export const Route = createFileRoute("/")({
  component: Features,
});

// Soul Seeker brand tokens
const midnight = "#050816";
const deepSpace = "#091422";
const gold = "#d4af37";
const goldSoft = "#c9a75d";
const goldBright = "#f1d27a";
const ivory = "#d8e3f7";
const mystic = "#c8b9e8";
const iconGold = goldBright;

const navItems = ["HOME", "FEATURES", "INTRODUCTION", "ABOUT", "CONTACT US"];
const activeNav = "FEATURES";

const features = [
  {
    title: "INTUITIVE READINGS",
    body: "Choose from a variety of spreads or create your own. Get in-depth, personalised insights that speak to your unique path.",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        {/* fanned tarot cards */}
        <path d="M14 34l4-18 8 2-4 18z" transform="rotate(-14 20 24)" />
        <path d="M20 32l4-18 8 2-4 18z" />
        <path d="M26 34l4-18 8 2-4 18z" transform="rotate(14 32 24)" />
        {/* star on center card */}
        <path d="M24 22l.6 1.8L26.4 24l-1.8.6L24 26.4l-.6-1.8L21.6 24l1.8-.6z" fill="currentColor" stroke="none" />
        <circle cx="24" cy="27" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="24" cy="19" r="0.6" fill="currentColor" stroke="none" />
      </g>
    ),
  },
  {
    title: "CUSTOM DECK CREATION",
    body: "Design your own tarot decks with AI-powered creation. Bring your vision to life and make it truly yours.",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* ornate lotus */}
        <path d="M24 34c0-6 4-10 10-10-2 6-6 10-10 10z" />
        <path d="M24 34c0-6-4-10-10-10 2 6 6 10 10 10z" />
        <path d="M24 34c0-7 3-12 6-14-1 6-3 11-6 14z" />
        <path d="M24 34c0-7-3-12-6-14 1 6 3 11 6 14z" />
        <path d="M24 34c0-8 0-14 0-16 0 2 0 8 0 16z" />
        <path d="M18 34h12" />
        <circle cx="24" cy="16" r="0.8" fill="currentColor" stroke="none" />
      </g>
    ),
  },
  {
    title: "SAVE & REFLECT",
    body: "Save your readings, decks and notes in your personal space and reflect on your growth over time.",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* cloud with up arrow */}
        <path d="M14 30a6 6 0 0 1 4-10 8 8 0 0 1 15 2 5 5 0 0 1-2 10H16a5 5 0 0 1-2-2z" />
        <path d="M24 34v-8M20 30l4-4 4 4" />
        <circle cx="16" cy="16" r="0.6" fill="currentColor" stroke="none" />
        <circle cx="34" cy="18" r="0.6" fill="currentColor" stroke="none" />
      </g>
    ),
  },
  {
    title: "CALENDAR & JOURNAL",
    body: "Track your daily readings, moods and milestones. Your journey, beautifully organised.",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* calendar */}
        <rect x="10" y="12" width="28" height="26" rx="3" />
        <path d="M10 20h28" />
        <path d="M16 10v6M32 10v6" />
        {/* crescent moon inside */}
        <path d="M28 30a5 5 0 1 1-5-5 4 4 0 0 0 5 5z" fill="currentColor" stroke="none" opacity="0.9" />
      </g>
    ),
  },
  {
    title: "SOUL SEEKER INSIGHTS",
    body: "Receive summaries of your past readings, recurring themes and personalised guidance tailored for you.",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* crystal ball on stand */}
        <circle cx="24" cy="22" r="10" />
        <path d="M16 34h16M14 34c2-3 5-4 10-4s8 1 10 4" />
        {/* inner stars */}
        <path d="M24 18l.6 1.8L26.4 20l-1.8.6L24 22.4l-.6-1.8L21.6 20l1.8-.6z" fill={iconGold} stroke="none" />
        <circle cx="20" cy="24" r="0.7" fill="currentColor" stroke="none" />
        <circle cx="28" cy="25" r="0.7" fill="currentColor" stroke="none" />
        <circle cx="26" cy="16" r="0.5" fill="currentColor" stroke="none" />
      </g>
    ),
  },
  {
    title: "YEAR AHEAD READING",
    body: "Receive a personalised 12-month tarot forecast, exploring themes, opportunities and lessons for the year ahead.",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {/* central 8-point star */}
        <path d="M24 10l1.6 6.4L32 18l-6.4 1.6L24 26l-1.6-6.4L16 18l6.4-1.6z" fill={iconGold} stroke="none" />
        {/* surrounding small stars */}
        <path d="M13 14l.6 1.8L15.4 16.4l-1.8.6L13 18.8l-.6-1.8L10.6 16.4l1.8-.6z" fill="currentColor" stroke="none" />
        <path d="M35 14l.6 1.8L37.4 16.4l-1.8.6L35 18.8l-.6-1.8L32.6 16.4l1.8-.6z" fill="currentColor" stroke="none" />
        <path d="M14 32l.6 1.8L16.4 34.4l-1.8.6L14 36.8l-.6-1.8L11.6 34.4l1.8-.6z" fill="currentColor" stroke="none" />
        <path d="M34 32l.6 1.8L36.4 34.4l-1.8.6L34 36.8l-.6-1.8L31.6 34.4l1.8-.6z" fill="currentColor" stroke="none" />
        <path d="M24 36l.4 1.2L25.6 37.6l-1.2.4L24 39.2l-.4-1.2L22.4 37.6l1.2-.4z" fill="currentColor" stroke="none" />
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

function Divider({ width = 80 }: { width?: number }) {
  return (
    <div className="flex items-center justify-center gap-3 my-4" style={{ color: gold }}>
      <span className="h-px" style={{ width, background: `linear-gradient(to right, transparent, ${gold})` }} />
      <Star size={10} />
      <span className="h-px" style={{ width, background: `linear-gradient(to left, transparent, ${gold})` }} />
    </div>
  );
}

function Flourish() {
  return (
    <div className="flex items-center justify-center gap-3" style={{ color: goldSoft }}>
      <span style={{ fontSize: 10 }}>◆</span>
      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: gold,
          letterSpacing: "0.35em",
          fontSize: 14,
        }}
      >
        FEATURES
      </span>
      <span style={{ fontSize: 10 }}>◆</span>
    </div>
  );
}

function Features() {
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
      {/* nebulae flanking */}
      <img
        src={nebulaLeft}
        aria-hidden
        alt=""
        className="absolute left-0 top-16 h-[640px] w-auto opacity-60 pointer-events-none mix-blend-screen"
        style={{
          filter: "blur(8px)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 75%)",
          maskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 75%)",
        }}
      />
      <img
        src={nebulaRight}
        aria-hidden
        alt=""
        className="absolute right-0 top-16 h-[640px] w-auto opacity-60 pointer-events-none mix-blend-screen"
        style={{
          filter: "blur(8px)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 75%)",
          maskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 75%)",
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
            <img
              src={logo}
              alt="Soul Seeker logo"
              width={56}
              height={56}
              className="drop-shadow-[0_0_12px_rgba(241,210,122,0.35)]"
            />
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
            {navItems.map((item) => {
              const isActive = item === activeNav;
              return (
                <a
                  key={item}
                  href="#"
                  className="relative text-[12px] tracking-[0.28em] transition-colors"
                  style={{ color: isActive ? goldBright : ivory, fontWeight: 500 }}
                >
                  {item}
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute left-1/2 -translate-x-1/2 -bottom-2 block h-[2px] w-6 rounded-full"
                      style={{ background: goldBright, boxShadow: `0 0 10px ${goldBright}` }}
                    />
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      {/* HEADING */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-10 pt-36 pb-8 text-center">
        <Flourish />
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

      {/* FEATURES CONTENT */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-10 pb-20 grid grid-cols-[minmax(280px,360px)_1fr] gap-14 items-center">
        {/* Art (blends into background) */}
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

        {/* Features grid 3x2 */}
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
                <h3
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
                </h3>
                <p style={{ color: ivory, fontSize: 13, lineHeight: 1.75, opacity: 0.8 }}>
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING QUOTE */}
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
          Whether you seek answers, clarity, healing or growth,
          <br />
          Soul Seeker has everything you need to walk your path with confidence.
        </p>
        <div className="mt-6">
          <Divider width={60} />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 max-w-[1400px] mx-auto px-10 pb-10">
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
              {i < footerLinks.length - 1 && (
                <span style={{ color: goldSoft }}>
                  <Star size={7} />
                </span>
              )}
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
          © 2024 Soul Seeker. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function SocialIcon({ name }: { name: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
  } as const;
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
          <path d="M4 4l7 9-7 7h2l6-6 5 6h4l-7.5-9L20 4h-2l-5 5-4-5z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    default:
      return null;
  }
}
