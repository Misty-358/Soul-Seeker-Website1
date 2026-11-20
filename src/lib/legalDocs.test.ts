import assert from "node:assert/strict";
import { test } from "node:test";
import { privacyDoc, termsDoc } from "./legalDocs";

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

test("Privacy Policy shows the 20 November 2026 update date", () => {
  assert.strictEqual(privacyDoc.lastUpdated, "20 November 2026");
});

test("Privacy Policy is intended for people aged 16 or over", () => {
  const childrensPrivacy = privacyDoc.sections.find(
    (section) => section.heading === "18. Children's Privacy",
  );

  assert.deepStrictEqual(childrensPrivacy?.blocks[0], {
    type: "p",
    text: "Soul Seeker Tarot is intended for people aged 16 or over. If you believe someone under 16 has provided us with personal information, please contact us at admin@soulseekertarot.com so we can review it and take appropriate action.",
  });
});

test("Privacy Policy identifies website Stripe and Android Google Play payments", () => {
  const information = privacyDoc.sections.find(
    (section) => section.heading === "2. Information We Collect",
  );

  assert.ok(
    information?.blocks.some(
      (block) =>
        block.type === "p" &&
        block.text ===
          "Stripe processes payments made on our website. Google Play Billing processes purchases and subscriptions made through the Android app on Google Play.",
    ),
  );
});

test("Privacy Policy explains Lovable analytics without cookies or visitor identification", () => {
  const analytics = privacyDoc.sections.find(
    (section) => section.heading === "7. Google Analytics and Lovable Visitor Analytics",
  );

  assert.ok(
    analytics?.blocks.some(
      (block) =>
        block.type === "p" &&
        block.text ===
          "We also use Lovable's visitor analytics on our published website. Lovable's analytics uses no cookies, stores nothing on your device, does not keep your IP address and does not identify you.",
    ),
  );
});
