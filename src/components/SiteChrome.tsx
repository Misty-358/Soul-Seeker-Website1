import * as React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { toast } from "sonner";
import { openCookieConsent } from "@/components/CookieConsent";
const logo = "/images/soul-seeker-icon.jpeg";

// Brand tokens
export const midnight = "#050816";
export const deepSpace = "#091422";
export const gold = "#d4af37";
export const goldSoft = "#c9a75d";
export const goldBright = "#f1d27a";
export const ivory = "#d8e3f7";
export const mystic = "#c8b9e8";

type NavItem = { label: string; to?: string; hash?: string };

const navItems: NavItem[] = [
  { label: "HOME", to: "/" },
  { label: "INTRODUCTION", to: "/introduction" },
  { label: "FEATURES", to: "/features" },
  { label: "ABOUT", to: "/about" },
  { label: "TERMS", to: "/terms" },
  { label: "PRIVACY", to: "/privacy" },
  { label: "CONTACT US", to: "/contact" },
];

function GoldUnderline() {
  return (
    <span
      aria-hidden
      className="absolute left-1/2 -translate-x-1/2 -bottom-2 block h-[2px] w-6 rounded-full"
      style={{ background: goldBright, boxShadow: `0 0 10px ${goldBright}` }}
    />
  );
}

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [clickedHash, setClickedHash] = React.useState<string | null>(null);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const renderLink = (item: NavItem, onClick?: () => void) => {
    const isRouteActive =
      !!item.to && (item.to === "/" ? pathname === "/" : pathname.startsWith(item.to));
    const isHashActive = !!item.hash && clickedHash === item.hash;
    const isActive = isRouteActive || isHashActive;
    const style: React.CSSProperties = {
      color: isActive ? goldBright : ivory,
      fontWeight: 500,
      textShadow: isActive ? "0 0 12px rgba(241,210,122,0.45)" : undefined,
    };
    const className = "relative text-[12px] tracking-[0.28em] transition-colors";
    if (item.to) {
      return (
        <Link
          key={item.label}
          to={item.to}
          className={className}
          style={style}
          onClick={() => {
            setClickedHash(null);
            onClick?.();
          }}
        >
          {item.label}
          {isActive && <GoldUnderline />}
        </Link>
      );
    }
    return (
      <a
        key={item.label}
        href={`#${item.hash}`}
        className={className}
        style={style}
        onClick={() => {
          setClickedHash(item.hash!);
          onClick?.();
        }}
      >
        {item.label}
        {isActive && <GoldUnderline />}
      </a>
    );
  };

  return (
    <header
      className="fixed top-0 inset-x-0 z-30"
      style={{
        background: "rgba(5,8,22,0.55)",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid rgba(201,167,93,0.25)`,
      }}
    >
      <div className="max-w-[1400px] mx-auto pl-4 pr-4 sm:pl-6 sm:pr-10 py-3 sm:py-4 flex items-center gap-4 sm:gap-8">
        <Link to="/" className="flex items-center gap-3 sm:gap-4 min-w-0" onClick={() => setClickedHash(null)}>
          <img
            src={logo}
            alt="Soul Seeker logo"
            width={56}
            height={56}
            className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 drop-shadow-[0_0_12px_rgba(241,210,122,0.35)]"
          />
          <span
            className="truncate"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: gold,
              letterSpacing: "0.14em",
              fontSize: "clamp(16px, 4vw, 22px)",
              fontWeight: 500,
              textShadow: "0 0 18px rgba(241,210,122,0.25)",
            }}
          >
            SOUL SEEKER
          </span>
        </Link>

        <nav className="ml-auto hidden lg:flex items-center gap-8 xl:gap-10">
          {navItems.map((item) => renderLink(item))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="ml-auto lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md"
          style={{ color: goldBright, border: `1px solid rgba(201,167,93,0.35)` }}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden absolute inset-x-0 top-full"
          style={{
            background: "rgba(5,8,22,0.98)",
            backdropFilter: "blur(12px)",
            borderBottom: `1px solid rgba(201,167,93,0.25)`,
          }}
        >
          <nav className="flex flex-col gap-1 px-6 py-6">
            {navItems.map((item) => (
              <div key={item.label} className="py-3 border-b" style={{ borderColor: "rgba(201,167,93,0.12)" }}>
                {renderLink(item, () => setOpen(false))}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}


export function StarfieldBackdrop() {
  // Deterministic pseudo-random star positions so SSR + client match.
  const stars = React.useMemo(() => {
    const rand = (seed: number) => {
      const x = Math.sin(seed) * 43758.5453;
      return x - Math.floor(x);
    };
    return Array.from({ length: 140 }).map((_, i) => ({
      cx: +(rand(i * 1.1 + 1) * 100).toFixed(2),
      cy: +(rand(i * 2.3 + 7) * 100).toFixed(2),
      r: +(0.2 + rand(i * 3.7 + 11) * 0.55).toFixed(2),
      delay: +(rand(i * 4.9 + 3) * 6).toFixed(2),
      dur: +(3 + rand(i * 5.1 + 5) * 5).toFixed(2),
      color:
        i % 7 === 0
          ? "#f1d27a"
          : i % 5 === 0
            ? "#c48bff"
            : i % 3 === 0
              ? "#a9c7ff"
              : "#ffffff",
    }));
  }, []);

  return (
    <>
      {/* Nebula wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 20% 20%, rgba(124,77,255,0.18), transparent 60%), radial-gradient(ellipse 80% 60% at 85% 30%, rgba(63,124,255,0.14), transparent 60%), radial-gradient(ellipse 100% 80% at 50% 100%, rgba(212,175,55,0.08), transparent 70%)",
        }}
      />

      {/* Glowing swirls */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1600 1200"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.55 }}
      >
        <defs>
          <radialGradient id="ss-swirl-glow-a" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9b6bff" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#5aa9ff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#050816" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ss-swirl-glow-b" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff8fd0" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#f1d27a" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#050816" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ss-swirl-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5aa9ff" stopOpacity="0.55" />
            <stop offset="45%" stopColor="#9b6bff" stopOpacity="0.6" />
            <stop offset="80%" stopColor="#ff8fd0" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#f1d27a" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="ss-swirl-stroke-2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f1d27a" stopOpacity="0.5" />
            <stop offset="55%" stopColor="#c48bff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#5aa9ff" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        {/* Left swirl cluster */}
        <g transform="translate(280 380)">
          <circle r="260" fill="url(#ss-swirl-glow-a)" className="ss-aura-pulse" />
        </g>
        <g transform="translate(280 380)" className="ss-swirl-slow">
          <g fill="none" stroke="url(#ss-swirl-stroke)" strokeWidth="0.9">
            <path d="M0 0 C 60 -40, 140 -60, 200 -20 S 260 120, 180 180 S -20 220, -80 140 S -60 -20, 0 0 Z" opacity="0.7" />
            <path d="M0 0 C 40 -25, 90 -35, 130 -10 S 170 80, 120 120 S -10 140, -50 90 S -40 -10, 0 0 Z" opacity="0.55" />
            <circle r="180" strokeDasharray="1 8" opacity="0.4" />
            <circle r="220" strokeDasharray="2 12" opacity="0.3" />
          </g>
        </g>

        {/* Right swirl cluster */}
        <g transform="translate(1280 780)">
          <circle r="300" fill="url(#ss-swirl-glow-b)" className="ss-aura-pulse" style={{ animationDelay: "3s" }} />
        </g>
        <g transform="translate(1280 780)" className="ss-swirl-rev">
          <g fill="none" stroke="url(#ss-swirl-stroke-2)" strokeWidth="0.9">
            <path d="M0 0 C -70 -50, -160 -70, -230 -20 S -300 140, -210 210 S 20 250, 90 160 S 70 -20, 0 0 Z" opacity="0.6" />
            <path d="M0 0 C -45 -30, -105 -40, -150 -10 S -195 95, -140 140 S 15 165, 60 105 S 45 -10, 0 0 Z" opacity="0.5" />
            <circle r="200" strokeDasharray="1 9" opacity="0.4" />
            <circle r="250" strokeDasharray="2 14" opacity="0.28" />
          </g>
        </g>

        {/* Top-center soft ribbon swirl */}
        <g transform="translate(820 220)" className="ss-swirl-slow" style={{ animationDuration: "140s" }}>
          <g fill="none" stroke="url(#ss-swirl-stroke)" strokeWidth="0.6" opacity="0.55">
            <circle r="140" strokeDasharray="3 10" />
            <circle r="90" strokeDasharray="1 6" />
            <path d="M0 0 C 40 -30, 90 -25, 110 20 S 60 90, 10 70 S -50 10, 0 0 Z" />
          </g>
        </g>
      </svg>

      {/* Twinkling stars */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {stars.map((s, i) => (
          <circle
            key={i}
            cx={s.cx}
            cy={s.cy}
            r={s.r * 0.07}
            fill={s.color}
            className="ss-twinkle"
            style={{
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.dur}s`,
              filter: `drop-shadow(0 0 ${s.r * 1.4}px ${s.color}) drop-shadow(0 0 ${s.r * 0.7}px ${s.color})`,
            }}
          />
        ))}
      </svg>
    </>
  );
}

