import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOption } from "../auth/[...nextauth]/route";
import { connectDB } from "@/utils/connectDB";
import { Types } from "mongoose";
import Course from "@/models/Course";
import User from "@/models/User";

export async function GET() {
  await connectDB;
  try {
    const Courses = await Course.find()
      .select("-__v")
      .populate("instructor", "fullname");
    return NextResponse.json({ data: Courses }, { status: 200 });
  } catch (err) {
    console.log("Database connection error:", err);
    return NextResponse.json(
      { error: "An Error Occurred In Server" },
      { status: 500 },
    );
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(req: any) {
  await connectDB;

  const body = await req.json();
  const { name, category, language, level, skills, price, description } = body;

  const session = await getServerSession(authOption);
  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await User.findOne({ email: session.user.email });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  if (
    !name ||
    !category ||
    !language ||
    !level ||
    !skills ||
    !price ||
    !description
  ) {
    return NextResponse.json(
      { error: "لطفا اطلاعات معتبر وارد کنید" },
      { status: 400 },
    );
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const newCourse = await Course.create({
      name,
      category,
      language,
      level,
      skills,
      price: +price,
      description,
      instructor: new Types.ObjectId(String(user._id)),
      reviews: [],
    });

    return NextResponse.json({ message: "Course Created!" }, { status: 201 });
  } catch (err) {
    console.log("Database connection error:", err);
    return NextResponse.json(
      { error: "An Error Occurred In Server" },
      { status: 500 },
    );
  }
}
