import { createFileRoute, Link } from "@tanstack/react-router";

import {
  SiteNav,
  StarfieldBackdrop,
  SiteFooter,
  Flourish,
  Divider,
  Star,
  midnight,
  deepSpace,
  gold,
  goldBright,
  ivory,
  mystic,
} from "@/components/SiteChrome";

const cardImg = "/images/temperance-card.jpg";

function SparkleIcon({ size = 24, className = "", delay = "0s" }: { size?: number; className?: string; delay?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={`ss-twinkle ${className}`}
      style={{
        animationDelay: delay,
        color: goldBright,
        filter: "drop-shadow(0 0 8px rgba(241,210,122,0.75))",
      }}
    >
      <path
        d="M20 2 C 21.5 13, 25 17.5, 37 20 C 25 22.5, 21.5 27, 20 38 C 18.5 27, 15 22.5, 3 20 C 15 17.5, 18.5 13, 20 2 Z"
        fill="currentColor"
      />
      <circle cx="20" cy="20" r="2.4" fill="#fff6dc" />
    </svg>
  );
}

function CornerFlourish({ rotate, className = "" }: { rotate: number; className?: string }) {
  return (
    <svg
      aria-hidden
      width={104}
      height={104}
      viewBox="0 0 100 100"
      fill="none"
      className={`absolute pointer-events-none ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        color: gold,
        filter: "drop-shadow(0 0 6px rgba(212,175,55,0.4))",
      }}
    >
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 64 C 4 30, 30 4, 64 4" opacity="0.9" />
        <path d="M13 78 C 13 42, 42 13, 78 13" opacity="0.5" />
        <path d="M26 54 C 30 42, 42 30, 54 26" opacity="0.7" />
        <path d="M54 26 c 9 -7, 18 -3, 15 5 c -2 6, -10 5, -10 -1 c 0 -5, 6 -8, 11 -6" opacity="0.85" />
        <path d="M26 54 c -7 9, -3 18, 5 15 c 6 -2, 5 -10, -1 -10 c -5 0, -8 6, -6 11" opacity="0.85" />
        <path d="M34 88 C 46 94, 62 93, 74 84" opacity="0.45" />
        <path d="M88 34 C 94 46, 93 62, 84 74" opacity="0.45" />
      </g>
      <circle cx="9" cy="9" r="2.2" fill="currentColor" opacity="0.95" />
      <path
        d="M24 24 l1.6 4.6 4.6 1.6 -4.6 1.6 -1.6 4.6 -1.6 -4.6 -4.6 -1.6 4.6 -1.6 z"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Online Tarot Readings & Daily Guidance | Soul Seeker Tarot" },
      {
        name: "description",
        content:
          "Explore Soul Seeker Tarot for online tarot readings, including daily one-card guidance, three-card spreads, and relationship and career insight.",
      },
      { property: "og:title", content: "Online Tarot Readings & Daily Guidance | Soul Seeker Tarot" },
      {
        property: "og:description",
        content: "Where ancient wisdom meets modern intuition. Personalised tarot readings, custom decks and a journal for your soul's journey.",
      },
      { property: "og:url", content: "https://www.soulseekertarot.com/" },
    ],
    links: [{ rel: "canonical", href: "https://www.soulseekertarot.com/" }],
  }),
  component: HomePage,
});

function HomePage() {
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

      {/* BANNER HEADER (matches Features page style) */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-28 ss-top-mobile pb-8 text-center">
        <Flourish label="WELCOME" />
        <h1
          className="mt-4 ss-h1-mobile"
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
          Soul Seeker Tarot:
          <br />
          Online Readings for Reflection
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
          Step into a sanctuary of tarot, reflection and celestial insight —
          <br />
          crafted for the seeker in you.
        </p>
      </section>

      {/* HERO CONTENT — Tarot card + intro */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-24 grid grid-cols-[minmax(260px,340px)_1fr] gap-8 md:gap-16 items-center">
        <div className="relative mx-auto md:mx-0 max-w-[280px] md:max-w-none">
          <img
            src={cardImg}
            alt="Featured tarot card"
            title="Soul Seeker Tarot card"
            className="w-full h-auto rounded-[14px]"
            style={{
              boxShadow:
                "0 30px 80px rgba(124,77,255,0.35), 0 0 0 1px rgba(241,210,122,0.35)",
              filter: "drop-shadow(0 30px 80px rgba(124,77,255,0.25))",
            }}
          />
        </div>

        <div className="text-center md:text-left">
          <h2
            className="ss-h2-mobile"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: gold,
              fontSize: 44,
              lineHeight: 1.1,
              fontWeight: 500,
              letterSpacing: "0.02em",
            }}
          >
            Your daily tarot reading begins here.
          </h2>
          <p
            className="mt-6 mx-auto md:mx-0"
            style={{ color: ivory, fontSize: 15, lineHeight: 1.85, opacity: 0.85, maxWidth: 560 }}
          >
            Explore online tarot readings designed for reflection and clarity. Begin with
            a daily one-card reading, explore a three-card spread, or reflect on relationship
            and career questions. Soul Seeker brings traditional tarot card meanings into a
            modern, intuitive space, with personalised readings, a journal, and tools to
            support your journey.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 items-center justify-center md:justify-start">
            <Link
              to="/features"
              className="inline-flex items-center opacity-90 hover:opacity-100 transition-opacity underline underline-offset-[6px]"
              style={{
                color: mystic,
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 17,
                fontWeight: 500,
                letterSpacing: "0.02em",
                textDecorationColor: "rgba(200,185,232,0.35)",
              }}
            >
              Explore features
            </Link>
            <a
              href="https://app.soulseekertarot.com"
              className="ss-gold-button inline-flex items-center justify-center px-9 py-3.5 text-[12px] tracking-[0.28em] transition-transform hover:scale-[1.03]"
              style={{
                color: midnight,
                background: `linear-gradient(135deg, #ffe9a8 0%, ${goldBright} 45%, ${gold} 100%)`,
                borderRadius: 999,
                fontWeight: 700,
                border: "1px solid rgba(255,236,180,0.7)",
              }}
            >
              <span style={{ position: "relative", zIndex: 1 }}>
                OPEN SOUL SEEKER APP
              </span>
            </a>
          </div>
        </div>
      </section>


      {/* SOUL SEEKER IS NOW LIVE — ANNOUNCEMENT */}
      <section className="relative z-10 max-w-[980px] mx-auto px-4 sm:px-6 lg:px-10 pb-24">
        <div
          className="relative text-center px-6 py-12 sm:px-16 sm:py-16"
          style={{
            borderRadius: 30,
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(13,25,48,0.85) 0%, rgba(9,20,34,0.6) 100%)",
            boxShadow:
              "0 24px 70px rgba(0,0,0,0.45), inset 0 0 80px rgba(212,175,55,0.05)",
            backdropFilter: "blur(6px)",
          }}
        >
          {/* Flourished double hairline (no boxy frame) */}
          <span
            aria-hidden
            className="absolute pointer-events-none"
            style={{ inset: 0, borderRadius: 30, border: "1px solid rgba(212,175,55,0.45)" }}
          />
          <span
            aria-hidden
            className="absolute pointer-events-none"
            style={{ inset: 9, borderRadius: 22, border: "1px solid rgba(241,210,122,0.22)" }}
          />

          {/* Ornamental corner filigree */}
          <CornerFlourish rotate={0} className="-top-5 -left-5" />
          <CornerFlourish rotate={90} className="-top-5 -right-5" />
          <CornerFlourish rotate={180} className="-bottom-5 -right-5" />
          <CornerFlourish rotate={270} className="-bottom-5 -left-5" />

          <Flourish label="NOW LIVE" />

          {/* Twinkling stars around the headline */}
          <span aria-hidden className="absolute ss-twinkle" style={{ top: "26%", left: "8%", color: goldBright, animationDelay: "0.2s" }}><Star size={14} /></span>
          <span aria-hidden className="absolute ss-twinkle" style={{ top: "20%", left: "14%", color: "#a9c7ff", animationDelay: "1.6s", animationDuration: "5.2s" }}><Star size={9} /></span>
          <span aria-hidden className="absolute ss-twinkle" style={{ top: "30%", right: "8%", color: goldBright, animationDelay: "0.9s" }}><Star size={14} /></span>
          <span aria-hidden className="absolute ss-twinkle" style={{ top: "22%", right: "15%", color: "#c48bff", animationDelay: "2.4s", animationDuration: "6s" }}><Star size={9} /></span>
          <span aria-hidden className="absolute ss-twinkle" style={{ top: "58%", left: "6%", color: gold, animationDelay: "1.1s", animationDuration: "5.5s" }}><Star size={10} /></span>
          <span aria-hidden className="absolute ss-twinkle" style={{ top: "56%", right: "6%", color: gold, animationDelay: "3s" }}><Star size={10} /></span>
          <span aria-hidden className="absolute ss-twinkle" style={{ bottom: "12%", left: "16%", color: "#a9c7ff", animationDelay: "0.6s", animationDuration: "4.8s" }}><Star size={8} /></span>
          <span aria-hidden className="absolute ss-twinkle" style={{ bottom: "14%", right: "17%", color: goldBright, animationDelay: "2s", animationDuration: "5.8s" }}><Star size={8} /></span>

          <div className="relative mt-5 flex items-center justify-center gap-5 sm:gap-10">
            <img
              src="/images/the-star.jpg"
              alt="The Star tarot card"
              title="The Star — Soul Seeker Tarot"
              className="ss-decor-mobile ss-card-float hidden sm:block"
              style={{
                width: 96,
                borderRadius: 10,
                border: "1px solid rgba(241,210,122,0.55)",
                boxShadow: "0 12px 34px rgba(0,0,0,0.5), 0 0 24px rgba(212,175,55,0.25)",
                transform: "rotate(-5deg)",
                animationDelay: "1.4s",
              }}
            />
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <SparkleIcon size={26} className="hidden sm:block" />
              <h2
                className="ss-h2-mobile"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 42,
                  lineHeight: 1.15,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  background: `linear-gradient(115deg, ${goldBright} 0%, #fff3cf 28%, ${gold} 58%, ${goldBright} 85%)`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 22px rgba(241,210,122,0.35))",
                }}
              >
                Soul Seeker Tarot is now LIVE on the web
              </h2>
              <SparkleIcon size={26} className="hidden sm:block" delay="1.8s" />
            </div>
            <img
              src="/images/the-chariot.jpg"
              alt="The Chariot tarot card"
              title="The Chariot — Soul Seeker Tarot"
              className="ss-decor-mobile ss-card-float hidden sm:block"
              style={{
                width: 96,
                borderRadius: 10,
                border: "1px solid rgba(241,210,122,0.55)",
                boxShadow: "0 12px 34px rgba(0,0,0,0.5), 0 0 24px rgba(212,175,55,0.25)",
                transform: "rotate(5deg)",
                animationDelay: "3.2s",
              }}
            />
          </div>

          <Divider width={90} />

          <p
            className="mx-auto italic"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: mystic,
              fontSize: 19,
              lineHeight: 1.7,
              maxWidth: 620,
            }}
          >
            You can now use Soul Seeker Tarot directly through our web app, with access to:
          </p>

          <ul className="mx-auto mt-7 max-w-[540px] text-left space-y-3">
            {[
              "Tarot readings and insights",
              "Custom tarot card creation",
              "Reading and Custom Card credit packs",
              "Seeker, Pathfinder and Navigator subscriptions",
              "Your saved readings and custom decks",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 shrink-0" style={{ color: goldBright }}>
                  <Star size={11} className="ss-twinkle" />
                </span>
                <span style={{ color: ivory, fontSize: 16, lineHeight: 1.65, opacity: 0.92 }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
