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

export type MarketingCluster = {
  eyebrow: string;
  title?: string;
  intro?: string;
  items: string[];
};

export type MarketingIntro = {
  eyebrow: string;
  title: string;
  lede: string;
  body?: string[];
  actions?: MarketingAction[];
};

export const brandSystem = {
  shortName: "Arc",
  displayName: "Arc Psychotherapy",
  practiceLine: "Private-pay psychotherapy",
  serviceLine: "For perfectionism, overcontrol, and religious harm.",
  locationLine: "Round Rock, Austin area, and telehealth across Texas.",
  headerCta: {
    label: "Contact",
    href: "/contact"
  } satisfies MarketingAction
} as const;

export const homePage = {
  intro: {
    eyebrow: "Private-pay psychotherapy",
    title:
      "You understand the problem very well and still feel worn out by it.",
    lede: "I work with adults dealing with perfectionism, overcontrol, and the effects of rigid religion.",
    body: [
      "You are probably used to being the reliable one. That does not mean it feels good.",
      "A lot of people who come here are thoughtful, self-aware, and exhausted. They understand why they do what they do. They are just tired of repeating it.",
      "If insight alone fixed it, you would already be done."
    ],
    actions: [
      { label: "Start Here", href: "/start-here" },
      { label: "Contact", href: "/contact", variant: "secondary" }
    ]
  } satisfies MarketingIntro,
  fit: {
    eyebrow: "Common Signs",
    title: "Here is what it usually looks like:",
    items: [
      "You spend too much time preparing, researching, or replaying decisions.",
      "People rely on you, and it takes more effort than anyone sees.",
      "You understand what the issue is and still go back to the same habits when you are stressed.",
      "You don't take up much space, and you're not entirely sure that was a choice.",
      "You left a rigid or shaming religious environment, but fear and guilt still shape too many decisions."
    ]
  } satisfies MarketingCluster,
  notFirstStep: {
    eyebrow: "Not What Arc Is For",
    items: [
      "Crisis stabilization",
      "Insurance-based care",
      "Checklist-only symptom treatment",
      "Brief coaching framed as therapy"
    ]
  } satisfies MarketingCluster,
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
  approach: [
    {
      eyebrow: "Consult",
      title: "Start with a consult.",
      href: "/work-with-me",
      body: "Brief consult to talk through goals, questions, and logistics."
    },
    {
      eyebrow: "Ongoing Work",
      title: "Look closely at what happens.",
      href: "/work-with-me",
      body: "We get specific about what happens, when it happens, and what keeps it going."
    },
    {
      eyebrow: "Adjustment",
      title: "Try a different response.",
      href: "/work-with-me",
      body: "Then we pay attention to what changes during the week."
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

export const startHerePage = {
  intro: {
    eyebrow: "Start Here",
    title: "You do not need to read everything.",
    lede: "Three issues, one approach, and a few essays.",
    body: [
      "The issue pages cover what I work on.",
      "If reading helps, start with one essay after that."
    ],
    actions: [
      { label: "Contact", href: "/contact" },
      { label: "Writing", href: "/ideas", variant: "secondary" }
    ]
  } satisfies MarketingIntro,
  issueRoutes: [
    {
      eyebrow: "Start Here If",
      title: "Perfectionism",
      href: "/perfectionism",
      body: "Your standards are high, your work is strong, and your life keeps getting narrower."
    },
    {
      eyebrow: "Start Here If",
      title: "Overcontrol",
      href: "/overcontrol",
      body: "You perform under pressure and still end the day rigid, tired, or shut down."
    },
    {
      eyebrow: "Start Here If",
      title: "Religious harm",
      href: "/religious-harm",
      body: "You left a rigid or shaming faith system and fear or guilt still runs more of your decisions than you want."
    }
  ] satisfies MarketingIndexItem[],
  shortReads: homePage.writing
} as const;

export const approachPage = {
  intro: {
    eyebrow: "Approach",
    title: "How therapy works.",
    lede: "For people who are good at the thing that is making them worse.",
    body: [
      "The sessions are direct, practical, and focused on what changes outside the room."
    ],
    actions: [
      { label: "Contact", href: "/contact" },
      { label: "Writing", href: "/ideas", variant: "secondary" }
    ]
  } satisfies MarketingIntro,
  process: [
    {
      eyebrow: "Step 01",
      title: "Consult",
      href: "/contact#consult-request",
      body: "We talk through what is going on, what you want help with, and whether this approach makes sense."
    },
    {
      eyebrow: "Step 02",
      title: "See what keeps happening.",
      href: "/work-with-me",
      body: "We get concrete about what keeps happening, not just why it makes sense."
    },
    {
      eyebrow: "Step 03",
      title: "Change the week",
      href: "/work-with-me",
      body: "We try something different and pay attention to what changes during the week."
    }
  ] satisfies MarketingIndexItem[],
  values: [
    "LGBTQ+ clients are affirmed without debate.",
    "Health at Every Size aligned: body size is not treated as a morality problem.",
    "Neurodiversity-affirming care respects different minds, communication styles, and pacing.",
    "Immigrant and cross-cultural realities are treated as central context, not side notes."
  ],
  fit: [
    "Capable adults who are tired of sounding insightful while nothing important changes.",
    "People untangling perfectionism, overcontrol, chronic over-responsibility, or post-faith authority strain."
  ],
  notFit: [
    "Crisis stabilization or emergency response outside outpatient scope.",
    "Insurance-based care, brief coaching, or checklist-only symptom management."
  ],
  structuredTrack: {
    title: "Three-dimensional model building.",
    body:
      "Sometimes it helps to build the problem in physical form so you can see the relationships, constraints, and options more clearly."
  }
} as const;

export const supervisionPage = {
  intro: {
    eyebrow: "Supervision",
    title: "Supervision for associates who want real clinical authority.",
    lede: "For LMFT Associates who want stronger clinical thinking, steadier ethics, and direct feedback.",
    body: [
      "Supervision should help you think clearly, hold your ground, and treat people well.",
      "We look at the case, your reactions, the systems around the case, and the places where fear, certainty, or over-accommodation start driving the work."
    ],
    actions: [
      { label: "Contact", href: "/contact" },
      { label: "Consultation", href: "/consultation", variant: "secondary" }
    ]
  } satisfies MarketingIntro,
  fit: [
    "Associates who want real clinical authority rather than canned language.",
    "Clinicians who need direct feedback on countertransference, case formulation, ethics, and treatment direction.",
    "Therapists who want supervision with more clarity and direction.",
    "Clinicians who want neuroaffirming supervision that treats difference as clinically relevant reality, not a problem to sand down."
  ],
  notFit: [
    "Rubber-stamp supervision with minimal challenge.",
    "Work that treats compliance as the same thing as growth.",
    "People looking for ideological certainty instead of clinical thinking."
  ],
  topics: [
    "Case formulation that does not collapse into modality-speak.",
    "Countertransference, especially when values, disgust, fear, or over-identification are in the room.",
    "Ethics that hold up under pressure, not only in classroom examples.",
    "Authority, boundaries, documentation, and decision-making in real systems."
  ],
  credibility: [
    "TAMFT Board Member-at-Large and Chair of the Education Committee.",
    "Frequent CEU presenter on trauma, shame, supervision, and interpersonal ethics.",
    "Leadership across residential dual-diagnosis, crisis assessment, and systems-facing behavioral health settings."
  ]
} as const;

export const consultationPage = {
  intro: {
    eyebrow: "Consultation",
    title: "Consultation for teams that need clearer thinking and better systems.",
    lede: "For organizations, treatment teams, and leadership groups that need stronger clinical thinking and less burnout.",
    body: [
      "I work best with teams that are working hard and still getting stuck in the same pattern.",
      "Consultation can focus on clinical program design, staff development, case systems, non-toxic leadership, or training."
    ],
    actions: [
      { label: "Contact", href: "/contact" },
      { label: "Supervision", href: "/supervision", variant: "secondary" }
    ]
  } satisfies MarketingIntro,
  services: [
    {
      eyebrow: "Program Design",
      title: "Fix the structure, not just the morale problem.",
      href: "/consultation",
      body: "Clinical systems, treatment flow, role clarity, documentation habits, and process design."
    },
    {
      eyebrow: "Training",
      title: "Teach people something they can still use next month.",
      href: "/consultation",
      body: "CEU talks, workshops, and staff development on trauma, shame, leadership, ethics, and relational dynamics."
    },
    {
      eyebrow: "Leadership",
      title: "Reduce fear-based management.",
      href: "/consultation",
      body: "Support for leaders who want better standards without building a culture of dread."
    }
  ] satisfies MarketingIndexItem[],
  goodFor: [
    "Organizations building or cleaning up trauma, addiction, or relational treatment programs.",
    "Teams that want better thinking around shame, conflict, authority, and treatment culture.",
    "Leaders who know something is off and want to get specific about it."
  ],
  speaking: [
    "Non-toxic leadership and treatment culture.",
    "Trauma, shame, and relational treatment.",
    "Religious harm and meaning reconstruction.",
    "Countertransference, ethics, and supervision."
  ]
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

export const aboutPage = {
  intro: {
    eyebrow: "About",
    title: "I work with adults who understand the problem and still feel stuck.",
    lede: "The work is direct, practical, and meant to change something outside the session.",
    body: [
      "Arc is a solo practice by Leila Anderson, LMFT-S, for adults dealing with perfectionism, overcontrol, religious harm, and chronic over-responsibility."
    ],
    actions: [
      { label: "Approach", href: "/work-with-me" },
      { label: "Contact", href: "/contact", variant: "secondary" }
    ]
  } satisfies MarketingIntro,
  authority: [
    "Executive clinical leadership in residential dual-diagnosis and high-acuity environments, including crisis and level-of-care assessment.",
    "Program design and measurable process-tracking orientation, with emphasis on practical treatment planning.",
    "Systems-level exposure to criminal justice and diversion-adjacent behavioral health workflows.",
    "State professional leadership through TAMFT board and education committee service.",
    "Ongoing focus on how language, authority, and meaning shape lived distress."
  ],
  speaking: [
    "TAMFT professional education and leadership forums",
    "TAAP and behavioral health training events",
    "Regional agency and group practice CEU trainings",
    "Interdisciplinary systems and policy-facing mental health panels"
  ]
} as const;

export const contactPage = {
  intro: {
    eyebrow: "Contact",
    title: "Get in touch.",
    lede: "Use this form for therapy, supervision, or consultation.",
    body: [
      "Please do not include sensitive clinical details (PHI) in this form.",
      "If you are in immediate danger, call 911. For mental health crisis support, call or text 988."
    ]
  } satisfies MarketingIntro,
  consultFacts: [
    "Standard session fee: $200 for 50-55 minutes.",
    "Private-pay practice. Superbills may be available for out-of-network reimbursement.",
    "Telehealth is available across Texas when appropriate for care needs and clinical fit.",
    "Arc replies to consult requests within 1-2 business days."
  ],
  policyFacts: [
    "24-hour cancellation policy. Late cancellations or no-shows may be billed in full.",
    "Payment is due at time of service.",
    "Structured model-building is optional and only used when it supports treatment goals."
  ],
  questions: [
    {
      question: "Do you take insurance?",
      answer: "Arc is private-pay. A superbill may be available for out-of-network reimbursement."
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
