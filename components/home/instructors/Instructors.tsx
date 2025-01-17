"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Typography from "@/components/reusable/typography/Typography";
import InstructorCard from "./instructorCard/InstructorCard";

type InstructorType = {
  _id: string;
  __v: number;
  name: string;
  field_of_teaching: string;
  courses_count: number;
  rating: number;
  student_count: number;
  about: string;
};

const Instructors = () => {
  const [instructors, setInstructors] = useState<InstructorType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/instructors");
      const data = await res.json();
      setInstructors(data.data);
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
        {instructors.slice(0, 3).map((instructor) => (
          <InstructorCard
            key={instructor._id}
            id={instructor._id}
            name={instructor.name}
            courseCount={instructor.courses_count}
            field={instructor.field_of_teaching}
            rating={instructor.rating}
            studentCount={instructor.student_count}
          />
        ))}
      </div>
    </div>
  );
};

export default Instructors;
