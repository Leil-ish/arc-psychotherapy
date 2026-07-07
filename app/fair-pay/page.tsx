import { FairPayCalculator } from "@/components/fair-pay-calculator";
import { SchemaScript } from "@/components/schema-script";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Fair Pay Calculator | Clinician Pay Transparency",
  description:
    "Estimate practice overhead per session, then benchmark how the post-overhead margin is split between clinician and practice. A transparency tool for therapists in group practice.",
  path: "/fair-pay"
});

export default function FairPayPage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <SchemaScript
        id="fair-pay-webpage-schema"
        data={webPageSchema({
          name: "Fair Pay Calculator",
          description:
            "A clinician pay transparency tool: estimate overhead per session, then benchmark the post-overhead margin split.",
          path: "/fair-pay"
        })}
      />
      <SchemaScript
        id="fair-pay-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Fair Pay Calculator", path: "/fair-pay" }
        ])}
      />
      <div className="hero-copy">
        <p className="label">For clinicians</p>
        <h1 className="h1 mt-4">Fairness starts after overhead.</h1>
        <p className="hero-lede">
          Group practice pay debates usually argue about the split percentage. That is the wrong number.
        </p>
        <div className="hero-support">
          <p className="body">
            This calculator estimates what it costs to support your sessions first, then benchmarks how the
            remaining post-overhead margin is divided between the clinician doing the clinical work and the
            owner carrying the business.
          </p>
          <p className="body">
            For fully licensed clinicians, it starts from a post-overhead benchmark and raises it when the
            structure is generating healthier surplus. For associates, it starts lower and moves closer to the
            fully licensed benchmark when surplus is stronger.
          </p>
        </div>
      </div>

      <section className="section-gap">
        <FairPayCalculator />
        <p className="body mt-6 text-sm text-ink/75 max-w-3xl">
          Educational estimate only. Use it to ground a transparency conversation, not to replace legal,
          accounting, or contract review.
        </p>
      </section>

      <section className="section-gap-lg max-w-3xl">
        <h2 className="h2">Methodology notes</h2>
        <p className="body mt-4">
          This tool is trying to answer a specific question: once the cost of running the practice is
          estimated, how is the remaining margin being divided between the clinician doing the clinical work
          and the owner carrying the business?
        </p>

        <h3 className="h3 mt-8">Assumptions</h3>
        <ul className="split-panel__list body mt-3">
          <li>
            Revenue is estimated from your listed session rate or blended reimbursement average, adjusted by
            collection rate and no-show assumptions.
          </li>
          <li>
            Shared practice overhead is divided across the number of clinicians you enter, while clearly
            per-clinician costs like EHR, supervision, benefits, payroll, and per-session fees are kept at the
            individual level.
          </li>
          <li>Fairness is judged primarily on share of post-overhead margin, not just share of gross revenue.</li>
          <li>
            For fully licensed clinicians, the calculator starts from a baseline post-overhead benchmark, then
            raises that benchmark when the structure is generating healthier surplus.
          </li>
          <li>
            For associates, the benchmark starts lower as a conservative heuristic, but it moves closer to the
            fully licensed benchmark when the structure is generating healthier surplus.
          </li>
          <li>
            High-fee, high-volume, or otherwise efficient structures should usually clear a higher fairness bar
            than thin-margin structures with little surplus left after overhead.
          </li>
        </ul>

        <h3 className="h3 mt-8">What clinician-favoring structures tend to offer</h3>
        <ul className="split-panel__list body mt-3">
          <li>A larger share of post-overhead margin going directly to the person doing the clinical work.</li>
          <li>More immediate earning power for clinicians with strong caseloads or high reimbursement rates.</li>
          <li>
            Less room for the practice to subsidize low-utilization clinicians, extensive admin support, or
            richer benefits.
          </li>
        </ul>

        <h3 className="h3 mt-8">What practice-favoring structures tend to offer</h3>
        <ul className="split-panel__list body mt-3">
          <li>More retained margin for admin labor, infrastructure, supervision, onboarding, and business stability.</li>
          <li>
            More capacity to smooth out uneven caseloads, absorb ramp-up periods, or support clinicians who are
            not yet fully built out.
          </li>
          <li>
            A higher risk that the structure drifts into owner-favoring territory if transparency is low and the
            clinician share stays well below benchmark.
          </li>
        </ul>

        <h3 className="h3 mt-8">What a balanced structure should feel like</h3>
        <ul className="split-panel__list body mt-3">
          <li>
            The clinician should be able to understand, in broad terms, what the practice is paying for and why
            the split is what it is.
          </li>
          <li>
            The owner should not be retaining more than half of post-overhead margin for a fully licensed
            clinician and calling that simply &ldquo;standard.&rdquo;
          </li>
          <li>
            The arrangement should feel sustainable for both parties, not like one side is subsidizing the other
            indefinitely without clarity.
          </li>
        </ul>

        <h3 className="h3 mt-8">Tension built into the system</h3>
        <p className="body mt-3">
          There is real structural tension baked into group practice economics. As clinicians see more clients,
          each hour of therapy becomes cheaper for the practice to support because fixed costs are spread across
          more sessions. That means part-time clinicians and clinicians with lower caseloads can be genuinely
          harder to support inside a group model, even when the practice is acting in good faith.
        </p>
        <p className="body mt-3">
          That does not mean a low split is automatically fair. It means the economics get tighter at lower
          utilization, and practices that want to support part-time or ramping clinicians need to be honest
          about how they are handling that tension.
        </p>
      </section>
    </section>
  );
}
