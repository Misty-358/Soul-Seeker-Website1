import { createFileRoute, redirect } from "@tanstack/react-router";

const APP_URL = "https://app.soulseekertarot.com";

// The old download/waiting-list page now sends visitors straight to the app.
export const Route = createFileRoute("/download")({
  beforeLoad: () => {
    throw redirect({ href: APP_URL, statusCode: 301 });
  },
  head: () => ({
    meta: [
      { title: "Soul Seeker Tarot App" },
      { name: "description", content: "Open the Soul Seeker Tarot app and choose a reading." },
      { property: "og:title", content: "Soul Seeker Tarot App" },
      { property: "og:description", content: "Open the Soul Seeker Tarot app and choose a reading." },
    ],
  }),
  component: () => null,
});
