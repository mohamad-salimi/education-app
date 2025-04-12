import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";
import User from "@/models/User";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(req: any) {
  try {
    await connectDB();

    const { fullname, email, password } = await req.json();

    if (!fullname || !email || !password) {
      return NextResponse.json(
        { error: "Please enter valid information." },
        { status: 422 },
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters long" },
        { status: 422 },
      );
    }

    const exsitingUser = await User.findOne({ email });

    if (exsitingUser) {
      return NextResponse.json(
        { error: "This account already exists" },
        { status: 422 },
      );
    }

    const hashedPassword = await hashPassword(password);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const newUser = await User.create({
      fullname,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ message: "User Created!" }, { status: 201 });
  } catch (err) {
    console.log("Database connection error:", err);
    return NextResponse.json(
      { error: "An Error Occurred In Server" },
      { status: 500 },
    );
  }
}
