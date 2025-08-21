'use server';

import nodemailer from "nodemailer";

export async function sendMailAction(formData: FormData): Promise<{ success: boolean; message: string }> {
  try {
    // Extract form values from FormData
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;
    const attachment = formData.get("attachment") as File | null;

    // Create a transporter using SMTP (Gmail example)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
        tls: {
        rejectUnauthorized: false,
      },
    });

    // Email options
    const mailOptions: any = {
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_USER,
      subject,
      text: message,
    };

    // Attach file if provided
    if (attachment) {
      const arrayBuffer = await attachment.arrayBuffer();
      mailOptions.attachments = [
        {
          filename: attachment.name,
          content: Buffer.from(arrayBuffer),
        },
      ];
    }

    // Send email
    await transporter.sendMail(mailOptions);

    return { success: true, message: "Email sent successfully!" };
  } catch (error: any) {
    console.error("sendMailAction error:", error);
    return { success: false, message: error?.message || "Unknown error" };
  }
}
