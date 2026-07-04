import * as React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import nebulaLeft from "@/assets/nebula-left.jpg";
import nebulaRight from "@/assets/nebula-right.jpg";
import logoAsset from "@/assets/soul-seeker-icon.jpeg.asset.json";

const logo = logoAsset.url;

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
  { label: "FEATURES", to: "/features" },
  { label: "INTRODUCTION", to: "/introduction" },
  { label: "ABOUT", to: "/about" },
  { label: "CONTACT US", hash: "contact" },
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
  // Local active for headings without dedicated routes
  const [clickedHash, setClickedHash] = React.useState<string | null>(null);

  return (
    <header
      className="fixed top-0 inset-x-0 z-30"
      style={{
        background: "rgba(5,8,22,0.55)",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid rgba(201,167,93,0.25)`,
      }}
    >
      <div className="max-w-[1400px] mx-auto pl-6 pr-10 py-4 flex items-center gap-8">
        <Link to="/" className="flex items-center gap-4" onClick={() => setClickedHash(null)}>
          <img
            src={logo}
            alt="Soul Seeker logo"
            width={56}
            height={56}
            className="drop-shadow-[0_0_12px_rgba(241,210,122,0.35)]"
          />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: gold,
              letterSpacing: "0.14em",
              fontSize: 22,
              fontWeight: 500,
              textShadow: "0 0 18px rgba(241,210,122,0.25)",
            }}
          >
            SOUL SEEKER
          </span>
        </Link>
        <nav className="ml-auto flex items-center gap-10">
          {navItems.map((item) => {
            const isRouteActive =
              !!item.to && (item.to === "/" ? pathname === "/" : pathname.startsWith(item.to));
            const isHashActive = !!item.hash && clickedHash === item.hash;
            const isActive = isRouteActive || isHashActive;
            const baseStyle: React.CSSProperties = {
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
                  style={baseStyle}
                  onClick={() => setClickedHash(null)}
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
                style={baseStyle}
                onClick={() => setClickedHash(item.hash!)}
              >
                {item.label}
                {isActive && <GoldUnderline />}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export function StarfieldBackdrop() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, #fff8, transparent), radial-gradient(1px 1px at 70% 80%, #fff6, transparent), radial-gradient(1px 1px at 40% 60%, #fff5, transparent), radial-gradient(1px 1px at 85% 15%, #fff7, transparent), radial-gradient(1px 1px at 10% 80%, #fff4, transparent), radial-gradient(2px 2px at 60% 40%, #fff3, transparent), radial-gradient(1px 1px at 90% 55%, #fff5, transparent)",
          backgroundSize:
            "400px 400px, 500px 500px, 350px 350px, 450px 450px, 600px 600px, 700px 700px, 500px 500px",
        }}
      />
      <img
        src={nebulaLeft}
        aria-hidden
        alt=""
        className="absolute left-0 top-16 h-[640px] w-auto opacity-60 pointer-events-none mix-blend-screen"
        style={{
          filter: "blur(8px)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 75%)",
          maskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 75%)",
        }}
      />
      <img
        src={nebulaRight}
        aria-hidden
        alt=""
        className="absolute right-0 top-16 h-[640px] w-auto opacity-60 pointer-events-none mix-blend-screen"
        style={{
          filter: "blur(8px)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 75%)",
          maskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, black 30%, transparent 75%)",
        }}
      />
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

const footerLinks = [
  "INTRODUCTION TO SOUL SEEKER",
  "FEATURES",
  "TERMS & CONDITIONS",
  "PRIVACY POLICY",
  "COOKIES POLICY",
  "CONTACT US",
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
  return (
    <footer className="relative z-10 max-w-[1400px] mx-auto px-10 pb-10">
      <ul className="flex flex-wrap justify-center items-center gap-6 mb-6">
        {footerLinks.map((l, i) => (
          <li key={l} className="flex items-center gap-6">
            <a
              href="#"
              className="text-[11px] tracking-[0.25em] transition-colors hover:text-white"
              style={{ color: ivory, opacity: 0.75 }}
            >
              {l}
            </a>
            {i < footerLinks.length - 1 && (
              <span style={{ color: goldSoft }}>
                <Star size={7} />
              </span>
            )}
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
      <p
        className="text-center text-[11px] tracking-[0.2em]"
        style={{ color: ivory, opacity: 0.5 }}
      >
        © 2024 Soul Seeker. All rights reserved.
      </p>
    </footer>
  );
}
