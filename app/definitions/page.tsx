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
      "Perfectionism is what happens when a mistake starts carrying the weight of a verdict. The work is not to lower every standard; it is to separate values from the fear rule that has attached itself to them.",
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
      "Overcontrol is the point where careful self-management becomes the only way you know how to feel safe. It often looks competent from the outside while making life smaller from the inside.",
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
      "Religious harm is what remains when a faith system used shame, fear, coercion, or authority in ways that injured you. The work is to rebuild agency without handing you a replacement certainty.",
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
      "A control gradient is a way to practice flexibility in steps, so the alternative to control is not one dramatic and unsustainable leap.",
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
      "Belief systems organize assumptions about authority, safety, identity, and meaning. The useful question is not whether you have one, but which parts are yours and which parts were inherited under pressure.",
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
      "Uncertainty capacity is the ability to make a values-based move before every uncertainty has been resolved. It grows through experience, not through finding an airtight argument first.",
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
      "Meaning reconstruction is the slow work of rebuilding values, identity, and direction after a belief system or relationship has stopped making sense. The goal is not immediate replacement certainty.",
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
      <h1 className="h1">Words I use carefully.</h1>
      <p className="body-lg mt-5 max-w-4xl">
        If you have cycled through labels—anxiety, burnout, depression—and none of them quite fit, the problem may not have been named accurately enough yet. These are working definitions, not diagnoses or boxes to put yourself in. They give us a shared starting point for a more useful conversation.
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
              <p className="label">Related working ideas</p>
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
