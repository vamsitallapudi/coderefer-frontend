import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
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
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ea580c;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #71717a; width: 120px;">Name</td>
              <td style="padding: 8px 0; color: #fff;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #71717a;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #ea580c;">${email}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 8px 0; color: #71717a;">Company</td>
              <td style="padding: 8px 0; color: #fff;">${company}</td>
            </tr>` : ""}
            ${service ? `
            <tr>
              <td style="padding: 8px 0; color: #71717a;">Service</td>
              <td style="padding: 8px 0; color: #fff;">${service}</td>
            </tr>` : ""}
          </table>
          <hr style="border: 1px solid #27272a; margin: 16px 0;" />
          <p style="color: #71717a; margin-bottom: 8px;">Message</p>
          <p style="color: #fff; white-space: pre-wrap;">${message}</p>
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
