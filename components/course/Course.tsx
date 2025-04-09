import React, { FC } from "react";
import Image from "next/image";
import InfoSection from "./infoSection/InfoSection";
import OverviewSection from "./overviewSection/OverviewSection";
import AboutSection from "./aboutSection/AboutSection";
import InstructorSection from "./instructorSection/InstructorSection";
import SkillsSection from "./skillsSection/SkillsSection";
import PurchaseSection from "./purchaseSection/PurchaseSection";
import courseImg from "@/public/placeholder/suggest-course-placeholder.png";
import { CourseType } from "../courses/types/Course.types";

interface CourseProps {
  data: CourseType;
}

const Course: FC<CourseProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <Image
        src={courseImg}
        alt="course-image"
        className="h-[200px] w-full object-cover"
      />
      <div className="flex flex-col gap-y-8">
        <InfoSection
          name={data?.name}
          category={data?.category}
          description={data?.description}
        />
        <OverviewSection
          language={data?.language}
          rate={data?.rate}
          reviewCount={data?.review_count}
          studentCount={data?.student_count}
        />
        <InstructorSection instructor={data?.instructor} />
        <AboutSection level={data?.level} />
        <SkillsSection skills={data?.skills} />
        <PurchaseSection price={data?.price} />
      </div>
    </div>
  );
};

export default Course;
