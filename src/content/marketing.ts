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
      eyebrow: "Issue Guide",
      title: "Perfectionism",
      href: "/perfectionism",
      body: "High standards are not the problem. Fear-based control is."
    },
    {
      eyebrow: "Issue Guide",
      title: "Overcontrol",
      href: "/overcontrol",
      body: "Reliable on the outside. Rigid, braced, and narrowed on the inside."
    },
    {
      eyebrow: "Issue Guide",
      title: "Religious harm",
      href: "/religious-harm",
      body: "What lingers after coercion, shame, and authoritarian certainty."
    }
  ] satisfies MarketingIndexItem[],
  writing: [
    {
      eyebrow: "Essay",
      title: "Perfectionism as a Structural Problem",
      href: "/ideas/perfectionism-structural-problem",
      body: "If perfectionism is treated only as mindset, behavior usually snaps back."
    },
    {
      eyebrow: "Essay",
      title: "The Adjacent Possible",
      href: "/ideas/adjacent-possible",
      body: "Durable change starts with the next workable move, not reinvention."
    },
    {
      eyebrow: "Essay",
      title: "When Leaving a Faith System Feels Like Losing Gravity",
      href: "/ideas/leaving-faith-losing-gravity",
      body: "The first task is rebuilding orientation without replacing one coercive system with another."
    }
  ] satisfies MarketingIndexItem[]
} as const;

export const servicesPage = {
  intro: {
    eyebrow: "Work",
    title: "Therapy, supervision, and consultation.",
    lede: "The work is direct regardless of whether you are a client, an associate, or a clinical team.",
    body: [
      "The common thread is the same: get specific about the problem, work directly, and focus on what is actually useful."
    ],
    actions: [
      { label: "Therapy", href: "/work-with-me" },
      { label: "Contact", href: "/contact", variant: "secondary" }
    ]
  } satisfies MarketingIntro,
  routes: [
    {
      eyebrow: "Therapy",
      title: "Approach",
      href: "/work-with-me",
      body: "Private-pay psychotherapy for adults dealing with perfectionism, overcontrol, and religious harm."
    },
    {
      eyebrow: "For Clinicians",
      title: "Supervision",
      href: "/supervision",
      body: "Direct, relational supervision for associates who want stronger thinking and cleaner ethics."
    },
    {
      eyebrow: "For Teams",
      title: "Consultation",
      href: "/consultation",
      body: "Program, training, and leadership consultation for systems that need more than morale talk."
    }
  ] satisfies MarketingIndexItem[]
} as const;

export const contactPage = {
  intro: {
    eyebrow: "Contact",
    title: "Questions and consult requests.",
    lede: "You can use the form, call, or email. I reply within 1-2 business days.",
    body: [
      "You can ask about availability, fees, or fit — no clinical detail needed to start a conversation.",
      "If you are in immediate danger, call 911. For mental health crisis support, call or text 988."
    ]
  } satisfies MarketingIntro,
  policyFacts: [
    "24-hour cancellation policy. Late cancellations or no-shows may be billed in full.",
    "Payment is due at time of service.",
    "Structured model-building is optional and only used when it supports treatment goals."
  ],
  questions: [
    {
      question: "Do you take insurance?",
      answer: "No — the practice is private-pay. I can provide a superbill for out-of-network reimbursement, and services like Mentaya or Thrizer can automate the claims."
    },
    {
      question: "Do you offer telehealth?",
      answer: "Yes. Telehealth is available for Texas residents when clinically appropriate."
    },
    {
      question: "Is structured model-building required?",
      answer: "No. It is optional and selected only when it supports the work."
    },
    {
      question: "What happens in the consult?",
      answer: "We see whether the work fits, talk through goals, and cover the practical details."
    }
  ]
} as const;
