import { createFileRoute } from "@tanstack/react-router";
const aceAsset = { url: "/images/ace-of-swords.jpg" };
const aceOfCupsAsset = { url: "/images/ace-of-cups.png" };
const chariotAsset = { url: "/images/the-chariot.jpg" };
const strengthAsset = { url: "/images/strength.jpg" };
const temperanceAsset = { url: "/images/temperance-tarot.jpg" };
const justiceAsset = { url: "/images/justice.jpg" };
const starAsset = { url: "/images/the-star.jpg" };
const moonAsset = { url: "/images/moon-mountains.png" };
const flourishAsset = { url: "/images/mystic-flourish.jpg" };
import {
  SiteNav,
  StarfieldBackdrop,
  SiteFooter,
  Flourish,
  Divider,
  midnight,
  deepSpace,
  gold,
  goldBright,
  goldSoft,
  ivory,
  mystic,
} from "@/components/SiteChrome";

export const Route = createFileRoute("/introduction")({
  head: () => ({
    meta: [
      { title: "Introduction — Soul Seeker" },
      {
        name: "description",
        content:
          "Welcome to Soul Seeker — your sacred space for insight, creativity and transformation.",
      },
      { property: "og:title", content: "Introduction — Soul Seeker" },
      {
        property: "og:description",
        content: "A sacred space for insight, creativity and transformation.",
      },
    ],
  }),
  component: IntroductionPage,
});

const fanCards = [
  { src: aceOfCupsAsset.url, name: "ACE OF CUPS" },
  { src: chariotAsset.url, name: "THE CHARIOT" },
  { src: strengthAsset.url, name: "STRENGTH" },
  { src: temperanceAsset.url, name: "TEMPERANCE" },
  { src: justiceAsset.url, name: "JUSTICE" },
  { src: starAsset.url, name: "THE STAR" },
];

function SectionEmblem({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="shrink-0 flex items-center justify-center"
      style={{
        width: 64,
        height: 64,
        borderRadius: "50%",
        border: `1px solid ${goldSoft}`,
        background:
          "radial-gradient(circle at 30% 30%, rgba(241,210,122,0.18), rgba(9,20,34,0.6) 70%)",
        boxShadow: "0 0 24px rgba(241,210,122,0.25), inset 0 0 20px rgba(241,210,122,0.15)",
        color: goldBright,
      }}
    >
      {children}
    </div>
  );
}

function OrbIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
      <defs>
        <radialGradient id="orbFill" cx="38%" cy="32%" r="70%">
          <stop offset="0%" stopColor="#fff8dc" />
          <stop offset="30%" stopColor="#f6d97a" stopOpacity="0.85" />
          <stop offset="70%" stopColor="#a5793a" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#050816" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="orbStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff2c2" />
          <stop offset="50%" stopColor="#f1d27a" />
          <stop offset="100%" stopColor="#8a6323" />
        </linearGradient>
        <radialGradient id="orbShine" cx="30%" cy="25%" r="30%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* filigree crescent */}
      <path
        d="M8 24c0-8.8 7.2-16 16-16 3 0 5.7.8 8 2.2C26.8 8.7 22.3 12 20 17.5c-2.8 6.6 0.4 14 7 17 1.9.8 3.9 1.2 5.8 1.1C29.9 38.4 26.1 40 22 40c-8.8 0-14-7.2-14-16z"
        fill="url(#orbStroke)"
        opacity="0.18"
      />
      {/* orb */}
      <circle cx="24" cy="24" r="11" fill="url(#orbFill)" stroke="url(#orbStroke)" strokeWidth="1.1" />
      <circle cx="24" cy="24" r="11" fill="url(#orbShine)" />
      {/* base stand */}
      <path d="M17 34c1.5 2 4 3 7 3s5.5-1 7-3" stroke="url(#orbStroke)" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M20 36l4 3 4-3" stroke="url(#orbStroke)" strokeWidth="1" strokeLinecap="round" fill="none" />
      <circle cx="24" cy="40" r="1.4" fill="#f1d27a" />
      {/* sparkles */}
      <path d="M40 10l.7 2.4L43 13l-2.3.7L40 16l-.7-2.3L37 13l2.3-.6z" fill="#f1d27a" />
      <path d="M9 12l.5 1.6L11 14l-1.5.5L9 16l-.5-1.5L7 14l1.5-.4z" fill="#fff3c4" />
      <path d="M42 30l.4 1.4L44 32l-1.6.4L42 34l-.4-1.6L40 32l1.6-.4z" fill="#f1d27a" />
      <circle cx="14" cy="34" r="0.9" fill="#fff3c4" />
      <circle cx="36" cy="42" r="0.9" fill="#f1d27a" />
    </svg>
  );
}

function LotusIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="petalGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff2c2" />
          <stop offset="55%" stopColor="#f1d27a" />
          <stop offset="100%" stopColor="#7c561f" />
        </linearGradient>
        <linearGradient id="petalGoldSoft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7e2a2" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#8a6323" stopOpacity="0.85" />
        </linearGradient>
        <radialGradient id="petalGlow" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor="#fff5cc" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#f1d27a" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* soft aura */}
      <ellipse cx="24" cy="30" rx="20" ry="10" fill="url(#petalGlow)" />
      {/* water line */}
      <path d="M4 36c4 1.5 8 1.5 12 0s8-1.5 12 0 8 1.5 12 0" stroke="#f1d27a" strokeWidth="0.7" opacity="0.55" fill="none" />
      <path d="M6 39c4 1.2 7 1.2 11 0s8-1.2 12 0 6 1.2 11 0" stroke="#f1d27a" strokeWidth="0.5" opacity="0.35" fill="none" />

      {/* outer back petals */}
      <path
        d="M24 32c-8-1-13-6-13-12 0 0 5 0 8 3 3 3 5 6 5 9z"
        fill="url(#petalGoldSoft)"
        stroke="#f1d27a"
        strokeWidth="0.8"
      />
      <path
        d="M24 32c8-1 13-6 13-12 0 0-5 0-8 3-3 3-5 6-5 9z"
        fill="url(#petalGoldSoft)"
        stroke="#f1d27a"
        strokeWidth="0.8"
      />

      {/* mid petals */}
      <path
        d="M24 33c-6-1-10-5-11-11 0 0 4 1 7 4s4 5 4 7z"
        fill="url(#petalGold)"
        stroke="#fff3c4"
        strokeWidth="0.5"
        opacity="0.95"
      />
      <path
        d="M24 33c6-1 10-5 11-11 0 0-4 1-7 4s-4 5-4 7z"
        fill="url(#petalGold)"
        stroke="#fff3c4"
        strokeWidth="0.5"
        opacity="0.95"
      />

      {/* inner side petals */}
      <path
        d="M24 34c-4-.5-7-4-7-9 2 1 4 3 5 5s2 3 2 4z"
        fill="url(#petalGold)"
        stroke="#fff3c4"
        strokeWidth="0.5"
      />
      <path
        d="M24 34c4-.5 7-4 7-9-2 1-4 3-5 5s-2 3-2 4z"
        fill="url(#petalGold)"
        stroke="#fff3c4"
        strokeWidth="0.5"
      />

      {/* center petal */}
      <path
        d="M24 34c-2.6 0-4.5-2.2-4.5-6 0-3 2-6.5 4.5-9 2.5 2.5 4.5 6 4.5 9 0 3.8-1.9 6-4.5 6z"
        fill="url(#petalGold)"
        stroke="#fff3c4"
        strokeWidth="0.6"
      />
      {/* pistil dot */}
      <circle cx="24" cy="24" r="1.2" fill="#fff8dc" />

      {/* filigree tendrils */}
      <path d="M11 20c-1-2-1-4 0-6" stroke="#f1d27a" strokeWidth="0.6" fill="none" opacity="0.7" />
      <path d="M37 20c1-2 1-4 0-6" stroke="#f1d27a" strokeWidth="0.6" fill="none" opacity="0.7" />

      {/* sparkles */}
      <path d="M24 6l.6 2L26.5 8.5l-1.9.5L24 11l-.6-2L21.5 8.5l1.9-.5z" fill="#fff3c4" />
      <path d="M8 10l.4 1.4L9.8 12l-1.4.4L8 14l-.4-1.6L6.2 12l1.4-.4z" fill="#f1d27a" />
      <path d="M40 10l.4 1.4L41.8 12l-1.4.4L40 14l-.4-1.6L38.2 12l1.4-.4z" fill="#f1d27a" />
      <circle cx="14" cy="16" r="0.7" fill="#fff3c4" />
      <circle cx="34" cy="16" r="0.7" fill="#fff3c4" />
    </svg>
  );
}

