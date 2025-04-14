import { NextResponse } from "next/server";
import { connectDB } from "@/utils/connectDB";
import User from "@/models/User";

export async function GET(req: Request) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "10");
  const skip = (page - 1) * limit;

  try {
    const totalCount = await User.countDocuments({ role: "INSTRUCTOR" });

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
          createdAt: 1,
        },
      },
      { $sort: { createdAt: -1 } },
      { $skip: skip },
      { $limit: limit },
    ]);

    return NextResponse.json(
      {
        instructors,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(totalCount / limit),
          totalCount,
        },
      },
      { status: 200 },
    );
  } catch (err) {
    console.log("Database connection error:", err);
    return NextResponse.json(
      { error: "An Error Occurred In Server" },
      { status: 500 },
    );
  }
}
