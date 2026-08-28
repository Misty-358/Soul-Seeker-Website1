import * as React from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
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

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Developer Login — Soul Seeker" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = React.useState<"signin" | "signup" | "forgot" | "reset">("signin");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [notice, setNotice] = React.useState<string | null>(null);

  React.useEffect(() => {
    // A password-recovery link lands here with tokens in the URL hash.
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const isRecovery = hash.includes("type=recovery");
    if (isRecovery) {
      setMode("reset");
      setNotice("Choose a new password for your developer account.");
      return;
    }
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/admin" });
    });
  }, [navigate]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setNotice(null);
    setBusy(true);
    try {
      if (mode === "forgot") {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/auth`,
        });
        if (error) throw error;
        setNotice("Password reset link sent. Check your inbox (and spam folder).");
        return;
      }
      if (mode === "reset") {
        const { error } = await supabase.auth.updateUser({ password });
        if (error) throw error;
        setNotice("Password updated. Taking you to the developer area…");
        navigate({ to: "/admin" });
        return;
      }
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin` },
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
      navigate({ to: "/admin" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
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

      <section className="relative z-10 max-w-[520px] mx-auto px-6 pt-36 pb-20 text-center">
        <Flourish label="DEVELOPER" />
        <h1
          className="mt-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: gold,
            fontSize: 44,
            lineHeight: 1.1,
            fontWeight: 500,
            letterSpacing: "0.03em",
          }}
        >
          {mode === "signup"
            ? "Create Developer Account"
            : mode === "forgot"
              ? "Reset Your Password"
              : mode === "reset"
                ? "Set a New Password"
                : "Developer Login"}

        </h1>
        <Divider width={80} />

        <form
          onSubmit={onSubmit}
          className="mt-8 text-left p-8"
          style={{
            background: "rgba(9,20,34,0.6)",
            border: `1px solid rgba(201,167,93,0.35)`,
            borderRadius: 16,
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            backdropFilter: "blur(6px)",
          }}
        >
          {mode !== "reset" && (
            <label className="block">
              <span style={labelStyle}>Email</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </label>
          )}

          {mode !== "forgot" && (
            <label className={mode === "reset" ? "block" : "block mt-5"}>
              <span style={labelStyle}>{mode === "reset" ? "New Password" : "Password"}</span>
              <input
                type="password"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
                placeholder="At least 8 characters"
                autoComplete={mode === "signin" ? "current-password" : "new-password"}
              />
            </label>
          )}

          {mode === "signin" && (
            <p className="mt-3 text-right">
              <button
                type="button"
                onClick={() => {
                  setMode("forgot");
                  setError(null);
                  setNotice(null);
                }}
                className="text-xs"
                style={{ color: goldBright, textDecoration: "underline" }}
              >
                Forgot your password?
              </button>
            </p>
          )}

          {error && (
            <p className="mt-4 text-sm" style={{ color: "#ff9c9c" }}>
              {error}
            </p>
          )}

          {notice && (
            <p className="mt-4 text-sm" style={{ color: goldBright }}>
              {notice}
            </p>
          )}

          <button
            type="submit"
            disabled={busy}
            className="mt-6 w-full inline-flex items-center justify-center px-8 py-3 text-[12px] tracking-[0.28em] transition-all hover:scale-[1.01] disabled:opacity-60"
            style={{
              color: midnight,
              background: `linear-gradient(135deg, ${goldBright}, ${gold})`,
              borderRadius: 999,
              fontWeight: 700,
              boxShadow: "0 10px 30px rgba(241,210,122,0.3)",
            }}
          >
            {busy
              ? "PLEASE WAIT…"
              : mode === "signup"
                ? "CREATE ACCOUNT"
                : mode === "forgot"
                  ? "SEND RESET LINK"
                  : mode === "reset"
                    ? "UPDATE PASSWORD"
                    : "SIGN IN"}
          </button>

          {mode !== "reset" && (
            <p className="mt-5 text-center text-sm" style={{ color: mystic }}>
              {mode === "signin" ? "Need to create your developer account? " : "Back to "}
              <button
                type="button"
                onClick={() => {
                  setMode(mode === "signin" ? "signup" : "signin");
                  setError(null);
                  setNotice(null);
                }}
                style={{ color: goldBright, textDecoration: "underline" }}
              >
                {mode === "signin" ? "Sign up" : "Sign in"}
              </button>
            </p>
          )}

          <p className="mt-3 text-center text-xs" style={{ color: mystic, opacity: 0.75 }}>
            Only the account with email <span style={{ color: goldBright }}>soulseekertarot29@gmail.com</span>{" "}
            will have developer access.
          </p>
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

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: 6,
  fontSize: 12,
  letterSpacing: "0.18em",
  color: mystic,
  textTransform: "uppercase",
};
