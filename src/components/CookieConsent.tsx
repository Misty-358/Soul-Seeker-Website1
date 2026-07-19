import { useEffect, useState } from "react";

const STORAGE_KEY = "ss_cookie_consent_v1";

type Consent = { analytics: boolean; ts: number };

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function applyConsent(analytics: boolean) {
  window.gtag?.("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
  });
}

function saveConsent(analytics: boolean) {
  const payload: Consent = { analytics, ts: Date.now() };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // ignore
  }
  applyConsent(analytics);
}

export const OPEN_COOKIE_CONSENT_EVENT = "ss:open-cookie-consent";

export function openCookieConsent() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OPEN_COOKIE_CONSENT_EVENT));
  }
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) setVisible(true);
    } catch {
      setVisible(true);
    }
    const onOpen = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_CONSENT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_COOKIE_CONSENT_EVENT, onOpen);
  }, []);

  if (!visible) return null;

  const accept = () => {
    saveConsent(true);
    setVisible(false);
  };
  const reject = () => {
    saveConsent(false);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 9999,
        maxWidth: 720,
        margin: "0 auto",
        padding: "16px 18px",
        borderRadius: 14,
        background: "rgba(11,6,32,0.96)",
        border: "1px solid rgba(212,175,55,0.4)",
        boxShadow: "0 12px 40px rgba(0,0,0,0.55), 0 0 24px rgba(233,195,73,0.15)",
        color: "#f4ecd1",
        fontFamily: "Inter, sans-serif",
        fontSize: 13,
        lineHeight: 1.5,
        backdropFilter: "blur(12px)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div>
          <div
            style={{
              fontFamily: "Cinzel, serif",
              letterSpacing: "0.18em",
              color: "#e9c349",
              fontSize: 12,
              marginBottom: 6,
            }}
          >
            ✦ COOKIES &amp; PRIVACY ✦
          </div>
          <p style={{ margin: 0 }}>
            We use essential cookies to run the site and, with your permission, Google Analytics
            to understand how visitors use Soul Seeker. Analytics cookies are only set if you
            accept.{" "}
            <a
              href="/privacy"
              style={{ color: "#e9c349", textDecoration: "underline" }}
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" }}>
          <button
            onClick={reject}
            style={{
              padding: "10px 18px",
              borderRadius: 999,
              background: "transparent",
              color: "#f4ecd1",
              border: "1px solid rgba(212,175,55,0.5)",
              fontFamily: "Cinzel, serif",
              letterSpacing: "0.2em",
              fontSize: 11,
              cursor: "pointer",
            }}
          >
            REJECT
          </button>
          <button
            onClick={accept}
            style={{
              padding: "10px 20px",
              borderRadius: 999,
              background: "linear-gradient(135deg, #e9c349 0%, #c69a2b 100%)",
              color: "#0b0f24",
              border: "none",
              fontFamily: "Cinzel, serif",
              letterSpacing: "0.2em",
              fontSize: 11,
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 6px 18px rgba(233,195,73,0.35)",
            }}
          >
            ACCEPT
          </button>
        </div>
      </div>
    </div>
  );
}
