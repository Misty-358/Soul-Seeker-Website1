import * as React from "react";
import { Share2 } from "lucide-react";
import { toast } from "sonner";
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
import liveBanner from "@/assets/home-live-banner.png.asset.json";

const cardImg = "/images/temperance-card.jpg";

const SHARE_TITLE = "Soul Seeker Tarot";
const SHARE_TEXT =
  "Explore tarot readings for reflection, relationships, career and personal insight. Start for free.";
const SHARE_URL = "https://app.soulseekertarot.com/";
const SHARE_DATA: ShareData = { title: SHARE_TITLE, text: SHARE_TEXT, url: SHARE_URL };

const TOAST_STYLE: React.CSSProperties = {
  background: "rgba(13, 22, 40, 0.97)",
  color: ivory,
  border: "1px solid rgba(212,175,55,0.45)",
  boxShadow: "0 12px 34px rgba(0,0,0,0.5)",
  fontFamily: "'Cormorant Garamond', serif",
};

async function copyShareLink() {
  try {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      await navigator.clipboard.writeText(SHARE_URL);
    } else {
      const ta = document.createElement("textarea");
      ta.value = SHARE_URL;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "-1000px";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    toast.success("Link copied", { description: SHARE_URL, duration: 3500, style: TOAST_STYLE });
  } catch {
    toast("Copy this link to share Soul Seeker", {
      description: SHARE_URL,
      duration: 9000,
      style: TOAST_STYLE,
    });
  }
}

function ShareSoulSeeker() {
  const [support, setSupport] = React.useState<"unknown" | "native" | "fallback">("unknown");
  const [sharing, setSharing] = React.useState(false);

  React.useEffect(() => {
    const nav = navigator as Navigator & {
      share?: (data: ShareData) => Promise<void>;
      canShare?: (data: ShareData) => boolean;
    };
    const hasNative =
      typeof nav.share === "function" &&
      (typeof nav.canShare !== "function" || nav.canShare(SHARE_DATA));
    setSupport(hasNative ? "native" : "fallback");
  }, []);

  async function handleShare() {
    if (support !== "native") {
      await copyShareLink();
      return;
    }
    setSharing(true);
    try {
      await navigator.share(SHARE_DATA);
    } catch (err) {
      // The share sheet was closed without choosing anything: fall back to copying.
      if ((err as DOMException | null)?.name !== "AbortError") await copyShareLink();
    } finally {
      setSharing(false);
    }
  }

  return (
    <div className="group relative z-10 mx-auto flex max-w-[1400px] flex-col items-center gap-3 px-4 pb-12">
      <button
        type="button"
        onClick={handleShare}
        disabled={sharing}
        aria-label="Share Soul Seeker"
        title="Share Soul Seeker"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full transition duration-300 hover:scale-105 hover:brightness-110 active:scale-95 disabled:opacity-60 focus-visible:[outline:2px_solid_var(--ss-gold-light)] focus-visible:[outline-offset:3px]"
        style={{
          color: goldBright,
          background:
            "radial-gradient(circle at 50% 30%, rgba(241,210,122,0.16), rgba(212,175,55,0.05) 60%, rgba(255,255,255,0) 78%)",
          border: "1px solid rgba(241,210,122,0.45)",
          boxShadow: "0 0 20px rgba(212,175,55,0.28), inset 0 0 14px rgba(241,210,122,0.10)",
        }}
      >
        <Share2 size={20} strokeWidth={1.6} aria-hidden />
      </button>
      <span
        className="opacity-80 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: gold,
          fontSize: 14,
          letterSpacing: "0.24em",
          textTransform: "uppercase",
        }}
      >
        Share Soul Seeker
      </span>
      {support === "fallback" && (
        <button
          type="button"
          onClick={copyShareLink}
          className="transition-opacity duration-300 hover:opacity-100 focus-visible:[outline:2px_solid_var(--ss-gold-light)] focus-visible:[outline-offset:3px]"
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            color: goldBright,
            opacity: 0.7,
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 13,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            textDecoration: "underline",
            textUnderlineOffset: 4,
          }}
        >
          Copy Link
        </button>
      )}
    </div>
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
                Try Soul Seeker for Free
              </span>
            </a>
          </div>
        </div>
      </section>


      {/* SOUL SEEKER IS NOW LIVE — ANNOUNCEMENT BANNER */}
      <section className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10 pb-24">
        <div
          className="relative mx-auto"
          style={{
            borderRadius: 22,
            overflow: "hidden",
            border: "1px solid rgba(212,175,55,0.55)",
            boxShadow:
              "0 24px 70px rgba(0,0,0,0.5), 0 0 60px rgba(212,175,55,0.12)",
          }}
        >
          <img
            src={liveBanner.url}
            alt="Soul Seeker Tarot is now LIVE on the web and on Google Play Store — tarot readings, custom tarot cards, reading and custom card packs, subscriptions, and save and return"
            title="Soul Seeker Tarot is now LIVE"
            className="block w-full h-auto"
          />
          {/* Invisible click zones over the two buttons in the artwork */}
          <a
            href="https://app.soulseekertarot.com"
            aria-label="Use Soul Seeker Tarot on the web"
            className="absolute"
            style={{ left: "27.9%", top: "73.9%", width: "21.5%", height: "8.5%" }}
          />
          <a
            href="https://play.google.com/store/apps/details?id=com.soulseekertarot.app.twa"
            aria-label="Get Soul Seeker Tarot on Google Play"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute"
            style={{ left: "51.8%", top: "73.9%", width: "21.9%", height: "8.5%" }}
          />
        </div>
      </section>

      <ShareSoulSeeker />

      <SiteFooter />
    </div>
  );
}
