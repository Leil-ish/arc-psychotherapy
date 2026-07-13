export const siteContent = {
  brandName: "Arc Psychotherapy",
  legalEntityNote:
    "A practice of Oleander Counseling & Consulting, LLC",
  siteUrl: "https://arc-psychotherapy.com",
  bookingUrl: "/contact#consult-request",
  contactEndpoint: "/api/contact",
  email: "hello@arc-psychotherapy.com",
  phone: "(512) 710-9966",
  sameAs: [
    "https://www.linkedin.com/in/leilaanderson/"
  ],
  credentialsLine: "Leila Anderson, LMFT-S",
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
  sessionLength: "50–55 minutes",
  credentials: [
    "Licensed Marriage and Family Therapist – Texas"
  ],
  constructive: {
    title: "Building the Problem",
    subtitle:
      "In some sessions, we build. LEGO sets give a pattern a physical form: the people, rules, turning points, and impossible choices can sit on the table instead of having to stay organized in your head.",
    opening: [
      "The bricks are not the point. The point is that some patterns—perfectionism, overcontrol, the shape of a system that harmed you—become easier to notice once they exist outside your head.",
      "This is most useful when the pattern is clear in conversation but the usual insight has not changed what happens next."
    ],
    whyItHelps: [
      "Externalization: a pattern becomes something you can look at instead of something you are trapped inside.",
      "Sequence: you can see what comes first, what follows, and where there may actually be room to intervene.",
      "Imperfection: a disruption is something to learn from, rather than proof you have failed the exercise.",
      "Integration: meaning, behavior, and identity can be held together without turning the session into a lecture.",
      "Pacing: having a shared structure can slow a fast, reactive problem down enough to see it."
    ],
    sessionFlow: [
      "Consult",
      "Choose an arc",
      "Build + reflect",
      "Integration",
      "Take-home"
    ],
    fit: {
      good: [
        "You want a concrete way to work with a control pattern, a relationship dynamic, or a belief system.",
        "You are open to an experiential format without needing to be “creative” or good at LEGO.",
        "You think more clearly when you can see a structure rather than only describe it."
      ],
      notFit: [
        "You strongly prefer conversation-only therapy and have no interest in an experiential method.",
        "You need acute crisis stabilization rather than a planned treatment arc.",
        "You need immediate stabilization, or you are looking for a quick or guaranteed result."
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
        question: "How does this relate to perfectionism and overcontrol?",
        answer:
          "It can make the sequence of a control strategy visible: what the rule is, what it is protecting, and where the pattern tightens. That gives us something concrete to work with."
      },
      {
        question: "Can this be used for religious harm work?",
        answer:
          "Sometimes. It can help make inherited authority, rules, and belonging structures visible, especially when the problem is hard to explain without getting lost in abstractions."
      },
      {
        question: "What if I am not creative?",
        answer:
          "You do not need to be creative. This is not an art project. The work is about sequence, pattern awareness, and what happens when you have to make a choice under pressure."
      },
      {
        question: "What if I do not finish?",
        answer:
          "Not finishing is not a failure. We look at what got in the way, what that tells us, and whether to continue, adapt, or use a different format."
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
          "The core treatment is psychotherapy. Model-building is an experiential tool used to support reflection and make a hard-to-see pattern more concrete. It is not presented as a stand-alone cure or replacement for therapy."
      },
      {
        question: "Is this required?",
        answer:
          "No. Standard therapy is always available. This track is selected only when it supports the work."
      }
    ],
    curious:
      "The rationale is simple: a pattern is easier to work with when you can see its shape. It is also harder to let it hide behind a good explanation when it is sitting on the table."
  }
} as const;
