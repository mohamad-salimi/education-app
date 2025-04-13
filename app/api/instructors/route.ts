import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connectDB";
import User from "@/models/User";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: Request) {
  await connectDB();

  try {
    const instructors = await User.aggregate([
      { $match: { role: "INSTRUCTOR" } },
      {
        $lookup: {
          from: "courses",
          let: { instructorId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$instructor", "$$instructorId"] },
              },
            },
            {
              $count: "course_count",
            },
          ],
          as: "course_stats",
        },
      },
      {
        $addFields: {
          course_count: {
            $cond: [
              { $gt: [{ $size: "$course_stats" }, 0] },
              { $arrayElemAt: ["$course_stats.course_count", 0] },
              0,
            ],
          },
        },
      },
      {
        $project: {
          fullname: 1,
          headline: 1,
          course_count: 1,
        },
      },
    ]);

    return NextResponse.json({ instructors }, { status: 200 });
  } catch (err) {
    console.log("Database connection error:", err);
    return NextResponse.json(
      { error: "An Error Occurred In Server" },
      { status: 500 },
    );
  }
}
