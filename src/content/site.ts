export const siteContent = {
  brandName: "Arc Psychotherapy",
  legalEntityNote:
    "A practice of Oleander Counseling & Consulting, LLC",
  siteUrl: "https://arc-psychotherapy.com",
  bookingUrl: "/contact#consult-request",
  contactEndpoint: "/api/contact",
  email: "hello@arc-psychotherapy.com",
  phone: "(512) 710-9966",
  substackUrl: "https://leilaanderson.substack.com/",
  sameAs: [
    "https://www.linkedin.com/in/leilaanderson/",
    "https://leilaanderson.substack.com/"
  ],
  credentialsLine: "Leila Anderson, LMFT-S",
  degree: "Master of Marriage and Family Therapy (MMFT)",
  degreeInstitution: "Abilene Christian University",
  licenseNumber: "202709",
  primaryTopics: [
    "Perfectionism",
    "Overcontrol",
    "Religious Harm",
    "Meaning",
    "Systems",
    "Practice"
  ],
  primaryLocation: "Downtown Round Rock, Texas",
  secondaryLocation: "Serving North Austin and surrounding communities",
  location: {
    neighborhood: "Downtown",
    city: "Round Rock",
    state: "TX",
    addressLine1: "309 W. Main",
    postalCode: "78664",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=309+W+Main+Round+Rock+TX+78664"
  },
  telehealthRegion: "Telehealth across Texas",
  serviceAreas: [
    "Round Rock",
    "North Austin",
    "Cedar Park",
    "Georgetown",
    "Pflugerville"
  ],
  standardSessionFee: 200,
  sessionLength: "typically 50–55 minutes",
  credentials: [
    "Licensed Marriage and Family Therapist – Texas"
  ],
  constructive: {
    title: "The LEGO thing.",
    subtitle:
      "A pile of bricks can reveal a problem differently than another very smart conversation.",
    opening: [
      "LEGO is part of the point. A pattern gets easier to see once it has a shape: the people, rules, turning points, and impossible choices are all there on the table.",
      "It is especially useful when you can explain the problem perfectly and are still not sure where to begin."
    ],
    whyItHelps: [
      "The pattern comes out of your head and onto the table, where we can both see it.",
      "You can see what comes first, what follows, and where there is room to do something different.",
      "When a build goes sideways, it usually tells us something interesting.",
      "It can hold meaning, behavior, identity, and the genuinely weird parts of a story at the same time.",
      "It slows a fast problem down enough to see it."
    ],
    sessionFlow: [
      "Talk it through",
      "Choose a build",
      "Build + talk",
      "See what it shows",
      "Take it home"
    ],
    fit: {
      good: [
        "You want a concrete way to work with a control pattern, a relationship, or a belief system.",
        "You are curious about trying something different, even if you are not “creative” or good at LEGO.",
        "You think more clearly when you can see a structure instead of only describing it."
      ],
      notFit: [
        "You strongly prefer conversation-only therapy and have no interest in an experiential method.",
        "You need acute crisis stabilization.",
        "You are looking for a quick or guaranteed result."
      ]
    },
    packages: {
      trackPackageA: {
        name: "6-session arc",
        description: "Focused arc package with one materials set included",
        price: 1650,
        materialsIncludedUpTo: 180
      },
      trackPackageB: {
        name: "10-session arc",
        description: "Extended arc package with one premium materials set included",
        price: 2850,
        materialsIncludedUpTo: 280
      }
    },
    faq: [
      {
        question: "How does playing with LEGO fit into therapy?",
        answer:
          "It can make the sequence visible: what happens, what you try to control, and where the pattern tightens. That gives us something concrete to work with."
      },
      {
        question: "Can this be used for religious harm work?",
        answer:
          "Sometimes. It can make inherited authority, rules, and belonging visible without getting lost in abstractions."
      },
      {
        question: "What if I am not creative?",
        answer:
          "No LEGO experience or creative skill needed. The work is in the choices, the sequence, and what becomes visible while we build."
      },
      {
        question: "What if I do not finish?",
        answer:
          "Then we look at what got in the way, what that tells us, and whether to continue, adapt, or use a different format."
      },
      {
        question: "Do I keep what we build?",
        answer:
          "Yes. Completed materials are yours to keep. Included materials are built into package pricing."
      },
      {
        question: "Can we do this via telehealth?",
        answer:
          "In some cases, yes. Telehealth use depends on logistics, clinical fit, and whether the format can be delivered with adequate structure."
      },
      {
        question: "What is the clinical basis for this?",
        answer:
          "The core treatment is psychotherapy. LEGO is simply another way to reflect together and make a hard-to-see pattern more concrete."
      },
      {
        question: "Is this required?",
        answer:
          "It is one option within therapy, used when building something in physical space would be useful."
      }
    ],
    curious:
      "It is hard for a pattern to hide behind a very good explanation when it is sitting on the table."
  }
} as const;
