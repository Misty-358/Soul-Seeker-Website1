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

const features = [
  {
    title: "INTUITIVE READINGS",
    body: "Choose from a variety of spreads or create your own. Get in-depth, personalised insights that speak to your unique path.",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 34l4-18 8 2-4 18z" transform="rotate(-14 20 24)" />
        <path d="M20 32l4-18 8 2-4 18z" />
        <path d="M26 34l4-18 8 2-4 18z" transform="rotate(14 32 24)" />
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
        <rect x="10" y="12" width="28" height="26" rx="3" />
        <path d="M10 20h28" />
        <path d="M16 10v6M32 10v6" />
        <path d="M28 30a5 5 0 1 1-5-5 4 4 0 0 0 5 5z" fill="currentColor" stroke="none" opacity="0.9" />
      </g>
    ),
  },
  {
    title: "SOUL SEEKER INSIGHTS",
    body: "Receive summaries of your past readings, recurring themes and personalised guidance tailored for you.",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="22" r="10" />
        <path d="M16 34h16M14 34c2-3 5-4 10-4s8 1 10 4" />
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
        <path d="M24 10l1.6 6.4L32 18l-6.4 1.6L24 26l-1.6-6.4L16 18l6.4-1.6z" fill={iconGold} stroke="none" />
        <path d="M13 14l.6 1.8L15.4 16.4l-1.8.6L13 18.8l-.6-1.8L10.6 16.4l1.8-.6z" fill="currentColor" stroke="none" />
        <path d="M35 14l.6 1.8L37.4 16.4l-1.8.6L35 18.8l-.6-1.8L32.6 16.4l1.8-.6z" fill="currentColor" stroke="none" />
        <path d="M14 32l.6 1.8L16.4 34.4l-1.8.6L14 36.8l-.6-1.8L11.6 34.4l1.8-.6z" fill="currentColor" stroke="none" />
        <path d="M34 32l.6 1.8L36.4 34.4l-1.8.6L34 36.8l-.6-1.8L31.6 34.4l1.8-.6z" fill="currentColor" stroke="none" />
        <path d="M24 36l.4 1.2L25.6 37.6l-1.2.4L24 39.2l-.4-1.2L22.4 37.6l1.2-.4z" fill="currentColor" stroke="none" />
      </g>
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

      <SiteFooter />
    </div>
  );
}
