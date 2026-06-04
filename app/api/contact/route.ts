import { Resend } from "resend"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { name, email, company, service, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: "CodeRefer Contact <contact@coderefer.com>",
      to: "vamsi@coderefer.com",
      replyTo: email,
      subject: `New Contact: ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; padding: 24px;">
          <h2 style="color: #ea580c; margin-top: 0;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 120px; vertical-align: top;">Name</td>
              <td style="padding: 8px 0; color: #111827; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #ea580c;">${email}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Company</td>
              <td style="padding: 8px 0; color: #111827;">${company}</td>
            </tr>` : ""}
            ${service ? `
            <tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Service</td>
              <td style="padding: 8px 0; color: #111827;">${service}</td>
            </tr>` : ""}
          </table>
          <hr style="border: 1px solid #e5e7eb; margin: 16px 0;" />
          <p style="color: #6b7280; margin-bottom: 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
          <p style="color: #111827; white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact route error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
