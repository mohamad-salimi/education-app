"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import CourseCard from "@/components/reusable/courseCard/CourseCard";
import Typography from "@/components/reusable/typography/Typography";
import courseThumbnail from "@/public/placeholder/free-course-placeholder.png";
import { CourseType } from "../types/Home.types";

const FreeCourses = () => {
  const [courses, setCourses] = useState<CourseType[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/course?page=1&limit=3");
      const courses = await res.json();
      setCourses(courses?.data);
    };

    fetchCourses();
  }, []);

  return (
    <div className="mt-10 flex flex-col gap-y-6 px-5">
      <div className="flex items-center justify-between">
        <Typography variant="h1">Free courses</Typography>
        <Link href={"/courses"} className="text-base text-text">
          See All
        </Link>
      </div>
      <div className="flex flex-wrap gap-4">
        {courses.map((course) => (
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
