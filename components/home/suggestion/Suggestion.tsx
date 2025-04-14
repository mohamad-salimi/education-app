import React, { FC } from "react";
import Link from "next/link";
import Typography from "@/components/reusable/typography/Typography";
import SuggestionCard from "./suggestionCard/SuggestionCard";
import courseThumbnail from "@/public/placeholder/suggest-course-placeholder.png";
import { CourseType } from "../types/Home.types";

interface SuggestionProps {
  courses: CourseType[];
}

const Suggestion: FC<SuggestionProps> = ({ courses }) => {
  return (
    <div className="mt-6 flex flex-col gap-y-6">
      <div className="flex items-center justify-between px-5">
        <Typography variant="h1">Just for you</Typography>
        <Link href={"/courses"} className="text-base text-text">
          See All
        </Link>
      </div>
      <div className="hide-scrollbar flex gap-x-4 overflow-y-hidden overflow-x-scroll pl-5">
        {courses.map((course) => (
          <SuggestionCard
            key={course._id}
            id={course._id}
            name={course.name}
            category={course.category}
            price={course.price}
            rate={course.rate}
            reviewsCount={course.review_count}
            thumbnail={courseThumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default Suggestion;
