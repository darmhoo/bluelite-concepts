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
    process.env.CONTACT_FROM_EMAIL ||
    "Bluelite Concept LTD <admin@blueliteconceptltd.com>";

  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    console.error("Contact form misconfigured: missing RESEND_API_KEY or CONTACT_TO_EMAIL");

    return NextResponse.json(
      { error: "The contact form isn't set up yet." },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;

  try {
    body = await req.json();
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }

  const honeypot = typeof body.company === "string" ? body.company.trim() : "";

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message =
    typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const resend = new Resend(RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New enquiry — ${name}`,
      html: `
        <div style="font-family: sans-serif; font-size: 15px; color: #0B2545;">
          <h2>New website enquiry</h2>

          <p>
            <strong>Name:</strong> ${escapeHtml(name)}
          </p>

          <p>
            <strong>Email:</strong> ${escapeHtml(email)}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p style="white-space: pre-wrap;">
            ${escapeHtml(message)}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend returned an error:", error);

      return NextResponse.json(
        { error: "Couldn't send your message." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      id: data?.id,
    });
  } catch (err) {
    console.error("Resend request threw an exception:", err);

    return NextResponse.json(
      { error: "Couldn't send your message." },
      { status: 500 }
    );
  }
}
