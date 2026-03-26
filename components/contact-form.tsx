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
    <form onSubmit={onSubmit} className="form-panel" noValidate>
      <p className="label">Consult request</p>
      <p className="form-panel__note">Please do not include sensitive clinical details (PHI) in this form.</p>
      <div className="form-grid">
        <label className="field-label" htmlFor="name">
          Name
        </label>
        <input id="name" name="name" autoComplete="name" required className="focus-ring field-input" />

        <label className="field-label" htmlFor="email">
          Email
        </label>
        <input id="email" name="email" type="email" autoComplete="email" required className="focus-ring field-input" />

        <label className="field-label" htmlFor="phone">
          Phone (optional)
        </label>
        <input id="phone" name="phone" autoComplete="tel" className="focus-ring field-input" />

        <fieldset className="form-choice">
          <legend className="field-label">Consult scheduling preference</legend>
          <div className="form-choice__rows">
            <label className="form-choice__row">
              <input
                type="radio"
                name="consultPreference"
                value="share-availability"
                checked={consultPreference === "share-availability"}
                onChange={() => setConsultPreference("share-availability")}
              />
              <span>I&apos;ll share my availability below.</span>
            </label>
            <label className="form-choice__row">
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

        <label className="field-label" htmlFor="availability">
          Availability
        </label>
        <textarea
          id="availability"
          name="availability"
          rows={4}
          required={consultPreference === "share-availability"}
          placeholder="Example: Tuesdays 10am-1pm, Thursdays after 3pm (Central Time)"
          className="focus-ring field-input field-input--textarea"
        />
        <p className="form-panel__hint">
          {consultPreference === "share-availability"
            ? "Required for this option."
            : "Optional. You can leave this blank if you want me to send available times first."}
        </p>

        <label className="field-label" htmlFor="preferredContactMethod">
          Preferred contact method
        </label>
        <select
          id="preferredContactMethod"
          name="preferredContactMethod"
          defaultValue="email"
          className="focus-ring field-input"
        >
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="either">Either</option>
        </select>

        <label className="field-label" htmlFor="message">
          Brief reason for reaching out (non-sensitive)
        </label>
        <textarea id="message" name="message" rows={5} required className="focus-ring field-input field-input--textarea" />
      </div>
      <button
        type="submit"
        className="focus-ring button button--primary mt-8 disabled:opacity-60"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send request"}
      </button>
      <div aria-live="polite">
        {status === "success" && <p className="form-panel__status form-panel__status--success">Request sent. We will follow up within 1-2 business days.</p>}
        {status === "error" && <p className="form-panel__status">Please complete required fields and try again. You can also call or email directly.</p>}
      </div>
    </form>
  );
}
