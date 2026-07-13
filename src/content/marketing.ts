export type MarketingAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export type MarketingIndexItem = {
  title: string;
  href: string;
  body: string;
  eyebrow?: string;
};

export type MarketingIntro = {
  eyebrow: string;
  title: string;
  lede: string;
  body?: string[];
  actions?: MarketingAction[];
};

export const homePage = {
  focusAreas: [
    {
      eyebrow: "Specialty",
      title: "Religious trauma and religious harm",
      href: "/therapy/religious-trauma",
      body: "When old rules still show up in your body, relationships, and decisions."
    },
    {
      eyebrow: "Specialty",
      title: "Complex trauma",
      href: "/therapy/complex-trauma",
      body: "When the danger is old, but life is still organized around not being caught off guard."
    },
    {
      eyebrow: "Specialty",
      title: "Perfectionism and overcontrol",
      href: "/therapy/perfectionism-overcontrol",
      body: "When being capable has become a full-time private management system."
    }
  ] satisfies MarketingIndexItem[],
  writing: [
    {
      eyebrow: "Essay",
      title: "Perfectionism as a Structural Problem",
      href: "/ideas/perfectionism-structural-problem",
      body: "Why getting very good at self-criticism does not make it any more useful."
    },
    {
      eyebrow: "Essay",
      title: "The Adjacent Possible",
      href: "/ideas/adjacent-possible",
      body: "On the gap between what is possible and what is actually next."
    },
    {
      eyebrow: "Essay",
      title: "When Leaving a Faith System Feels Like Losing Gravity",
      href: "/ideas/leaving-faith-losing-gravity",
      body: "Why leaving can feel less like freedom at first than like losing gravity."
    }
  ] satisfies MarketingIndexItem[]
} as const;

export const servicesPage = {
  intro: {
    eyebrow: "Work",
    title: "Therapy, supervision, and consultation.",
    lede: "Different settings, same interest: people doing hard things inside complicated systems.",
    body: [
      "I work with individual clients, associate therapists, and clinical teams. Each needs something different. The work should be useful in the room, not just impressive in a meeting."
    ],
    actions: [
      { label: "Therapy", href: "/therapy" },
      { label: "Ask about availability", href: "/contact", variant: "secondary" }
    ]
  } satisfies MarketingIntro,
  routes: [
    {
      eyebrow: "Therapy",
      title: "Individual therapy for adults",
      href: "/therapy",
      body: "Private-pay individual psychotherapy for adults in Round Rock and online across Texas."
    },
    {
      eyebrow: "For Clinicians",
      title: "Supervision",
      href: "/supervision",
      body: "Supervision for associates who want real feedback, better questions, and room to become themselves as clinicians."
    },
    {
      eyebrow: "For Teams",
      title: "Programs & training",
      href: "/consultation",
      body: "Consultation for teams where people are working hard and the same problems keep coming back."
    }
  ] satisfies MarketingIndexItem[]
} as const;

export const contactPage = {
  intro: {
    eyebrow: "Contact",
    title: "Get in touch.",
    lede: "Therapy, supervision, or clinical consultation.",
    body: [
      "This site is not monitored for urgent needs. If you are in immediate danger, call 911. For mental health crisis support, call or text 988."
    ]
  } satisfies MarketingIntro,
  policyFacts: [
    "24-hour cancellation policy. Late cancellations or no-shows may be billed in full.",
    "Payment is due at time of service.",
    "Playing with LEGO is optional and used only when it supports the work."
  ],
  questions: [
    {
      question: "Do you take insurance?",
      answer: "No. This is a private-pay practice. I can provide a superbill if you use out-of-network benefits; Mentaya and Thrizer are separate services that can handle the claims process."
    },
    {
      question: "Do you offer telehealth?",
      answer: "Yes. Telehealth is available for Texas residents when clinically appropriate."
    },
    {
      question: "Is LEGO part of every session?",
      answer: "No. It is one way to work with a pattern when physical space helps us see it more clearly. Therapy can also be entirely conversational."
    },
    {
      question: "What happens after I reach out?",
      answer: "For therapy, the first step is a free, 30-minute video consult. For supervision or programs and training, I will reply within one to two business days with the relevant practical details and next steps."
    }
  ]
} as const;
