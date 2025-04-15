import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { PipelineStage } from "mongoose";
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

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category");
  const language = searchParams.get("language");
  const level = searchParams.get("level");
  const sort = searchParams.get("sort") || "newest";

  const minPrice = parseFloat(searchParams.get("minPrice") || "0");
  const maxPrice = parseFloat(searchParams.get("maxPrice") || "1000000");

  const query: Record<string, unknown> = {
    price: { $gte: minPrice, $lte: maxPrice },
  };

  if (category) query.category = category;
  if (language) query.language = language;

  const validLevels = ["beginner", "intermediate", "advanced"] as const;
  if (level && validLevels.includes(level as (typeof validLevels)[number])) {
    query.level = level;
  }

  const sortOptions: Record<string, 1 | -1> = {};
  switch (sort) {
    case "cheapest":
      sortOptions.price = 1;
      break;
    case "mostExpensive":
      sortOptions.price = -1;
      break;
    case "highestRated":
      sortOptions.rate = -1;
      break;
    default:
      sortOptions.createdAt = -1;
  }

  try {
    const matchStage: PipelineStage.Match = {
      $match: {
        ...query,
        ...(search && {
          $or: [
            { name: { $regex: search, $options: "i" } },
            { "instructor.fullname": { $regex: search, $options: "i" } },
          ],
        }),
      },
    };

    const basePipeline: PipelineStage[] = [
      {
        $lookup: {
          from: "users",
          localField: "instructor",
          foreignField: "_id",
          as: "instructor",
        },
      },
      { $unwind: "$instructor" },
      matchStage,
    ];

    const courses = await Course.aggregate([
      ...basePipeline,
      {
        $project: {
          name: 1,
          category: 1,
          language: 1,
          level: 1,
          price: 1,
          rate: 1,
          review_count: 1,
          createdAt: 1,
          instructor: {
            _id: "$instructor._id",
            fullname: "$instructor.fullname",
          },
        },
      },
      { $sort: sortOptions },
      { $skip: skip },
      { $limit: limit },
    ]);

    const totalCoursesAgg = await Course.aggregate([
      ...basePipeline,
      { $count: "total" },
    ]);

    const totalCourses = totalCoursesAgg[0]?.total || 0;
    const totalPages = Math.ceil(totalCourses / limit);

    return NextResponse.json(
      {
        courses,
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
