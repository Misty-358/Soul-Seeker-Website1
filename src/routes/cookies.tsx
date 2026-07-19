import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { cookieDoc } from "@/lib/legalDocs";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Soul Seeker" },
      {
        name: "description",
        content:
          "How Soul Seeker Tarot uses cookies and similar technologies, including Google Analytics 4 and Google Consent Mode v2.",
      },
      { property: "og:title", content: "Cookie Policy — Soul Seeker" },
      {
        property: "og:description",
        content: "Cookies used by Soul Seeker Tarot and how to manage your preferences.",
      },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return <LegalPage doc={cookieDoc} eyebrow="LEGAL" pdfFileName="Soul-Seeker-Cookie-Policy.pdf" />;
}
