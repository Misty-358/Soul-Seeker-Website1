import { createFileRoute, Link } from "@tanstack/react-router";

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
  ivory,
  mystic,
} from "@/components/SiteChrome";

const cardImg = "/images/temperance-card.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Soul Seeker — Where Ancient Wisdom Meets Modern Intuition" },
      {
        name: "description",
        content:
          "A luxury tarot and self-discovery platform. Personalised readings, custom decks and a journal for your journey.",
      },
      { property: "og:title", content: "Soul Seeker" },
      {
        property: "og:description",
        content: "Where ancient wisdom meets modern intuition.",
      },
    ],
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
      <section className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-36 ss-top-mobile pb-8 text-center">
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
          A Modern Path to
          <br />
          Timeless Wisdom
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
            Your journey of discovery begins here.
          </h2>
          <p
            className="mt-6 mx-auto md:mx-0"
            style={{ color: ivory, fontSize: 15, lineHeight: 1.85, opacity: 0.85, maxWidth: 560 }}
          >
            Soul Seeker brings the timeless art of tarot into a beautifully modern space —
            intuitive readings, a personal journal, and tools crafted to reveal what your
            soul already knows. Whether you seek clarity, direction, or a moment of stillness,
            you are welcome here.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 items-center justify-center md:justify-start">
            <Link
              to="/features"
              className="inline-flex items-center justify-center px-8 py-3 text-[12px] tracking-[0.28em] transition-all"
              style={{
                color: midnight,
                background: `linear-gradient(135deg, ${goldBright}, ${gold})`,
                borderRadius: 999,
                fontWeight: 600,
                boxShadow: "0 10px 30px rgba(241,210,122,0.3)",
              }}
            >
              EXPLORE FEATURES
            </Link>
            <Link
              to="/download"
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
                DOWNLOAD SOUL SEEKER APP
              </span>
            </Link>
          </div>
        </div>
      </section>


      {/* BETA PREVIEW SECTION */}
      <section className="relative z-10 max-w-[880px] mx-auto px-4 sm:px-6 lg:px-10 pb-24">
        <div
          className="mx-auto p-8 sm:p-10 text-center"
          style={{
            background: "rgba(9,20,34,0.6)",
            border: `1px solid rgba(241,210,122,0.35)`,
            borderRadius: 18,
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            backdropFilter: "blur(6px)",
          }}
        >
          <span
            className="inline-flex items-center px-3 py-1 text-[10px] tracking-[0.28em]"
            style={{
              color: midnight,
              background: `linear-gradient(135deg, ${goldBright}, ${gold})`,
              borderRadius: 999,
              fontWeight: 700,
            }}
          >
            BETA PREVIEW
          </span>
          <h2
            className="mt-5"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: gold,
              fontSize: 36,
              lineHeight: 1.15,
              fontWeight: 500,
              letterSpacing: "0.02em",
            }}
          >
            Soul Seeker Tarot is currently in beta testing.
          </h2>
          <Divider width={70} />
          <p
            className="mx-auto"
            style={{
              color: ivory,
              fontSize: 16,
              lineHeight: 1.8,
              opacity: 0.9,
              maxWidth: 640,
            }}
          >
            You are welcome to explore the preview version and experience the app before the
            official launch. Features, content and pricing may change during testing. We welcome
            feedback to help improve the experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
            <a
              href="https://app.soulseekertarot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 text-[12px] tracking-[0.28em] transition-transform hover:scale-[1.03]"
              style={{
                color: midnight,
                background: `linear-gradient(135deg, #ffe9a8 0%, ${goldBright} 45%, ${gold} 100%)`,
                borderRadius: 999,
                fontWeight: 700,
                border: "1px solid rgba(255,236,180,0.7)",
                boxShadow: "0 10px 30px rgba(241,210,122,0.3)",
              }}
            >
              TRY THE PREVIEW APP
            </a>
            <a
              href="mailto:admin@soulseekertarot.com?subject=Soul%20Seeker%20Beta%20Feedback"
              className="inline-flex items-center justify-center px-8 py-3 text-[12px] tracking-[0.28em] transition-all"
              style={{
                color: goldBright,
                background: "transparent",
                border: `1px solid ${goldBright}`,
                borderRadius: 999,
                fontWeight: 600,
              }}
            >
              SEND FEEDBACK
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
