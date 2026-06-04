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
        <html>
        <head>
          <meta name="color-scheme" content="light dark" />
          <meta name="supported-color-schemes" content="light dark" />
          <style>
            @media (prefers-color-scheme: dark) {
              .wrapper { background-color: #18181b !important; }
              .heading { color: #ea580c !important; }
              .label { color: #a1a1aa !important; }
              .value { color: #f4f4f5 !important; }
              .divider { border-color: #3f3f46 !important; }
              .msg-label { color: #a1a1aa !important; }
              .msg-body { color: #f4f4f5 !important; }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f5;">
          <div class="wrapper" style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; padding: 32px; border-radius: 8px;">
            <h2 class="heading" style="color: #ea580c; margin-top: 0; font-size: 20px;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td class="label" style="padding: 8px 0; color: #6b7280; width: 120px; vertical-align: top; font-size: 14px;">Name</td>
                <td class="value" style="padding: 8px 0; color: #111827; font-weight: 600; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td class="label" style="padding: 8px 0; color: #6b7280; vertical-align: top; font-size: 14px;">Email</td>
                <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #ea580c;">${email}</a></td>
              </tr>
              ${company ? `
              <tr>
                <td class="label" style="padding: 8px 0; color: #6b7280; vertical-align: top; font-size: 14px;">Company</td>
                <td class="value" style="padding: 8px 0; color: #111827; font-size: 14px;">${company}</td>
              </tr>` : ""}
              ${service ? `
              <tr>
                <td class="label" style="padding: 8px 0; color: #6b7280; vertical-align: top; font-size: 14px;">Service</td>
                <td class="value" style="padding: 8px 0; color: #111827; font-size: 14px;">${service}</td>
              </tr>` : ""}
            </table>
            <hr class="divider" style="border: 1px solid #e5e7eb; margin: 16px 0;" />
            <p class="msg-label" style="color: #6b7280; margin-bottom: 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
            <p class="msg-body" style="color: #111827; white-space: pre-wrap; line-height: 1.6; font-size: 14px; margin: 0;">${message}</p>
          </div>
        </body>
        </html>
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
