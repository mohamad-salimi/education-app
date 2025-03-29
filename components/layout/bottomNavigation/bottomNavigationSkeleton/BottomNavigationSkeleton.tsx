import Skeleton from "@/components/reusable/skeleton/Skeleton";
import React from "react";

const BottomNavigationSkeleton = () => {
  return (
    <div className="fixed bottom-0 z-40 flex min-h-16 w-full max-w-[500px] items-center justify-between gap-x-4 bg-white px-5">
      <div className="flex w-full flex-col items-center gap-y-2">
        <Skeleton variant="circle" width="25" height="24" />
        <Skeleton variant="button" width="45" height="16" />
      </div>
      <div className="flex w-full flex-col items-center gap-y-2">
        <Skeleton variant="circle" width="25" height="24" />
        <Skeleton variant="button" width="45" height="16" />
      </div>
      <div className="flex w-full flex-col items-center gap-y-2">
        <Skeleton variant="circle" width="25" height="24" />
        <Skeleton variant="button" width="45" height="16" />
      </div>
      <div className="flex w-full flex-col items-center gap-y-2">
        <Skeleton variant="circle" width="25" height="24" />
        <Skeleton variant="button" width="45" height="16" />
      </div>
    </div>
  );
};

export default BottomNavigationSkeleton;
