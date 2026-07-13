import type { FaqItem } from "@/components/faq-block";

export type SpecialtyLink = {
  label: string;
  href: string;
  body: string;
};

export type SpecialtyPage = {
  path: string;
  title: string;
  eyebrow: string;
  lede: string;
  introduction: string[];
  patternTitle: string;
  patterns: string[];
  approachTitle: string;
  approach: string[];
  possibilityTitle: string;
  possibilities: string[];
  faqs: FaqItem[];
  related: SpecialtyLink[];
};

export const specialties = {
  religiousTrauma: {
    path: "/therapy/religious-trauma",
    title: "Therapy for religious trauma and religious harm.",
    eyebrow: "Individual psychotherapy for adults",
    lede: "Leaving is not always the same as being free of it.",
    introduction: [
      "A religious system can remain long after you have changed your mind: in a body that braces around dissent, a boundary that feels like rebellion, or a decision that still needs someone else’s blessing.",
      "I work with adults navigating religious trauma, religious harm, spiritual abuse, high-control religion, and faith deconstruction in Round Rock and online across Texas."
    ],
    patternTitle: "Harm can be obvious. It can also look very ordinary.",
    patterns: [
      "Being taught that your needs were selfish or dangerous.",
      "Monitoring your thoughts, body, sexuality, gender, or doubt.",
      "Treating fear as conviction and distress as spiritual failure.",
      "Forgiveness without accountability, or obedience without consent.",
      "Losing community, identity, or practical support when you questioned the system.",
      "Feeling responsible for other people’s faith, salvation, reputation, or stability."
    ],
    approachTitle: "Looking at the system, not just the belief.",
    approach: [
      "We pay attention to who held authority, what belonging cost, what disagreement made dangerous, and which rules eventually became private rules you had to enforce on yourself.",
      "Faith can be part of the conversation, or not. The work can include guilt, grief, anger, relationships, sexuality, identity, present-day decisions, and the practical project of building a life after certainty."
    ],
    possibilityTitle: "What may have more room over time.",
    possibilities: [
      "Telling fear from conviction, and guilt from responsibility.",
      "Making a decision without needing an authority to bless it.",
      "Grieving a person, community, identity, or lost time without treating grief as evidence that leaving was wrong.",
      "Keeping, revising, or leaving beliefs on your own terms."
    ],
    faqs: [
      {
        question: "Do I have to call it trauma?",
        answer: "No. Religious trauma is a useful search term and a meaningful description for some people. Others prefer religious harm, spiritual abuse, coercive religion, adverse religious experiences, or no label at all."
      },
      {
        question: "Can I come to therapy if I am still religious?",
        answer: "Yes. The question is how the experience is affecting your life and what you want to understand or change—not whether your faith passes a test."
      },
      {
        question: "Is this only for people leaving evangelical Christianity?",
        answer: "No. Harm can occur across traditions, denominations, families, schools, ministries, and spiritual communities. We work with the system you actually encountered."
      }
    ],
    related: [
      {
        label: "When Leaving a Faith System Feels Like Losing Gravity",
        href: "/ideas/leaving-faith-losing-gravity",
        body: "An essay on why leaving can feel less like freedom at first than like losing gravity."
      },
      {
        label: "Belief Deconstruction Grid",
        href: "/frameworks/belief-deconstruction-grid",
        body: "A working tool for separating inherited rules from chosen values."
      }
    ]
  },
  complexTrauma: {
    path: "/therapy/complex-trauma",
    title: "Therapy for complex trauma.",
    eyebrow: "Individual psychotherapy for adults",
    lede: "When the danger is old, but your life still expects it.",
    introduction: [
      "Complex trauma is not always one event with a clean beginning and end. It can be a long education in what had to be noticed, prevented, absorbed, hidden, or survived.",
      "I work with adults whose lives are still organized around chronic unpredictability, coercion, neglect, role reversal, conditional belonging, or relationships where safety and harm came from the same people."
    ],
    patternTitle: "Survival can look very competent from the outside.",
    patterns: [
      "Scanning the room, anticipating reactions, and settling everyone else before you can settle yourself.",
      "Going blank, calm, compliant, or intensely practical when something is wrong.",
      "Wanting closeness and getting alarmed when it arrives.",
      "Functioning well in public and collapsing in private.",
      "Explaining the history clearly while feeling almost nothing—or everything at once.",
      "Feeling ashamed of reactions that once kept you safe."
    ],
    approachTitle: "Starting with what is difficult now.",
    approach: [
      "We begin with what is making life difficult now: a relationship, a shutdown, a boundary, conflict, a work decision, or a reaction that suddenly became much larger than the room.",
      "My background in residential treatment, crisis work, and high-acuity care shaped a respect for both complexity and pacing. We do not need a complete timeline before the work can be useful."
    ],
    possibilityTitle: "What may become more possible.",
    possibilities: [
      "Noticing when an old survival response has taken over.",
      "Telling present risk from remembered risk.",
      "Staying more present during conflict, closeness, or uncertainty.",
      "Having needs without immediately converting them into obligations.",
      "Organizing more of life around current reality."
    ],
    faqs: [
      {
        question: "Do I need a PTSD or C-PTSD diagnosis?",
        answer: "No. Therapy begins with your experience and current concerns, not with requiring a particular label."
      },
      {
        question: "Will I have to tell you everything that happened?",
        answer: "No. We can work with patterns, reactions, relationships, and present-day effects without a complete account of every event."
      },
      {
        question: "Is this appropriate during an acute crisis?",
        answer: "This practice does not provide crisis stabilization or emergency response. When immediate safety or intensive support is the primary need, a higher or more responsive level of care may be the right first step."
      }
    ],
    related: [
      {
        label: "Therapy for perfectionism and overcontrol",
        href: "/therapy/perfectionism-overcontrol",
        body: "For the survival strategies that became a private management system."
      },
      {
        label: "The Adjacent Possible",
        href: "/ideas/adjacent-possible",
        body: "An essay about building change from the next reachable step."
      }
    ]
  },
  perfectionismOvercontrol: {
    path: "/therapy/perfectionism-overcontrol",
    title: "Therapy for perfectionism and overcontrol.",
    eyebrow: "Individual psychotherapy for adults",
    lede: "When getting it right has stopped feeling good.",
    introduction: [
      "You may not think of yourself as a perfectionist. You may think of yourself as the one who remembers, prepares, notices, follows through, catches mistakes, and prevents everyone from having a terrible afternoon.",
      "From the outside, that can look like competence. Inside, it can feel like an exhausting private bureaucracy."
    ],
    patternTitle: "The rules can be useful, and still take too much.",
    patterns: [
      "Overpreparing for ordinary tasks or delaying them until you can do them perfectly.",
      "Rechecking work that was already complete.",
      "Treating preferences as arguments that need a full defense.",
      "Feeling disproportionately distressed by mistakes, criticism, or other people’s disappointment.",
      "Becoming indispensable and privately furious about it.",
      "Knowing exactly why a pattern exists and still being unable to stop doing it."
    ],
    approachTitle: "I am interested in what the rule is trying to prevent.",
    approach: [
      "We look at the stakes your mind assigns to mistakes, what happened when you needed help, and how family, work, religion, neurotype, culture, or earlier chaos shaped the pattern.",
      "The point is not less discernment or lower standards. It is having more than one available response when fear starts presenting itself as responsibility."
    ],
    possibilityTitle: "What may become more possible.",
    possibilities: [
      "Making decisions without exhausting every hypothetical.",
      "Recovering from mistakes without turning them into a character assessment.",
      "Letting another person do something differently without taking over.",
      "Resting before your body makes the decision for you.",
      "Keeping the standards you value and loosening the rules you never consciously chose."
    ],
    faqs: [
      {
        question: "What if perfectionism is one reason I am successful?",
        answer: "Then we take that seriously. Therapy can examine whether success currently requires more punishment, rigidity, or exhaustion than you want to keep paying."
      },
      {
        question: "Does this include people-pleasing and chronic over-responsibility?",
        answer: "Often. Perfectionism and overcontrol can involve managing other people’s reactions, becoming indispensable, or preventing conflict by needing less and doing more."
      },
      {
        question: "Can perfectionism connect to trauma, religion, or neurodivergence?",
        answer: "Yes. The connections differ from person to person; we look at the actual function and history of the pattern rather than applying one explanation to everyone."
      }
    ],
    related: [
      {
        label: "Perfectionism as a Structural Problem",
        href: "/ideas/perfectionism-structural-problem",
        body: "An essay on why getting very good at self-criticism does not make it useful."
      },
      {
        label: "Complex trauma therapy",
        href: "/therapy/complex-trauma",
        body: "For the survival history that can sit underneath the pattern."
      }
    ]
  },
  neurodivergentAdults: {
    path: "/therapy/neurodivergent-adults",
    title: "Neurodivergent-affirming therapy for adults.",
    eyebrow: "Individual psychotherapy for adults",
    lede: "Therapy should make room for how your mind actually works.",
    introduction: [
      "You may be autistic, ADHD, otherwise neurodivergent, questioning, formally diagnosed, or making sense of yourself without a label that quite fits yet.",
      "This is therapy for burnout, masking, executive-function differences, sensory strain, relationships, trauma, and the exhausting work of translating yourself all day."
    ],
    patternTitle: "What might bring you to therapy.",
    patterns: [
      "Burnout after years of masking or overfunctioning.",
      "Shame around inconsistency, directness, intensity, or recovery needs.",
      "Sensory overload and the cost of pushing past it.",
      "Communication that repeatedly goes sideways in important relationships.",
      "Perfectionism built to compensate for misunderstanding or executive-function differences.",
      "Workplaces, families, schools, or religious systems that punished difference."
    ],
    approachTitle: "What neurodivergent-affirming therapy can look like.",
    approach: [
      "We can use direct questions, clear summaries, written or visual organization, more processing time, and practical experiments adjusted to real life rather than moralized when they do not work.",
      "We also look at the environment: which expectations are workable, which are merely familiar, and where a communication problem belongs to a relationship rather than entirely to you."
    ],
    possibilityTitle: "What may become more possible.",
    possibilities: [
      "Language for needs that does not turn every request into an apology.",
      "A clearer sense of capacity instead of character judgment.",
      "Earlier recognition of burnout and sensory overload.",
      "Routines and relationships built around how your mind works.",
      "Less constant self-translation."
    ],
    faqs: [
      {
        question: "Do I need a formal diagnosis?",
        answer: "No. You can bring questions about neurodivergence into therapy whether you are diagnosed, self-identified, uncertain, or still deciding what language fits."
      },
      {
        question: "Is therapy only about neurodivergence?",
        answer: "No. It can be central, peripheral, or one part of a larger picture involving relationships, trauma, religious harm, work, identity, grief, or perfectionism."
      },
      {
        question: "What does neurodiversity-affirming mean here?",
        answer: "It means we do not begin from the premise that your mind is an incorrect version of someone else’s. We can still be direct, practical, and clear about what is not working."
      }
    ],
    related: [
      {
        label: "Therapy for perfectionism and overcontrol",
        href: "/therapy/perfectionism-overcontrol",
        body: "For perfectionism that grew around being misunderstood or over-responsible."
      },
      {
        label: "The LEGO thing",
        href: "/constructive",
        body: "A concrete option when a problem is easier to see in physical space."
      }
    ]
  }
} as const satisfies Record<string, SpecialtyPage>;
