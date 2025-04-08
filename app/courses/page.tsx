import React from "react";
import Courses from "@/components/courses/Courses";

const CoursesPage = async () => {
  const res = await fetch(`http://localhost:3000/api/course`);
  const data = await res.json();

  return <Courses {...data} />;
};

export default CoursesPage;
