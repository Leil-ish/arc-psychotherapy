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
    date: "2026-07-06",
    description:
      "On the gap between what is possible in theory and what is actually reachable next.",
    keyIdea:
      "Possible is not the same as adjacent. The move that changes a life is often too small to satisfy the part of us that wants a decisive escape.",
    tags: ["Systems", "Practice", "Overcontrol"],
    body: `## The kitchen is possible. It is not adjacent.
I am sitting in my office. The kitchen is thirty seconds away, across a room and around a corner. I could be standing in it almost as soon as I decide to be.

But I cannot get there in one step.

This is the distinction theoretical biologist Stuart Kauffman called the adjacent possible: a complex system does not leap toward a distant, finished configuration. It moves into the next combinations that have become reachable from where it already is. Each move changes what can happen next.

The destination may be imaginable from the starting point. That does not mean it is reachable from the starting point.

## Hindsight is unfair
I think about this often with people who are judging a past self: “I should have left sooner. I should have known better. I should not have needed so much time.”

The more honest question is not whether the better option existed in theory. It is whether it was in the reachable space then, given the emotional capacity, material support, safety, and clarity available at the time.

To answer that, you have to time-travel without bringing along everything you learned later. You have to ask: could that version of me absorb this change? Did they have enough support to make it survivable? Could they even see the option clearly from inside the life they were living?

Sometimes the answer is yes. Often it is no. That is not an excuse or a claim that agency did not exist. It is an attempt to be accurate about the constraints agency was operating inside.

## The problem with big plans
The same confusion shows up when we are trying to change something now. We treat “possible” and “adjacent” as though they are the same category, then conclude we lack motivation when a distant future does not produce immediate movement.

Could someone leave a relationship, change careers, rebuild a social world, stop organizing their life around fear, or become almost unrecognizable to their former self? Sometimes. But none of those outcomes become adjacent simply because they are imaginable.

The next useful move is usually less satisfying than the transformation we had hoped to make. It may be one conversation, one boundary, one hour of help, one application, one day of noticing the pattern before it takes over. Its job is not to deliver the destination. Its job is to change what becomes reachable next.

We want to arrive in the kitchen. We do not want to walk the hallway.

## A question worth keeping
What are you judging your past self for that may not have been in the reachable space at the time?

And separately: what is one step that is actually next to you today, whether or not it feels sufficiently significant?

The kitchen is possible. Start walking.
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
    date: "2026-05-19",
    description:
      "Why perfectionism is not mainly about high standards, and why better advice is rarely enough.",
    keyIdea:
      "The problem is not that you care about doing things well. It is that the cost of being wrong has become too high to bear.",
    tags: ["Perfectionism", "Systems", "Practice"],
    body: `## The caring is not the problem
Perfectionism is often described as having standards that are too high. That explanation misses the part that makes it painful.

The person who spends three hours on an email is not usually trying to produce an unusually good email. They are trying to prevent the particular kind of wrongness that would mean they were careless, disappointing, irresponsible, incompetent, or impossible to trust.

That is a much bigger job for an email to do.

The same thing happens in parenting, work, relationships, money, health, and faith. The decision itself expands until it contains every possible outcome. If something goes badly, the perfectionist does not only fear the consequence. They fear that the consequence will prove they should have anticipated it.

## Certainty is seductive
A doctor says there is a 70% chance a treatment will help. Statistically, that is good information. Psychologically, a perfectionist may hear a 30% chance that they will choose wrong and have to live with the consequences.

So certainty becomes irresistible. More research. More checking. One more opinion. A more elaborate protocol. The fantasy is not really of getting the answer right. It is of becoming the kind of person who can never be blamed for a bad outcome.

This is why so much standard advice fails. “Be kinder to yourself” is not wrong. It is simply too far downstream. It does not touch the rule underneath: *if I am sufficiently careful, I can prevent enough uncertainty to become safe.*

