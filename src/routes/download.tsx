import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
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

type Choice = "waitlist" | "beta";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: "Download Soul Seeker App — Coming Soon" },
      {
        name: "description",
        content:
          "Soul Seeker is currently in development. Join the waiting list or sign up for beta testing to be first to explore the app.",
      },
      { property: "og:title", content: "Download Soul Seeker — Coming Soon" },
      {
        property: "og:description",
        content:
          "Join the waiting list or become a beta tester for the Soul Seeker tarot app.",
      },
    ],
  }),
  component: DownloadPage,
});

function DownloadPage() {
  const [choice, setChoice] = React.useState<Choice>("waitlist");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

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

      <section className="relative z-10 max-w-[880px] mx-auto px-6 pt-36 pb-20 text-center">
        <Flourish label="COMING SOON" />
        <h1
          className="mt-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: gold,
            fontSize: 56,
            lineHeight: 1.05,
            fontWeight: 500,
            letterSpacing: "0.03em",
            textShadow: "0 0 40px rgba(241,210,122,0.25)",
          }}
        >
          Download Soul Seeker App
        </h1>
        <Divider width={90} />
        <p
          className="mx-auto italic"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: mystic,
            fontSize: 20,
            lineHeight: 1.6,
            maxWidth: 640,
          }}
        >
          Soul Seeker is currently in development and testing.
          <br />
          Choose how you would like to be part of the journey.
        </p>

        {/* Options */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <OptionCard
            active={choice === "waitlist"}
            title="Option 1 — Waiting List"
            body="Join the waiting list to be notified when the app launches."
            actionLabel={choice === "waitlist" ? "SELECTED" : "CHOOSE"}
            onSelect={() => setChoice("waitlist")}
          />
          <OptionCard
            active={choice === "beta"}
            title="Option 2 — Beta Testing"
            body="Join beta testing and help shape Soul Seeker before launch."
            actionLabel={choice === "beta" ? "SELECTED" : "CHOOSE"}
            onSelect={() => setChoice("beta")}
          />
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="mt-12 mx-auto text-left p-8"
          style={{
            maxWidth: 560,
            background: "rgba(9,20,34,0.6)",
            border: `1px solid rgba(201,167,93,0.35)`,
            borderRadius: 16,
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            backdropFilter: "blur(6px)",
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: gold,
              fontSize: 28,
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Sign Up
          </h2>

          {submitted ? (
            <div className="mt-6 text-center">
              <p style={{ color: ivory, fontSize: 15, lineHeight: 1.7 }}>
                Thank you{name ? `, ${name}` : ""}. We have noted your interest in{" "}
                <strong style={{ color: goldBright }}>
                  {choice === "waitlist" ? "the Waiting List" : "Beta Testing"}
                </strong>
                .
                <br />
                We&apos;ll be in touch at{" "}
                <span style={{ color: goldBright }}>{email}</span>.
              </p>
            </div>
          ) : (
            <>
              <Field label="Name (optional)">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  style={inputStyle}
                  placeholder="Your name"
                />
              </Field>

              <Field label="Email address">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={255}
                  style={inputStyle}
                  placeholder="you@example.com"
                />
              </Field>

              <Field label="Selected option">
                <input
                  type="text"
                  readOnly
                  value={
                    choice === "waitlist"
                      ? "Waiting List — notify me at launch"
                      : "Beta Testing — I want to help test the app"
                  }
                  style={{
                    ...inputStyle,
                    color: goldBright,
                    background: "rgba(241,210,122,0.08)",
                    cursor: "default",
                  }}
                />
              </Field>

              <button
                type="submit"
                className="mt-6 w-full inline-flex items-center justify-center px-8 py-3 text-[12px] tracking-[0.28em] transition-all hover:scale-[1.01]"
                style={{
                  color: midnight,
                  background: `linear-gradient(135deg, ${goldBright}, ${gold})`,
                  borderRadius: 999,
                  fontWeight: 700,
                  boxShadow: "0 10px 30px rgba(241,210,122,0.3)",
                }}
              >
                SUBMIT
              </button>
            </>
          )}
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  background: "rgba(5,8,22,0.7)",
  border: "1px solid rgba(201,167,93,0.3)",
  borderRadius: 8,
  color: ivory,
  fontSize: 14,
  outline: "none",
  fontFamily: "'Inter', sans-serif",
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block mt-5">
      <span
        style={{
          display: "block",
          marginBottom: 6,
          fontSize: 12,
          letterSpacing: "0.18em",
          color: mystic,
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
      {children}
    </label>
  );
}

function OptionCard({
  active,
  title,
  body,
  actionLabel,
  onSelect,
}: {
  active: boolean;
  title: string;
  body: string;
  actionLabel: string;
  onSelect: () => void;
}) {
  return (
    <div
      className="p-6 text-left transition-all"
      style={{
        background: active ? "rgba(241,210,122,0.08)" : "rgba(9,20,34,0.55)",
        border: `1px solid ${active ? "rgba(241,210,122,0.7)" : "rgba(201,167,93,0.3)"}`,
        borderRadius: 14,
        boxShadow: active ? "0 0 30px rgba(241,210,122,0.2)" : "none",
      }}
    >
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: gold,
          fontSize: 22,
          fontWeight: 500,
        }}
      >
        {title}
      </h3>
      <p style={{ color: ivory, fontSize: 14, lineHeight: 1.6, opacity: 0.85, marginTop: 8 }}>
        {body}
      </p>
      <button
        type="button"
        onClick={onSelect}
        className="mt-4 inline-flex items-center justify-center px-5 py-2 text-[11px] tracking-[0.24em] transition-all"
        style={{
          color: active ? midnight : goldBright,
          background: active
            ? `linear-gradient(135deg, ${goldBright}, ${gold})`
            : "transparent",
          border: `1px solid ${goldBright}`,
          borderRadius: 999,
          fontWeight: 600,
        }}
      >
        {actionLabel}
      </button>
    </div>
  );
}
