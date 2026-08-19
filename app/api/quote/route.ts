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

const FIELDS: { key: string; label: string; required?: boolean }[] = [
  { key: "companyName", label: "Company Name", required: true },
  { key: "country", label: "Country", required: true },
  { key: "contactPerson", label: "Contact Person", required: true },
  { key: "email", label: "Email", required: true },
  { key: "phone", label: "WhatsApp / Phone", required: true },
  { key: "product", label: "Product Required" },
  { key: "colour", label: "Colour" },
  { key: "washingType", label: "Washing Type" },
  { key: "quantity", label: "Quantity Required" },
  { key: "monthlyDemand", label: "Monthly Demand" },
  { key: "deliveryPort", label: "Delivery Port" },
  { key: "shippingTerm", label: "Preferred Shipping Term" },
  { key: "notes", label: "Additional Specifications" },
];

export async function POST(req: NextRequest) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const QUOTE_TO_EMAIL = process.env.QUOTE_TO_EMAIL;
  const QUOTE_CC_EMAIL = process.env.QUOTE_CC_EMAIL;
  const QUOTE_FROM_EMAIL =
    process.env.QUOTE_FROM_EMAIL || "Bluelite Concept LTD <onboarding@resend.dev>";

  if (!RESEND_API_KEY || !QUOTE_TO_EMAIL) {
    console.error(
      "RFQ form is not configured: missing RESEND_API_KEY or QUOTE_TO_EMAIL env vars."
    );
    return NextResponse.json(
      { error: "The quote request form isn't set up yet. Please email us directly." },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // honeypot
  const honeypot = typeof body.website === "string" ? body.website.trim() : "";
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const values: Record<string, string> = {};
  for (const f of FIELDS) {
    const raw = body[f.key];
    values[f.key] = typeof raw === "string" ? raw.trim() : "";
  }

  const missing = FIELDS.filter((f) => f.required && !values[f.key]);
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Please fill in: ${missing.map((f) => f.label).join(", ")}.` },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(values.email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const resend = new Resend(RESEND_API_KEY);

  const rows = FIELDS.map(
    (f) => `
      <tr>
        <td style="padding: 6px 16px 6px 0; color: #5B6B7C; white-space: nowrap; vertical-align: top;">${escapeHtml(f.label)}</td>
        <td style="padding: 6px 0; white-space: pre-wrap;">${escapeHtml(values[f.key] || "—")}</td>
      </tr>`
  ).join("");

  try {
    const { error } = await resend.emails.send({
      from: QUOTE_FROM_EMAIL,
      to: QUOTE_TO_EMAIL,
      cc: QUOTE_CC_EMAIL || undefined,
      replyTo: values.email,
      subject: `New RFQ — ${values.companyName} (${values.country})`,
      html: `
        <div style="font-family: sans-serif; font-size: 15px; color: #0B2545; line-height: 1.6;">
          <h2 style="margin-bottom: 4px;">New Request for Quote</h2>
          <p style="color: #5B6B7C; margin-top: 0;">Submitted from the Bluelite Concept LTD website</p>
          <table style="border-collapse: collapse; margin-top: 16px;">
            ${rows}
          </table>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Couldn't send your request. Please try again or email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("RFQ send failed:", err);
    return NextResponse.json(
      { error: "Couldn't send your request. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
