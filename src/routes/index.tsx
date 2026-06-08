import { createFileRoute } from "@tanstack/react-router";

const screens = [
  { id: 1, title: "Daily Ritual", subtitle: "The Celestial Spread" },
  { id: 2, title: "Sacred Archive", subtitle: "Your reading history" },
  { id: 3, title: "Understanding Tarot", subtitle: "Learn the arcana" },
  { id: 4, title: "Career Pivot Ritual", subtitle: "Focused guidance" },
  { id: 5, title: "Ritual Reading", subtitle: "Saved reading view" },
  { id: 6, title: "Marketplace", subtitle: "Decks & relics" },
  { id: 7, title: "Celestial Calendar", subtitle: "Cosmic events" },
  { id: 8, title: "Card Customisation", subtitle: "Aetheria Arcana" },
  { id: 9, title: "Subscription", subtitle: "Elevate your journey" },
  { id: 10, title: "Soul Circle", subtitle: "Community" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Soulseeker Tarot — Screens" },
      { name: "description", content: "A mystical tarot companion: daily rituals, archives, marketplace, and community." },
      { property: "og:title", content: "Soulseeker Tarot" },
      { property: "og:description", content: "A mystical tarot companion: daily rituals, archives, marketplace, and community." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: "#050816", color: "#d8e3f7" }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(37,109,255,0.18) 0%, transparent 45%), radial-gradient(circle at 80% 70%, rgba(111,91,255,0.14) 0%, transparent 45%)",
        }}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Inter:wght@400;600&display=swap"
        rel="stylesheet"
      />

      <header className="relative max-w-6xl mx-auto px-6 pt-16 pb-10 text-center">
        <p
          style={{ fontFamily: "Inter", letterSpacing: "0.3em", fontSize: 11, color: "#e9c349" }}
          className="uppercase mb-3"
        >
          A Mystical Companion
        </p>
        <h1
          style={{
            fontFamily: "Cinzel",
            fontSize: "clamp(36px, 6vw, 64px)",
            letterSpacing: "0.1em",
            color: "#ffe088",
            textShadow: "0 0 24px rgba(233,195,73,0.4)",
          }}
          className="uppercase"
        >
          Soulseeker Tarot
        </h1>
        <p
          className="mt-4 max-w-xl mx-auto italic"
          style={{ fontFamily: "Inter", color: "rgba(216,227,247,0.7)" }}
        >
          Ten sacred screens — daily readings, archives, rituals, marketplace, and the soul circle.
          Tap any tile to enter.
        </p>
      </header>

      <main className="relative max-w-6xl mx-auto px-6 pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {screens.map((s) => (
            <a
              key={s.id}
              href={`/screens/${s.id}.html`}
              className="group block rounded-2xl overflow-hidden transition-transform hover:-translate-y-1"
              style={{
                background: "rgba(14,30,69,0.55)",
                border: "1px solid rgba(212,175,55,0.18)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              }}
            >
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "9 / 14", background: "#091422" }}
              >
                <iframe
                  src={`/screens/${s.id}.html`}
                  title={s.title}
                  loading="lazy"
                  className="absolute top-0 left-0 origin-top-left pointer-events-none"
                  style={{
                    width: "390px",
                    height: "844px",
                    border: 0,
                    transform: "scale(0.7)",
                    transformOrigin: "top left",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,8,22,0.85) 0%, rgba(5,8,22,0.0) 40%)",
                  }}
                />
              </div>
              <div className="p-5 flex items-end justify-between gap-3">
                <div>
                  <p
                    style={{ fontFamily: "Inter", letterSpacing: "0.25em", fontSize: 10, color: "#e9c349" }}
                    className="uppercase mb-1"
                  >
                    Screen {String(s.id).padStart(2, "0")}
                  </p>
                  <h2
                    style={{ fontFamily: "Cinzel", color: "#ffe088", letterSpacing: "0.08em", fontSize: 18 }}
                    className="uppercase"
                  >
                    {s.title}
                  </h2>
                  <p
                    className="mt-1"
                    style={{ fontFamily: "Inter", fontSize: 12, color: "rgba(216,227,247,0.65)" }}
                  >
                    {s.subtitle}
                  </p>
                </div>
                <span
                  className="shrink-0 rounded-full px-3 py-1 transition-colors"
                  style={{
                    border: "1px solid rgba(212,175,55,0.5)",
                    color: "#ffe088",
                    fontFamily: "Inter",
                    fontSize: 11,
                    letterSpacing: "0.2em",
                  }}
                >
                  OPEN →
                </span>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
