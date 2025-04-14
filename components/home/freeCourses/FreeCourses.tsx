import React, { FC } from "react";
import Link from "next/link";
import CourseCard from "@/components/reusable/courseCard/CourseCard";
import Typography from "@/components/reusable/typography/Typography";
import courseThumbnail from "@/public/placeholder/free-course-placeholder.png";
import { CourseType } from "../types/Home.types";

interface FreeCoursesProps {
  courses: CourseType[];
}

const FreeCourses: FC<FreeCoursesProps> = ({ courses }) => {
  return (
    <div className="mt-10 flex flex-col gap-y-6 px-5">
      <div className="flex items-center justify-between">
        <Typography variant="h1">Free courses</Typography>
        <Link href={"/courses"} className="text-base text-text">
          See All
        </Link>
      </div>
      <div className="flex flex-wrap gap-4">
        {courses
          .slice(0, 3)
          ?.map((course) => (
            <CourseCard
              key={course._id}
              type="horizontal"
              id={course._id}
              thumbnail={courseThumbnail}
              name={course.name}
              category={course.category}
              rate={course.rate}
              reviewsCount={course.review_count}
              price={course.price}
              isFree={course.price === 0}
            />
          ))}
      </div>
    </div>
  );
};

export default FreeCourses;
