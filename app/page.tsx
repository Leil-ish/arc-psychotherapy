import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { siteContent } from "@/src/content/site";

export const metadata = pageMetadata({
  title: "Therapy for perfectionism & religious harm | Round Rock, TX",
  description:
    "Therapy with clear structure for high-achieving adults navigating perfectionism, rigidity, and religious harm. Downtown Round Rock, Texas. Serving North Austin and surrounding communities. Telehealth across Texas.",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-hero-heading">
        <div className="home-hero-media" aria-hidden="true">
          <Image
            src="/images/hero/home-hero-austin-rooftop.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="home-hero-tone" aria-hidden="true" />
        <div className="container-wrap home-hero-inner py-16 md:py-24">
          <p className="label home-hero-kicker">{siteContent.brandName}</p>
          <h1 id="home-hero-heading" className="h1 mt-3 max-w-4xl text-white">
            Therapy for adults whose lives are being run by perfectionism, overcontrol, or the aftermath of rigid religion.
          </h1>
          <p className="body-lg mt-5 max-w-3xl text-white/90">You can explain your patterns.</p>
          <p className="body-lg max-w-3xl text-white/90">You are still exhausted.</p>
          <p className="body-lg max-w-3xl text-white/90">You are still over-functioning.</p>
          <p className="mt-4 body max-w-3xl text-white/95">If insight alone fixed things, you&apos;d already be done.</p>
          <p className="mt-3 body max-w-3xl text-white/90">I don&apos;t do &quot;small talk&quot; therapy. We focus on what changes in your real week, not just what sounds good in session.</p>

          <div className="mt-8 flex flex-wrap gap-5">
            <Link href={siteContent.bookingUrl} className="focus-ring no-link-style home-hero-primary-link">
              Schedule consult
            </Link>
            <Link href="/contact" className="focus-ring no-link-style home-hero-secondary-link">
              Contact
            </Link>
          </div>

          <p className="mt-4 body text-sm max-w-3xl text-white/78">
            Downtown Round Rock, Texas. Telehealth across Texas.
          </p>
          <p className="mt-1 body text-sm max-w-3xl text-white/78">${siteContent.standardSessionFee} per 50–55 minute session.</p>
        </div>
      </section>

      <section className="container-wrap mt-14">
        <h2 className="h2 max-w-4xl">If this is your life</h2>
        <ul className="mt-5 space-y-3 body editorial-measure">
          <li>• You over-prepare, over-research, and still second-guess basic decisions.</li>
          <li>• You rewrite messages, rehearse conversations, and track every possible mistake.</li>
          <li>• You can get through the day just fine. You just do not have much range left by the end of it.</li>
          <li>• People rely on you because you are competent. You are getting tired of the cost.</li>
          <li>• You left a rigid or shaming religious system, but fear and guilt still run more of your decisions than you&apos;d like.</li>
          <li>• You are not looking for a place to talk in circles for 50 minutes.</li>
        </ul>
      </section>

      <section className="container-wrap mt-12">
        <div className="editorial-list">
          <article className="editorial-item">
            <h2 className="h2">Values in practice</h2>
            <p className="mt-3 body editorial-measure">
              Therapy should not require you to defend your body, identity, family, or basic humanity before the real work can begin.
            </p>
            <ul className="mt-4 space-y-2 body text-sm editorial-measure">
              <li>• LGBTQ+ affirming: your identity is not up for debate.</li>
              <li>• HAES-aligned: body size is not treated as a moral issue or treatment target.</li>
              <li>• Neurodiversity-affirming: communication, pacing, and structure can be adjusted to fit your brain.</li>
              <li>• Immigrant and cross-cultural realities are treated as real context, not side notes.</li>
              <li>• When power, culture, or systems are shaping the problem, we say that plainly.</li>
            </ul>
          </article>
          <article className="editorial-item">
            <h2 className="h2">How Arc works</h2>
            <ul className="mt-5 space-y-3 body editorial-measure">
              <li>• Consult: we decide if this is a good clinical fit.</li>
              <li>• Ongoing therapy: we figure out what keeps repeating, try something different, and pay attention to what actually changes.</li>
              <li>• Adjustment: we keep what helps. We stop pretending the rest is useful.</li>
            </ul>
            <p className="mt-5 body text-sm text-ink/75">No vague weekly recap.</p>
          </article>
          <article className="editorial-item">
            <h2 className="h2">When Arc is not the right first step</h2>
            <p className="mt-3 body editorial-measure">
              Arc is usually not the best first stop for:
            </p>
            <ul className="mt-4 space-y-2 body">
              <li>• Crisis stabilization</li>
              <li>• Insurance-based care</li>
              <li>• Brief coaching</li>
              <li>• Checklist-only symptom treatment</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="container-wrap mt-16 mb-20">
        <h2 className="h2">Prefer to read before booking?</h2>
        <p className="mt-3 body max-w-2xl">Start with one page: perfectionism, overcontrol, or religious harm.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/perfectionism" className="focus-ring text-sm font-medium text-ink/80 underline-offset-4 hover:text-sage-dark hover:underline">
            Perfectionism
          </Link>
          <Link href="/overcontrol" className="focus-ring text-sm font-medium text-ink/80 underline-offset-4 hover:text-sage-dark hover:underline">
            Overcontrol
          </Link>
          <Link href="/religious-harm" className="focus-ring text-sm font-medium text-ink/80 underline-offset-4 hover:text-sage-dark hover:underline">
            Religious harm
          </Link>
        </div>
      </section>
    </>
  );
}
