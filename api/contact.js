import nodemailer from "nodemailer";

const RECEIVER = process.env.CONTACT_RECEIVER || "revanthchandika@gmail.com";

// Configure SMTP via environment variables set in the Vercel dashboard
// (Project → Settings → Environment Variables). Gmail example:
//   SMTP_HOST=smtp.gmail.com
//   SMTP_PORT=465
//   SMTP_SECURE=true
//   SMTP_USER=you@gmail.com
//   SMTP_PASS=<16-character Gmail App Password>
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_SECURE !== "false",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: RECEIVER,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} (${email})\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message.replace(/\n/g, "<br>")}</p>`,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Nodemailer send failed:", err);
    return res.status(500).json({ error: "Failed to send message." });
  }
}
