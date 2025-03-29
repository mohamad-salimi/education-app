import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOption } from "../auth/[...nextauth]/route";
import { connectDB } from "@/utils/connectDB";
import Course from "@/models/Course";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function POST(req: any) {
  await connectDB;

  const session = await getServerSession(authOption);
  console.log(session);

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { title, description, category, price } = body;

  try {
    const course = await Course.create({
      title,
      description,
      category,
      price,
      instructors: [{ user: session.user.id }],
    });

    return NextResponse.json(
      { message: "Course Created!", data: course },
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
