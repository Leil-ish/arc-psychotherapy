export type IdeaTag =
  | "Perfectionism"
  | "Overcontrol"
  | "Religious Harm"
  | "Meaning"
  | "Systems"
  | "Practice";

export type RelatedLink = {
  label: string;
  href: string;
};

export type IdeaEssay = {
  slug: string;
  title: string;
  date: string;
  description: string;
  keyIdea: string;
  tags: IdeaTag[];
  body: string;
  related: RelatedLink[];
};

const essays: IdeaEssay[] = [
  {
    slug: "adjacent-possible",
    title: "The Adjacent Possible",
    date: "2026-02-20",
    description:
      "The adjacent possible is the next workable move that preserves structure while expanding range.",
    keyIdea:
      "Most durable change starts with proximity, not reinvention. The question is not what is ideal. The question is what is adjacent and executable.",
    tags: ["Systems", "Practice", "Overcontrol"],
    body: `## Why this matters
When clients are overcontrolled, they often think in binaries: perfect or failed, certain or unsafe, stay or leave. The adjacent possible interrupts that collapse.

A treatment plan becomes more usable when each step can be completed under real constraints. Adjacent moves build evidence that flexibility does not require chaos.

## Clinical pattern
In high-functioning adults, planning can look strong while adaptation remains narrow. The person can perform, but cannot pivot.

The adjacent possible gives a decision rule: choose the smallest move that increases optionality without violating core values.

## In session
- Name the current control strategy.
- Define one adjacent experiment.
- Track what changed in behavior, meaning, and emotional load.
- Integrate the result into the next arc step.

## Practical use
This method is especially useful for perfectionism and post-religious identity reconstruction, where all-or-nothing thinking can hide as moral seriousness.

Small, structured experiments reduce shame and increase cognitive range.
`,
    related: [
      { label: "Overcontrol", href: "/overcontrol" },
      { label: "Perfectionism", href: "/perfectionism" },
      { label: "Control Gradient", href: "/frameworks/control-gradient" }
    ]
  },
  {
    slug: "perfectionism-structural-problem",
    title: "Perfectionism as a Structural Problem",
    date: "2026-02-20",
    description:
      "Perfectionism is less a personality style and more a system that links worth, control, and threat prediction.",
    keyIdea:
      "If perfectionism is treated only as mindset, behavior will relapse. Structural treatment changes the underlying rule set.",
    tags: ["Perfectionism", "Systems", "Practice"],
    body: `## Definition first
Perfectionism is a structure, not just a preference for quality. It defines safety as error prevention and identity as performance stability.

When this structure is unexamined, effort increases while flexibility decreases.

## What breaks treatment
Advice such as "be kinder to yourself" is often too global. It does not modify the control architecture that drives checking, delay, and over-preparation.

Clients then conclude they failed therapy, when the intervention failed to match the structure.

## A structural approach
- Identify the rule: what must never happen.
- Identify the cost: what life range is being traded away.
- Build graded deviations from the rule.
- Integrate the result into a stable, repeatable process.

## Identity layer
For many adults, perfectionism is fused with moral responsibility. Treatment needs to separate conscientiousness from compulsive certainty.

That distinction protects values while loosening rigidity.
`,
    related: [
      { label: "Perfectionism", href: "/perfectionism" },
      { label: "Arc Mapping", href: "/frameworks/arc-mapping" },
      { label: "The Adjacent Possible", href: "/ideas/adjacent-possible" }
    ]
  },
  {
    slug: "leaving-faith-losing-gravity",
    title: "When Leaving a Faith System Feels Like Losing Gravity",
    date: "2026-02-20",
    description:
      "After coercive faith environments, clients often lose the organizing structure that once defined meaning, authority, and identity.",
    keyIdea:
      "The initial task is not immediate replacement beliefs. The task is rebuilding orientation without reenacting coercion.",
    tags: ["Religious Harm", "Meaning", "Practice"],
    body: `## The felt problem
Clients often describe post-faith life as disorientation rather than freedom. Old certainty is gone, but new coherence is not yet built.

This can present as anxiety, shame, decision paralysis, or social fragmentation.

## What is often missed
Religious harm is not only about doctrines. It is about learned relationships to authority, body signals, dissent, and belonging.

If treatment ignores these dynamics, clients may recreate the same structure in new language.

## Structured reconstruction
- Map inherited rules and their current function.
- Sort beliefs into retain, revise, and release.
- Build practices that restore agency and consent.
- Test meaning systems through lived behavior.

## Pacing and tolerance
Premature certainty can feel relieving but unstable. A paced process increases uncertainty tolerance and protects long-term integration.

The goal is not anti-faith identity. The goal is coherent agency.
`,
    related: [
      { label: "Religious Harm", href: "/religious-harm" },
      { label: "Belief Deconstruction Grid", href: "/frameworks/belief-deconstruction-grid" },
      { label: "Ideas Library", href: "/ideas" }
    ]
  }
];

function countWords(input: string) {
  return input.trim().split(/\s+/).filter(Boolean).length;
}

export function getReadingTimeMinutes(text: string) {
  return Math.max(3, Math.ceil(countWords(text) / 220));
}

export function getAllEssays() {
  return [...essays].sort((a, b) => a.title.localeCompare(b.title));
}

export function getEssayBySlug(slug: string) {
  return essays.find((essay) => essay.slug === slug);
}

export function getEssayBySlugs(slugs: readonly string[]) {
  const map = new Map(essays.map((essay) => [essay.slug, essay]));
  return slugs.map((slug) => map.get(slug)).filter((essay): essay is IdeaEssay => Boolean(essay));
}

export function getRelatedEssays(source: IdeaEssay, limit = 3) {
  return essays
    .filter((essay) => essay.slug !== source.slug)
    .map((essay) => {
      const overlap = essay.tags.filter((tag) => source.tags.includes(tag)).length;
      return { essay, overlap };
    })
    .filter((item) => item.overlap > 0)
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, limit)
    .map((item) => item.essay);
}
