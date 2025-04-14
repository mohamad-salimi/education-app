import React, { FC } from "react";
import Link from "next/link";
import Typography from "@/components/reusable/typography/Typography";
import CourseCard from "@/components/reusable/courseCard/CourseCard";
import courseThumbnail from "@/public/placeholder/course-placeholder.png";
import { CourseType } from "../types/Home.types";

interface TopRatedProps {
  courses: CourseType[];
}

const TopRated: FC<TopRatedProps> = ({ courses }) => {
  return (
    <div className="mt-8 flex flex-col gap-y-6 px-5">
      <div className="flex items-center justify-between">
        <Typography variant="h1">Top Rated</Typography>
        <Link href={"/courses"} className="text-base text-text">
          See All
        </Link>
      </div>
      <div className="flex flex-wrap gap-4">
        {courses.map((course) => (
          <CourseCard
            key={course._id}
            type="vertical"
            id={course._id}
            name={course.name}
            category={course.category}
            price={course.price}
            rate={course.rate}
            reviewsCount={course.review_count}
            thumbnail={courseThumbnail}
            isFree={course.price === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default TopRated;
