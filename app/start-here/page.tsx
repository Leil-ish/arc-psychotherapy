import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { siteContent } from "@/src/content/site";

export const metadata = pageMetadata({
  title: "Start Here | Round Rock, TX",
  description:
    "Therapy with clear structure for high-achieving adults navigating perfectionism, rigidity, and religious harm. Downtown Round Rock, Texas. Serving North Austin and surrounding communities. Telehealth across Texas.",
  path: "/start-here"
});

export default function StartHerePage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <h1 className="h1">Start Here</h1>
      <p className="body-lg mt-5 max-w-4xl">You can explain your patterns and still feel stuck.</p>
      <p className="body-lg max-w-4xl">Start there.</p>
      <p className="body mt-4 max-w-4xl">You do not need to read everything. Pick the section that matches your life right now and begin there.</p>
      <p className="body mt-3 max-w-4xl">
        {siteContent.primaryLocation}. Serving North Austin, Cedar Park, Georgetown, and surrounding communities. {siteContent.telehealthRegion}.
      </p>
      <figure className="mt-8">
        <div className="arc-image-mask overflow-hidden">
          <Image
            src="/images/austin-local/rooftop-edge-city.jpg"
            alt="Rooftop edge and city buildings in warm evening light."
            width={6000}
            height={4000}
            className="h-[14rem] w-full object-cover object-bottom md:h-[20rem]"
            sizes="(min-width: 1024px) 72rem, 100vw"
          />
        </div>
      </figure>

      <section className="mt-12">
        <h2 className="h2">Start here if...</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <article className="card">
            <h3 className="h3">
              <Link href="/perfectionism" className="focus-ring hover:text-sage">
                Perfectionism
              </Link>
            </h3>
            <p className="mt-3 body">
              Read this first if your standards are high, your work is strong, and your life keeps getting narrower.
            </p>
          </article>
          <article className="card">
            <h3 className="h3">
              <Link href="/overcontrol" className="focus-ring hover:text-sage">
                Overcontrol
              </Link>
            </h3>
            <p className="mt-3 body">
              Read this first if you can perform under pressure and still feel rigid, tired, or shut down by the end of the day.
            </p>
          </article>
          <article className="card">
            <h3 className="h3">
              <Link href="/religious-harm" className="focus-ring hover:text-sage">
                Religious harm
              </Link>
            </h3>
            <p className="mt-3 body">
              Read this first if you left a rigid or shaming faith system and fear or guilt still runs more of your decisions than you want.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="h2">If you want one short read</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <article className="card">
            <h3 className="h3">
              <Link href="/ideas/perfectionism-structural-problem" className="focus-ring hover:text-sage">
                Perfectionism as a Structural Problem
              </Link>
            </h3>
            <p className="mt-3 body">Read this first if mindset advice has not changed the pattern.</p>
          </article>
          <article className="card">
            <h3 className="h3">
              <Link href="/ideas/adjacent-possible" className="focus-ring hover:text-sage">
                The Adjacent Possible
              </Link>
            </h3>
            <p className="mt-3 body">Read this first if every decision feels all-or-nothing.</p>
          </article>
          <article className="card">
            <h3 className="h3">
              <Link href="/ideas/leaving-faith-losing-gravity" className="focus-ring hover:text-sage">
                When Leaving a Faith System Feels Like Losing Gravity
              </Link>
            </h3>
            <p className="mt-3 body">Read this first if post-faith life feels disorienting, not freeing.</p>
          </article>
        </div>
      </section>

      <section className="mt-14 card">
        <h2 className="h2">How Arc works (short version)</h2>
        <h3 className="h3 mt-5">Consult</h3>
        <p className="body mt-2 max-w-3xl">We decide if this is a good clinical fit.</p>
        <h3 className="h3 mt-5">Ongoing therapy</h3>
        <p className="body mt-2 max-w-3xl">
          We figure out what keeps repeating, try something different, and pay attention to what actually changes.
        </p>
        <h3 className="h3 mt-5">Adjustment</h3>
        <p className="body mt-2 max-w-3xl">We keep what helps. We stop pretending the rest is useful.</p>
        <Link href="/work-with-me" className="focus-ring no-link-style inline-link mt-5 inline-block">
          Read more about how I work.
        </Link>
      </section>
    </section>
  );
}
