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
      body: "When getting it right has stopped feeling good."
    },
    {
      eyebrow: "Issue Guide",
      title: "Overcontrol",
      href: "/overcontrol",
      body: "When being the responsible one has left very little room to be a person."
    },
    {
      eyebrow: "Issue Guide",
      title: "Religious harm",
      href: "/religious-harm",
      body: "When you have left the structure, but it has not quite left you."
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
      { label: "Therapy", href: "/work-with-me" },
      { label: "Contact", href: "/contact", variant: "secondary" }
    ]
  } satisfies MarketingIntro,
  routes: [
    {
      eyebrow: "Therapy",
      title: "Approach",
      href: "/work-with-me",
      body: "Private-pay therapy for people who want to understand themselves and have a better Tuesday."
    },
    {
      eyebrow: "For Clinicians",
      title: "Supervision",
      href: "/supervision",
      body: "Supervision for associates who want real feedback, better questions, and room to become themselves as clinicians."
    },
    {
      eyebrow: "For Teams",
      title: "Consultation",
      href: "/consultation",
      body: "Consultation for teams where people are working hard and the same problems keep coming back."
    }
  ] satisfies MarketingIndexItem[]
} as const;

export const contactPage = {
  intro: {
    eyebrow: "Contact",
    title: "Get in touch.",
    lede: "Availability, fees, and whether we might work well together.",
    body: [
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
      answer: "It is one way to work with a pattern when physical space helps us see it more clearly. Standard talk therapy is available too."
    },
    {
      question: "What happens in the consult?",
      answer: "We talk briefly about what you are looking for, whether I am the right person to help, and the practical details."
    }
  ]
} as const;
