import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { privacyDoc } from "@/lib/legalDocs";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Soul Seeker" },
      {
        name: "description",
        content:
          "How Soul Seeker collects, uses, stores and protects your personal information, including UK & EU GDPR compliance.",
      },
      { property: "og:title", content: "Privacy Policy — Soul Seeker" },
      {
        property: "og:description",
        content: "How Soul Seeker handles your personal information.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return <LegalPage doc={privacyDoc} eyebrow="LEGAL" pdfFileName="Soul-Seeker-Privacy-Policy.pdf" />;
}
