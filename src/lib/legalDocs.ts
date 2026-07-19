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
  title: "Privacy Policy",
  lastUpdated: "19 July 2026",
  intro: [
    {
      type: "p",
      text: 'Welcome to Soul Seeker Tarot, operated by Sovereign Entity Ltd ("we", "our" or "us").',
    },
    {
      type: "p",
      text: "We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains what information we collect, why we collect it, how we use it, and the choices and rights available to you.",
    },
    {
      type: "p",
      text: "By using Soul Seeker Tarot, you agree to the practices described in this Privacy Policy.",
    },
  ],
  sections: [
    {
      heading: "1. Who We Are",
      blocks: [
        { type: "p", text: "Soul Seeker Tarot is owned and operated by:" },
        { type: "p", text: "Sovereign Entity Ltd" },
        { type: "p", text: "Website: https://www.soulseekertarot.com" },
        { type: "p", text: "Application: https://app.soulseekertarot.com" },
        { type: "p", text: "Email: admin@soulseekertarot.com" },
      ],
    },
    {
      heading: "2. Information We Collect",
      blocks: [
        { type: "p", text: "Depending on how you use Soul Seeker Tarot, we may collect:" },
        { type: "p", text: "Account Information" },
        {
          type: "ul",
          items: [
            "Username",
            "Email address",
            "Secure authentication information",
            "Subscription details",
            "User preferences",
          ],
        },
        { type: "p", text: "Tarot Activity" },
        { type: "p", text: "To provide your personalised experience we may securely store:" },
        {
          type: "ul",
          items: [
            "Tarot readings",
            "Questions you submit",
            "Saved readings",
            "Monthly summaries",
            "AI-generated insights",
            "Custom Tarot deck information",
            "Deck print requests",
            "Personal preferences",
          ],
        },
        { type: "p", text: "This information is private to your account unless you choose to share it." },
        { type: "p", text: "Payment Information" },
        { type: "p", text: "Payments are securely processed by Stripe." },
        { type: "p", text: "We never store your payment card details." },
        { type: "p", text: "Stripe may collect:" },
        {
          type: "ul",
          items: [
            "Payment information",
            "Billing details",
            "Transaction history",
            "Subscription information",
          ],
        },
        { type: "p", text: "Please refer to Stripe's Privacy Policy for further information." },
        { type: "p", text: "Technical Information" },
        { type: "p", text: "We may automatically collect:" },
        {
          type: "ul",
          items: [
            "Device type",
            "Browser",
            "Operating system",
            "Approximate location",
            "Language",
            "Crash reports",
            "Diagnostic information",
            "Performance data",
          ],
        },
      ],
    },
    {
      heading: "3. How We Use Your Information",
      blocks: [
        { type: "p", text: "We use your information to:" },
        {
          type: "ul",
          items: [
            "Create and manage your account.",
            "Deliver personalised Tarot readings.",
            "Generate AI interpretations.",
            "Save your readings and insights.",
            "Process subscriptions and purchases.",
            "Respond to support requests.",
            "Improve our services.",
            "Protect against fraud and misuse.",
            "Comply with legal obligations.",
          ],
        },
      ],
    },
    {
      heading: "4. Legal Basis for Processing",
      blocks: [
        {
          type: "p",
          text: "Under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, we process your personal information only where we have a lawful basis.",
        },
        { type: "p", text: "Performance of a Contract" },
        {
          type: "p",
          text: "We process information necessary to provide the Soul Seeker Tarot service, including:",
        },
        {
          type: "ul",
          items: [
            "Managing your account.",
            "Delivering Tarot readings.",
            "Saving your content.",
            "Processing subscriptions.",
            "Providing customer support.",
          ],
        },
        { type: "p", text: "Legitimate Interests" },
        { type: "p", text: "We process certain information where necessary to:" },
        {
          type: "ul",
          items: [
            "Improve Soul Seeker Tarot.",
            "Monitor performance.",
            "Detect fraud.",
            "Maintain security.",
            "Develop new features.",
            "Respond to feedback.",
            "Protect our systems.",
          ],
        },
        { type: "p", text: "We always balance these interests against your rights and freedoms." },
        { type: "p", text: "Consent" },
        { type: "p", text: "We rely on your consent for:" },
        {
          type: "ul",
          items: [
            "Analytics cookies.",
            "Google Analytics.",
            "Marketing emails (if you choose to receive them).",
            "Optional features requiring your permission.",
          ],
        },
        { type: "p", text: "You may withdraw your consent at any time." },
        { type: "p", text: "Legal Obligations" },
        { type: "p", text: "We may process personal information where required by law, including:" },
        {
          type: "ul",
          items: [
            "Tax obligations",
            "Financial reporting",
            "Fraud prevention",
            "Regulatory compliance",
            "Law enforcement requests where legally required",
          ],
        },
      ],
    },
    {
      heading: "5. Artificial Intelligence",
      blocks: [
        {
          type: "p",
          text: "Soul Seeker Tarot uses Artificial Intelligence to generate personalised Tarot interpretations based on the cards drawn and the information you choose to provide.",
        },
        { type: "p", text: "The AI is designed to support:" },
        {
          type: "ul",
          items: [
            "Personal reflection",
            "Self-awareness",
            "Spiritual exploration",
            "Entertainment",
          ],
        },
        { type: "p", text: "AI interpretations are intended as guidance only." },
        {
          type: "p",
          text: "They should not be relied upon as medical, legal, financial or other professional advice.",
        },
        { type: "p", text: "Final decisions always remain your own." },
        {
          type: "p",
          text: "Information submitted for readings may be securely processed by trusted AI service providers solely to generate the interpretation you have requested and to maintain the reliability and security of the service.",
        },
      ],
    },
    {
      heading: "6. Our Commitment to Responsible AI",
      blocks: [
        {
          type: "p",
          text: "Responsible use of Artificial Intelligence is an important part of Soul Seeker Tarot.",
        },
        { type: "p", text: "We have designed our AI to:" },
        {
          type: "ul",
          items: [
            "Speak respectfully and compassionately.",
            "Encourage reflection rather than certainty.",
            "Respect your free will and personal choices.",
            "Avoid presenting predictions as guaranteed outcomes.",
            "Support personal growth without replacing professional advice.",
          ],
        },
        {
          type: "p",
          text: "Our AI does not make decisions about your legal rights, employment, finances, healthcare or any other matters that produce legal or similarly significant effects.",
        },
        {
          type: "p",
          text: "We continually review and improve our AI systems to promote fairness, privacy, transparency and responsible use.",
        },
      ],
    },
    {
      heading: "7. Google Analytics",
      blocks: [
        {
          type: "p",
          text: "Soul Seeker Tarot uses Google Analytics 4 (GA4) to understand how visitors use our website and web application.",
        },
        { type: "p", text: "Analytics may collect:" },
        {
          type: "ul",
          items: [
            "Pages viewed",
            "Time spent on pages",
            "Browser type",
            "Device type",
            "Operating system",
            "General geographic region",
            "Referring websites",
            "User interactions",
          ],
        },
        { type: "p", text: "We have enabled IP anonymisation." },
        { type: "p", text: "Analytics data is used only to improve Soul Seeker Tarot." },
        { type: "p", text: "We do not use Google Analytics to identify individual users." },
      ],
    },
    {
      heading: "8. Cookies",
      blocks: [
        { type: "p", text: "We use cookies to:" },
        {
          type: "ul",
          items: [
            "Keep you signed in.",
            "Remember your preferences.",
            "Improve website performance.",
            "Analyse usage.",
            "Protect against fraud.",
          ],
        },
        {
          type: "p",
          text: "Where required by law, analytics cookies are activated only after your consent.",
        },
        { type: "p", text: "You may change your cookie preferences at any time." },
        {
          type: "p",
          text: "For full details of the cookies we use, please read our Cookie Policy at https://www.soulseekertarot.com/cookies.",
        },
      ],
    },
    {
      heading: "9. Google Consent Mode",
      blocks: [
        { type: "p", text: "Soul Seeker Tarot uses Google Consent Mode v2." },
        { type: "p", text: "This allows Google services to respect the cookie choices you make." },
        {
          type: "p",
          text: "If you decline analytics cookies, Google Analytics will either not collect information or will operate only in a limited privacy-preserving manner where permitted by law.",
        },
      ],
    },
    {
      heading: "10. Data Storage",
      blocks: [
        {
          type: "p",
          text: "Your information is securely stored using trusted cloud infrastructure including Supabase.",
        },
        { type: "p", text: "We use security measures including:" },
        {
          type: "ul",
          items: [
            "HTTPS encryption",
            "Secure authentication",
            "Database Row Level Security (RLS)",
            "Role-based access controls",
            "Regular security monitoring",
          ],
        },
      ],
    },
    {
      heading: "11. Email Communications",
      blocks: [
        { type: "p", text: "We may send emails relating to:" },
        {
          type: "ul",
          items: [
            "Account verification",
            "Password resets",
            "Subscription updates",
            "Purchase confirmations",
            "Customer support",
            "Important service announcements",
          ],
        },
        { type: "p", text: "Marketing emails will only be sent where you have chosen to receive them." },
        { type: "p", text: "You may unsubscribe from marketing communications at any time." },
      ],
    },
    {
      heading: "12. Sharing Your Information",
      blocks: [
        { type: "p", text: "We never sell your personal information." },
        {
          type: "p",
          text: "Where necessary, information may be shared with trusted service providers including:",
        },
        {
          type: "ul",
          items: [
            "Stripe",
            "Supabase",
            "Google Analytics",
            "AI service providers",
            "Email delivery providers",
          ],
        },
        {
          type: "p",
          text: "Each provider processes information only as required to deliver the services they perform on our behalf.",
        },
      ],
    },
    {
      heading: "13. International Data Transfers",
      blocks: [
        {
          type: "p",
          text: "Some of our trusted service providers may process personal information outside the United Kingdom or European Economic Area (EEA).",
        },
        { type: "p", text: "Where this occurs, we use appropriate safeguards such as:" },
        {
          type: "ul",
          items: [
            "UK International Data Transfer Agreements (IDTAs)",
            "UK Addendum to the EU Standard Contractual Clauses",
            "Countries recognised as providing an adequate level of protection",
            "Other lawful safeguards required under UK GDPR",
          ],
        },
        {
          type: "p",
          text: "We work only with reputable providers that maintain appropriate security and privacy standards.",
        },
      ],
    },
    {
      heading: "14. Data Retention",
      blocks: [
        { type: "p", text: "We retain personal information only for as long as necessary to:" },
        {
          type: "ul",
          items: [
            "Provide your account.",
            "Deliver our services.",
            "Meet legal obligations.",
            "Resolve disputes.",
            "Maintain security.",
          ],
        },
        {
          type: "p",
          text: "If you permanently delete your account, we will remove or anonymise your personal information unless we are legally required to retain certain records.",
        },
      ],
    },
    {
      heading: "15. Your Rights",
      blocks: [
        { type: "p", text: "You have the right to:" },
        {
          type: "ul",
          items: [
            "Access your personal information.",
            "Correct inaccurate information.",
            "Request deletion of your information.",
            "Restrict processing.",
            "Object to processing.",
            "Request data portability.",
            "Withdraw consent where processing relies on consent.",
            "Lodge a complaint with the UK Information Commissioner's Office (ICO).",
          ],
        },
        { type: "p", text: "We aim to respond to privacy requests within one month." },
      ],
    },
    {
      heading: "16. Automated Decision-Making",
      blocks: [
        {
          type: "p",
          text: "Although Soul Seeker Tarot uses Artificial Intelligence to generate readings, we do not use automated decision-making or profiling that produces legal or similarly significant effects.",
        },
        {
          type: "p",
          text: "The guidance provided by the application is intended solely for personal reflection and self-development.",
        },
      ],
    },
    {
      heading: "17. Security",
      blocks: [
        {
          type: "p",
          text: "We take appropriate technical and organisational measures to protect your information.",
        },
        { type: "p", text: "These include:" },
        {
          type: "ul",
          items: [
            "Encrypted communications",
            "Secure authentication",
            "Database security",
            "Access controls",
            "Security monitoring",
            "Regular software updates",
          ],
        },
        { type: "p", text: "While we take reasonable precautions, no online service can guarantee absolute security." },
      ],
    },
    {
      heading: "18. Children's Privacy",
      blocks: [
        {
          type: "p",
          text: "Soul Seeker Tarot is intended for teenagers and adults in accordance with the age rating shown on the platform from which you downloaded the application. We do not knowingly collect personal information from children below the minimum age permitted by applicable law without any required parental consent.",
        },
      ],
    },
    {
      heading: "19. Third-Party Links",
      blocks: [
        {
          type: "p",
          text: "Our website and application may contain links to third-party websites.",
        },
        {
          type: "p",
          text: "We are not responsible for their content or privacy practices. We encourage you to review their privacy policies before providing personal information.",
        },
      ],
    },
    {
      heading: "20. Changes to this Privacy Policy",
      blocks: [
        {
          type: "p",
          text: "We may update this Privacy Policy from time to time to reflect changes to our services, technology or legal obligations.",
        },
        {
          type: "p",
          text: "Any significant changes will be published on this page together with the updated effective date.",
        },
      ],
    },
    {
      heading: "21. Contact Us",
      blocks: [
        {
          type: "p",
          text: "If you have any questions about this Privacy Policy or how your information is handled, please contact us:",
        },
        { type: "p", text: "Sovereign Entity Ltd" },
        { type: "p", text: "Email: admin@soulseekertarot.com" },
        { type: "p", text: "Website: https://www.soulseekertarot.com" },
      ],
    },
  ],
};

