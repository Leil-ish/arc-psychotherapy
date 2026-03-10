import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Frameworks | Round Rock, TX",
  description:
    "Optional thinking tools used in therapy for perfectionism, overcontrol, and religious harm. Downtown Round Rock, Texas, with telehealth across Texas.",
  path: "/frameworks"
});

export default function FrameworksPage() {
  const frameworkItems = [
    {
      name: "Arc Mapping",
      href: "/frameworks/arc-mapping",
      description:
        "A simple way to track one repeating loop so it stops feeling random.",
      useWhen:
        "sessions feel useful, but the same problems keep showing up in real life.",
      helpsWith:
        "new insight every week, same behavior under stress."
    },
    {
      name: "Control Gradient",
      href: "/frameworks/control-gradient",
      description:
        "A way to loosen all-or-nothing control without forcing giant leaps.",
      useWhen:
        "every choice feels like \"do it perfectly\" or \"do nothing.\"",
      helpsWith:
        "over-control, then burnout, then shutdown."
    },
    {
      name: "Belief Deconstruction Grid",
      href: "/frameworks/belief-deconstruction-grid",
      description:
        "A way to sort old rules into keep, revise, or let go.",
      useWhen:
        "guilt and fear still run decisions after rigid religion or family systems.",
      helpsWith:
        "disagreeing with the rule intellectually while still obeying it emotionally."
    },
    {
      name: "Pattern Externalization",
      href: "/frameworks/pattern-externalization",
      description:
        "A way to get specific when everything feels like \"I'm failing.\"",
      useWhen:
        "shame gets loud and your thinking gets blurry.",
      helpsWith:
        "global self-attack instead of a clear sequence you can change."
    },
    {
      name: "Uncertainty Capacity",
      href: "/frameworks/uncertainty-capacity",
      description:
        "A way to make decisions before you feel 100% certain.",
      useWhen:
        "you are stuck in research, reassurance, and delay.",
      helpsWith:
        "preparation that turns into avoidance."
    },
    {
      name: "Meaning Reconstruction",
      href: "/frameworks/meaning-reconstruction",
      description:
        "A way to rebuild direction after old beliefs stop working.",
      useWhen:
        "you left a belief system and now feel unmoored.",
      helpsWith:
        "swinging between rigid certainty and complete drift."
    }
  ] as const;

  return (
    <section className="container-wrap py-16 md:py-20">
      <h1 className="h1">Frameworks</h1>
      <p className="body-lg mt-5 max-w-4xl">These are optional thinking tools.</p>
      <p className="body-lg max-w-4xl">They are not the point of therapy.</p>
      <p className="body mt-4 max-w-4xl">If a tool helps you see the pattern faster, we use it.</p>
      <p className="body max-w-4xl">If it does not help, we drop it.</p>
      <p className="body mt-4 max-w-4xl">You do not need to read all of these. Start with the one that sounds familiar.</p>
      <figure className="mt-8">
        <div className="arc-image-mask overflow-hidden">
          <Image
            src="/images/architectural-details/window-grid-teal.jpg"
            alt="Architectural window grid with geometric repetition."
            width={3750}
            height={2500}
            className="h-[14rem] w-full object-cover md:h-[20rem]"
            sizes="(min-width: 1024px) 72rem, 100vw"
          />
        </div>
      </figure>

      <div className="editorial-list mt-10">
        {frameworkItems.map((item) => (
          <article key={item.href} className="editorial-item">
            <h2 className="h3">
              <Link href={item.href} className="focus-ring hover:text-sage">
                {item.name}
              </Link>
            </h2>
            <p className="mt-4 body editorial-measure">{item.description}</p>
            <p className="mt-4 body editorial-measure">
              <strong>Use this when:</strong> {item.useWhen}
            </p>
            <p className="mt-2 body editorial-measure">
              <strong>It helps with:</strong> {item.helpsWith}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 space-y-2">
        <p className="body max-w-4xl">Start with the one that sounds most familiar.</p>
        <p className="body max-w-4xl">Or skip this page entirely. Therapy does not require framework homework.</p>
      </div>
    </section>
  );
}
