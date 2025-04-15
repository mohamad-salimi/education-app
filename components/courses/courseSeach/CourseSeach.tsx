"use client";

import SortIcon from "@/components/icons/sortIcon/SortIcon";
import InstructorFilter from "@/components/instructors/instructorFilter/InstructorFilter";
import Drawer from "@/components/reusable/drawer/Drawer";
import SearchInput from "@/components/reusable/searchInput/SearchInput";
import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";

const CourseSeach = () => {
  const [open, setOpen] = useState<"sort" | "filter" | null>(null);

  return (
    <>
      <div className="sticky top-0 flex gap-x-4 bg-white px-5 py-3">
        <SearchInput placeholder="Search for a course" />
        <button
          onClick={() => setOpen("filter")}
          className="rounded-lg border border-secondary p-2 text-neutral-500 shadow-sm"
        >
          <CiFilter size={24} color="inherit" />
        </button>
        <button
          onClick={() => setOpen("sort")}
          className="rounded-lg border border-secondary p-2 text-neutral-500 shadow-sm"
        >
          <SortIcon />
        </button>
      </div>
      <Drawer open={!!open} onClose={() => setOpen(null)}>
        <InstructorFilter onClose={() => setOpen(null)} />
      </Drawer>
    </>
  );
};

export default CourseSeach;
