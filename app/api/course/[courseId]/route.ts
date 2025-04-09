import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connectDB";
import Course from "@/models/Course";

interface Params {
  params: {
    courseId: string;
  };
}

export async function GET(req: Request, { params }: Params) {
  await connectDB;
  const { courseId } = await params;

  try {
    const course = await Course.findById(courseId)
      .select("-__v")
      .populate("instructor", "fullname");

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json({ data: course }, { status: 200 });
  } catch (err) {
    console.error("Error fetching course:", err);
    return NextResponse.json(
      { error: "An error occurred in server" },
      { status: 500 },
    );
  }
}
