import React, { FC } from "react";
import Link from "next/link";
import Typography from "@/components/reusable/typography/Typography";
import InstructorCard from "@/components/reusable/instructorCard/InstructorCard";
import { InstructorType } from "../types/Home.types";

interface InstructorsProps {
  instructors: InstructorType[];
}

const Instructors: FC<InstructorsProps> = ({ instructors }) => {
  return (
    <div className="mt-9 flex flex-col gap-y-6 px-5">
      <div className="flex items-center justify-between">
        <Typography variant="h1">Instructors</Typography>
        <Link href={"/instructors"} className="text-base text-text">
          See All
        </Link>
      </div>
      <div className="flex flex-col gap-y-4">
        {instructors?.map((instructor) => (
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
