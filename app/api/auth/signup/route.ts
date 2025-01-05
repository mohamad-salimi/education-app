import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import { connectDB } from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";
import User from "@/models/User";

export async function POST(req: NextApiRequest) {
  try {
    await connectDB;

    const { email, password } = req.body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 422 }
      );
    }

    const exsitingUser = await User.findOne({ email });

    if (exsitingUser) {
      return NextResponse.json(
        { error: "این حساب کاربری وجود دارد" },
        { status: 422 }
      );
    }

    const hashedPassword = hashPassword(password);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "حساب کاربری ایجاد شد" },
      { status: 201 }
    );
  } catch (err) {
    console.log("Database connection error:", err);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
