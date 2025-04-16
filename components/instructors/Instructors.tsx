"use client";

import React, { FC } from "react";
import InstructorCard from "../reusable/instructorCard/InstructorCard";
import SearchInput from "../reusable/searchInput/SearchInput";
import { InstructorType } from "../instructor/types/Instructor.types";

type InstructorsProps = {
  instructors: InstructorType[];
};

const Instructors: FC<InstructorsProps> = ({ instructors }) => {
  return (
    <>
      <div className="flex flex-col gap-y-6 px-5 pb-20 pt-4">
        <SearchInput placeholder="Search instructor name" />
        {instructors?.map((instructor) => (
          <InstructorCard
            key={instructor._id}
            id={instructor._id}
            name={instructor.fullname}
            headline={instructor.headline}
            courseCount={instructor.course_count as number}
            rate={instructor.rate || 0}
            studentCount={instructor.student_count || 0}
          />
        ))}
      </div>
    </>
  );
};

export default Instructors;