export const cookieDoc: LegalDoc = {
  title: "Cookie Policy",
  lastUpdated: "19 July 2026",
  intro: [
    {
      type: "p",
      text: 'This Cookie Policy explains how Soul Seeker Tarot, operated by Sovereign Entity Ltd ("we", "our" or "us"), uses cookies and similar technologies on our website and web application.',
    },
    {
      type: "p",
      text: "By continuing to use our services, you acknowledge that cookies may be used as described in this policy, subject to the choices you make through our cookie preferences.",
    },
  ],
  sections: [
    {
      heading: "1. What Are Cookies?",
      blocks: [
        {
          type: "p",
          text: "Cookies are small text files placed on your device when you visit a website or use a web application.",
        },
        {
          type: "p",
          text: "Cookies help websites remember information about your visit, such as your preferences, login status and how you interact with the site.",
        },
        {
          type: "p",
          text: "Some cookies are essential for the website to function correctly, while others help us understand how visitors use our services so that we can improve them.",
        },
      ],
    },
    {
      heading: "2. How We Use Cookies",
      blocks: [
        { type: "p", text: "We use cookies and similar technologies to:" },
        {
          type: "ul",
          items: [
            "Keep you securely signed in.",
            "Remember your preferences and settings.",
            "Improve website performance.",
            "Understand how visitors use Soul Seeker Tarot.",
            "Protect against fraud and misuse.",
            "Improve the quality of our services.",
          ],
        },
        { type: "p", text: "We do not use cookies to sell your personal information." },
      ],
    },
    {
      heading: "3. Types of Cookies We Use",
      blocks: [
        { type: "p", text: "Essential Cookies" },
        {
          type: "p",
          text: "These cookies are necessary for Soul Seeker Tarot to operate correctly. They help with:",
        },
        {
          type: "ul",
          items: [
            "Secure login and authentication.",
            "Maintaining your session.",
            "Security and fraud prevention.",
            "Saving essential preferences.",
            "Remembering your cookie choices.",
          ],
        },
        {
          type: "p",
          text: "These cookies cannot be switched off because the service would not function correctly without them.",
        },
        { type: "p", text: "Analytics Cookies" },
        {
          type: "p",
          text: "With your permission, we use Google Analytics 4 (GA4) to help us understand how visitors use Soul Seeker Tarot.",
        },
        { type: "p", text: "Analytics cookies help us understand:" },
        {
          type: "ul",
          items: [
            "Which pages are visited.",
            "How visitors navigate the website.",
            "Time spent on pages.",
            "Device types.",
            "Browser types.",
            "General geographic region.",
            "Performance and reliability.",
          ],
        },
        { type: "p", text: "This information helps us improve the website and application." },
        {
          type: "p",
          text: "We have enabled IP anonymisation, which reduces the amount of personal information processed.",
        },
      ],
    },
    {
      heading: "4. Google Consent Mode v2",
      blocks: [
        { type: "p", text: "Soul Seeker Tarot uses Google Consent Mode v2." },
        { type: "p", text: "When you first visit our website:" },
        {
          type: "ul",
          items: [
            "Analytics cookies are disabled by default.",
            "Google Analytics does not place analytics cookies until you choose Accept.",
            "If you choose Reject, Google Analytics operates only in Google's limited, cookieless privacy-preserving mode where permitted by law.",
          ],
        },
        { type: "p", text: "Your choice is remembered for future visits until you change it." },
      ],
    },
    {
      heading: "5. Managing Your Cookie Preferences",
      blocks: [
        { type: "p", text: "You remain in control of your cookie choices." },
        { type: "p", text: "You can change your preferences at any time by:" },
        {
          type: "ul",
          items: [
            "Selecting Manage Cookies in the website footer.",
            "Opening Settings → Legal → Manage Cookies within the application.",
          ],
        },
        { type: "p", text: "Changing your choice takes effect immediately." },
      ],
    },
    {
      heading: "6. Third-Party Cookies",
      blocks: [
        {
          type: "p",
          text: "Some trusted third-party services may place cookies when you use Soul Seeker Tarot. These currently include:",
        },
        {
          type: "ul",
          items: [
            "Google Analytics 4 — Anonymous website usage statistics.",
            "Stripe — Secure payment processing and fraud prevention.",
          ],
        },
        { type: "p", text: "These providers maintain their own privacy and cookie policies." },
      ],
    },
    {
      heading: "7. Cookie Duration",
      blocks: [
        {
          type: "p",
          text: "Some cookies are deleted automatically when you close your browser (session cookies).",
        },
        {
          type: "p",
          text: "Others remain on your device for a limited period to remember your preferences (persistent cookies).",
        },
        { type: "p", text: "The duration depends on the purpose of the cookie." },
        {
          type: "p",
          text: "Your cookie preferences remain stored until you change them or clear your browser storage.",
        },
      ],
    },
    {
      heading: "8. Information Collected Through Cookies",
      blocks: [
        {
          type: "p",
          text: "Depending on your consent choices, cookies may collect information such as:",
        },
        {
          type: "ul",
          items: [
            "Pages visited",
            "Time spent on pages",
            "Browser type",
            "Device type",
            "Operating system",
            "Approximate location (country or region)",
            "Referral source",
            "Website performance information",
          ],
        },
        { type: "p", text: "We do not use cookies to identify you personally." },
      ],
    },
    {
      heading: "9. Withdrawing Consent",
      blocks: [
        {
          type: "p",
          text: "You may withdraw your consent for analytics cookies at any time using the Manage Cookies option available on our website and within the application.",
        },
        { type: "p", text: "Once consent is withdrawn:" },
        {
          type: "ul",
          items: [
            "Analytics cookies will no longer be used.",
            "Future analytics collection will stop (except for Google's limited cookieless measurement where applicable).",
          ],
        },
      ],
    },
    {
      heading: "10. Browser Controls",
      blocks: [
        { type: "p", text: "Most web browsers allow you to:" },
        {
          type: "ul",
          items: [
            "View stored cookies.",
            "Delete cookies.",
            "Block cookies.",
            "Receive notifications before cookies are stored.",
          ],
        },
        {
          type: "p",
          text: "Please note that blocking essential cookies may affect the functionality of Soul Seeker Tarot.",
        },
      ],
    },
    {
      heading: "11. Changes to This Cookie Policy",
      blocks: [
        {
          type: "p",
          text: "We may update this Cookie Policy from time to time to reflect changes to technology, legislation or our services.",
        },
        {
          type: "p",
          text: "The latest version will always be available on this page together with the updated effective date.",
        },
      ],
    },
    {
      heading: "12. Contact Us",
      blocks: [
        { type: "p", text: "If you have any questions about this Cookie Policy, please contact:" },
        { type: "p", text: "Sovereign Entity Ltd" },
        { type: "p", text: "Website: https://www.soulseekertarot.com" },
        { type: "p", text: "Email: admin@soulseekertarot.com" },
      ],
    },
  ],
};
