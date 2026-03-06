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
        <p>If you experience access barriers, contact the practice by phone or email to request accommodations or alternate formats.</p>
        <p>Accessibility is reviewed as content and features evolve.</p>
      </div>
    </section>
  );
}
