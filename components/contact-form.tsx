"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
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
        <label className="text-sm font-medium" htmlFor="name">
          Name
        </label>
        <input id="name" name="name" autoComplete="name" required className="focus-ring rounded-lg border border-stone bg-white px-4 py-2" />

        <label className="text-sm font-medium" htmlFor="email">
          Email
        </label>
        <input id="email" name="email" type="email" autoComplete="email" required className="focus-ring rounded-lg border border-stone bg-white px-4 py-2" />

        <label className="text-sm font-medium" htmlFor="phone">
          Phone (optional)
        </label>
        <input id="phone" name="phone" autoComplete="tel" className="focus-ring rounded-lg border border-stone bg-white px-4 py-2" />

        <label className="text-sm font-medium" htmlFor="message">
          Brief reason for reaching out (non-sensitive)
        </label>
        <textarea id="message" name="message" rows={5} required className="focus-ring rounded-lg border border-stone bg-white px-4 py-2" />
      </div>
      <button type="submit" className="focus-ring mt-6 rounded-full bg-sage px-5 py-3 text-sm font-semibold text-white hover:bg-sage/90 disabled:opacity-60" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
      <div aria-live="polite">
        {status === "success" && <p className="mt-3 text-sm text-sage">Message sent. We will respond within 1-2 business days.</p>}
        {status === "error" && <p className="mt-3 text-sm text-clay">Something went wrong. Please call or email directly.</p>}
      </div>
    </form>
  );
}
