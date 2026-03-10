"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";
type ConsultPreference = "share-availability" | "request-availability";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [consultPreference, setConsultPreference] = useState<ConsultPreference>("share-availability");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const selectedPreference = (formData.get("consultPreference") as ConsultPreference) ?? consultPreference;
    const availability = String(formData.get("availability") ?? "").trim();

    if (selectedPreference === "share-availability" && availability.length === 0) {
      setStatus("error");
      return;
    }

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      consultPreference: selectedPreference,
      availability: availability || null,
      preferredContactMethod: formData.get("preferredContactMethod"),
      message: formData.get("message")
    };

    try {
      const response = await fetch(siteConfig.contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="card" noValidate>
      <p className="label">Contact form</p>
      <p className="mt-2 body text-sm">Please do not include sensitive clinical details (PHI) in this form.</p>
      <p className="mt-2 body text-sm">If you are in immediate danger, call 911. For mental health crisis support, call or text 988.</p>
      <div className="mt-5 grid gap-4">
        <label className="text-sm font-medium text-ink/90" htmlFor="name">
          Name
        </label>
        <input id="name" name="name" autoComplete="name" required className="focus-ring rounded-xl border border-stone bg-sand px-4 py-2.5" />

        <label className="text-sm font-medium text-ink/90" htmlFor="email">
          Email
        </label>
        <input id="email" name="email" type="email" autoComplete="email" required className="focus-ring rounded-xl border border-stone bg-sand px-4 py-2.5" />

        <label className="text-sm font-medium text-ink/90" htmlFor="phone">
          Phone (optional)
        </label>
        <input id="phone" name="phone" autoComplete="tel" className="focus-ring rounded-xl border border-stone bg-sand px-4 py-2.5" />

        <fieldset className="rounded-xl border border-stone bg-sand p-4">
          <legend className="text-sm font-medium text-ink/90">Consult scheduling preference</legend>
          <div className="mt-3 grid gap-3">
            <label className="flex items-start gap-2 text-sm">
              <input
                type="radio"
                name="consultPreference"
                value="share-availability"
                checked={consultPreference === "share-availability"}
                onChange={() => setConsultPreference("share-availability")}
              />
              <span>I&apos;ll share my availability below.</span>
            </label>
            <label className="flex items-start gap-2 text-sm">
              <input
                type="radio"
                name="consultPreference"
                value="request-availability"
                checked={consultPreference === "request-availability"}
                onChange={() => setConsultPreference("request-availability")}
              />
              <span>Please reach out with your next available consult times.</span>
            </label>
          </div>
        </fieldset>

        <label className="text-sm font-medium text-ink/90" htmlFor="availability">
          Availability
        </label>
        <textarea
          id="availability"
          name="availability"
          rows={4}
          required={consultPreference === "share-availability"}
          placeholder="Example: Tuesdays 10am-1pm, Thursdays after 3pm (Central Time)"
          className="focus-ring rounded-xl border border-stone bg-sand px-4 py-2.5"
        />
        <p className="body -mt-2 text-sm">
          {consultPreference === "share-availability"
            ? "Required for this option."
            : "Optional. You can leave this blank if you want Arc to send available times first."}
        </p>

        <label className="text-sm font-medium text-ink/90" htmlFor="preferredContactMethod">
          Preferred contact method
        </label>
        <select
          id="preferredContactMethod"
          name="preferredContactMethod"
          defaultValue="email"
          className="focus-ring rounded-xl border border-stone bg-sand px-4 py-2.5"
        >
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="either">Either</option>
        </select>

        <label className="text-sm font-medium text-ink/90" htmlFor="message">
          Brief reason for reaching out (non-sensitive)
        </label>
        <textarea id="message" name="message" rows={5} required className="focus-ring rounded-xl border border-stone bg-sand px-4 py-2.5" />
      </div>
      <button type="submit" className="focus-ring mt-6 rounded-full bg-sage px-6 py-3.5 text-sm font-semibold text-white hover:bg-sage-dark disabled:opacity-60" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send request"}
      </button>
      <div aria-live="polite">
        {status === "success" && <p className="mt-3 text-sm text-sage">Request sent. We will follow up within 1-2 business days.</p>}
        {status === "error" && <p className="mt-3 text-sm text-muted">Please complete required fields and try again. You can also call or email directly.</p>}
      </div>
    </form>
  );
}
