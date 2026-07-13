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
      "Perfectionism is what happens when an ordinary mistake starts carrying the weight of a verdict.",
      "Other people see care, competence, and high standards. You see the email you should have worded differently, the decision that could still go wrong, and the version of yourself you were supposed to be by now.",
      "The goal is not to stop caring. It is to separate what you genuinely value from the rule that says you must control every possible outcome."
    ],
    commonPresentations: [
      "Researching or preparing until action becomes harder, not easier",
      "Delaying completion because the conditions never feel quite sufficient",
      "Replaying an ordinary mistake long after everyone else has moved on",
      "Doing very well by external measures while feeling less and less free inside your own life"
    ],
    whatDoesNotWork: [
      "Being told to “be kinder to yourself” without changing the situation that keeps triggering the rule",
      "Making another rigid system for becoming less rigid",
      "Treating standards as the problem, when the real problem is what happens when a standard becomes a threat"
    ],
    whatHelps: [
      "Distinguish a value from the fear rule that has attached itself to it",
      "Try small, visible imperfections that do not require blowing up your life to prove a point",
      "Follow the sequence: what happened, what you predicted, what you did, and what it cost",
      "Let the results—not the anxiety of the moment—inform the next decision"
    ],
    arcApproach:
      "In therapy, we get specific about the rule you are following, what it is protecting, and what it costs. Then we test changes that are close enough to your real life to teach us something.",
    faq: [
      {
        question: "What is perfectionism in psychology?",
        answer:
          "It is more than caring about quality. Perfectionism treats mistakes as evidence about your worth, safety, or right to belong. It often produces high output alongside delay, checking, and relentless self-evaluation."
      },
      {
        question: "What causes perfectionism?",
        answer:
          "It often develops where safety, belonging, or approval became tied to doing things correctly. Family, school, work, and religious systems can all teach the rule that an error is not simply an error—it is a risk you should have prevented."
      },
      {
        question: "Is perfectionism an anxiety disorder?",
        answer:
          "Perfectionism is not a standalone diagnosis; it is a control pattern that can show up across different diagnoses. It can amplify anxiety, depression, obsessive checking, and burnout by narrowing flexibility."
      },
      {
        question: "How do you treat perfectionism without lowering standards?",
        answer:
          "The work is not to lower standards indiscriminately. It is to tell the difference between a standard you chose and a certainty rule you are obeying, then build evidence that you can act without eliminating every possible risk."
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
      "Overcontrol is what happens when being careful, competent, and contained becomes the only way you know how to be safe.",
      "People may know you as steady and reliable. You may know the internal version: the bracing, the endless forecasting, the difficulty relaxing into a plan, a relationship, or a choice.",
      "The goal is not chaos or forced vulnerability. It is a wider range of choices than the ones fear currently permits."
    ],
    commonPresentations: [
      "Planning so rigidly that a small disruption can ruin the whole day",
      "Delayed decisions because no option can be made sufficiently certain",
      "Keeping emotion contained so carefully that intimacy starts to feel like a performance",
      "Being the reliable one while privately feeling tight, brittle, or exhausted"
    ],
    whatDoesNotWork: [
      "Treating control as a moral failure or a personality defect",
      "Forcing a dramatic act of vulnerability before there is enough support for it",
      "Doing a “challenge” without paying attention to what it taught you or what happened next"
    ],
    whatHelps: [
      "Small experiments that create more choice without asking you to leap off a cliff",
      "Putting the pattern into words, diagrams, or physical space so it is something you can examine rather than simply inhabit",
      "Looking honestly at what happened after an experiment instead of letting one hard feeling become the conclusion",
      "Decision rules that preserve your values while loosening fear’s monopoly on the outcome"
    ],
    arcApproach:
      "We look at where control still serves you and where it has begun taking more than it gives back. Then we build range in steps your nervous system and actual life can tolerate.",
    faq: [
      {
        question: "What is overcontrol in psychology?",
        answer:
          "Overcontrol is a pattern of inhibition and rigidity used to create certainty and reduce threat. It can look like reliability and composure from the outside while feeling like internal inflexibility and constant strain from the inside."
      },
      {
        question: "What causes overcontrol?",
        answer:
          "It often develops where strict self-management was rewarded or required for safety. High-responsibility environments, perfectionistic rules, and experiences where unpredictability had real consequences can all reinforce the pattern."
      },
      {
        question: "Is overcontrol the same as self-discipline?",
        answer:
          "Overcontrol is not the same as self-discipline. Discipline serves chosen goals, while overcontrol narrows behavior beyond what goals require."
      },
      {
        question: "How is overcontrol treated in therapy?",
        answer:
          "Therapy looks at the particular jobs control is doing for you and the price it is charging. From there, the work is to practice flexibility in bounded, deliberate steps—not to make yourself careless."
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
      "Religious harm is what remains when a faith system used fear, shame, control, or authority in ways that injured you.",
      "A person can leave, change their beliefs, or still have faith and find that the old system remains present: in a panic around dissent, a body that braces at the word “sin,” or a decision that feels dangerous for reasons that no longer make sense.",
      "The work is not to hand you a new doctrine. It is to help you understand what you inherited, decide what still fits, and build a life that can tolerate your own authority."
    ],
    commonPresentations: [
      "Shame that persists even when your current beliefs no longer support it",
      "Fear, panic, or a sense of danger around disagreement and ambiguity",
      "Difficulty trusting your own judgment without an authority figure to certify it",
      "The disorienting loss of structure after leaving a faith community or changing your relationship to it"
    ],
    whatDoesNotWork: [
      "Replacing one rigid ideology with another and calling it freedom",
      "Reducing the whole problem to a disagreement about doctrine",
      "Pressuring yourself into a new identity before you have had time to grieve or integrate what changed"
    ],
    whatHelps: [
      "Name the inherited rules, who enforced them, and where they still show up",
      "Sort what you want to retain, revise, or release without making speed a virtue",
      "Build practices and relationships that support consent, agency, and enough room to think",
      "Make room for grief, relief, anger, meaning, and the slow work of becoming oriented again"
    ],
    arcApproach:
      "We map what you inherited, notice the places it still has power, and make room to decide what remains yours. There is no correct endpoint: people leave, stay, return, revise, or remain uncertain.",
    faq: [
      {
        question: "What is religious harm?",
        answer:
          "Religious harm refers to the injuries caused when a religious system uses coercion, shame, fear, or authority in ways that undermine agency. It can shape identity, relationships to authority, nervous-system responses, and meaning-making."
      },
      {
        question: "What are common signs of religious harm?",
        answer:
          "Common signs include persistent shame, fear of dissent, difficulty trusting personal judgment, panic around uncertainty, and grief after a change in belief or community. These patterns can continue long after a person has formally left."
      },
      {
        question: "Can religious harm happen even if I still have faith?",
        answer:
          "Religious harm can occur regardless of current faith identity. The core issue is coercion and psychological injury, not whether someone believes, doubts, or returns to faith."
      },
      {
        question: "How is religious harm treated in therapy?",
        answer:
          "Therapy makes the inherited rules and authority dynamics visible, then looks at their current cost. The work can include keeping, revising, or releasing beliefs while rebuilding agency and a coherent sense of meaning."
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
