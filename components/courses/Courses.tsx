import React, { FC } from "react";
import BottomNavigation from "../layout/bottomNavigation/BottomNavigation";
import CourseCard from "../reusable/courseCard/CourseCard";
import SearchInput from "../reusable/searchInput/SearchInput";
import coursePlaceholder from "@/public/placeholder/free-course-placeholder.png";
import { CourseType } from "./types/Course.types";

interface CoursesProps {
  data: CourseType[];
}

const Courses: FC<CoursesProps> = ({ data }) => {
  return (
    <>
      <div className="mb-16 flex flex-col gap-y-4 px-5">
        <div className="sticky top-0 z-[100] bg-white py-3 shadow-sm">
          <SearchInput placeholder="Search for a course" />
        </div>
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
      <BottomNavigation />
    </>
  );
};

export default Courses;
