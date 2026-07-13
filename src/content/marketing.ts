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
      body: "When every ordinary decision starts carrying the weight of a verdict."
    },
    {
      eyebrow: "Issue Guide",
      title: "Overcontrol",
      href: "/overcontrol",
      body: "When being the reliable one has quietly become a very small life."
    },
    {
      eyebrow: "Issue Guide",
      title: "Religious harm",
      href: "/religious-harm",
      body: "When an old system still gets a vote in your body, relationships, and decisions."
    }
  ] satisfies MarketingIndexItem[],
  writing: [
    {
      eyebrow: "Essay",
      title: "Perfectionism as a Structural Problem",
      href: "/ideas/perfectionism-structural-problem",
      body: "Why trying to think differently rarely changes a rule your whole life is organized around."
    },
    {
      eyebrow: "Essay",
      title: "The Adjacent Possible",
      href: "/ideas/adjacent-possible",
      body: "The difference between a future you can imagine and a step you can actually take."
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
    lede: "Different settings, same question: what is actually happening here, and what would make a difference?",
    body: [
      "I work with individual clients, associate therapists, and clinical teams. Each needs a different kind of help. None of them need more professional theater."
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
      body: "Private-pay psychotherapy for adults whose insight has outpaced the change they want."
    },
    {
      eyebrow: "For Clinicians",
      title: "Supervision",
      href: "/supervision",
      body: "Supervision for associates who want to think clearly, tolerate not knowing, and get real feedback."
    },
    {
      eyebrow: "For Teams",
      title: "Consultation",
      href: "/consultation",
      body: "Program, training, and leadership consultation for systems where effort is high and the same problems keep returning."
    }
  ] satisfies MarketingIndexItem[]
} as const;

export const contactPage = {
  intro: {
    eyebrow: "Contact",
    title: "A short first conversation.",
    lede: "Ask about availability, fees, or whether the work sounds like a fit. I reply within one to two business days.",
    body: [
      "You do not need to explain your whole history in a form. A name, a way to reach you, and a general sense of what you are looking for is enough.",
      "This site is not monitored for urgent needs. If you are in immediate danger, call 911. For mental health crisis support, call or text 988."
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
      answer: "No. This is a private-pay practice. I can provide a superbill if you use out-of-network benefits; Mentaya and Thrizer are separate services that can handle the claims process."
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
      answer: "We will talk briefly about what you are looking for, whether I am the right person to help, and the practical details. A consult is for deciding—not for proving that you need therapy badly enough."
    }
  ]
} as const;
