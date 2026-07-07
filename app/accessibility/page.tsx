import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Accessibility Statement",
  description: "Accessibility statement for Arc Psychotherapy.",
  path: "/accessibility"
});

export default function AccessibilityPage() {
  return (
    <section className="container-wrap py-16 md:py-20">
      <h1 className="h1">Accessibility Statement</h1>
      <div className="mt-6 space-y-4 body max-w-3xl">
        <p>This site is designed to align with WCAG 2.2 AA principles, including keyboard navigation and readable contrast.</p>
        <p>If anything on this site is hard to use or read, reach out by phone or email and I&apos;ll find another way to get you what you need.</p>
        <p>Accessibility is checked as content and features change. If something isn&apos;t working, that&apos;s useful to know.</p>
      </div>
    </section>
  );
}
