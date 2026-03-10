import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { siteContent } from "@/src/content/site";

export const metadata = pageMetadata({
  title: "About Leila Anderson, LMFT-S | Round Rock, TX",
  description:
    "About Arc Psychotherapy in Downtown Round Rock: therapy for perfectionism, overcontrol, and religious harm with Leila Anderson, LMFT-S. Serving North Austin and surrounding communities, with telehealth across Texas.",
  path: "/about"
});

const speakingContexts = [
  "TAMFT professional education and leadership forums",
  "TAAP and behavioral health training events",
  "Regional agency and group practice CEU trainings",
  "Interdisciplinary systems and policy-facing mental health panels"
];

const goodFit = [
  "Thoughtful, capable adults who function well externally and feel stretched thin internally",
  "People untangling perfectionism, overcontrol, and chronic over-responsibility",
  "Clients sorting religious harm, authority conflict, or post-faith identity strain",
  "People who want therapy that is practical and deep, not vague or formulaic"
];

const notBestFit = [
  "Work focused on immediate shortcuts or symptom promises",
  "Clients looking only for checklist-style symptom management",
  "Situations requiring emergency or crisis response outside outpatient scope"
];

export default function AboutPage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <h1 className="h1">About</h1>
      <p className="mt-5 body-lg max-w-4xl">{siteContent.positioningStatementLong}</p>
      <p className="mt-3 body max-w-4xl">If you are good at analysis but still feel stuck, you are in the right place.</p>
      <p className="mt-3 text-sm font-semibold tracking-[0.06em] text-ink/80">{siteContent.credentialsLine}</p>
      <figure className="mt-8 max-w-sm">
        <div className="arc-image-mask overflow-hidden">
          <Image
            src="/images/portrait/leila-headshot.jpg"
            alt="Leila Anderson"
            width={800}
            height={800}
            className="h-auto w-full object-cover"
            sizes="(min-width: 768px) 22rem, 72vw"
          />
        </div>
      </figure>

      <section className="mt-12 card">
        <h2 className="h2">How therapy feels here</h2>
        <p className="mt-4 body">
          You won&apos;t be asked to prove how self-aware you are. We use what you already understand, then test changes that fit real life.
        </p>
        <p className="mt-3 body">
          I sometimes use simple models to help us see what is actually happening, especially when everything feels tangled.
        </p>
      </section>

      <section className="mt-12 card">
        <h2 className="h2">What you should not have to defend in therapy</h2>
        <p className="mt-3 body max-w-3xl">
          You shouldn&apos;t have to spend therapy defending your body, identity, family, or basic humanity.
        </p>
        <ul className="mt-4 space-y-2 body">
          <li>• LGBTQ+ clients are affirmed without debate.</li>
          <li>• Health at Every Size aligned: body size is not treated as a morality or compliance problem.</li>
          <li>• Neurodiversity-affirming care respects differences in processing, attention, and communication.</li>
          <li>• Immigrant and cross-cultural experiences are treated as central context, not side notes.</li>
          <li>• Cultural and systemic forces are named directly when they shape mental health.</li>
        </ul>
      </section>

      <section className="mt-12 card">
        <h2 className="h2">Background that informs the work</h2>
        <ul className="mt-4 space-y-2 body">
          {siteContent.authorityHighlights.map((item) => (
            <li key={item}>• {item}</li>
          ))}
          <li>• Ongoing focus on how language, authority, and meaning shape lived distress.</li>
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
