"use client";

import React, { FC, useState } from "react";
import InstructorCard from "../reusable/instructorCard/InstructorCard";
import SearchInput from "../reusable/searchInput/SearchInput";
import Drawer from "../reusable/drawer/Drawer";
import InstructorFilter from "./instructorFilter/InstructorFilter";
import { CiFilter } from "react-icons/ci";

type InstructorTypes = {
  _id: string;
  fullname: string;
  headline: string;
  course_count: number;
  rating?: number;
  student_count?: number;
};

type InstructorsProps = {
  instructors: InstructorTypes[];
};

const Instructors: FC<InstructorsProps> = ({ instructors }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col gap-y-6 px-5 pb-20 pt-4">
        <div className="flex gap-x-4">
          <SearchInput placeholder="Search instructor name" />
          <button
            onClick={() => setOpen(true)}
            className="rounded-lg border border-secondary p-2 text-neutral-500 shadow-sm"
          >
            <CiFilter size={24} color="inherit" />
          </button>
        </div>
        {instructors?.map((instructor) => (
          <InstructorCard
            key={instructor._id}
            id={instructor._id}
            name={instructor.fullname}
            headline={instructor.headline}
            courseCount={instructor.course_count}
            rating={instructor.rating || 0}
            studentCount={instructor.student_count || 0}
          />
        ))}
      </div>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <InstructorFilter onClose={() => setOpen(false)} />
      </Drawer>
    </>
  );
};

export default Instructors;
