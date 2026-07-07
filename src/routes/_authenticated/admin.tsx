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

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Developer — Signups" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminPage,
});

type Signup = {
  id: string;
  name: string | null;
  email: string;
  choice: "waitlist" | "beta";
  created_at: string;
};

function AdminPage() {
  const navigate = useNavigate();
  const [rows, setRows] = React.useState<Signup[] | null>(null);
  const [isAdmin, setIsAdmin] = React.useState<boolean | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const load = React.useCallback(async () => {
    setError(null);
    const { data: userData } = await supabase.auth.getUser();
    const uid = userData.user?.id;
    if (!uid) return;

    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", uid)
      .eq("role", "admin")
      .maybeSingle();

    const admin = !!roles;
    setIsAdmin(admin);
    if (!admin) return;

    const { data, error } = await supabase
      .from("signups")
      .select("id, name, email, choice, created_at")
      .order("created_at", { ascending: false });
    if (error) setError(error.message);
    else setRows((data ?? []) as Signup[]);
  }, []);

  React.useEffect(() => {
    load();
  }, [load]);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/auth" });
  };

  const exportCsv = () => {
    if (!rows) return;
    const header = ["Date", "Name", "Email", "Choice"];
    const escape = (v: string) => `"${v.replace(/"/g, '""')}"`;
    const csv = [
      header.join(","),
      ...rows.map((r) =>
        [
          new Date(r.created_at).toISOString(),
          r.name ?? "",
          r.email,
          r.choice,
        ]
          .map((x) => escape(String(x)))
          .join(","),
      ),
    ].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `soulseeker-signups-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const waitlistCount = rows?.filter((r) => r.choice === "waitlist").length ?? 0;
  const betaCount = rows?.filter((r) => r.choice === "beta").length ?? 0;

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

      <section className="relative z-10 max-w-[1100px] mx-auto px-6 pt-32 pb-20">
        <div className="text-center">
          <Flourish label="DEVELOPER AREA" />
          <h1
            className="mt-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: gold,
              fontSize: 44,
              fontWeight: 500,
              letterSpacing: "0.03em",
            }}
          >
            Collected Signups
          </h1>
          <Divider width={80} />
        </div>

        {isAdmin === false && (
          <div
            className="mt-8 mx-auto p-6 text-center"
            style={{
              maxWidth: 560,
              background: "rgba(9,20,34,0.6)",
              border: "1px solid rgba(201,167,93,0.35)",
              borderRadius: 14,
            }}
          >
            <p style={{ color: ivory, fontSize: 15 }}>
              This account does not have developer access. Only{" "}
              <span style={{ color: goldBright }}>soulseekertarot29@gmail.com</span> can view submitted data.
            </p>
            <button
              onClick={signOut}
              className="mt-5 inline-flex items-center justify-center px-6 py-2 text-[11px] tracking-[0.24em]"
              style={{
                color: goldBright,
                border: `1px solid ${goldBright}`,
                borderRadius: 999,
                background: "transparent",
              }}
            >
              SIGN OUT
            </button>
          </div>
        )}

        {isAdmin && (
          <>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-3 flex-wrap">
                <StatChip label="Total" value={rows?.length ?? 0} />
                <StatChip label="Waiting List" value={waitlistCount} />
                <StatChip label="Beta Testers" value={betaCount} />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={load}
                  className="inline-flex items-center justify-center px-5 py-2 text-[11px] tracking-[0.24em]"
                  style={{
                    color: goldBright,
                    border: `1px solid ${goldBright}`,
                    borderRadius: 999,
                    background: "transparent",
                  }}
                >
                  REFRESH
                </button>
                <button
                  onClick={exportCsv}
                  disabled={!rows || rows.length === 0}
                  className="inline-flex items-center justify-center px-5 py-2 text-[11px] tracking-[0.24em] disabled:opacity-40"
                  style={{
                    color: midnight,
                    background: `linear-gradient(135deg, ${goldBright}, ${gold})`,
                    borderRadius: 999,
                    fontWeight: 700,
                  }}
                >
                  EXPORT CSV
                </button>
                <button
                  onClick={signOut}
                  className="inline-flex items-center justify-center px-5 py-2 text-[11px] tracking-[0.24em]"
                  style={{
                    color: mystic,
                    border: `1px solid rgba(201,167,93,0.3)`,
                    borderRadius: 999,
                    background: "transparent",
                  }}
                >
                  SIGN OUT
                </button>
              </div>
            </div>

            {error && (
              <p className="mt-4 text-sm" style={{ color: "#ff9c9c" }}>
                {error}
              </p>
            )}

            <div
              className="mt-6 overflow-x-auto"
              style={{
                background: "rgba(9,20,34,0.6)",
                border: "1px solid rgba(201,167,93,0.35)",
                borderRadius: 14,
              }}
            >
              <table className="w-full" style={{ fontSize: 14 }}>
                <thead>
                  <tr style={{ color: mystic, textTransform: "uppercase", fontSize: 11, letterSpacing: "0.16em" }}>
                    <th style={thStyle}>Date</th>
                    <th style={thStyle}>Name</th>
                    <th style={thStyle}>Email</th>
                    <th style={thStyle}>Interested In</th>
                  </tr>
                </thead>
                <tbody>
                  {rows === null && (
                    <tr>
                      <td colSpan={4} style={{ ...tdStyle, textAlign: "center", color: mystic }}>
                        Loading…
                      </td>
                    </tr>
                  )}
                  {rows && rows.length === 0 && (
                    <tr>
                      <td colSpan={4} style={{ ...tdStyle, textAlign: "center", color: mystic }}>
                        No signups yet.
                      </td>
                    </tr>
                  )}
                  {rows?.map((r) => (
                    <tr key={r.id} style={{ borderTop: "1px solid rgba(201,167,93,0.15)" }}>
                      <td style={tdStyle}>{new Date(r.created_at).toLocaleString()}</td>
                      <td style={tdStyle}>{r.name || "—"}</td>
                      <td style={{ ...tdStyle, color: goldBright }}>{r.email}</td>
                      <td style={tdStyle}>
                        {r.choice === "waitlist" ? "Waiting List" : "Beta Testing"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}

function StatChip({ label, value }: { label: string; value: number }) {
  return (
    <div
      className="px-4 py-2"
      style={{
        background: "rgba(241,210,122,0.08)",
        border: "1px solid rgba(241,210,122,0.35)",
        borderRadius: 999,
        color: ivory,
        fontSize: 13,
      }}
    >
      <span style={{ color: mystic, letterSpacing: "0.16em", textTransform: "uppercase", fontSize: 11, marginRight: 8 }}>
        {label}
      </span>
      <strong style={{ color: goldBright }}>{value}</strong>
    </div>
  );
}

const thStyle: React.CSSProperties = { textAlign: "left", padding: "14px 16px", fontWeight: 600 };
const tdStyle: React.CSSProperties = { padding: "12px 16px", color: ivory };