export function Star({ className = "", size = 12 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2l1.5 8.5L22 12l-8.5 1.5L12 22l-1.5-8.5L2 12l8.5-1.5z" />
    </svg>
  );
}

export function Divider({ width = 80 }: { width?: number }) {
  return (
    <div className="flex items-center justify-center gap-3 my-4" style={{ color: gold }}>
      <span
        className="h-px"
        style={{ width, background: `linear-gradient(to right, transparent, ${gold})` }}
      />
      <Star size={10} />
      <span
        className="h-px"
        style={{ width, background: `linear-gradient(to left, transparent, ${gold})` }}
      />
    </div>
  );
}

export function Flourish({ label }: { label: string }) {
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
        {label}
      </span>
      <span style={{ fontSize: 10 }}>◆</span>
    </div>
  );
}

type FooterLink = { label: string; to?: string; href?: string };
const footerLinks: FooterLink[] = [
  { label: "INTRODUCTION TO SOUL SEEKER", to: "/introduction" },
  { label: "FEATURES", to: "/features" },
  { label: "TERMS & CONDITIONS", to: "/terms" },
  { label: "PRIVACY POLICY", to: "/privacy" },
  { label: "COOKIE POLICY", to: "/cookies" },
  { label: "CONTACT US", to: "/contact" },
];

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

