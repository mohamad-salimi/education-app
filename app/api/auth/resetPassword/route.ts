import { NextResponse } from "next/server";
import { hashPassword } from "@/utils/auth";
import PasswordResetToken from "@/models/PasswordResetToken";
import User from "@/models/User";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(req: any) {
  const { token, id, newPassword } = req.body;

  try {
    const hashedToken = hashPassword(token);

    const resetToken = await PasswordResetToken.findOne({
      userId: id,
      token: hashedToken,
      expiresAt: { $gt: Date.now() },
    });

    if (!resetToken) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 400 },
      );
    }

    const hashedPassword = await hashPassword(newPassword);

    await User.findByIdAndUpdate(id, { password: hashedPassword });

    await PasswordResetToken.findByIdAndDelete(resetToken._id);

    return NextResponse.json(
      { message: "Password reset successfully" },
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
