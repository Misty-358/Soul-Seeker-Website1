import { createFileRoute } from "@tanstack/react-router";
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
  goldSoft,
  goldBright,
  ivory,
  mystic,
} from "@/components/SiteChrome";

const emblemImg = "/images/beta-testers-emblem.jpg";
const nightImg = "/images/beta-testers-night.jpg";
const deckArt = ["/images/the-star.jpg", "/images/strength.jpg", "/images/justice.jpg"];

export const Route = createFileRoute("/beta-testers")({
  head: () => ({
    meta: [
      { title: "What Our Beta Testers Say | Soul Seeker Tarot" },
      {
        name: "description",
        content:
          "Read what our beta testers said about Soul Seeker Tarot — the visual design, readings, card decks, daily cards, customisation and intuitive guidance.",
      },
      { property: "og:title", content: "What Our Beta Testers Say | Soul Seeker Tarot" },
      {
        property: "og:description",
        content:
          "Honest words from the beta testers who helped shape Soul Seeker Tarot.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.soulseekertarot.com/beta-testers" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.soulseekertarot.com/beta-testers" },
    ],
  }),
  component: BetaTestersPage,
});

/* ---------- Testimonial wording, exactly as supplied ---------- */

const testimonials: { quote: string; name: string }[] = [
  {
    quote:
      "Soul Seeker Tarot application has a distinctive visual identity and an interesting tarot-focused concept. It has a strong visual design and the variety of tarot-related features, including readings, card decks, daily cards, customization, marketplace functionality.",
    name: "Soul Seeker Beta Tester",
  },
  {
    quote:
      "I don't normally pay too much attention to this kind of stuff. But here I am shocked at how accurate Soul Seeker is. Highly recommend for those who are curious, and to others who take seriously.",
    name: "Lee",
  },
  {
    quote:
      "I look for insights into my life and I found this Tarot app to have some very in-depth information regarding my relationships with people. I don’t know how it seemed to know so much about me, but as I needed help and advice this seems as good a place as any to seek guidance. Will keep on it and look forward to further insights in the coming weeks.",
    name: "Charlie",
  },
  {
    quote:
      "I am enjoying Soul seeker app such a beautiful and thoughtfully designed tarot app. I love how easy it is to use, whether you’re completely new to tarot or already familiar with the cards. I especially enjoy being able to choose in depth readings and design my own deck with ease. The explanations are beautifully written, detailed without being overwhelming, and always finish with a really helpful summary.",
    name: "Sarah",
  },
];

const closingQuote =
  "I'm not really into apps and had no idea that it was even possible to get tarot readings in an app. I've had a few readings in the past, just for fun or so I thought, but they did seem to actually help me. When my friend showed me this app, I was amazed. So much fun, really cool card designs and so intuitive. Of course I know it's AI but sometimes it just seems so insightful and like it really knows my soul!";

/* ---------- Ornamental pieces ---------- */

const cornerPlacement = {
  tl: "top-0 left-0",
  tr: "top-0 right-0",
  bl: "bottom-0 left-0",
  br: "bottom-0 right-0",
} as const;

const cornerTransform = {
  tl: "none",
  tr: "scaleX(-1)",
  bl: "scaleY(-1)",
  br: "scale(-1, -1)",
} as const;

function CornerFlourish({ corner }: { corner: keyof typeof cornerPlacement }) {
  return (
    <svg
      aria-hidden
      width={58}
      height={58}
      viewBox="0 0 58 58"
      className={`absolute ${cornerPlacement[corner]} pointer-events-none`}
      style={{ transform: cornerTransform[corner], opacity: 0.7 }}
    >
      <g fill="none" stroke={goldSoft} strokeWidth="1" strokeLinecap="round">
        <path d="M3 34 C 3 14, 14 3, 34 3" />
        <path d="M9 34 C 9 18, 18 9, 34 9" opacity="0.65" />
        <path d="M3 48 C 16 48, 23 41, 23 32 C 23 24, 29 20, 37 22" opacity="0.8" />
        <path d="M48 3 C 41 10, 41 19, 49 21 C 55 22, 56 15, 51 13" opacity="0.7" />
        <path d="M15 15 C 20 13, 24 15, 25 20" opacity="0.6" />
      </g>
      <circle cx="30" cy="30" r="1.5" fill={goldBright} opacity="0.85" />
      <circle cx="52" cy="27" r="1" fill={goldBright} opacity="0.7" />
      <circle cx="27" cy="52" r="1" fill={goldBright} opacity="0.7" />
    </svg>
  );
}

function LaurelDivider() {
  return (
    <div className="flex items-center justify-center my-10" aria-hidden>
      <svg width="320" height="46" viewBox="0 0 320 46" className="max-w-full">
        <defs>
          <linearGradient id="bt-laurel" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={goldSoft} stopOpacity="0" />
            <stop offset="50%" stopColor={goldBright} stopOpacity="0.95" />
            <stop offset="100%" stopColor={goldSoft} stopOpacity="0" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#bt-laurel)" strokeWidth="1" strokeLinecap="round">
          <path d="M8 23 C 60 8, 110 8, 138 23" />
          <path d="M8 23 C 60 38, 110 38, 138 23" />
          <path d="M312 23 C 260 8, 210 8, 182 23" />
          <path d="M312 23 C 260 38, 210 38, 182 23" />
          <path d="M30 23 C 55 16, 80 16, 100 22" opacity="0.55" />
          <path d="M290 23 C 265 16, 240 16, 220 22" opacity="0.55" />
        </g>
        <g fill={goldBright}>
          {[
            [22, 23, 1.5],
            [52, 15, 1.1],
            [86, 12, 1.1],
            [298, 23, 1.5],
            [268, 15, 1.1],
            [234, 12, 1.1],
          ].map(([cx, cy, r], i) => (
            <circle key={i} cx={cx} cy={cy} r={r} opacity="0.8" />
          ))}
        </g>
        <path
          d="M160 8 L163 20 L175 23 L163 26 L160 38 L157 26 L145 23 L157 20 Z"
          fill={goldBright}
          opacity="0.9"
          style={{ filter: "drop-shadow(0 0 8px rgba(241,210,122,0.6))" }}
        />
        <circle cx="160" cy="23" r="1.6" fill="#fff6d4" />
      </svg>
    </div>
  );
}

function StarRating() {
  return (
    <div className="flex items-center gap-1.5" aria-label="Five out of five stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          style={{
            color: goldBright,
            filter: "drop-shadow(0 0 6px rgba(241,210,122,0.75))",
          }}
        >
          <Star size={14} />
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  showStars = true,
}: {
  quote: string;
  name: string;
  showStars?: boolean;
}) {
  return (
    <figure
      className="relative rounded-2xl px-6 sm:px-9 py-9 sm:py-10"
      style={{
        background: "rgba(9,20,34,0.55)",
        border: "1px solid rgba(201,167,93,0.25)",
        boxShadow: "0 0 46px rgba(124,77,255,0.07) inset",
      }}
    >
      <CornerFlourish corner="tl" />
      <CornerFlourish corner="tr" />
      <CornerFlourish corner="bl" />
      <CornerFlourish corner="br" />

      <span
        aria-hidden
        className="block text-center leading-none"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: gold,
          fontSize: 52,
          opacity: 0.75,
          textShadow: "0 0 18px rgba(241,210,122,0.35)",
        }}
      >
        &#8220;
      </span>

      <blockquote
        className="mt-1 text-center"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          color: ivory,
          fontSize: 18,
          lineHeight: 1.7,
          opacity: 0.92,
        }}
      >
        {quote}
      </blockquote>

      <figcaption className="mt-6 flex flex-col items-center gap-3">
        {showStars && <StarRating />}
        <span
          style={{
            fontFamily: "'Cinzel', serif",
            color: goldBright,
            letterSpacing: "0.3em",
            fontSize: 13,
            textShadow: "0 0 14px rgba(241,210,122,0.4)",
          }}
        >
          {name.toUpperCase()}
        </span>
      </figcaption>
    </figure>
  );
}

