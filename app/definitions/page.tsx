import type { Route } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { siteContent } from "@/src/content/site";

type RelatedLink = {
  label: string;
  href: string;
};

type DefinitionEntry = {
  term: string;
  definition: string;
  frameworks: RelatedLink[];
  essays: RelatedLink[];
};

const definitions: DefinitionEntry[] = [
  {
    term: "Perfectionism",
    definition:
      "Perfectionism is a control strategy that links worth to performance and treats error as threat. The goal of treatment is flexibility, not lower standards.",
    frameworks: [
      { label: "Arc Mapping", href: "/frameworks/arc-mapping" },
      { label: "Control Gradient", href: "/frameworks/control-gradient" }
    ],
    essays: [
      { label: "Perfectionism as a Structural Problem", href: "/ideas/perfectionism-structural-problem" },
      { label: "The Adjacent Possible", href: "/ideas/adjacent-possible" }
    ]
  },
  {
    term: "Overcontrol",
    definition:
      "Overcontrol refers to chronic inhibition and rigidity used to maintain certainty and reduce perceived threat. It often presents as external competence with a narrowing internal range.",
    frameworks: [
      { label: "Control Gradient", href: "/frameworks/control-gradient" },
      { label: "Pattern Externalization", href: "/frameworks/pattern-externalization" }
    ],
    essays: [
      { label: "The Adjacent Possible", href: "/ideas/adjacent-possible" },
      { label: "Perfectionism as a Structural Problem", href: "/ideas/perfectionism-structural-problem" }
    ]
  },
  {
    term: "Religious harm",
    definition:
      "Religious harm refers to psychological injury caused by coercive, shaming, or authoritarian religious systems. Treatment supports agency, regulation, and meaning reconstruction without reenacting coercion.",
    frameworks: [
      { label: "Belief Deconstruction Grid", href: "/frameworks/belief-deconstruction-grid" },
      { label: "Meaning Reconstruction", href: "/frameworks/meaning-reconstruction" }
    ],
    essays: [
      { label: "When Leaving a Faith System Feels Like Losing Gravity", href: "/ideas/leaving-faith-losing-gravity" }
    ]
  },
  {
    term: "Control gradient",
    definition:
      "Control gradient is a step-by-step way to scale flexibility rather than swinging between all-or-nothing shifts. It allows change while preserving values and role responsibilities.",
    frameworks: [
      { label: "Control Gradient", href: "/frameworks/control-gradient" },
      { label: "Uncertainty Capacity", href: "/frameworks/uncertainty-capacity" }
    ],
    essays: [
      { label: "The Adjacent Possible", href: "/ideas/adjacent-possible" }
    ]
  },
  {
    term: "Belief systems",
    definition:
      "Belief systems are organized assumptions about authority, safety, identity, and meaning. Therapy differentiates aligned beliefs from inherited fear-based rules and clarifies what to retain, revise, or release.",
    frameworks: [
      { label: "Belief Deconstruction Grid", href: "/frameworks/belief-deconstruction-grid" },
      { label: "Meaning Reconstruction", href: "/frameworks/meaning-reconstruction" }
    ],
    essays: [
      { label: "When Leaving a Faith System Feels Like Losing Gravity", href: "/ideas/leaving-faith-losing-gravity" }
    ]
  },
  {
    term: "Uncertainty capacity",
    definition:
      "Uncertainty capacity is the ability to act with coherence without rushing to certainty. It develops through bounded experiments and post-decision reflection rather than exhaustive control.",
    frameworks: [
      { label: "Uncertainty Capacity", href: "/frameworks/uncertainty-capacity" },
      { label: "Control Gradient", href: "/frameworks/control-gradient" }
    ],
    essays: [
      { label: "The Adjacent Possible", href: "/ideas/adjacent-possible" }
    ]
  },
  {
    term: "Meaning reconstruction",
    definition:
      "Meaning reconstruction is the process of rebuilding values, identity, and direction after major belief disruption. The goal is durable coherence with agency, not immediate replacement certainty.",
    frameworks: [
      { label: "Meaning Reconstruction", href: "/frameworks/meaning-reconstruction" },
      { label: "Belief Deconstruction Grid", href: "/frameworks/belief-deconstruction-grid" }
    ],
    essays: [
      { label: "When Leaving a Faith System Feels Like Losing Gravity", href: "/ideas/leaving-faith-losing-gravity" }
    ]
  }
];

export const metadata = pageMetadata({
  title: "Core Concepts | Round Rock, TX",
  description:
    "Core psychological definitions used in Arc psychotherapy for perfectionism, overcontrol, religious harm, belief systems, and flexibility. Downtown Round Rock, Texas, with telehealth across Texas.",
  path: "/definitions"
});

export default function DefinitionsPage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <h1 className="h1">Core Concepts</h1>
      <p className="body-lg mt-5 max-w-4xl">
        If you have cycled through labels — anxiety, burnout, depression — and none of them quite fit, the problem probably hasn&apos;t been named right yet. The treatment for fear-based control is not the same as the treatment for low mood.
      </p>
      <p className="body mt-3 max-w-4xl">
        {siteContent.primaryLocation}. Serving North Austin, Cedar Park, Georgetown, and surrounding communities. {siteContent.telehealthRegion}.
      </p>

      <div className="mt-10 space-y-5">
        {definitions.map((entry) => (
          <article key={entry.term} className="card">
            <h2 className="h3">{entry.term}</h2>
            <p className="mt-3 body max-w-3xl">{entry.definition}</p>

            <div className="mt-4">
              <p className="label">Related frameworks</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {entry.frameworks.map((link) => (
                  <Link key={`${entry.term}-${link.href}`} href={link.href as Route} className="focus-ring no-link-style chip-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <p className="label">Related essays</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {entry.essays.map((link) => (
                  <Link key={`${entry.term}-${link.href}`} href={link.href as Route} className="focus-ring no-link-style chip-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
