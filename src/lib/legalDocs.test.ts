import assert from "node:assert/strict";
import { test } from "node:test";
import { termsDoc } from "./legalDocs";

test("Terms require users to be aged 16 or over", () => {
  const eligibility = termsDoc.sections.find((section) => section.heading === "2. Eligibility");

  assert.deepStrictEqual(eligibility?.blocks[0], {
    type: "p",
    text: "You must be aged 16 or over to use Soul Seeker Tarot.",
  });
});

test("Terms show the 20 November 2026 update date", () => {
  assert.strictEqual(termsDoc.lastUpdated, "20 November 2026");
});
