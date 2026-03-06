import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { siteContent } from "@/src/content/site";

export const metadata = pageMetadata({
  title: "About Leila Anderson, LMFT-S | Round Rock, TX",
  description:
    "About Arc Psychotherapy in Downtown Round Rock: structured psychotherapy for perfectionism, overcontrol, and religious harm with Leila Anderson, LMFT-S. Serving North Austin and surrounding communities, with telehealth across Texas.",
  path: "/about"
});

const speakingContexts = [
  "TAMFT professional education and leadership forums",
  "TAAP and behavioral health training events",
  "Regional agency and group practice CEU trainings",
  "Interdisciplinary systems and policy-facing mental health panels"
];

const goodFit = [
  "High-achieving adults who function well externally but feel overcontrolled internally",
  "Clients navigating perfectionism, rigidity, and persistent shame loops",
  "People sorting religious harm, authority conflict, or post-faith identity strain",
  "Professionals who prefer conceptual clarity over quick hacks"
];

const notBestFit = [
  "Work focused on immediate shortcuts or symptom promises",
  "Clients looking for unstructured conversation-only treatment",
  "Situations requiring emergency or crisis response outside outpatient scope"
];

export default function AboutPage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <h1 className="h1">About</h1>
      <p className="mt-5 body-lg max-w-4xl">{siteContent.positioningStatementLong}</p>
      <p className="mt-3 body max-w-4xl">Collaborative, systems-informed work grounded in clarity, not quick fixes.</p>
      <p className="mt-3 text-sm font-semibold tracking-[0.06em] text-ink/80">{siteContent.credentialsLine}</p>

      <section className="mt-12 card">
        <h2 className="h2">How I think about the work</h2>
        <p className="mt-4 body">
          The work is framework-first: define the pattern, map the sequence, test the intervention, then integrate.
        </p>
        <p className="mt-3 body">
          Language and meaning matter because they shape how people encode power, threat, and identity. Systems thinking matters because distress is often maintained by structure, not only by insight gaps.
        </p>
      </section>

      <section className="mt-12 card">
        <h2 className="h2">Clinical leadership & systems work</h2>
        <ul className="mt-4 space-y-2 body">
          {siteContent.authorityHighlights.map((item) => (
            <li key={item}>• {item}</li>
          ))}
          <li>• Psycholinguistics-informed orientation to language, cognition, and authority in clinical formulation.</li>
        </ul>
      </section>

      <section className="mt-12 card">
        <h2 className="h2">Speaking & training</h2>
        <ul className="mt-4 space-y-2 body">
          {speakingContexts.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-2">
        <article className="card">
          <h2 className="h2">Who I work well with</h2>
          <ul className="mt-4 space-y-2 body">
            {goodFit.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h2 className="h2">Not the best fit</h2>
          <ul className="mt-4 space-y-2 body">
            {notBestFit.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-12 card">
        <h2 className="h2">Continue reading</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/start-here" className="focus-ring text-sm font-semibold text-sage underline-offset-4 hover:underline">
            Start here
          </Link>
          <Link href="/frameworks" className="focus-ring text-sm font-semibold text-sage underline-offset-4 hover:underline">
            Frameworks
          </Link>
          <Link href="/ideas" className="focus-ring text-sm font-semibold text-sage underline-offset-4 hover:underline">
            Ideas
          </Link>
          <Link href="/perfectionism" className="focus-ring text-sm font-semibold text-sage underline-offset-4 hover:underline">
            Perfectionism
          </Link>
          <Link href="/overcontrol" className="focus-ring text-sm font-semibold text-sage underline-offset-4 hover:underline">
            Overcontrol
          </Link>
          <Link href="/religious-harm" className="focus-ring text-sm font-semibold text-sage underline-offset-4 hover:underline">
            Religious harm
          </Link>
        </div>
      </section>

      <section className="mt-12 card">
        <h2 className="h2">If this resonates, here&apos;s the next step</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/work-with-me" className="focus-ring text-sm font-semibold text-sage underline-offset-4 hover:underline">
            Learn how Arc works
          </Link>
          <Link href="/contact" className="focus-ring text-sm font-semibold text-sage underline-offset-4 hover:underline">
            Contact
          </Link>
        </div>
      </section>
    </section>
  );
}
