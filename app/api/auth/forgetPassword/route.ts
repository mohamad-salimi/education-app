import { NextResponse } from "next/server";
import { generateToken } from "@/utils/auth";
import { sendEmail } from "@/utils/sendEmail";
import User from "@/models/User";
import PasswordResetToken from "@/models/PasswordResetToken";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(req: any) {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const token = generateToken();

    const expiresAt = Date.now() + 3600000; // 1 hour

    await PasswordResetToken.create({
      userId: user._id,
      token,
      expiresAt,
    });

    const resetUrl = `${process.env.SITE_URL}/reset-password?token=${token}&id=${user._id}`;
    await sendEmail({
      to: user.email,
      subject: "Password Reset Request",
      text: `Click the following link to reset your password: ${resetUrl}`,
    });

    return NextResponse.json(
      { message: "Password reset link sent to email" },
      { status: 201 },
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