function DeckStrip() {
  return (
    <div className="flex justify-center items-end gap-4 sm:gap-6">
      {deckArt.map((src) => (
        <div
          key={src}
          className="rounded-lg overflow-hidden"
          style={{
            border: "1px solid rgba(201,167,93,0.4)",
            boxShadow: "0 0 26px rgba(241,210,122,0.18)",
          }}
        >
          <img
            src={src}
            alt=""
            aria-hidden
            loading="lazy"
            width={200}
            height={300}
            className="w-[86px] sm:w-[110px] h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
}

/* ---------- Page ---------- */

function BetaTestersPage() {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at top, ${deepSpace} 0%, ${midnight} 60%, #02040d 100%)`,
        color: ivory,
      }}
    >
      <StarfieldBackdrop />
      <SiteNav />

      <main className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 ss-top-mobile pb-16">
        {/* Hero */}
        <section className="text-center">
          <div className="flex justify-center">
            <img
              src={emblemImg}
              alt="Golden laurel, scroll and quill emblem beneath a crescent moon"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-[140px] sm:w-[180px] h-auto ss-aura-pulse"
              style={{
                mixBlendMode: "screen",
                filter: "drop-shadow(0 0 34px rgba(241,210,122,0.28))",
              }}
            />
          </div>

          <div className="-mt-4">
            <Flourish label="IN THEIR OWN WORDS" />
          </div>

          <h1
            className="mt-3 ss-h1-mobile"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: goldBright,
              fontSize: 64,
              lineHeight: 1.08,
              fontWeight: 500,
              letterSpacing: "0.02em",
              textShadow: "0 0 32px rgba(241,210,122,0.3)",
            }}
          >
            What Our Beta Testers Say
          </h1>

          <Divider width={110} />

          <p
            className="mx-auto max-w-[860px] text-[20px] leading-relaxed ss-lead-mobile"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: ivory,
              opacity: 0.9,
              fontStyle: "italic",
            }}
          >
            We at Soul Seeker are very grateful to all our Beta Testers for their
            valuable feedback and support in helping us refine the design and
            improve the functionality of the Soul Seeker Tarot app.
          </p>

          <p
            className="mx-auto max-w-[860px] mt-5 text-[17px] leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: goldSoft,
              opacity: 0.9,
            }}
          >
            Here&rsquo;s what some of our Beta Testers had to say about their
            experience with Soul Seeker Tarot:
          </p>
        </section>

        <LaurelDivider />

        {/* Testimonials */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.name}
              quote={t.quote}
              name={t.name}
              showStars={i > 0}
            />
          ))}
        </section>

        {/* Decorative night band */}
        <section className="relative mt-14">
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(201,167,93,0.25)" }}
          >
            <img
              src={nightImg}
              alt="A golden crescent moon cradling a lotus above a starlit lake"
              width={1536}
              height={768}
              loading="lazy"
              className="w-full h-[200px] sm:h-[280px] lg:h-[340px] object-cover"
              style={{
                mixBlendMode: "screen",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, #000 62%, transparent 100%)",
                maskImage:
                  "radial-gradient(ellipse at center, #000 62%, transparent 100%)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 55%, rgba(5,8,22,0.4) 100%)",
              }}
            />
          </div>
        </section>

        {/* Final testimonial */}
        <section
          className="relative mt-12 rounded-2xl px-6 sm:px-12 py-10 sm:py-12 text-center"
          style={{
            background: "rgba(9,20,34,0.55)",
            border: "1px solid rgba(201,167,93,0.25)",
            boxShadow: "0 0 46px rgba(124,77,255,0.07) inset",
          }}
        >
          <CornerFlourish corner="tl" />
          <CornerFlourish corner="tr" />
          <CornerFlourish corner="bl" />
          <CornerFlourish corner="br" />

          <Divider width={60} />

          <blockquote
            className="mx-auto max-w-[900px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              color: ivory,
              fontSize: 20,
              lineHeight: 1.75,
              opacity: 0.94,
            }}
          >
            {closingQuote}
          </blockquote>

          <div className="mt-6 flex justify-center">
            <StarRating />
          </div>

          <div
            className="mt-3 flex items-center justify-center gap-4"
            style={{ color: goldBright }}
          >
            <span style={{ fontSize: 11, opacity: 0.8 }}>&#10022;</span>
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                letterSpacing: "0.3em",
                fontSize: 13,
                textShadow: "0 0 14px rgba(241,210,122,0.4)",
              }}
            >
              IAN
            </span>
            <span style={{ fontSize: 11, opacity: 0.8 }}>&#10022;</span>
          </div>
        </section>

        {/* Card artwork */}
        <section className="mt-14">
          <DeckStrip />
        </section>

        {/* Closing */}
        <section className="mt-12 text-center">
          <Divider width={120} />
          <p
            className="mt-2 text-[12px] tracking-[0.3em]"
            style={{ color: mystic, opacity: 0.7 }}
          >
            &#10022; SEEK &#183; REVEAL &#183; AWAKEN &#10022;
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
