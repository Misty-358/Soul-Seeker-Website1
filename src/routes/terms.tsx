import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { termsDoc } from "@/lib/legalDocs";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Soul Seeker" },
      {
        name: "description",
        content:
          "Read the Soul Seeker Terms & Conditions covering account use, subscriptions, AI-generated content and acceptable use.",
      },
      { property: "og:title", content: "Terms & Conditions — Soul Seeker" },
      {
        property: "og:description",
        content: "The Terms & Conditions that govern your use of Soul Seeker.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      doc={termsDoc}
      eyebrow="LEGAL"
      pdfFileName="Soul-Seeker-Terms-and-Conditions.pdf"
    />
  );
}
