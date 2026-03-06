export type FrameworkFaq = {
  question: string;
  answer: string;
};

export type Framework = {
  name: string;
  slug: string;
  definition: string;
  whyItMatters: string[];
  howItShowsUp: string[];
  whatHelps: string[];
  relatedLinks: Array<{ label: string; href: string }>;
  faq: FrameworkFaq[];
};

export const frameworks: Framework[] = [
  {
    name: "Arc Mapping",
    slug: "arc-mapping",
    definition:
      "Arc Mapping is a session-to-session structure that links triggers, protective strategies, and chosen behavioral shifts.",
    whyItMatters: [
      "Prevents treatment from drifting into insight without implementation.",
      "Clarifies what changes and what stays stable across an arc.",
      "Improves accountability without punitive framing."
    ],
    howItShowsUp: [
      "Repeated cycles of the same problem with new explanations.",
      "Strong insight and weak transfer into decisions.",
      "Inconsistent follow-through under stress."
    ],
    whatHelps: [
      "Define one arc target and one behavioral marker.",
      "Track interference patterns explicitly.",
      "Review progress at predictable intervals."
    ],
    relatedLinks: [
      { label: "Perfectionism", href: "/perfectionism" },
      { label: "Perfectionism as a Structural Problem", href: "/ideas/perfectionism-structural-problem" }
    ],
    faq: [
      { question: "Is Arc Mapping rigid?", answer: "No. It is structured, but it adapts to clinical data over time." },
      { question: "Can Arc Mapping be used in telehealth?", answer: "Yes, when goals and tracking are clear and clinically appropriate." },
      { question: "Does Arc Mapping replace relational work?", answer: "No. It organizes relational and behavioral work into one coherent sequence." }
    ]
  },
  {
    name: "Control Gradient",
    slug: "control-gradient",
    definition:
      "Control Gradient scales flexibility in deliberate increments to reduce all-or-nothing adaptation.",
    whyItMatters: [
      "Builds tolerance without forcing abrupt exposure.",
      "Creates measurable shifts for high-control clients.",
      "Protects values while reducing rigidity."
    ],
    howItShowsUp: [
      "Binary decision-making under pressure.",
      "Delay when outcomes are uncertain.",
      "Collapse after minor errors."
    ],
    whatHelps: [
      "Set one low-risk flexibility experiment.",
      "Measure subjective threat before and after.",
      "Increase gradient depth over time."
    ],
    relatedLinks: [
      { label: "Overcontrol", href: "/overcontrol" },
      { label: "The Adjacent Possible", href: "/ideas/adjacent-possible" }
    ],
    faq: [
      { question: "Is this just exposure?", answer: "It can include exposure elements, but the emphasis is on structured flexibility scaling." },
      { question: "What if change feels unsafe?", answer: "The gradient is adjusted so challenge remains tolerable and clinically useful." },
      { question: "Who benefits most?", answer: "Clients with strong overcontrol and perfectionistic threat prediction patterns." }
    ]
  },
  {
    name: "Belief Deconstruction Grid",
    slug: "belief-deconstruction-grid",
    definition:
      "Belief Deconstruction Grid organizes inherited beliefs into retain, revise, and release categories.",
    whyItMatters: [
      "Reduces confusion during identity reconstruction.",
      "Separates values from fear-conditioned rules.",
      "Supports coherent agency after religious harm."
    ],
    howItShowsUp: [
      "Moral paralysis after leaving a coercive system.",
      "Persistent shame responses despite intellectual disagreement.",
      "Difficulty trusting internal authority."
    ],
    whatHelps: [
      "Name inherited rules and source authority.",
      "Test beliefs against present values and lived outcomes.",
      "Build replacement practices gradually."
    ],
    relatedLinks: [
      { label: "Religious Harm", href: "/religious-harm" },
      { label: "When Leaving a Faith System Feels Like Losing Gravity", href: "/ideas/leaving-faith-losing-gravity" }
    ],
    faq: [
      { question: "Is this anti-faith?", answer: "No. The method supports agency and coherent consent-based belief formation." },
      { question: "Can someone keep parts of prior belief?", answer: "Yes. Retention is an explicit option when beliefs remain aligned and non-coercive." },
      { question: "What if family pressure is high?", answer: "Pacing and boundary planning become core parts of the treatment arc." }
    ]
  },
  {
    name: "Pattern Externalization",
    slug: "pattern-externalization",
    definition:
      "Pattern Externalization moves internal loops into observable language, sequence, or task structure.",
    whyItMatters: [
      "Improves precision when clients feel flooded or fused with the problem.",
      "Supports collaborative analysis without self-attack.",
      "Creates clearer intervention targets."
    ],
    howItShowsUp: [
      "Clients describe global failure states without specifics.",
      "Insight remains abstract and hard to act on.",
      "Shame blocks experimentation."
    ],
    whatHelps: [
      "Map one pattern from trigger to consequence.",
      "Name decision points and alternative branches.",
      "Integrate results into future sessions."
    ],
    relatedLinks: [
      { label: "Structured Model-Building (Optional)", href: "/constructive" },
      { label: "Overcontrol", href: "/overcontrol" }
    ],
    faq: [
      { question: "Is this only for structured model-building?", answer: "No. It can be done through language, diagrams, or other concrete formats." },
      { question: "Does externalization reduce emotional depth?", answer: "No. It often improves depth by reducing noise and increasing specificity." },
      { question: "When is it less useful?", answer: "When immediate stabilization needs are primary and cognitive load must stay low." }
    ]
  },
  {
    name: "Uncertainty Capacity",
    slug: "uncertainty-capacity",
    definition:
      "Uncertainty Capacity is the ability to act coherently without premature certainty.",
    whyItMatters: [
      "Reduces compulsive decision loops.",
      "Supports meaningful risk-taking with structure.",
      "Improves resilience in identity transitions."
    ],
    howItShowsUp: [
      "Reassurance seeking before every decision.",
      "Excessive research replacing action.",
      "Fear of irreversible mistakes."
    ],
    whatHelps: [
      "Set decision thresholds before anxiety spikes.",
      "Use bounded experiments instead of global conclusions.",
      "Debrief uncertainty tolerance after each step."
    ],
    relatedLinks: [
      { label: "The Adjacent Possible", href: "/ideas/adjacent-possible" },
      { label: "Perfectionism", href: "/perfectionism" }
    ],
    faq: [
      { question: "Is uncertainty tolerance passive?", answer: "No. It is active, structured engagement under incomplete information." },
      { question: "Can this lower standards?", answer: "Not when framed around values and clear decision rules." },
      { question: "How fast can capacity change?", answer: "Usually through repeated small trials, not single breakthrough events." }
    ]
  },
  {
    name: "Meaning Reconstruction",
    slug: "meaning-reconstruction",
    definition:
      "Meaning Reconstruction is a guided process for rebuilding identity, values, and direction after major belief disruption.",
    whyItMatters: [
      "Supports coherence after religious or relational rupture.",
      "Prevents reactive identity foreclosure.",
      "Links values to behavior over time."
    ],
    howItShowsUp: [
      "Loss of orientation after leaving a prior system.",
      "Oscillation between certainty and nihilism.",
      "Difficulty trusting personal judgment."
    ],
    whatHelps: [
      "Define non-negotiable values and flexible beliefs.",
      "Experiment with practices that support agency.",
      "Review identity shifts with narrative continuity."
    ],
    relatedLinks: [
      { label: "Religious Harm", href: "/religious-harm" },
      { label: "When Leaving a Faith System Feels Like Losing Gravity", href: "/ideas/leaving-faith-losing-gravity" }
    ],
    faq: [
      { question: "Is reconstruction the same as replacing one doctrine with another?", answer: "No. The process emphasizes agency, consent, and reflective integration." },
      { question: "Can this include grief work?", answer: "Yes. Grief is often central when old meaning systems dissolve." },
      { question: "Does this require abandoning prior community?", answer: "Not necessarily. The focus is on boundaries and alignment rather than blanket rejection." }
    ]
  }
];

export function getFrameworkBySlug(slug: string) {
  return frameworks.find((item) => item.slug === slug);
}
