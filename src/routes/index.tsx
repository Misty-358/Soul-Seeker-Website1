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

const features = [
  {
    title: "TAROT READINGS",
    body: "In-depth, intuitive readings to guide your path.",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="14" y="10" width="20" height="28" rx="1.5" />
        <path d="M24 18l1.2 3.5H29l-2.9 2.1 1.1 3.5L24 25l-3.2 2.1 1.1-3.5-2.9-2.1h3.8z" />
      </g>
    ),
  },
  {
    title: "CUSTOM DECKS",
    body: "Create and connect with your own unique deck.",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M24 12c2 4 6 6 10 6-4 0-8 2-10 6-2-4-6-6-10-6 4 0 8-2 10-6z" />
        <path d="M24 20c1.5 3 4.5 4.5 7.5 4.5-3 0-6 1.5-7.5 4.5-1.5-3-4.5-4.5-7.5-4.5 3 0 6-1.5 7.5-4.5z" />
        <path d="M24 30c1 2 3 3 5 3-2 0-4 1-5 3-1-2-3-3-5-3 2 0 4-1 5-3z" />
      </g>
    ),
  },
  {
    title: "SAVE & REFLECT",
    body: "Keep your readings, insights and journey.",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="12" y="14" width="24" height="22" rx="1.5" />
        <path d="M12 20h24" />
        <path d="M18 12v5M30 12v5" />
        <circle cx="19" cy="26" r="1" fill="currentColor" />
        <circle cx="24" cy="26" r="1" fill="currentColor" />
        <circle cx="29" cy="26" r="1" fill="currentColor" />
        <circle cx="19" cy="31" r="1" fill="currentColor" />
        <circle cx="24" cy="31" r="1" fill="currentColor" />
      </g>
    ),
  },
  {
    title: "SOUL SEEKER INSIGHTS",
    body: "Receive summaries of your past readings and guidance tailored for you.",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <ellipse cx="24" cy="34" rx="10" ry="2" />
        <circle cx="24" cy="22" r="10" />
        <path d="M20 20c1-2 5-3 8-1" strokeLinecap="round" />
      </g>
    ),
  },
  {
    title: "YEAR AHEAD READING",
    body: "Receive a personalised 12-month tarot forecast, exploring themes, opportunities and lessons for the year ahead.",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M24 8v32M8 24h32" />
        <path d="M13 13l22 22M35 13L13 35" opacity="0.6" />
        <circle cx="24" cy="24" r="3" />
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
        className="absolute left-0 top-16 h-[720px] w-auto opacity-80 pointer-events-none mix-blend-screen"
      />
      <img
        src={nebulaRight}
        aria-hidden
        alt=""
        className="absolute right-0 top-16 h-[720px] w-auto opacity-80 pointer-events-none mix-blend-screen"
      />

      {/* NAV */}
      <header className="relative z-20 max-w-[1400px] mx-auto px-10 pt-6 flex items-center gap-8">
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
              filter: "drop-shadow(0 20px 60px rgba(100,80,200,0.4)) drop-shadow(0 0 40px rgba(232,201,135,0.25))",
            }}
          >
            <img
              src={cardImg}
              alt="Temperance tarot card"
              width={420}
              height={620}
              className="rounded-md"
              style={{ width: 420, height: "auto" }}
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
