import { NextResponse } from "next/server";
// @ts-ignore
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, company, message, target } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fundamental fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false, // true for port 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "Akram@azhar-cons.com",
      replyTo: email,
      subject: `New Request: ${name} via ${target}`,
      text: `You received a new inquiry from your website!\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer error: ", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
