import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { toast } from "sonner";
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
  goldSoft,
  ivory,
  mystic,
} from "@/components/SiteChrome";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Soul Seeker" },
      {
        name: "description",
        content:
          "Reach out to the Soul Seeker team. Send us a message or call us directly — we'd love to hear from you.",
      },
      { property: "og:title", content: "Contact Us — Soul Seeker" },
      {
        property: "og:description",
        content: "Get in touch with the Soul Seeker team.",
      },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Please enter your name" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email" })
    .max(255),
  subject: z.string().trim().max(150).optional(),
  message: z
    .string()
    .trim()
    .min(1, { message: "Please write a message" })
    .max(2000, { message: "Message must be less than 2000 characters" }),
});

const PHONE_DISPLAY = "07340 544159";
const PHONE_TEL = "+447340544159";
const EMAIL = "admin@soulseekertarot.com";
const SUPPORT_EMAIL = "soulseekertarot29@gmail.com";

function GoldGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={gold} strokeWidth="1" opacity="0.5" />
      <path d="M12 3l1.6 7.4L21 12l-7.4 1.6L12 21l-1.6-7.4L3 12l7.4-1.6z" fill={goldBright} />
    </svg>
  );
}

function ContactPage() {
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [submitting, setSubmitting] = React.useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!errs[key]) errs[key] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    // No backend wired: simulate a brief send.
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Message sent — we'll be in touch soon.");
      form.reset();
    }, 700);
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at top, ${deepSpace} 0%, ${midnight} 60%, #02040c 100%)`,
        color: ivory,
      }}
    >
      <StarfieldBackdrop />
      <SiteNav />

      <main className="relative z-10 pt-32 ss-top-mobile pb-20 px-4 sm:px-6">
        <div className="max-w-[1100px] mx-auto">
          <div id="contact" className="text-center mb-10">
            <Flourish label="REACH OUT" />
            <h1
              className="mt-4"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                color: goldBright,
                letterSpacing: "0.12em",
                textShadow: "0 0 24px rgba(241,210,122,0.25)",
              }}
            >
              Contact Us
            </h1>
            <Divider />
            <p
              className="max-w-2xl mx-auto mt-2"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 20,
                lineHeight: 1.55,
                color: mystic,
                fontStyle: "italic",
              }}
            >
              Whether the stars are calling you toward a question, a reflection, or
              simply a conversation — we would be honoured to hear from you. Send us
              a message below, or reach out directly by phone or email.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] mt-12">
            {/* Details panel */}
            <aside
              className="rounded-2xl p-5 sm:p-8 backdrop-blur-md"
              style={{
                background: "rgba(9,20,34,0.55)",
                border: `1px solid rgba(212,175,55,0.28)`,
                boxShadow: "0 0 40px rgba(124,77,255,0.08) inset",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <GoldGlyph />
                <h2
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 18,
                    color: gold,
                    letterSpacing: "0.24em",
                  }}
                >
                  GET IN TOUCH
                </h2>
              </div>

              <ul className="space-y-6 text-sm" style={{ color: ivory }}>
                <li>
                  <div
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: 11,
                      letterSpacing: "0.3em",
                      color: goldSoft,
                      marginBottom: 6,
                    }}
                  >
                    PHONE
                  </div>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="transition-colors"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 22,
                      color: goldBright,
                      letterSpacing: "0.05em",
                      textShadow: "0 0 14px rgba(241,210,122,0.25)",
                    }}
                  >
                    {PHONE_DISPLAY}
                  </a>
                </li>

                <li>
                  <div
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: 11,
                      letterSpacing: "0.3em",
                      color: goldSoft,
                      marginBottom: 6,
                    }}
                  >
                    EMAIL
                  </div>
                  <div>
                    <a
                      href={`mailto:${EMAIL}`}
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 18,
                        color: ivory,
                      }}
                    >
                      {EMAIL}
                    </a>
                  </div>
                </li>


                <li>
                  <div
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: 11,
                      letterSpacing: "0.3em",
                      color: goldSoft,
                      marginBottom: 6,
                    }}
                  >
                    HOURS
                  </div>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 16,
                      lineHeight: 1.5,
                      color: ivory,
                      opacity: 0.9,
                    }}
                  >
                    Monday – Friday · 9:00 – 18:00 (GMT)
                    <br />
                    We aim to respond within 7 working days.
                  </p>
                </li>
              </ul>

              <div className="mt-8 pt-6" style={{ borderTop: `1px solid rgba(212,175,55,0.2)` }}>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    color: mystic,
                    fontSize: 15,
                    lineHeight: 1.55,
                  }}
                >
                  "Every message is a spark. Every question, a doorway."
                </p>
              </div>
            </aside>

            {/* Contact form */}
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl p-5 sm:p-8 backdrop-blur-md"
              style={{
                background: "rgba(9,20,34,0.55)",
                border: `1px solid rgba(212,175,55,0.28)`,
                boxShadow: "0 0 40px rgba(124,77,255,0.08) inset",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <GoldGlyph />
                <h2
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 18,
                    color: gold,
                    letterSpacing: "0.24em",
                  }}
                >
                  SEND A MESSAGE
                </h2>
              </div>

              <div className="grid gap-5">
                <Field label="Your Name" htmlFor="name" error={errors.name}>
                  <Input
                    id="name"
                    name="name"
                    maxLength={100}
                    autoComplete="name"
                    placeholder="e.g. Aurora Lightweaver"
                    className="h-11 border-[rgba(212,175,55,0.35)] bg-[rgba(5,8,22,0.6)] text-white placeholder:text-white/40 focus-visible:ring-[color:var(--ring)]"
                  />
                </Field>

                <Field label="Email Address" htmlFor="email" error={errors.email}>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    maxLength={255}
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="h-11 border-[rgba(212,175,55,0.35)] bg-[rgba(5,8,22,0.6)] text-white placeholder:text-white/40"
                  />
                </Field>

                <Field label="Subject (optional)" htmlFor="subject" error={errors.subject}>
                  <Input
                    id="subject"
                    name="subject"
                    maxLength={150}
                    placeholder="What's on your mind?"
                    className="h-11 border-[rgba(212,175,55,0.35)] bg-[rgba(5,8,22,0.6)] text-white placeholder:text-white/40"
                  />
                </Field>

                <Field label="Your Message" htmlFor="message" error={errors.message}>
                  <Textarea
                    id="message"
                    name="message"
                    maxLength={2000}
                    rows={6}
                    placeholder="Share your question, reflection or feedback..."
                    className="border-[rgba(212,175,55,0.35)] bg-[rgba(5,8,22,0.6)] text-white placeholder:text-white/40 min-h-[140px]"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 inline-flex items-center justify-center rounded-md px-6 py-3 transition-all disabled:opacity-60"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    letterSpacing: "0.28em",
                    fontSize: 13,
                    color: midnight,
                    background: `linear-gradient(135deg, ${goldBright}, ${gold})`,
                    boxShadow: "0 0 24px rgba(241,210,122,0.35)",
                    fontWeight: 600,
                  }}
                >
                  {submitting ? "SENDING..." : "SEND MESSAGE"}
                </button>

                <p
                  className="text-center mt-1"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    color: ivory,
                    opacity: 0.55,
                    fontSize: 13,
                  }}
                >
                  Your details are kept private and never shared.
                </p>
              </div>
            </form>
          </div>


        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block mb-2"
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 11,
          letterSpacing: "0.28em",
          color: goldSoft,
        }}
      >
        {label.toUpperCase()}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs" style={{ color: "#ff9b9b" }}>
          {error}
        </p>
      )}
    </div>
  );
}
