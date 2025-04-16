"use client";

import React, { useState } from "react";
import Drawer from "@/components/reusable/drawer/Drawer";
import SearchInput from "@/components/reusable/searchInput/SearchInput";
import CourseFilter from "../courseFilter/CourseFilter";
import { CiFilter } from "react-icons/ci";
import { useSearchParams } from "next/navigation";

const CourseSearch = () => {
  const searchParams = useSearchParams();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="sticky top-0 mt-2 flex gap-x-4 bg-white px-5 py-3">
        <SearchInput placeholder="Search for a course" />
        <button
          onClick={() => setOpen(true)}
          className="rounded-lg border border-secondary p-2 text-neutral-500 shadow-sm"
        >
          <CiFilter size={24} color="inherit" />
        </button>
        {searchParams?.size > 0 && (
          <span className="absolute right-3 top-1 flex size-6 items-center justify-center rounded-full border border-indigo-400 bg-background text-sm text-indigo-400">
            {searchParams?.size}
          </span>
        )}
      </div>
      <Drawer open={open} onClose={() => setOpen(false)} fullHeight>
        <CourseFilter onClose={() => setOpen(false)} />
      </Drawer>
    </>
  );
};

export default CourseSearch;
