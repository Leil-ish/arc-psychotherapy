import { NextResponse } from "next/server";

type ConsultPreference = "share-availability" | "request-availability";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    name?: string;
    email?: string;
    phone?: string;
    consultPreference?: ConsultPreference;
    availability?: string | null;
    preferredContactMethod?: "email" | "phone" | "either";
    message?: string;
  };

  if (!body?.name || !body?.email || !body?.message || !body?.consultPreference) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (
    body.consultPreference !== "share-availability" &&
    body.consultPreference !== "request-availability"
  ) {
    return NextResponse.json({ error: "Invalid consult preference" }, { status: 400 });
  }

  if (
    body.consultPreference === "share-availability" &&
    (!body.availability || body.availability.trim().length === 0)
  ) {
    return NextResponse.json({ error: "Availability is required for this preference" }, { status: 400 });
  }

  // Placeholder endpoint: integrate email provider or CRM here.
  return NextResponse.json({ ok: true });
}
