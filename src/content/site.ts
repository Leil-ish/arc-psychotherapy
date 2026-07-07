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
      "In some sessions, we build. Using LEGO brick sets as a structured clinical tool, we construct the problem in physical space — sequence visible, relationships literal — so what stays abstract in conversation becomes something you can see and rearrange.",
    opening: [
      "The bricks are not the point. The point is that some patterns — perfectionism, overcontrol, the shape of a system that harmed you — are easier to work on once they exist outside your head.",
      "The method applies most directly to perfectionism, rigidity/overcontrol, and religious harm — places where the pattern is clear in conversation but hasn't shifted in behavior."
    ],
    whyItHelps: [
      "Externalization: patterns move from internal pressure to observable process.",
      "Sequencing: complex change is broken into ordered, manageable steps.",
      "Tolerance of imperfection: disruptions become material for treatment, not failure.",
      "Narrative integration: clients connect behavior, meaning, and identity across sessions.",
      "Paced work: structure slows reactivity and supports deliberate adaptation."
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
        "You value structure and want a concrete way to work with control patterns.",
        "You can tolerate an experiential format while keeping psychological depth.",
        "You want a paced method that makes process visible session by session."
      ],
      notFit: [
        "You prefer insight-only conversation without experiential methods.",
        "You need acute crisis stabilization rather than a planned treatment arc.",
        "You are seeking guaranteed outcomes or rapid symptom promises."
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
          "The format makes control strategies visible in session and allows direct work on flexibility, tolerance, and pacing."
      },
      {
        question: "Can this be used for religious harm work?",
        answer:
          "When appropriate, yes. It can support reconstruction of meaning, authority, and identity within a clear treatment plan."
      },
      {
        question: "What if I am not creative?",
        answer:
          "Creativity is not the target. The work focuses on sequence, pattern awareness, and decision-making under pressure."
      },
      {
        question: "What if I do not finish?",
        answer:
          "Not finishing can itself provide useful data for treatment. We review what interrupted the process and decide whether to continue, adapt, or shift formats."
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
        question: "Is this evidence-based?",
        answer:
          "The core treatment remains talk therapy with a clear plan. Model-building is used as a guided experiential tool to support externalization, reflection, and integration."
      },
      {
        question: "Is this required?",
        answer:
          "No. Standard therapy is always available. This track is selected only when it supports the work."
      }
    ],
    curious:
      "The rationale is simple: patterns are easier to change when you can see them, and harder to argue with when they are sitting on the table."
  }
} as const;
