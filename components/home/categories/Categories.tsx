"use client";

import React, { FC, useState } from "react";
import Link from "next/link";
import Typography from "@/components/reusable/typography/Typography";
import Badge from "@/components/reusable/badge/Badge";
import { CategoriesType } from "../types/Home.types";

interface CategoriesProps {
  categories: CategoriesType[];
}

const Categories: FC<CategoriesProps> = ({ categories }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div className="flex flex-col gap-y-6 px-5">
      <div className="flex items-center justify-between">
        <Typography variant="h1">Categories</Typography>
        <Typography
          variant="body_main"
          color="text"
          onClick={toggleExpand}
          className="cursor-pointer"
        >
          {isExpanded ? "See Less" : "See All"}
        </Typography>
      </div>

      <div
        className={`flex flex-wrap gap-3 overflow-hidden transition-all duration-300 ease-linear`}
        style={{
          maxHeight: isExpanded ? `${categories.length * 40}px` : "100px",
        }}
      >
        {categories.map((badge) => (
          <Link href={`/courses?category=${badge.query}`} key={badge.query}>
            <Badge format={badge.type} title={badge.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
