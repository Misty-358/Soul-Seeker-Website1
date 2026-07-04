import { createFileRoute } from "@tanstack/react-router";
import aceAsset from "@/assets/ace-of-swords.jpg.asset.json";
import chariotAsset from "@/assets/the-chariot.jpg.asset.json";
import strengthAsset from "@/assets/strength.jpg.asset.json";
import temperanceAsset from "@/assets/temperance-tarot.jpg.asset.json";
import justiceAsset from "@/assets/justice.jpg.asset.json";
import starAsset from "@/assets/the-star.jpg.asset.json";
import moonAsset from "@/assets/moon-mountains.png.asset.json";
import flourishAsset from "@/assets/mystic-flourish.jpg.asset.json";
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
  { src: aceAsset.url, name: "ACE OF SWORDS" },
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
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <defs>
        <radialGradient id="orb" cx="40%" cy="35%">
          <stop offset="0%" stopColor="#fff8dc" />
          <stop offset="55%" stopColor="#c9a75d" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#050816" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="16" cy="16" r="9" fill="url(#orb)" stroke="#f1d27a" strokeWidth="0.8" />
      <path d="M16 3l0.7 3.5L20 7l-3.3 0.7L16 11l-0.7-3.3L12 7l3.3-.5z" fill="#f1d27a" />
      <circle cx="16" cy="26" r="1" fill="#f1d27a" />
    </svg>
  );
}

function LotusIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#f1d27a" strokeWidth="1.1">
      <path d="M17 24c-6 0-9-4-9-4s3-6 9-6 9 6 9 6-3 4-9 4z" fill="rgba(241,210,122,0.12)" />
      <path d="M17 24V10" />
      <path d="M17 12c-2-3-6-3-6-3s0 5 3 7" />
      <path d="M17 12c2-3 6-3 6-3s0 5-3 7" />
      <circle cx="17" cy="24" r="1.5" fill="#f1d27a" />
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
        className="pointer-events-none select-none absolute left-0 top-24 z-0"
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
      <section className="relative z-10 max-w-[1400px] mx-auto px-10 pt-36 pb-6 text-center">
        <Flourish label="WELCOME" />
        <h1
          className="mt-4"
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
          className="mx-auto italic"
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
      <section className="relative z-10 max-w-[1300px] mx-auto px-10 mt-10">
        <div
          className="relative rounded-[18px] p-10"
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
                <h3
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
                </h3>
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
              <p
                className="uppercase mb-2"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: goldBright,
                  letterSpacing: "0.28em",
                  fontSize: 12,
                }}
              >
                ✦ Take-Away Summary from the Last 3 Days
              </p>
              <p style={{ color: ivory, fontSize: 12.5, lineHeight: 1.75, opacity: 0.8 }}>
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
            <div />
          </div>
        </div>
      </section>

      {/* SECTION 2 — Create Your Tarot Masterpiece */}
      <section className="relative z-10 max-w-[1300px] mx-auto px-10 mt-10 mb-16">
        <div
          className="relative rounded-[18px] p-10"
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
                <h3
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
                </h3>
              </div>
              <Divider width={40} />
              <p
                className="mt-4"
                style={{ color: ivory, fontSize: 14, lineHeight: 1.8, opacity: 0.85 }}
              >
                Unleash your creativity in the App Builder and design your very own Tarot deck.
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
      <section className="relative z-10 max-w-[1400px] mx-auto px-10 pb-10 text-center">
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
            Whether you seek answers, clarity, healing or growth,{" "}
            <span style={{ color: goldBright }}>Soul Seeker</span> has everything you need to walk
            your path with confidence.
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
