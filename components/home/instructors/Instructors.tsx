"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Typography from "@/components/reusable/typography/Typography";
import InstructorCard from "@/components/reusable/instructorCard/InstructorCard";

type InstructorType = {
  _id: string;
  fullname: string;
  headline: string;
  course_count: number;
  rate?: number;
  student_count?: number;
};

const Instructors = () => {
  const [instructors, setInstructors] = useState<InstructorType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/instructors?page=1&limit=3");
      const data = await res.json();
      setInstructors(data.instructors);
    };

    fetchData();
  }, []);

  return (
    <div className="mt-9 flex flex-col gap-y-6 px-5">
      <div className="flex items-center justify-between">
        <Typography variant="h1">Instructors</Typography>
        <Link href={"/instructors"} className="text-base text-text">
          See All
        </Link>
      </div>
      <div className="flex flex-col gap-y-4">
        {instructors
          ?.slice(0, 3)
          .map((instructor) => (
            <InstructorCard
              key={instructor._id}
              id={instructor._id}
              name={instructor.fullname}
              courseCount={instructor.course_count}
              headline={instructor.headline}
              rate={instructor.rate || 0}
              studentCount={instructor.student_count || 0}
            />
          ))}
      </div>
    </div>
  );
};

export default Instructors;
