import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
  const CONTACT_FROM_EMAIL =
    process.env.CONTACT_FROM_EMAIL || "Bluelite Concept LTD <onboarding@resend.dev>";

  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    console.error(
      "Contact form is not configured: missing RESEND_API_KEY or CONTACT_TO_EMAIL env vars."
    );
    return NextResponse.json(
      { error: "The contact form isn't set up yet. Please email us directly." },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const honeypot = typeof body.company === "string" ? body.company.trim() : "";

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const resend = new Resend(RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New enquiry — ${name}`,
      html: `
        <div style="font-family: sans-serif; font-size: 15px; color: #0B2545; line-height: 1.6;">
          <h2 style="margin-bottom: 4px;">New website enquiry</h2>
          <p style="color: #5B6B7C; margin-top: 0;">Submitted from the Bluelite Concept LTD contact form</p>
          <table style="border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 4px 12px 4px 0; color: #5B6B7C;">Name</td><td>${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 4px 12px 4px 0; color: #5B6B7C;">Email</td><td>${escapeHtml(email)}</td></tr>
          </table>
          <p style="margin-top: 16px; color: #5B6B7C;">Message</p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Couldn't send your message. Please try again or email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "Couldn't send your message. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
