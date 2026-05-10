// POST /api/lead — receives quote-calculator + contact-form submissions.
// Forwards to Carson via Resend if configured. Always responds 200 to the
// client unless the body is invalid, so the form UX feels seamless even when
// email isn't wired up yet (development).

import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// Zod schema — keep loose enough to support both calculator + contact form.
const leadSchema = z.object({
  source: z.string().optional(),
  name: z.string().min(1).max(120).optional(),
  email: z.string().email().optional(),
  phone: z.string().min(5).max(40).optional(),
  address: z.string().max(240).optional(),
  zip: z.string().max(10).optional(),
  service: z.string().optional(),
  services: z.array(z.string()).optional(),
  size: z.string().optional(),
  frequency: z.string().optional(),
  notes: z.string().max(2000).optional(),
  message: z.string().max(2000).optional(),
  estimate: z
    .object({ lo: z.number(), hi: z.number(), unit: z.string() })
    .nullable()
    .optional(),
  inServiceArea: z.boolean().optional(),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Invalid form data", issues: parsed.error.format() },
      { status: 400 }
    );
  }

  const lead = parsed.data;
  const subject = `New ${lead.source ?? "lead"} — ${lead.name ?? "(no name)"}`;
  // Plain text body for the founder. Easy to read on a phone.
  const text = [
    `Source: ${lead.source ?? "n/a"}`,
    lead.name && `Name: ${lead.name}`,
    lead.email && `Email: ${lead.email}`,
    lead.phone && `Phone: ${lead.phone}`,
    lead.address && `Address: ${lead.address}`,
    lead.zip && `ZIP: ${lead.zip}`,
    lead.service && `Service of interest: ${lead.service}`,
    lead.services?.length && `Services: ${lead.services.join(", ")}`,
    lead.size && `Lawn size: ${lead.size}`,
    lead.frequency && `Frequency: ${lead.frequency}`,
    lead.estimate &&
      `Estimate: $${lead.estimate.lo}–$${lead.estimate.hi} ${lead.estimate.unit}`,
    typeof lead.inServiceArea === "boolean" &&
      `In service area: ${lead.inServiceArea ? "yes" : "no"}`,
    lead.notes && `Notes: ${lead.notes}`,
    lead.message && `Message: ${lead.message}`,
  ]
    .filter(Boolean)
    .join("\n");

  // Email Carson via Resend, if configured. We skip silently in dev.
  if (process.env.RESEND_API_KEY && process.env.LEAD_NOTIFY_EMAIL) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Top Cut Site <noreply@topcutlandscaping.com>",
        to: process.env.LEAD_NOTIFY_EMAIL,
        subject,
        text,
        replyTo: lead.email,
      });

      // Best-effort auto-reply to the prospect — non-blocking.
      if (lead.email) {
        try {
          await resend.emails.send({
            from: "Carson at Top Cut <carson@topcutlandscaping.com>",
            to: lead.email,
            subject: "We got it. Talk soon.",
            text: `Hey ${lead.name?.split(" ")[0] ?? "neighbor"},\n\nThanks for reaching out to Top Cut. I'll text you back at ${lead.phone ?? "the number you sent"} within one business day with a firm quote.\n\n— Carson Tinsley\nTop Cut Landscaping\n(804) 912-5530`,
          });
        } catch {
          // ignore — auto-reply is non-critical
        }
      }
    } catch (err) {
      console.error("Resend error:", err);
      // Still return 200 so the user-facing form moves to its success state.
      // Carson is responsible for monitoring inbound leads via dashboard logs.
    }
  } else {
    // Useful in dev — surface the lead in server logs.
    console.log("[lead] (no Resend configured)\n" + text);
  }

  return NextResponse.json({ ok: true, message: "Lead received" });
}
