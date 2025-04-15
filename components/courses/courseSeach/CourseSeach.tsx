"use client";

import React, { useState } from "react";
import Drawer from "@/components/reusable/drawer/Drawer";
import SearchInput from "@/components/reusable/searchInput/SearchInput";
import CourseFilter from "./courseFilter/CourseFilter";
import { CiFilter } from "react-icons/ci";

const CourseSeach = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="sticky top-0 flex gap-x-4 bg-white px-5 py-3">
        <SearchInput placeholder="Search for a course" />
        <button
          onClick={() => setOpen(true)}
          className="rounded-lg border border-secondary p-2 text-neutral-500 shadow-sm"
        >
          <CiFilter size={24} color="inherit" />
        </button>
      </div>
      <Drawer open={open} onClose={() => setOpen(false)} fullHeight>
        <CourseFilter onClose={() => setOpen(false)} />
      </Drawer>
    </>
  );
};

export default CourseSeach;
