"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/reusable/button/Button";
import CreativeArrow from "@/components/icons/creativeArrow/CreativeArrow";

const Intro = () => {
  const router = useRouter();
  return (
    <div className="flex flex-1 flex-col gap-y-4 overflow-hidden p-5">
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-col overflow-hidden py-2 text-6xl font-bold">
          <span
            className={`animate-slideInLeft bg-gradient-to-r from-indigo-800 to-indigo-600 bg-clip-text text-transparent`}
          >
            Craft
          </span>
          <span
            className={`animate-slideInRight bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-center text-transparent`}
          >
            Your
          </span>
          <span
            className={`h-20 animate-slideInLeft bg-gradient-to-r from-indigo-400 to-indigo-200 bg-clip-text text-right text-transparent`}
          >
            Legacy
          </span>
        </div>
        <p className="animate-slideInBottom text-lg text-text">
          Turn your knowledge into a powerful learning experience. Inspire
          others, expand your reach, and start your journey as a creator today!
        </p>
      </div>
      <span className="flex flex-1 animate-slideInBottom justify-end text-indigo-500">
        <CreativeArrow />
      </span>
      <Button
        className="animate-slideInBottom"
        format="primary"
        onClick={() => router.push("/add-course/registration")}
      >
        Start As Creator
      </Button>
    </div>
  );
};

export default Intro;
