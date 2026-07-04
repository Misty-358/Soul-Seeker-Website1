import * as React from "react";
import jsPDF from "jspdf";
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
import type { LegalDoc } from "@/lib/legalDocs";

function downloadPdf(doc: LegalDoc, fileName: string) {
  const pdf = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 54;
  const maxWidth = pageWidth - margin * 2;
  let y = margin;

  const ensureSpace = (needed: number) => {
    if (y + needed > pageHeight - margin) {
      pdf.addPage();
      y = margin;
    }
  };

  const writeLines = (text: string, size: number, bold = false, indent = 0) => {
    pdf.setFont("helvetica", bold ? "bold" : "normal");
    pdf.setFontSize(size);
    const lines = pdf.splitTextToSize(text, maxWidth - indent) as string[];
    const lh = size * 1.35;
    for (const line of lines) {
      ensureSpace(lh);
      pdf.text(line, margin + indent, y);
      y += lh;
    }
  };

  pdf.setTextColor(0, 0, 0);
  writeLines(doc.title, 20, true);
  y += 6;
  writeLines(`Last Updated: ${doc.lastUpdated}`, 10);
  y += 12;

  for (const section of doc.sections) {
    y += 8;
    writeLines(section.heading, 13, true);
    y += 4;
    for (const block of section.blocks) {
      if (block.type === "p") {
        writeLines(block.text, 11);
        y += 4;
      } else {
        for (const item of block.items) {
          writeLines(`•  ${item}`, 11, false, 14);
        }
        y += 4;
      }
    }
  }

  pdf.save(fileName);
}

export function LegalPage({
  doc,
  eyebrow,
  pdfFileName,
}: {
  doc: LegalDoc;
  eyebrow: string;
  pdfFileName: string;
}) {
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

      <section className="relative z-10 max-w-[900px] mx-auto px-8 pt-36 pb-8 text-center">
        <Flourish label={eyebrow} />
        <h1
          className="mt-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: gold,
            fontSize: 52,
            lineHeight: 1.1,
            fontWeight: 500,
            letterSpacing: "0.02em",
            textShadow: "0 0 40px rgba(241,210,122,0.2)",
          }}
        >
          {doc.title}
        </h1>
        <Divider width={80} />
        <p
          className="italic"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: mystic,
            fontSize: 16,
            opacity: 0.9,
          }}
        >
          Last Updated: {doc.lastUpdated}
        </p>
        <div className="mt-6">
          <button
            type="button"
            onClick={() => downloadPdf(doc, pdfFileName)}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-[11px] tracking-[0.28em] transition-all"
            style={{
              color: midnight,
              background: `linear-gradient(135deg, ${goldBright}, ${gold})`,
              borderRadius: 999,
              fontWeight: 600,
              boxShadow: "0 10px 30px rgba(241,210,122,0.3)",
            }}
          >
            DOWNLOAD PDF
          </button>
        </div>
      </section>

      <section className="relative z-10 max-w-[900px] mx-auto px-8 pb-24">
        <article
          className="rounded-[18px] p-10 md:p-14"
          style={{
            background: "rgba(9,20,34,0.55)",
            border: `1px solid rgba(201,167,93,0.22)`,
            boxShadow: "0 30px 80px rgba(0,0,0,0.35), inset 0 0 60px rgba(124,77,255,0.06)",
            backdropFilter: "blur(6px)",
          }}
        >
          {doc.sections.map((s) => (
            <section key={s.heading} className="mb-8 last:mb-0">
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: goldBright,
                  fontSize: 24,
                  letterSpacing: "0.02em",
                  fontWeight: 500,
                  marginBottom: 12,
                }}
              >
                {s.heading}
              </h2>
              {s.blocks.map((b, i) =>
                b.type === "p" ? (
                  <p
                    key={i}
                    className="mb-3"
                    style={{ color: ivory, fontSize: 14.5, lineHeight: 1.8, opacity: 0.9 }}
                  >
                    {b.text}
                  </p>
                ) : (
                  <ul key={i} className="mb-3 pl-5 list-disc" style={{ color: ivory }}>
                    {b.items.map((it, j) => (
                      <li
                        key={j}
                        style={{ fontSize: 14.5, lineHeight: 1.8, opacity: 0.9, marginBottom: 2 }}
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                ),
              )}
            </section>
          ))}
        </article>
      </section>

      <SiteFooter />
    </div>
  );
}
