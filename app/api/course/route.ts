import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOption } from "../auth/[...nextauth]/route";
import { connectDB } from "@/utils/connectDB";
import { Types } from "mongoose";
import Course from "@/models/Course";
import User from "@/models/User";

export async function GET(req: Request) {
  await connectDB();

  const { searchParams } = await new URL(req.url);

  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const skip = (page - 1) * limit;

  try {
    const courses = await Course.find()
      .select("-instructor name category price rate review_count")
      .populate("instructor", "fullname")
      .sort({ createdAt: -1 }) // sort
      .skip(skip)
      .limit(limit);

    const totalCourses = await Course.countDocuments();
    const totalPages = Math.ceil(totalCourses / limit);

    return NextResponse.json(
      {
        data: courses,
        pagination: {
          totalCourses,
          totalPages,
          currentPage: page,
        },
      },
      { status: 200 },
    );
  } catch (err) {
    console.log("Database error:", err);
    return NextResponse.json(
      { error: "An error occurred on the server" },
      { status: 500 },
    );
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(req: any) {
  await connectDB();

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

    if (user.role === "STUDENT") {
      user.role = "INSTRUCTOR";
      await user.save();
    }

    return NextResponse.json({ message: "Course Created!" }, { status: 201 });
  } catch (err) {
    console.log("Database connection error:", err);
    return NextResponse.json(
      { error: "An Error Occurred In Server" },
      { status: 500 },
    );
  }
}
