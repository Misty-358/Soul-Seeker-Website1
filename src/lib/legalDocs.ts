export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDoc = {
  title: string;
  lastUpdated: string;
  intro: LegalBlock[];
  sections: LegalSection[];
};

export const termsDoc: LegalDoc = {
  title: "Soul Seeker Terms & Conditions",
  lastUpdated: "2 July 2026",
  intro: [],
  sections: [
    {
      heading: "1. Introduction",
      blocks: [
        { type: "p", text: 'Welcome to Soul Seeker ("the App", "we", "our", "us").' },
        {
          type: "p",
          text: "By accessing or using Soul Seeker, you agree to be bound by these Terms & Conditions. If you do not agree with these terms, please do not use the App.",
        },
        {
          type: "p",
          text: "You must be at least 18 years old, or have the permission of a parent or guardian where permitted by local law, to use the App.",
        },
      ],
    },
    {
      heading: "2. Entertainment and Personal Reflection Disclaimer",
      blocks: [
        {
          type: "p",
          text: "Soul Seeker provides tarot readings, interpretations, insights, and related content for entertainment, self-reflection, and personal development purposes only.",
        },
        { type: "p", text: "Tarot readings and AI-generated interpretations:" },
        {
          type: "ul",
          items: [
            "Are not professional advice.",
            "Should not be relied upon as financial, legal, medical, psychological, or relationship advice.",
            "Should not replace consultation with qualified professionals.",
          ],
        },
        {
          type: "p",
          text: "You remain solely responsible for any decisions you make based on information provided through the App.",
        },
      ],
    },
    {
      heading: "3. User Accounts",
      blocks: [
        { type: "p", text: "To access certain features, you may need to create an account." },
        { type: "p", text: "You agree to:" },
        {
          type: "ul",
          items: [
            "Provide accurate information.",
            "Keep your login credentials secure.",
            "Notify us of any unauthorised access to your account.",
          ],
        },
        { type: "p", text: "You are responsible for all activity that occurs under your account." },
      ],
    },
    {
      heading: "4. Subscription Services",
      blocks: [
        { type: "p", text: "Soul Seeker offers both free and paid subscription plans." },
        {
          type: "p",
          text: "Subscription features, limits, pricing, and benefits are described within the App and may be updated from time to time.",
        },
        { type: "p", text: "By purchasing a subscription:" },
        {
          type: "ul",
          items: [
            "You authorise recurring payments through the applicable app store.",
            "Your subscription automatically renews unless cancelled.",
            "Cancellation must be completed through the relevant app store account.",
          ],
        },
        { type: "p", text: "No refunds are provided except where required by applicable law." },
      ],
    },
    {
      heading: "5. AI-Generated Content",
      blocks: [
        { type: "p", text: "Soul Seeker may generate:" },
        {
          type: "ul",
          items: [
            "Tarot interpretations",
            "Reading summaries",
            "Personal insights",
            "Custom tarot card artwork",
            "Custom tarot deck content",
          ],
        },
        {
          type: "p",
          text: "AI-generated content may occasionally contain inaccuracies, omissions, or unexpected results.",
        },
        {
          type: "p",
          text: "We do not guarantee the accuracy, completeness, or suitability of AI-generated content.",
        },
      ],
    },
    {
      heading: "6. Custom Tarot Deck Creation",
      blocks: [
        {
          type: "p",
          text: "Users may create custom tarot cards and decks using text prompts, uploaded images, or other content.",
        },
        {
          type: "p",
          text: "You agree that you will not upload, create, request, or distribute content that:",
        },
        {
          type: "ul",
          items: [
            "Is unlawful.",
            "Is defamatory.",
            "Is abusive or harassing.",
            "Contains hate speech.",
            "Contains sexually explicit material.",
            "Promotes violence or illegal activities.",
            "Infringes the intellectual property rights of others.",
          ],
        },
        { type: "p", text: "We reserve the right to remove content that violates these terms." },
      ],
    },
    {
      heading: "7. User Content",
      blocks: [
        { type: "p", text: "You retain ownership of content that you create within Soul Seeker." },
        {
          type: "p",
          text: "By uploading or creating content within the App, you grant Soul Seeker a non-exclusive licence to:",
        },
        {
          type: "ul",
          items: [
            "Store your content.",
            "Process your content.",
            "Display your content within the App.",
            "Provide requested services.",
          ],
        },
        {
          type: "p",
          text: "We do not claim ownership of your custom tarot decks or uploaded content.",
        },
      ],
    },
    {
      heading: "8. Marketplace and Printed Products",
      blocks: [
        {
          type: "p",
          text: "Where available, users may purchase printed tarot cards, decks, or other products.",
        },
        { type: "p", text: "Product images shown within the App are illustrative." },
        { type: "p", text: "Minor differences in colour, printing, or material may occur." },
        {
          type: "p",
          text: "Custom products may not be refundable unless defective or required by consumer law.",
        },
      ],
    },
    {
      heading: "9. Acceptable Use",
      blocks: [
        { type: "p", text: "You agree not to:" },
        {
          type: "ul",
          items: [
            "Attempt to disrupt the App.",
            "Access accounts belonging to others.",
            "Reverse engineer the App.",
            "Use automated systems to abuse services.",
            "Circumvent subscription limits.",
            "Upload malicious software.",
          ],
        },
        {
          type: "p",
          text: "Violation of these terms may result in suspension or termination of your account.",
        },
      ],
    },
    {
      heading: "10. Intellectual Property",
      blocks: [
        {
          type: "p",
          text: "The Soul Seeker name, branding, logos, designs, text, software, and original content remain the property of Soul Seeker and its licensors.",
        },
        {
          type: "p",
          text: "You may not reproduce, copy, sell, or distribute Soul Seeker content without permission.",
        },
      ],
    },
    {
      heading: "11. Availability of Service",
      blocks: [
        {
          type: "p",
          text: "We aim to provide uninterrupted access but do not guarantee that the App will always be available.",
        },
        { type: "p", text: "We may:" },
        {
          type: "ul",
          items: [
            "Update the App.",
            "Modify features.",
            "Remove features.",
            "Suspend services for maintenance.",
          ],
        },
      ],
    },
    {
      heading: "12. Limitation of Liability",
      blocks: [
        { type: "p", text: "To the fullest extent permitted by law:" },
        { type: "p", text: "Soul Seeker shall not be liable for:" },
        {
          type: "ul",
          items: [
            "Loss of profits.",
            "Loss of data.",
            "Business interruption.",
            "Personal decisions made based on readings or interpretations.",
            "Indirect or consequential damages.",
          ],
        },
        { type: "p", text: "Your use of the App is at your own risk." },
      ],
    },
    {
      heading: "13. Termination",
      blocks: [
        { type: "p", text: "We may suspend or terminate accounts that:" },
        {
          type: "ul",
          items: [
            "Breach these Terms.",
            "Abuse the platform.",
            "Create prohibited content.",
            "Engage in unlawful activity.",
          ],
        },
        { type: "p", text: "You may stop using the App at any time." },
      ],
    },
    {
      heading: "14. Privacy",
      blocks: [
        {
          type: "p",
          text: "Your use of Soul Seeker is also governed by our Privacy Policy, which explains how personal information is collected, stored, and processed.",
        },
      ],
    },
    {
      heading: "15. Changes to These Terms",
      blocks: [
        { type: "p", text: "We may update these Terms from time to time." },
        {
          type: "p",
          text: "Where material changes occur, we will notify users through the App or other appropriate means.",
        },
        {
          type: "p",
          text: "Continued use of Soul Seeker after changes take effect constitutes acceptance of the updated Terms.",
        },
      ],
    },
    {
      heading: "16. Governing Law",
      blocks: [
        {
          type: "p",
          text: "These Terms shall be governed by and interpreted in accordance with the laws of England and Wales.",
        },
        {
          type: "p",
          text: "Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
        },
      ],
    },
    {
      heading: "17. Contact",
      blocks: [
        { type: "p", text: "For questions regarding these Terms & Conditions, please contact:" },
        { type: "p", text: "Soul Seeker Support" },
        { type: "p", text: "Email: soulseekertarot29@gmail.com" },
        { type: "p", text: "Website: soulseekertarot.com" },
      ],
    },
  ],
};

