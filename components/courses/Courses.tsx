import React, { FC } from "react";
import BottomNavigation from "../layout/bottomNavigation/BottomNavigation";
import CourseCard from "../reusable/courseCard/CourseCard";
import CourseSearch from "./courseSearch/CourseSearch";
import coursePlaceholder from "@/public/placeholder/free-course-placeholder.png";
import { CourseType } from "./types/Course.types";

interface CoursesProps {
  courses: CourseType[];
}

const Courses: FC<CoursesProps> = ({ courses }) => {
  return (
    <>
      <div className="mb-20 flex flex-col gap-y-4">
        <CourseSearch />
        <div className="flex flex-col gap-y-4 px-5">
          {courses?.map((course) => (
            <CourseCard
              type="horizontal"
              key={course?._id}
              price={course?.price}
              name={course?.name}
              category={course?.category}
              rate={course?.rate}
              id={course?._id}
              reviewsCount={course?.review_count}
              isFree={course?.price === 0}
              thumbnail={coursePlaceholder}
            />
          ))}
        </div>
      </div>
      <BottomNavigation />
    </>
  );
};

export default Courses;
