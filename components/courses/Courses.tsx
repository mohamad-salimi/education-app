import React, { FC } from "react";
import CourseCard from "../reusable/courseCard/CourseCard";
import coursePlaceholder from "@/public/placeholder/course-placeholder.png";
import { CourseType } from "./types/Course.types";

interface CoursesProps {
  data: CourseType[];
}

const Courses: FC<CoursesProps> = ({ data }) => {
  return (
    <div className="flex flex-col p-5">
      {data?.map((course) => (
        <CourseCard
          type="horizontal"
          key={course?._id}
          price={course?.price}
          name={course?.name}
          field={course?.category}
          rate={course?.rate}
          id={course?._id}
          reviewsCount={course?.review_count}
          thumbnail={coursePlaceholder}
        />
      ))}
    </div>
  );
};

export default Courses;
