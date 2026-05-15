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
      "Perfectionism is a control strategy that links worth, threat prediction, and behavioral rigidity.",
      "People around you see competence. You see everything you almost got wrong.",
      "This is not a character flaw. It is usually an old survival strategy that now costs too much."
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
      "Use what happened to update future decision rules"
    ],
    arcApproach:
      "In therapy, we separate high standards from fear rules, then test changes you can actually use in real life.",
    faq: [
      {
        question: "What is perfectionism in psychology?",
        answer:
          "Perfectionism is a control strategy that links worth to performance and treats error as threat. In psychology, it often presents as high output with persistent fear of mistakes, delay, and harsh self-evaluation."
      },
      {
        question: "What causes perfectionism?",
        answer:
          "Perfectionism develops when safety, belonging, or approval become tied to flawless performance. Family, school, work, and religious systems that punish error can reinforce this rule structure over time."
      },
      {
        question: "Is perfectionism an anxiety disorder?",
        answer:
          "Perfectionism is not a standalone diagnosis; it is a control pattern that can show up across different diagnoses. It can amplify anxiety, depression, obsessive checking, and burnout by narrowing flexibility."
      },
      {
        question: "How do you treat perfectionism without lowering standards?",
        answer:
          "Treatment separates values-based standards from compulsive certainty rules. Then we use graded experiments so standards stay intentional while rigidity decreases."
      }
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
      "Overcontrol refers to chronic inhibition and rigidity used to maintain certainty and prevent perceived threat.",
      "People may see you as steady and reliable while you feel tight, watchful, and chronically braced.",
      "The goal is not chaos. The goal is more range without losing what matters."
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
      "We look at where control still serves you and where it is costing you, then build range in small tolerable steps.",
    faq: [
      {
        question: "What is overcontrol in psychology?",
        answer:
          "Overcontrol refers to chronic inhibition and rigidity used to maintain certainty and reduce perceived threat. It often looks like reliability and composure externally, with internal inflexibility and high strain."
      },
      {
        question: "What causes overcontrol?",
        answer:
          "Overcontrol develops when strict self-management is repeatedly rewarded or required for safety. High-responsibility environments, perfectionistic rules, and threat-sensitive learning can all reinforce the pattern."
      },
      {
        question: "Is overcontrol the same as self-discipline?",
        answer:
          "Overcontrol is not the same as self-discipline. Discipline serves chosen goals, while overcontrol narrows behavior beyond what goals require."
      },
      {
        question: "How is overcontrol treated in therapy?",
        answer:
          "Therapy defines where control is useful and where it has become costly. Treatment then builds flexibility through bounded experiments, sequence tracking, and integration."
      }
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
      "Religious harm refers to psychological injury caused by coercive, shaming, or authoritarian religious systems.",
      "Even after beliefs change, fear, shame, and authority pressure can stay in your body, relationships, and decisions.",
      "Work focuses on rebuilding agency and meaning without replacing one rigid system with another."
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
      "We map what you inherited, decide what still fits, and rebuild meaning at your pace without pressure.",
    faq: [
      {
        question: "What is religious harm?",
        answer:
          "Religious harm is psychological injury caused by coercive, shaming, or authoritarian religious systems. It can affect identity, authority relationships, nervous system regulation, and meaning-making."
      },
      {
        question: "What are common signs of religious harm?",
        answer:
          "Common signs include persistent shame, fear of dissent, difficulty trusting personal judgment, and panic around uncertainty. These patterns often continue even after formal disaffiliation."
      },
      {
        question: "Can religious harm happen even if I still have faith?",
        answer:
          "Religious harm can occur regardless of current faith identity. The core issue is coercion and psychological injury, not whether someone believes, doubts, or returns to faith."
      },
      {
        question: "How is religious harm treated in therapy?",
        answer:
          "Treatment maps inherited rules, authority dynamics, and current costs. Therapy then supports selective retention, revision, and release while rebuilding agency and coherent meaning."
      }
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
