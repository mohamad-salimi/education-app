import { NextResponse } from "next/server";

async function fetchCourses() {
  const response = await fetch(
    "http://localhost:3000/api/course?page=1&limit=4",
  );
  const data = await response.json();
  return data?.courses;
}

async function fetchInstructors() {
  const response = await fetch(
    "http://localhost:3000/api/instructors?page=1&limit=3",
  );
  const data = await response.json();
  return data?.instructors;
}

async function fetchCategories() {
  const response = await fetch("http://localhost:3000/api/categories");
  const data = await response.json();
  return data?.categories;
}

export async function GET() {
  try {
    const [courses, instructors, categories] = await Promise.all([
      fetchCourses(),
      fetchInstructors(),
      fetchCategories(),
    ]);

    return NextResponse.json({
      courses,
      instructors,
      categories,
    });
  } catch (error) {
    console.error("Error fetching home data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
