"use client";

import React, { FC, useState } from "react";
import InstructorCard from "../reusable/instructorCard/InstructorCard";
import SearchInput from "../reusable/searchInput/SearchInput";
import Drawer from "../reusable/drawer/Drawer";
import InstructorFilter from "./instructorFilter/InstructorFilter";
import { CiFilter } from "react-icons/ci";

type InstructorTypes = {
  _id: string;
  __v: number;
  name: string;
  field_of_teaching: string;
  courses_count: number;
  rating: number;
  student_count: number;
  about: string;
};

type InstructorsProps = {
  data: InstructorTypes[];
};

const Instructors: FC<InstructorsProps> = ({ data }) => {
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
        {data.map((instructor) => (
          <InstructorCard
            key={instructor._id}
            id={instructor._id}
            name={instructor.name}
            field={instructor.field_of_teaching}
            courseCount={instructor.courses_count}
            rating={instructor.rating}
            studentCount={instructor.student_count}
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
