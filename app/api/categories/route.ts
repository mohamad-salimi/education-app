import Course from "@/models/Course";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";
import { CategoryType, categoryTypeMap } from "../constants/categoryTypes";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: Request) {
  await connectDB();

  try {
    const courses = await Course.find({}, "category");
    const categoriesSet = new Set(courses.map((c) => c.category));

    const categories = Array.from(categoriesSet).map((cat) => ({
      title: toTitleCase(cat.replace(/_/g, " ")),
      type: getCategoryType(cat),
      query: cat,
    }));

    return NextResponse.json({ categories }, { status: 200 });
  } catch (error) {
    console.log("Category fetch error:", error);
    return NextResponse.json(
      { error: "An Error Occurred In Server" },
      { status: 500 },
    );
  }
}

function toTitleCase(str: string) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getCategoryType(category: string): CategoryType {
  const cat = category.toLowerCase();

  for (const { keyword, type } of categoryTypeMap) {
    if (cat.includes(keyword)) return type;
  }

  return "primary"; // default
}
