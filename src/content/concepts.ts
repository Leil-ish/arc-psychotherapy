export type ConceptFaq = {
  question: string;
  answer: string;
};

export type ConceptHub = {
  slug: "perfectionism" | "overcontrol" | "religious-harm";
  title: string;
  definition: string[];
  commonPresentations: string[];
  whatDoesNotWork: string[];
  whatHelps: string[];
  arcApproach: string;
  faq: ConceptFaq[];
  relatedEssays: Array<{ label: string; href: string }>;
  relatedFrameworks: Array<{ label: string; href: string }>;
};

export const conceptHubs: ConceptHub[] = [
  {
    slug: "perfectionism",
    title: "Perfectionism",
    definition: [
      "Perfectionism is a control strategy that treats error as threat and worth as performance stability.",
      "It can look productive from the outside while creating chronic constraint, shame, and decision fatigue.",
      "Arc approaches perfectionism as a structural issue, not a personality flaw."
    ],
    commonPresentations: [
      "Over-preparation followed by delayed action",
      "Difficulty finishing unless conditions feel ideal",
      "Harsh self-evaluation after ordinary mistakes",
      "Strong performance and low psychological flexibility"
    ],
    whatDoesNotWork: [
      "Global self-compassion advice without structural behavior change",
      "Binary goals that reinforce pass/fail identity logic",
      "Trying to remove standards instead of recalibrating control"
    ],
    whatHelps: [
      "Define non-negotiable values and flexible standards",
      "Use graded experiments that tolerate visible imperfection",
      "Track patterns by sequence, not by mood alone",
      "Integrate behavioral data into future decision rules"
    ],
    arcApproach:
      "Arc uses explicit mapping, paced experiments, and integration reviews to separate excellence from compulsive certainty.",
    faq: [
      { question: "Is perfectionism always unhealthy?", answer: "No. Precision can be adaptive. The issue is whether control narrows functioning and identity." },
      { question: "Can perfectionism look calm rather than anxious?", answer: "Yes. It often appears as composure with high internal pressure." },
      { question: "Does treatment lower standards?", answer: "The aim is flexible, values-based standards, not lowered care." },
      { question: "Why does insight not automatically change behavior?", answer: "Because the control structure is behavioral and identity-linked, not only cognitive." },
      { question: "Can this be treated in telehealth?", answer: "Yes, when the treatment plan is structured and clinically appropriate for telehealth." },
      { question: "How long does this work take?", answer: "Length varies by complexity and goals. Arc uses phased work rather than generic timelines." }
    ],
    relatedEssays: [
      { label: "Perfectionism as a Structural Problem", href: "/ideas/perfectionism-structural-problem" },
      { label: "The Adjacent Possible", href: "/ideas/adjacent-possible" }
    ],
    relatedFrameworks: [
      { label: "Arc Mapping", href: "/frameworks/arc-mapping" },
      { label: "Control Gradient", href: "/frameworks/control-gradient" }
    ]
  },
  {
    slug: "overcontrol",
    title: "Overcontrol",
    definition: [
      "Overcontrol is persistent inhibition used to prevent uncertainty, error, or social risk.",
      "It often produces external stability while reducing spontaneity, trust in process, and relational range.",
      "Arc treats overcontrol by increasing adaptive flexibility in measurable steps."
    ],
    commonPresentations: [
      "All-or-nothing planning",
      "Decision paralysis when outcomes are ambiguous",
      "Emotional containment that blocks authentic connection",
      "High reliability paired with chronic rigidity"
    ],
    whatDoesNotWork: [
      "Forcing abrupt vulnerability without scaffolding",
      "Interventions that frame control as moral failure",
      "Generic exposure tasks without integration"
    ],
    whatHelps: [
      "Control gradients with bounded experiments",
      "Pattern externalization before behavior change",
      "Post-experiment integration of what actually happened",
      "Decision rules that preserve values while widening options"
    ],
    arcApproach:
      "Arc uses phased flexibility work, explicit sequence design, and reflective integration so adaptation does not feel like collapse.",
    faq: [
      { question: "Is overcontrol the same as discipline?", answer: "No. Discipline supports goals; overcontrol restricts range beyond what goals require." },
      { question: "Can overcontrol come from success history?", answer: "Yes. Strategies that once worked can become rigid under changing demands." },
      { question: "Why does flexibility feel unsafe?", answer: "Because control has been linked to identity and threat reduction for a long time." },
      { question: "Does this work require major life disruption?", answer: "No. Arc emphasizes adjacent, structured changes." },
      { question: "Is this compatible with high-responsibility roles?", answer: "Yes. The goal is improved adaptability under responsibility, not reduced responsibility." },
      { question: "Can model-building be used here?", answer: "Optionally, yes, when externalization improves precision and pacing." }
    ],
    relatedEssays: [
      { label: "The Adjacent Possible", href: "/ideas/adjacent-possible" },
      { label: "Perfectionism as a Structural Problem", href: "/ideas/perfectionism-structural-problem" }
    ],
    relatedFrameworks: [
      { label: "Control Gradient", href: "/frameworks/control-gradient" },
      { label: "Pattern Externalization", href: "/frameworks/pattern-externalization" }
    ]
  },
  {
    slug: "religious-harm",
    title: "Religious Harm",
    definition: [
      "Religious harm is psychological injury associated with coercive, fear-based, or shaming belief environments.",
      "It can affect identity formation, authority relationships, nervous system regulation, and meaning-making.",
      "Arc addresses religious harm through structured reconstruction and consent-based integration."
    ],
    commonPresentations: [
      "Persistent shame independent of current beliefs",
      "Fear responses around dissent or ambiguity",
      "Difficulty trusting personal judgment",
      "Loss of orientation after leaving a faith system"
    ],
    whatDoesNotWork: [
      "Replacing one rigid ideology with another",
      "Reducing the issue to doctrinal disagreement alone",
      "Pressuring rapid identity conclusions before integration"
    ],
    whatHelps: [
      "Map inherited rules and authority dynamics",
      "Sort beliefs into retain, revise, and release",
      "Rebuild practices that support agency and consent",
      "Integrate grief, meaning, and identity over time"
    ],
    arcApproach:
      "Arc uses paced deconstruction, values clarification, and behavioral integration to rebuild coherence without reenacting coercion.",
    faq: [
      { question: "Is religious harm a clinical diagnosis?", answer: "It is a descriptive framework for patterned psychological injury, not a standalone diagnosis." },
      { question: "Do I need to reject all prior beliefs?", answer: "No. Treatment supports selective retention, revision, and release based on agency and alignment." },
      { question: "Can this work include grief?", answer: "Yes. Grief is often central when community, certainty, or identity structures change." },
      { question: "Is this anti-faith therapy?", answer: "No. The focus is coercion, harm, and agency, not blanket opposition to faith." },
      { question: "Can telehealth work for this topic?", answer: "Yes, when clinically appropriate for the case and treatment phase." },
      { question: "How is safety handled in this work?", answer: "By pacing decisions, clarifying boundaries, and using structured integration rather than pressure." }
    ],
    relatedEssays: [
      { label: "When Leaving a Faith System Feels Like Losing Gravity", href: "/ideas/leaving-faith-losing-gravity" },
      { label: "The Adjacent Possible", href: "/ideas/adjacent-possible" }
    ],
    relatedFrameworks: [
      { label: "Belief Deconstruction Grid", href: "/frameworks/belief-deconstruction-grid" },
      { label: "Meaning Reconstruction", href: "/frameworks/meaning-reconstruction" }
    ]
  }
];

export function getConceptBySlug(slug: ConceptHub["slug"]) {
  return conceptHubs.find((hub) => hub.slug === slug);
}
