import { NextResponse } from "next/server";
import { Resend } from "resend";

type ConsultPreference = "share-availability" | "request-availability";
type InquiryType = "therapy" | "supervision" | "consultation" | "other";

function formatEmailBody(body: {
  name: string;
  email: string;
  phone?: string | null;
  inquiryType: InquiryType;
  consultPreference: ConsultPreference;
  availability?: string | null;
  preferredContactMethod?: string;
  message?: string | null;
}): string {
  const lines = [
    `Name: ${body.name}`,
    `Email: ${body.email}`,
    body.phone ? `Phone: ${body.phone}` : null,
    `Inquiry: ${body.inquiryType}`,
    `Preferred contact: ${body.preferredContactMethod ?? "email"}`,
    `Scheduling preference: ${body.consultPreference === "share-availability" ? "Sharing availability" : "Requesting available times"}`,
    body.availability ? `Availability: ${body.availability}` : null,
    ``,
    `Message:`,
    body.message || "No additional note provided."
  ];
  return lines.filter((l) => l !== null).join("\n");
}

export async function POST(request: Request) {
  const body = (await request.json()) as {
    name?: string;
    email?: string;
    phone?: string | null;
    inquiryType?: InquiryType;
    consultPreference?: ConsultPreference;
    availability?: string | null;
    preferredContactMethod?: "email" | "phone" | "either";
    message?: string | null;
    website?: string; // honeypot
  };

  // Honeypot — bots fill this, humans don't see it
  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!body?.name || !body?.email || !body?.inquiryType || !body?.consultPreference) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (
    body.consultPreference !== "share-availability" &&
    body.consultPreference !== "request-availability"
  ) {
    return NextResponse.json({ error: "Invalid consult preference" }, { status: 400 });
  }

  if (!(["therapy", "supervision", "consultation", "other"] as const).includes(body.inquiryType)) {
    return NextResponse.json({ error: "Invalid inquiry type" }, { status: 400 });
  }

  if (
    body.consultPreference === "share-availability" &&
    (!body.availability || body.availability.trim().length === 0)
  ) {
    return NextResponse.json({ error: "Availability is required for this preference" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Service unavailable" }, { status: 503 });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Arc Psychotherapy <noreply@arc-psychotherapy.com>",
      to: "hello@arc-psychotherapy.com",
      replyTo: body.email,
      subject: `${body.inquiryType} inquiry from ${body.name}`,
      text: formatEmailBody({
        name: body.name,
        email: body.email,
        phone: body.phone,
        inquiryType: body.inquiryType,
        consultPreference: body.consultPreference,
        availability: body.availability,
        preferredContactMethod: body.preferredContactMethod,
        message: body.message
      })
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
