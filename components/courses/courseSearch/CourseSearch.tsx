"use client";

import React, { useRef, useState } from "react";
import Drawer from "@/components/reusable/drawer/Drawer";
import SearchInput from "@/components/reusable/searchInput/SearchInput";
import CourseFilter from "../courseFilter/CourseFilter";
import { CiFilter } from "react-icons/ci";
import { debounce } from "@/utils/debounce";
import { useCourseQueryParams } from "hooks/useCourseQueryParams";

const CourseSearch = () => {
  const [open, setOpen] = useState(false);
  const { query, updateParam } = useCourseQueryParams("/courses");

  const debouncedSearch = useRef(
    debounce((value: string) => {
      updateParam("search", value);
    }, 800),
  ).current;

  const activeFiltersCount = [
    "sort",
    "category",
    "language",
    "level",
    "minPrice",
    "maxPrice",
  ].filter((key) => query.get(key)).length;

  return (
    <>
      <div className="sticky top-0 mt-2 flex gap-x-4 bg-white px-5 py-3">
        <SearchInput
          placeholder="Search for a course"
          defaultValue={query.get("search") || ""}
          onChange={(e) => debouncedSearch(e.target.value)}
        />
        <button
          onClick={() => setOpen(true)}
          className="rounded-lg border border-secondary p-2 text-neutral-500 shadow-sm"
        >
          <CiFilter size={24} color="inherit" />
        </button>
        {activeFiltersCount > 0 && (
          <span className="absolute right-3 top-1 flex size-6 items-center justify-center rounded-full border border-indigo-400 bg-background text-sm text-indigo-400">
            {activeFiltersCount}
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
