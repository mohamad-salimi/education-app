import React, { FC } from "react";
import Course from "@/components/course/Course";

interface CoursePageProps {
  params: {
    courseId: string;
  };
}

const CoursePage: FC<CoursePageProps> = async ({ params }) => {
  const { courseId } = await params;
  const res = await fetch(`http://localhost:3000/api/course/${courseId}`);
  const data = await res.json();

  return <Course {...data} />;
};

export default CoursePage;