function BulletStar() {
  return (
    <span aria-hidden style={{ color: goldBright, marginRight: 10 }}>
      ✦
    </span>
  );
}

function SideIcon({ variant }: { variant: "app" | "trophy" | "printer" | "gift" }) {
  const common = {
    width: 32,
    height: 32,
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "#f1d27a",
    strokeWidth: 1.3,
    strokeLinejoin: "round" as const,
    strokeLinecap: "round" as const,
  };
  switch (variant) {
    case "app":
      return (
        <svg {...common}>
          <rect x="9" y="3" width="14" height="26" rx="3" />
          <path d="M14 26h4" />
          <path d="M16 8l0.6 2.2L19 11l-2.4.7L16 14l-.6-2.3L13 11l2.4-.8z" fill="#f1d27a" />
        </svg>
      );
    case "trophy":
      return (
        <svg {...common}>
          <path d="M10 5h12v6a6 6 0 0 1-12 0z" />
          <path d="M10 7H6a3 3 0 0 0 4 5" />
          <path d="M22 7h4a3 3 0 0 1-4 5" />
          <path d="M13 17l-1 6h8l-1-6" />
          <path d="M10 27h12" />
        </svg>
      );
    case "printer":
      return (
        <svg {...common}>
          <path d="M8 12V5h16v7" />
          <rect x="5" y="12" width="22" height="10" rx="2" />
          <rect x="9" y="19" width="14" height="8" />
          <circle cx="23" cy="15" r="0.8" fill="#f1d27a" />
        </svg>
      );
    case "gift":
      return (
        <svg {...common}>
          <rect x="5" y="11" width="22" height="6" />
          <rect x="7" y="17" width="18" height="12" />
          <path d="M16 11v18" />
          <path d="M16 11c-3 0-5-1.5-5-4s2-3 3-3 2 2 2 4c0 2-.5 3 0 3z" />
          <path d="M16 11c3 0 5-1.5 5-4s-2-3-3-3-2 2-2 4c0 2 .5 3 0 3z" />
        </svg>
      );
  }
}