export function SiteFooter() {
  const handleShare = async (network: "instagram" | "facebook" | "twitter" | "mail") => {
    if (typeof window === "undefined") return;
    const url = "https://www.soulseekertarot.com";
    const title = "Soul Seeker Tarot";

    const openPopup = (shareUrl: string) => {
      window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=600");
    };
    if (network === "facebook") {
      openPopup(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
      return;
    }
    if (network === "twitter") {
      openPopup(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      );
      return;
    }
    if (network === "mail") {
      window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
      return;
    }
    // instagram — no web share URL
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share({ url, title });
        return;
      } catch {
        // fall through to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied — paste into Instagram to share");
    } catch {
      toast.error("Couldn't copy link. Please copy the page URL manually.");
    }
  };

  return (
    <footer className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-10">
      <ul className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 mb-6">
        {footerLinks.map((l, i) => {
          const className =
            "text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] transition-colors hover:text-white";
          const style: React.CSSProperties = { color: ivory, opacity: 0.75 };
          return (
            <li key={l.label} className="flex items-center gap-3 sm:gap-6">
              {l.to ? (
                <Link to={l.to} className={className} style={style}>
                  {l.label}
                </Link>
              ) : (
                <a href={l.href} className={className} style={style}>
                  {l.label}
                </a>
              )}
              {i < footerLinks.length - 1 && (
                <span style={{ color: goldSoft }} className="hidden sm:inline">
                  <Star size={7} />
                </span>
              )}
            </li>
          );
        })}
      </ul>
      <div className="flex justify-center mb-4">
        <button
          type="button"
          onClick={() => openCookieConsent()}
          className="text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] transition-colors hover:text-white"
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            color: ivory,
            opacity: 0.75,
            fontFamily: "inherit",
          }}
        >
          MANAGE COOKIE PREFERENCES
        </button>
      </div>
      <div className="flex justify-center gap-6 mb-4" style={{ color: goldBright }}>
        {(["instagram", "facebook", "twitter", "mail"] as const).map((n) => (
          <button
            key={n}
            type="button"
            aria-label={`Share this page on ${n}`}
            className="opacity-80 hover:opacity-100 transition-opacity"
            onClick={() => handleShare(n)}
          >
            <SocialIcon name={n} />
          </button>
        ))}
      </div>
      <p
        className="text-center text-[10px] sm:text-[11px] tracking-[0.2em]"
        style={{ color: ivory, opacity: 0.5 }}
      >
        © 2024 Soul Seeker. All rights reserved.
      </p>
    </footer>
  );
}
