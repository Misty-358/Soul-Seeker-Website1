import { createFileRoute, Link } from "@tanstack/react-router";
import cardAsset from "@/assets/temperance-card.jpg.asset.json";
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

const cardImg = cardAsset.url;

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
      <section className="relative z-10 max-w-[1400px] mx-auto px-10 pt-36 pb-8 text-center">
        <Flourish label="WELCOME" />
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
          Where Ancient Wisdom
          <br />
          Meets Modern Intuition
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
          Step into a sanctuary of tarot, reflection and celestial insight —
          <br />
          crafted for the seeker in you.
        </p>
      </section>

      {/* HERO CONTENT — Tarot card + intro */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-10 pb-24 grid grid-cols-[minmax(260px,340px)_1fr] gap-16 items-center">
        <div className="relative">
          <img
            src={cardImg}
            alt="Featured tarot card"
            title="Soul Seeker Card"
            className="w-full h-auto rounded-[14px]"
            style={{
              boxShadow:
                "0 30px 80px rgba(124,77,255,0.35), 0 0 0 1px rgba(241,210,122,0.35)",
              filter: "drop-shadow(0 30px 80px rgba(124,77,255,0.25))",
            }}
          />
        </div>

        <div>
          <h2
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
            className="mt-6"
            style={{ color: ivory, fontSize: 15, lineHeight: 1.85, opacity: 0.85, maxWidth: 560 }}
          >
            Soul Seeker brings the timeless art of tarot into a beautifully modern space —
            intuitive readings, a personal journal, and tools crafted to reveal what your
            soul already knows. Whether you seek clarity, direction, or a moment of stillness,
            you are welcome here.
          </p>
          <div className="mt-8 flex gap-4">
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
              to="/features"
              className="inline-flex items-center justify-center px-8 py-3 text-[12px] tracking-[0.28em] transition-colors"
              style={{
                color: goldBright,
                border: `1px solid ${goldBright}`,
                borderRadius: 999,
                fontWeight: 500,
              }}
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
