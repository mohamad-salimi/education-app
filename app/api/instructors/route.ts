import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connectDB";
import Instructor from "@/models/Instructor";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(req: any) {
  await connectDB;

  const body = await req.json();
  try {
    const {
      name,
      field_of_teaching,
      courses_count,
      rating,
      student_count,
      about,
    } = body;

    const instructor = await Instructor.create({
      name,
      field_of_teaching,
      courses_count,
      rating,
      student_count,
      about,
    });

    return NextResponse.json(
      { message: "Instructor Created!", data: instructor },
      { status: 201 },
    );
  } catch (err) {
    console.log("Database connection error:", err);
    return NextResponse.json(
      { error: "An Error Occurred In Server" },
      { status: 500 },
    );
  }
}

export async function GET() {
  await connectDB;

  try {
    const instructors = await Instructor.find({});

    return NextResponse.json({ data: instructors }, { status: 200 });
  } catch (err) {
    console.log("Database connection error:", err);
    return NextResponse.json(
      { error: "An Error Occurred In Server" },
      { status: 500 },
    );
  }
}
