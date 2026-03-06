import { siteConfig } from "@/lib/content";

export function TrustStrip() {
  return (
    <section className="container-wrap mt-12">
      <div className="card grid gap-5 md:grid-cols-3">
        <div>
          <p className="label">Private-pay adults</p>
          <p className="mt-1 body">Clinically grounded, experiential psychotherapy without gimmicks.</p>
        </div>
        <div>
          <p className="label">Service areas</p>
          <p className="mt-1 body">{siteConfig.serviceAreas.join(" • ")}</p>
        </div>
        <div>
          <p className="label">Crisis support</p>
          <p className="mt-1 body">If you are in immediate danger, call 911. For mental health crisis support, call or text 988.</p>
        </div>
      </div>
    </section>
  );
}
