import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connectDB";
import User from "@/models/User";
import Course from "@/models/Course";

interface Params {
  params: {
    instructorId: string;
  };
}

export async function GET(req: Request, { params }: Params) {
  await connectDB();
  const { instructorId } = params;

  try {
    const instructor = await User.findById(instructorId).select(
      "fullname bio headline _id",
    );

    if (!instructor) {
      return NextResponse.json(
        { error: "Instructor not found" },
        { status: 404 },
      );
    }

    const courses = await Course.find({ instructor: instructor._id }).select(
      "name category price review_count rate",
    );

    const instructorWithCourses = {
      ...instructor.toObject(),
      courses,
    };

    return NextResponse.json(
      { instructor: instructorWithCourses },
      { status: 200 },
    );
  } catch (err) {
    console.error("Error fetching instructor:", err);
    return NextResponse.json(
      { error: "An error occurred in server" },
      { status: 500 },
    );
  }
}
