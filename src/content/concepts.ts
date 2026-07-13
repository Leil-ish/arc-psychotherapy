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
      "Perfectionism is not the same thing as having standards. It is the feeling that an ordinary mistake says something alarming about you.",
      "It can make an email feel like a referendum, a decision feel dangerous, or rest feel suspicious.",
      "Some standards are yours. Others have turned into a full-time threat-management job."
    ],
    commonPresentations: [
      "An email takes forty minutes, then you reread it in bed",
      "Starting is easy; finishing feels dangerous",
      "A small mistake stays with you long after everyone else has moved on",
      "You do well by external measures while feeling less and less free inside your own life"
    ],
    whatDoesNotWork: [
      "A prettier version of self-criticism dressed up as a productivity system",
      "Being told to “be kinder to yourself” with no idea what that means on a Wednesday",
      "Treating standards as the problem, when the problem is the terror of falling short"
    ],
    whatHelps: [
      "Separating a value from the fear that has attached itself to it",
      "Trying small, visible imperfections without blowing up your life to prove a point",
      "Following the sequence: what happened, what you predicted, what you did, and what it cost",
      "Letting the result—not the panic of the moment—inform the next decision"
    ],
    arcApproach:
      "We get curious about what perfectionism has been doing for you, where it is exhausting you, and what would make the next week a little less punishing.",
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
      "Overcontrol is what happens when responsibility, restraint, and preparedness do too much of the work of keeping you safe.",
      "Other people may know you as steady and reliable. You may know the internal version: the bracing, the forecasting, the difficulty relaxing into a plan, a relationship, or a choice.",
      "The life gets larger when fear is no longer the only thing approving your options."
    ],
    commonPresentations: [
      "A small disruption can ruin a carefully built day",
      "You cannot decide because no option feels sufficiently certain",
      "Intimacy starts to feel like a performance with very good emotional lighting",
      "You are the reliable one and privately feel tight, brittle, or exhausted"
    ],
    whatDoesNotWork: [
      "Treating control as a personality defect",
      "Forcing a dramatic act of vulnerability before there is enough support for it",
      "Doing a “challenge” and calling the anxiety it creates proof that it worked"
    ],
    whatHelps: [
      "Small experiments that create more choice without asking you to leap off a cliff",
      "Putting the pattern into words, diagrams, or physical space so we can look at it together",
      "Looking honestly at what happened instead of letting one hard feeling become the conclusion",
      "Decision rules that preserve your values while loosening fear’s monopoly on the outcome"
    ],
    arcApproach:
      "We look at what control is doing for you and where it is starting to take more than it gives back. Then we make room for more options, one non-dramatic step at a time.",
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
      "Religious harm is what remains when a faith system used fear, shame, control, or authority in ways that hurt you.",
      "You can leave, change your beliefs, or still have faith and find that the old system remains: in a panic around dissent, a body that braces at the word “sin,” or a decision that feels dangerous for reasons you cannot quite explain.",
      "I am not here to hand you a new doctrine. I am interested in what you inherited, what still fits, and how you want to live now."
    ],
    commonPresentations: [
      "Shame that persists even when your beliefs have changed",
      "Fear or panic around disagreement and ambiguity",
      "Wanting an authority figure to certify that your judgment is okay",
      "The strange grief of losing a community, language, or structure you also needed to leave"
    ],
    whatDoesNotWork: [
      "Replacing one rigid ideology with another and calling it freedom",
      "Reducing the whole problem to a disagreement about doctrine",
      "Rushing yourself into a new identity before you have had time to grieve"
    ],
    whatHelps: [
      "Name the inherited rules, who enforced them, and where they still show up",
      "Sort what you want to keep, revise, or release without making speed a virtue",
      "Build practices and relationships with enough room to think",
      "Make room for grief, relief, anger, meaning, and becoming oriented again"
    ],
    arcApproach:
      "We notice what you inherited, where it still has power, and what you want to make your own. People leave, stay, return, revise, or remain uncertain.",
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
