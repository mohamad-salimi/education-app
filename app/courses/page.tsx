import { FC } from "react";
import Courses from "@/components/courses/Courses";

interface CoursesPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const CoursesPage: FC<CoursesPageProps> = async ({ searchParams }) => {
  const query = new URLSearchParams();

  Object.entries(await searchParams).forEach(([key, value]) => {
    if (typeof value === "string") query.append(key, value);
  });

  const res = await fetch(
    `http://localhost:3000/api/course?${query.toString()}`,
  );
  const data = await res.json();

  return <Courses {...data} />;
};

export default CoursesPage;
