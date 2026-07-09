import { NextResponse } from "next/server";

// TODO: wire this up to Resend, Nodemailer, or a Google Sheet/Notion webhook
// once you have an email/service account for the client. For now it just
// validates and logs so the form works end-to-end during development.
export async function POST(request) {
  const data = await request.json();

  if (!data.name || !data.email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  console.log("New Sterling Bloom inquiry:", data);

  // Example for Resend once you have an API key:
  // await fetch("https://api.resend.com/emails", {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     from: "Sterling Bloom Site <onboarding@resend.dev>",
  //     to: "hello@sterlingbloomdecor.com",
  //     subject: `New inquiry from ${data.name}`,
  //     text: JSON.stringify(data, null, 2),
  //   }),
  // });

  return NextResponse.json({ ok: true });
}
