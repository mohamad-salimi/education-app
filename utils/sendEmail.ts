import nodemailer from "nodemailer";

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
}

export const sendEmail = async ({
  to,
  subject,
  text,
}: EmailOptions): Promise<void> => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER as string, // sender email
      pass: process.env.EMAIL_PASS as string,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER, // sender
    to,
    subject,
    text,
  });
};