## The cost of trying harder
You can build a very functional life around this rule. You can be admired for it. You can become the person everyone relies on precisely because you have spent years making sure nothing slips.

And eventually, the strategy can start charging more than it gives back. Decisions take too long. Rest feels irresponsible. Relationships become organized around not needing much. Your life gets narrower while your standards keep presenting themselves as values.

That is the structural problem. It is not only a thought to replace. It is a rule that has shaped behavior, identity, and the amount of risk you believe you are allowed to take.

## What changes the structure
The work begins with accuracy: what is the rule? What does it predict will happen? What is it protecting? What is it costing now?

Then comes the less glamorous part. Instead of trying to become a person who is suddenly relaxed about everything, you make a small deviation from the rule and see what happens. Send the email after two drafts. Make a decision with enough information instead of all the information. Let someone be mildly disappointed and stay present for the result.

Not because visible imperfection is inherently good. Because the evidence matters. You need experiences that show the rule has overstated the danger, and enough room to decide which standards are actually yours.

The goal is not lower standards. It is a life in which standards serve you, rather than a life spent serving them.
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
    date: "2026-06-10",
    description:
      "Why leaving a coercive faith system can feel disorienting even when you know it was harming you.",
    keyIdea:
      "The first task is not to replace every old answer. It is to become oriented enough to hear your own questions again.",
    tags: ["Religious Harm", "Meaning", "Practice"],
    body: `## Leaving is not the same as landing
There is a version of this story that goes: you notice the harm, leave the system, and feel free.

Sometimes that happens. More often, people leave one structure and discover that it had been doing a hundred jobs they did not know it was doing. It told them what was good, what was dangerous, who had authority, what their body meant, who belonged, how to make decisions, and what kind of future they could imagine.

When that structure becomes impossible to trust, the loss can feel less like freedom at first than like losing gravity.

## The rule can outlive the belief
Someone can no longer agree with a teaching and still feel a physical jolt of danger when they question it. Someone can know intellectually that a boundary is reasonable and still experience it as rebellion. Someone can leave a community and miss it terribly, including the parts they know were harmful.

That does not mean the person was mistaken to leave. It means a system can get into more than beliefs. It can organize nervous-system responses, family roles, friendships, romance, morality, and the ordinary experience of making a choice without asking permission.

If we reduce all of that to a doctrinal disagreement, we miss the part that needs care.

## The rush to replace certainty
Disorientation is uncomfortable enough that people often want a new answer immediately. A new framework can feel like relief. But when the old problem was an authority structure that demanded certainty, speed can recreate the same dynamic in different language.

It can be more useful to slow down and ask different questions. Which rules still fit your values? Which ones were mostly fear? Which relationships are safe enough to keep? What practices make you feel more like yourself, rather than more correct? What does grief need from you before you turn it into a conclusion?

There is no approved endpoint here. Some people leave faith entirely. Some stay and renegotiate. Some return to practices they once rejected. Some remain uncertain for a long time. The clinical task is not to install the right identity. It is to make enough room for agency that the answer can be yours.

## A more honest kind of reconstruction
Rebuilding meaning is not a branding exercise. It happens through very ordinary things: a boundary you keep, a relationship that survives disagreement, a holiday you celebrate differently, an ethical choice you make because you believe it is right rather than because you are terrified not to.

Those small acts do not resolve every question. They do begin to build a life that can hold questions without treating them as an emergency.
`,
    related: [
      { label: "Religious Harm", href: "/religious-harm" },
      { label: "Belief Deconstruction Grid", href: "/frameworks/belief-deconstruction-grid" },
      { label: "Writing", href: "/ideas" }
    ]
  }
];

function countWords(input: string) {
  return input.trim().split(/\s+/).filter(Boolean).length;
}

const essayDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC"
});

export function getReadingTimeMinutes(text: string) {
  return Math.max(3, Math.ceil(countWords(text) / 220));
}

export function formatEssayDate(date: string) {
  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return date;
  return essayDateFormatter.format(parsed);
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
