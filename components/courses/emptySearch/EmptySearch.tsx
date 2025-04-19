"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Typography from "@/components/reusable/typography/Typography";
import Button from "@/components/reusable/button/Button";
import EmptySearchicon from "@/components/icons/emptySearchIcon/EmptySearchicon";

const EmptySearch = () => {
  const router = useRouter();
  return (
    <div className="flex flex-1 flex-col items-center gap-y-5">
      <div className="h-48 w-48">
        <EmptySearchicon />
      </div>
      <div className="flex flex-col items-center gap-y-1.5">
        <Typography variant="h3">No results found</Typography>
        <Typography
          variant="body_main"
          color="text"
          className="px-5 text-center"
        >
          Try adjusting your search to find what you are looking for
        </Typography>
      </div>
      <div className="mt-5 flex w-40 justify-center">
        <Button format="tonal" onClick={() => router.push("/courses")}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default EmptySearch;
