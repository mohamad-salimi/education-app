import React from "react";
import Course from "@/components/course/Course";
import { headers } from "next/headers";

const CoursePage = async () => {
  const headersList = headers();
  const fullUrl =
    (await headersList).get("x-url") ||
    (await headersList).get("referer") ||
    "";

  const pathname = fullUrl.split("courses/")[1];

  const res = await fetch(`http://localhost:3000/api/course/${pathname}`);
  const data = await res.json();

  return <Course {...data} />;
};

export default CoursePage;
