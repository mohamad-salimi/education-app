import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connectDB";
import Instructor from "@/models/Instructor";

type InstructorFilter = {
  _id?: string;
  field_of_teaching?: { $in: string[] };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(req: any) {
  await connectDB;

  const body = await req.json();
  try {
    const {
      name,
      field_of_teaching,
      headline,
      courses_count,
      rating,
      student_count,
      about,
    } = body;

    const instructor = await Instructor.create({
      name,
      field_of_teaching,
      headline,
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(req: any) {
  await connectDB;

  try {
    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id");
    const field_of_teaching = searchParams.get("field_of_teaching");

    const filter: InstructorFilter = {};
    if (id) filter._id = id;
    if (field_of_teaching && field_of_teaching !== "undefined") {
      const teachingFields = field_of_teaching.split(",");
      filter.field_of_teaching = { $in: teachingFields };
    }

    const instructors = await Instructor.find(filter);

    return NextResponse.json({ data: instructors }, { status: 200 });
  } catch (err) {
    console.log("Database connection error:", err);
    return NextResponse.json(
      { error: "An Error Occurred In Server" },
      { status: 500 },
    );
  }
}
