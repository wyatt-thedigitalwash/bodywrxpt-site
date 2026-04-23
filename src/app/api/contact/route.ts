import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Sender must be a verified domain in Resend before deployment
const FROM = process.env.CONTACT_FROM_EMAIL ?? "BodyWRX Contact <contact@bodywrxpt.com>";
const TO = process.env.CONTACT_TO_EMAIL ?? "dralexandramancuso@gmail.com";

const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_PHONE = 30;
const MAX_REASON = 2000;
const MAX_REFERRAL = 200;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// In-memory rate limiter: 3 submissions per 5 minutes per IP
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 5 * 60 * 1000;
const ipMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipMap.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_WINDOW_MS);
  ipMap.set(ip, recent);
  if (recent.length >= RATE_LIMIT) return true;
  recent.push(now);
  ipMap.set(ip, recent);
  return false;
}

interface ContactBody {
  name: string;
  email: string;
  phone: string;
  reason: string;
  referral?: string;
  website?: string; // honeypot field
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a few minutes before trying again." },
      { status: 429 }
    );
  }

  // Guard: Resend API key must be configured
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Contact form is not configured. Please call us directly at 336-420-9360." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  let body: ContactBody;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot check -- bots fill this hidden field
  if (body.website) {
    // Silently accept to not tip off bots, but don't send
    return NextResponse.json({ success: true });
  }

  const { name, email, phone, reason, referral } = body;

  // Server-side validation
  if (!name || !name.trim()) {
    return NextResponse.json({ error: "Full name is required." }, { status: 400 });
  }
  if (name.length > MAX_NAME) {
    return NextResponse.json({ error: `Name must be under ${MAX_NAME} characters.` }, { status: 400 });
  }
  if (!email || !isValidEmail(email.trim())) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }
  if (email.length > MAX_EMAIL) {
    return NextResponse.json({ error: "Email address is too long." }, { status: 400 });
  }
  if (!phone || !phone.trim()) {
    return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
  }
  if (phone.length > MAX_PHONE) {
    return NextResponse.json({ error: "Phone number is too long." }, { status: 400 });
  }
  if (!reason || !reason.trim()) {
    return NextResponse.json({ error: "Reason for visit is required." }, { status: 400 });
  }
  if (reason.length > MAX_REASON) {
    return NextResponse.json({ error: `Reason must be under ${MAX_REASON} characters.` }, { status: 400 });
  }
  if (referral && referral.length > MAX_REFERRAL) {
    return NextResponse.json({ error: `Referral field must be under ${MAX_REFERRAL} characters.` }, { status: 400 });
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedPhone = phone.trim();
  const trimmedReason = reason.trim();
  const trimmedReferral = referral?.trim() || "Not provided";

  try {
    // Send both emails concurrently
    const [notification, autoReply] = await Promise.all([
      // 1. Notification to Dr. Mancuso
      resend.emails.send({
        from: FROM,
        to: TO,
        subject: `New Inquiry from ${trimmedName}`,
        text: [
          "New contact form submission from bodywrxpt.com",
          "",
          `Name: ${trimmedName}`,
          `Email: ${trimmedEmail}`,
          `Phone: ${trimmedPhone}`,
          `Reason for Visit: ${trimmedReason}`,
          `How They Heard About Us: ${trimmedReferral}`,
        ].join("\n"),
      }),

      // 2. Auto-reply to the patient
      resend.emails.send({
        from: FROM,
        to: trimmedEmail,
        subject: "Your inquiry has been received — BodyWRX",
        text: [
          `${trimmedName},`,
          "",
          "Thank you for reaching out to BodyWRX. Your inquiry has been received and I'll be in touch personally within one business day.",
          "",
          "In the meantime, feel free to call or text me directly at 336-420-9360 if anything is time-sensitive.",
          "",
          "Warmly,",
          "Dr. Alexandra Mancuso, PT, DPT",
          "BodyWRX Physical Therapy & Wellness",
        ].join("\n"),
      }),
    ]);

    if (notification.error || autoReply.error) {
      const errMsg = notification.error?.message || autoReply.error?.message;
      console.error("Resend error:", errMsg);
      return NextResponse.json(
        { error: "Failed to send your message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