export const privacyDoc: LegalDoc = {
  title: "Soul Seeker Privacy Policy",
  lastUpdated: "2 July 2026",
  intro: [],
  sections: [
    {
      heading: "Introduction",
      blocks: [
        {
          type: "p",
          text: 'Soul Seeker ("we", "our", "us") respects your privacy and is committed to protecting your personal information.',
        },
        {
          type: "p",
          text: "This Privacy Policy explains how we collect, use, store, and protect information when you use the Soul Seeker application, website, and related services.",
        },
        {
          type: "p",
          text: "By using Soul Seeker, you agree to the collection and use of information as described in this Privacy Policy.",
        },
      ],
    },
    {
      heading: "1. Information We Collect",
      blocks: [
        { type: "p", text: "Information You Provide" },
        {
          type: "p",
          text: "When you create an account or use Soul Seeker, we may collect:",
        },
        {
          type: "ul",
          items: [
            "Name or username",
            "Email address",
            "Profile information you choose to provide",
            "Subscription information",
            "Custom tarot deck content",
            "Tarot card prompts",
            "Saved readings",
            "Journal entries and notes",
            "Customer support communications",
          ],
        },
        { type: "p", text: "Information Collected Automatically" },
        { type: "p", text: "We may automatically collect:" },
        {
          type: "ul",
          items: [
            "Device type",
            "Operating system",
            "App version",
            "IP address",
            "General location information",
            "Usage statistics",
            "Error reports and diagnostics",
            "Subscription status",
          ],
        },
        { type: "p", text: "AI-Generated Content" },
        {
          type: "p",
          text: "When you create custom tarot cards, decks, readings, summaries, or interpretations, information you provide may be processed by artificial intelligence systems to generate content and responses.",
        },
      ],
    },
    {
      heading: "2. How We Use Your Information",
      blocks: [
        { type: "p", text: "We use your information to:" },
        {
          type: "ul",
          items: [
            "Create and manage your account",
            "Provide tarot readings and interpretations",
            "Generate custom tarot cards and decks",
            "Save your readings and content",
            "Process subscriptions and payments",
            "Improve the App and user experience",
            "Monitor performance and security",
            "Respond to support requests",
            "Comply with legal obligations",
          ],
        },
      ],
    },
    {
      heading: "3. Storage of Your Content",
      blocks: [
        { type: "p", text: "Soul Seeker may store:" },
        {
          type: "ul",
          items: [
            "Reading history",
            "Saved readings",
            "Personal notes",
            "Journal entries",
            "Custom tarot cards",
            "Custom tarot decks",
            "User preferences",
          ],
        },
        {
          type: "p",
          text: "This information is stored to provide App functionality and allow access across devices.",
        },
      ],
    },
    {
      heading: "4. AI Processing",
      blocks: [
        {
          type: "p",
          text: "Some features use artificial intelligence technology to generate:",
        },
        {
          type: "ul",
          items: [
            "Tarot interpretations",
            "Reading summaries",
            "Insights",
            "Custom card imagery",
            "Custom deck content",
          ],
        },
        {
          type: "p",
          text: "Information submitted to these features may be processed by trusted third-party AI providers for the purpose of generating requested content.",
        },
        {
          type: "p",
          text: "We do not use your personal readings to make automated decisions that have legal or significant personal effects.",
        },
      ],
    },
    {
      heading: "5. Subscription and Payment Information",
      blocks: [
        { type: "p", text: "Payments are processed through:" },
        {
          type: "ul",
          items: ["Apple App Store", "Google Play Store", "Other authorised payment providers"],
        },
        { type: "p", text: "Soul Seeker does not store your full payment card details." },
        {
          type: "p",
          text: "Payment information is handled by the relevant payment processor in accordance with their own privacy policies.",
        },
      ],
    },
    {
      heading: "6. Sharing Information",
      blocks: [
        { type: "p", text: "We do not sell your personal information." },
        { type: "p", text: "We may share information with:" },
        {
          type: "ul",
          items: [
            "Cloud hosting providers",
            "Database providers",
            "AI service providers",
            "Analytics providers",
            "Payment processors",
            "Legal or regulatory authorities where required",
          ],
        },
        { type: "p", text: "All service providers are required to protect your information appropriately." },
      ],
    },
    {
      heading: "7. Data Security",
      blocks: [
        {
          type: "p",
          text: "We take reasonable technical and organisational measures to protect your information from:",
        },
        {
          type: "ul",
          items: ["Unauthorised access", "Disclosure", "Alteration", "Loss", "Misuse"],
        },
        { type: "p", text: "However, no online service can guarantee absolute security." },
      ],
    },
    {
      heading: "8. Your Rights",
      blocks: [
        { type: "p", text: "Depending on your location, you may have rights to:" },
        {
          type: "ul",
          items: [
            "Access your personal data",
            "Correct inaccurate information",
            "Delete your information",
            "Restrict processing",
            "Object to processing",
            "Receive a copy of your data",
            "Withdraw consent where applicable",
          ],
        },
        { type: "p", text: "To exercise these rights, please contact us using the details below." },
      ],
    },
    {
      heading: "9. Deleting Your Account",
      blocks: [
        { type: "p", text: "You may request deletion of your account at any time." },
        { type: "p", text: "Upon deletion:" },
        {
          type: "ul",
          items: [
            "Your profile information will be removed.",
            "Saved readings may be deleted.",
            "Custom tarot decks may be deleted.",
            "Some information may be retained where required by law or for legitimate business purposes.",
          ],
        },
      ],
    },
    {
      heading: "10. Children's Privacy",
      blocks: [
        { type: "p", text: "Soul Seeker is not intended for children under the age of 13." },
        {
          type: "p",
          text: "We do not knowingly collect personal information from children under 13.",
        },
        {
          type: "p",
          text: "If we become aware that information has been collected from a child under 13, we will take reasonable steps to remove it.",
        },
      ],
    },
    {
      heading: "11. Cookies and Analytics",
      blocks: [
        {
          type: "p",
          text: "Where applicable, Soul Seeker may use cookies and analytics technologies to:",
        },
        {
          type: "ul",
          items: [
            "Improve functionality",
            "Understand App usage",
            "Diagnose technical issues",
            "Enhance user experience",
          ],
        },
        {
          type: "p",
          text: "Users may manage cookie preferences through their browser settings where applicable.",
        },
      ],
    },
    {
      heading: "12. International Data Transfers",
      blocks: [
        {
          type: "p",
          text: "Your information may be processed and stored in countries outside your country of residence.",
        },
        {
          type: "p",
          text: "Where required, we implement appropriate safeguards to protect personal data during international transfers.",
        },
      ],
    },
    {
      heading: "13. Changes to This Privacy Policy",
      blocks: [
        { type: "p", text: "We may update this Privacy Policy from time to time." },
        { type: "p", text: "Changes will be posted within the App and updated on our website." },
        {
          type: "p",
          text: "Continued use of Soul Seeker after changes become effective constitutes acceptance of the revised Privacy Policy.",
        },
      ],
    },
    {
      heading: "14. UK GDPR and EU GDPR Compliance",
      blocks: [
        {
          type: "p",
          text: "Where applicable, Soul Seeker processes personal data in accordance with:",
        },
        {
          type: "ul",
          items: [
            "UK General Data Protection Regulation (UK GDPR)",
            "Data Protection Act 2018",
            "EU General Data Protection Regulation (EU GDPR)",
          ],
        },
        { type: "p", text: "Lawful Basis for Processing" },
        { type: "p", text: "We process personal information based on:" },
        {
          type: "ul",
          items: [
            "Performance of a contract",
            "Legitimate interests",
            "Legal obligations",
            "User consent where required",
          ],
        },
      ],
    },
    {
      heading: "15. Contact Us",
      blocks: [
        { type: "p", text: "For privacy-related questions or requests, please contact:" },
        { type: "p", text: "Soul Seeker Privacy Team" },
        { type: "p", text: "Email: soulseekertarot29@gmail.com" },
        { type: "p", text: "Website: soulseekertarot.com" },
        { type: "p", text: "Data Protection Requests" },
        {
          type: "p",
          text: "To request access, correction, deletion, or transfer of your personal data, please contact us using the details above.",
        },
      ],
    },
  ],
};
