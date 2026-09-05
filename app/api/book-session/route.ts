import { Resend } from "resend";
import { SESSION_TYPE_OPTIONS } from "@/app/components/BookSession/constants";

export const runtime = "nodejs";

const NOTIFY_EMAIL =
  process.env.BOOKING_NOTIFY_EMAIL ?? "ankush2000sangwan@gmail.com";

type BookingBody = {
  name?: string;
  email?: string;
  sessionType?: string;
  message?: string;
  availability?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return Response.json(
      { error: "Could not send the request. Please try again." },
      { status: 503 },
    );
  }

  let body: BookingBody;
  try {
    body = (await request.json()) as BookingBody;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const sessionType = String(body.sessionType ?? "").trim();
  const message = String(body.message ?? "").trim();
  const availability = String(body.availability ?? "").trim();

  if (!name || !email || !sessionType || !message || !availability) {
    return Response.json({ error: "Please fill in all fields." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const sessionLabel =
    SESSION_TYPE_OPTIONS.find((option) => option.value === sessionType)?.label ??
    sessionType;

  const resend = new Resend(apiKey);
  const from =
    process.env.BOOKING_FROM_EMAIL ?? "Meemansha Gaur <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: [NOTIFY_EMAIL],
    replyTo: email,
    subject: `Session request from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Session: ${sessionLabel}`,
      `Message: ${message}`,
      `Preferred availability: ${availability}`,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json(
      { error: "Could not send the request. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