function IntroductionPage() {
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

      {/* Moon & mountains — left side backdrop */}
      <img
        src={moonAsset.url}
        alt=""
        aria-hidden
        className="ss-decor-mobile pointer-events-none select-none absolute left-0 top-24 z-0"
        style={{
          width: 360,
          height: "auto",
          opacity: 0.35,
          WebkitMaskImage:
            "linear-gradient(to right, black 35%, transparent 88%), linear-gradient(to bottom, black 80%, transparent 100%)",
          WebkitMaskComposite: "source-in",
          maskImage:
            "linear-gradient(to right, black 35%, transparent 88%), linear-gradient(to bottom, black 80%, transparent 100%)",
          maskComposite: "intersect",
          mixBlendMode: "screen",
        }}
      />

      <SiteNav />

      {/* BANNER HEADER */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-36 ss-top-mobile pb-6 text-center">
        <Flourish label="WELCOME" />
        <h1
          className="mt-4 ss-h1-mobile"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: gold,
            fontSize: 82,
            lineHeight: 1.02,
            fontWeight: 500,
            letterSpacing: "0.02em",
            textShadow: "0 0 40px rgba(241,210,122,0.25)",
          }}
        >
          Introduction
        </h1>
        <Divider width={90} />
        <p
          className="mx-auto italic ss-lead-mobile"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: mystic,
            fontSize: 20,
            lineHeight: 1.6,
            maxWidth: 720,
          }}
        >
          Welcome to Soul Seeker,
          <br />
          your sacred space for insight, creativity and transformation.
        </p>
      </section>


      {/* SECTION 1 — Personalised Insights */}
      <section className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10 mt-10">
        <div
          className="relative rounded-[18px] p-5 sm:p-8 lg:p-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(9,20,34,0.55) 0%, rgba(5,8,22,0.6) 100%)",
            border: `1px solid rgba(201,167,93,0.35)`,
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.4), inset 0 0 40px rgba(241,210,122,0.05)",
          }}
        >
          <div className="grid grid-cols-[340px_1fr_260px] gap-10 items-center">
            {/* Left copy */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <SectionEmblem>
                  <OrbIcon />
                </SectionEmblem>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: gold,
                    fontSize: 26,
                    lineHeight: 1.15,
                    letterSpacing: "0.02em",
                  }}
                >
                  Personalised Insights
                  <br />
                  Tailored to You
                </h2>
              </div>
              <Divider width={40} />
              <p
                className="mt-4"
                style={{ color: ivory, fontSize: 14, lineHeight: 1.8, opacity: 0.85 }}
              >
                Soul Seeker creates personally tailored summaries about your readings using any
                feedback or comments you add.
              </p>
              <p
                className="mt-4"
                style={{ color: ivory, fontSize: 14, lineHeight: 1.8, opacity: 0.85 }}
              >
                The more you share, the more aligned your insights become — highlighting recurring
                themes, offering guidance that&rsquo;s uniquely yours and supporting your journey
                with clarity and depth.
              </p>
            </div>

            {/* Center — example tarot card */}
            <div className="flex justify-center">
              <img
                src={aceAsset.url}
                alt="Ace of Swords tarot card"
                title="Soul Seeker card"
                className="rounded-[10px]"
                style={{
                  width: 200,
                  height: "auto",
                  boxShadow:
                    "0 20px 50px rgba(0,0,0,0.55), 0 0 0 1px rgba(241,210,122,0.4)",
                }}
              />
            </div>

            {/* Right — mystical flourish (replaces hands/tablet) */}
            <div className="relative">
              <img
                src={flourishAsset.url}
                alt=""
                aria-hidden
                className="w-full h-auto"
                style={{
                  opacity: 0.55,
                  filter: "drop-shadow(0 10px 30px rgba(241,210,122,0.25))",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 70% 80% at 50% 50%, black 55%, transparent 90%)",
                  maskImage:
                    "radial-gradient(ellipse 70% 80% at 50% 50%, black 55%, transparent 90%)",
                  mixBlendMode: "screen",
                }}
              />
            </div>
          </div>

          {/* Take-away summary + guidance below card */}
          <div className="grid grid-cols-[1fr_260px] gap-10 mt-8 pl-[380px]">
            <div>
              <div
                className="rounded-[14px] p-6"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(241,210,122,0.08) 0%, rgba(9,20,34,0.55) 100%)",
                  border: `1px solid ${goldSoft}`,
                  boxShadow:
                    "0 10px 40px rgba(0,0,0,0.45), inset 0 0 22px rgba(241,210,122,0.10), 0 0 24px rgba(241,210,122,0.15)",
                }}
              >
                <p
                  className="uppercase mb-3"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: goldBright,
                    letterSpacing: "0.28em",
                    fontSize: 13,
                  }}
                >
                  ✦ Example Take-away Summary from the last 3 days
                </p>
                <p style={{ color: ivory, fontSize: 12.5, lineHeight: 1.75, opacity: 0.85 }}>
                  You have successfully ignited the engines of destiny, moving from a long winter of
                  stagnation into a season of rapid, unstoppable momentum fueled by your own
                  hard-earned mastery. The path forward now asks you to leave your fortress behind and
                  step bravely into the unknown with an open heart.
                </p>

                <p
                  className="uppercase mt-6 mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: goldBright,
                    letterSpacing: "0.28em",
                    fontSize: 12,
                  }}
                >
                  ✦ Most Recent Guidance
                </p>
                <p style={{ color: ivory, fontSize: 12.5, lineHeight: 1.75, opacity: 0.8 }}>
                  You are standing at a threshold where the universe is finally matching your pace —
                  inviting you to tend to your clarity as you release the heavy attachment to how
                  things used to be.
                </p>
              </div>
            </div>

            <div />
          </div>
        </div>
      </section>

      {/* SECTION 2 — Create Your Tarot Masterpiece */}
      <section className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10 mt-10 mb-16">
        <div
          className="relative rounded-[18px] p-5 sm:p-8 lg:p-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(9,20,34,0.55) 0%, rgba(5,8,22,0.6) 100%)",
            border: `1px solid rgba(201,167,93,0.35)`,
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.4), inset 0 0 40px rgba(241,210,122,0.05)",
          }}
        >
          <div className="grid grid-cols-[280px_1fr_170px] gap-6 items-center">
            {/* Left copy */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <SectionEmblem>
                  <LotusIcon />
                </SectionEmblem>
                <h2
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: gold,
                    fontSize: 26,
                    lineHeight: 1.15,
                    letterSpacing: "0.02em",
                  }}
                >
                  Create Your
                  <br />
                  Tarot Masterpiece
                </h2>
              </div>
              <Divider width={40} />
              <p
                className="mt-4"
                style={{ color: ivory, fontSize: 14, lineHeight: 1.8, opacity: 0.85 }}
              >
                Unleash your creativity in the App "Card Customisation" area and design your very own Tarot deck.
              </p>
              <ul className="mt-4 space-y-2" style={{ color: ivory, fontSize: 13.5, opacity: 0.9 }}>
                <li><BulletStar />Use your deck in the app for your readings</li>
                <li><BulletStar />Compete with others on the leaderboard</li>
                <li><BulletStar />Print your masterpiece to keep, gift or share</li>
                <li><BulletStar />Inspire the Soul Seeker community</li>
              </ul>
            </div>

            {/* Fan of cards */}
            <div className="relative" style={{ height: 300 }}>
              <div className="absolute inset-0 flex items-end justify-center pb-4">
                {fanCards.map((c, i) => {
                  const total = fanCards.length;
                  const mid = (total - 1) / 2;
                  const rot = (i - mid) * 11;
                  const x = (i - mid) * 62;
                  const y = Math.abs(i - mid) * 10;
                  return (
                    <img
                      key={c.name}
                      src={c.src}
                      alt={c.name}
                      title="Cards that have been generated by the Soul Seeker app"
                      className="absolute rounded-[10px]"
                      style={{
                        width: 120,
                        height: "auto",
                        transform: `translate(${x}px, ${y}px) rotate(${rot}deg)`,
                        transformOrigin: "50% 100%",
                        boxShadow:
                          "0 22px 50px rgba(0,0,0,0.6), 0 0 0 1px rgba(241,210,122,0.5), 0 0 30px rgba(241,210,122,0.15)",
                        zIndex: 10 - Math.abs(i - mid),
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Right icon list */}
            <div className="flex flex-col gap-5">
              {[
                { v: "app" as const, label: "USE IN APP" },
                { v: "trophy" as const, label: "TOP\nLEADERBOARD" },
                { v: "printer" as const, label: "PRINT & GIFT" },
                { v: "gift" as const, label: "KEEP & TREASURE" },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-3">
                  <SideIcon variant={row.v} />
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: goldBright,
                      letterSpacing: "0.2em",
                      fontSize: 12,
                      whiteSpace: "pre-line",
                      lineHeight: 1.25,
                    }}
                  >
                    {row.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing line */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-10 text-center">
        <div className="flex items-center justify-center gap-4" style={{ color: goldSoft }}>
          <span
            className="h-px flex-1 max-w-[140px]"
            style={{ background: `linear-gradient(to right, transparent, ${gold})` }}
          />
          <span aria-hidden>✦</span>
          <p
            className="italic"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: ivory,
              fontSize: 20,
              opacity: 0.9,
            }}
          >
            Whether you seek insight, clarity, or personal growth,{" "}
            <span style={{ color: goldBright }}>Soul Seeker</span> is designed to support and guide
            you on your journey of self-discovery.
          </p>
          <span aria-hidden>✦</span>
          <span
            className="h-px flex-1 max-w-[140px]"
            style={{ background: `linear-gradient(to left, transparent, ${gold})` }}
          />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
