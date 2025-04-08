import React, { FC } from "react";
import Image from "next/image";
import courseImg from "@/public/placeholder/suggest-course-placeholder.png";
// import { IoMdHeart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import Typography from "../reusable/typography/Typography";
import { CourseType } from "../courses/types/Course.types";
import { PiUsersLight } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import { IoLanguageOutline } from "react-icons/io5";
import Badge from "../reusable/badge/Badge";

interface CourseProps {
  data: CourseType;
}

const Course: FC<CourseProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <Image src={courseImg} alt="course-image" className="w-full" />
      <div className="mb-[100px] flex flex-col px-5">
        <div className="flex items-center justify-between">
          <Typography variant="body_main" color="text" className="capitalize">
            {data?.category}
          </Typography>
          <button className="text-primary">
            <IoMdHeartEmpty size={20} />
          </button>
        </div>
        <Typography variant="h1" className="mb-4 mt-1.5 text-[28px]">
          {data?.name}
        </Typography>
        <Typography variant="body_main" color="text" className="leading-[22px]">
          {data?.description}
        </Typography>

        <div className="mt-6 flex items-center gap-5 rounded-lg bg-background p-4">
          <div className="flex flex-1 flex-col items-center gap-y-2 border-r border-secondary px-1 text-primary">
            <IoLanguageOutline size={24} />
            <Typography
              variant="body_main"
              color="primary_text"
              className="capitalize"
            >
              {data?.language}
            </Typography>
          </div>

          <div className="flex flex-1 flex-col items-center gap-y-2 border-r border-secondary px-1 text-primary">
            <CiStar size={24} />
            <span className="flex items-center gap-1">
              <Typography
                variant="body_main"
                color="primary_text"
              >{`${data?.rate}/5`}</Typography>
              <Typography variant="body_main" color="text">
                {`(${data.review_count})`}
              </Typography>
            </span>
          </div>

          <div className="flex flex-1 flex-col items-center gap-y-2 text-primary">
            <span className="size-6">
              <PiUsersLight size={24} />
            </span>
            <Typography
              variant="body_main"
              color="primary_text"
            >{`${data?.student_count} User`}</Typography>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-y-4">
          <Typography variant="h1" className="text-[24px]">
            Skill you will gain
          </Typography>
          <div className="flex flex-wrap gap-3">
            {data?.skills.map((skill) => (
              <Badge key={skill?._id} format="primary" title={skill?.value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
