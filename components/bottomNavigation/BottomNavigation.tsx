"use client";

import React, { useState } from "react";
import Typography from "@/components/reusable/typography/Typography";
import LibraryIcon from "@/components/icons/libraryIcon/LibraryIcon";
import SearchIcon from "@/components/icons/searchIcon/SearchIcon";
import CourseIcon from "@/components/icons/courseIcon/CourseIcon";
import UserIcon from "@/components/icons/userIcon/UserIcon";

const BottomNavigation = () => {
  const [active, setActive] = useState<
    "search" | "course" | "library" | "user" | null
  >("search");
  return (
    <div className="fixed bottom-0 z-40 flex w-full items-center justify-between gap-x-4 bg-white px-5">
      <button
        onClick={() => setActive("search")}
        className={`${active === "search" ? "border-t border-primary text-primary" : "border-t border-transparent text-text"} flex w-full flex-col items-center gap-y-2 py-2 transition-colors duration-300`}
      >
        <SearchIcon />
        <Typography variant="body_smallest">Search</Typography>
      </button>

      <button
        onClick={() => setActive("course")}
        className={`${active === "course" ? "border-t border-primary text-primary" : "border-t border-transparent text-text"} flex w-full flex-col items-center gap-y-2 py-2 transition-colors duration-300`}
      >
        <CourseIcon />
        <Typography variant="body_smallest">Courses</Typography>
      </button>

      <button
        onClick={() => setActive("library")}
        className={`${active === "library" ? "border-t border-primary text-primary" : "border-t border-transparent text-text"} flex w-full flex-col items-center gap-y-2 py-2 transition-colors duration-300`}
      >
        <LibraryIcon />
        <Typography variant="body_smallest">Library</Typography>
      </button>

      <button
        onClick={() => setActive("user")}
        className={`${active === "user" ? "border-t border-primary text-primary" : "border-t border-transparent text-text"} flex w-full flex-col items-center gap-y-2 py-2 transition-colors duration-300`}
      >
        <UserIcon />
        <Typography variant="body_smallest">Account</Typography>
      </button>
    </div>
  );
};

export default BottomNavigation;
