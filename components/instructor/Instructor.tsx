import React, { FC } from "react";
import Image from "next/image";
import Button from "../reusable/button/Button";
import Typography from "../reusable/typography/Typography";
import CourseCard from "../reusable/courseCard/CourseCard";
import VerifyIcon from "../icons/verifyIcon/VerifyIcon";
import TwoUserIcon from "../icons/twoUserIcon/TwoUserIcon";
import BookIcon from "../icons/bookIcon/BookIcon";
import StarIcon from "../icons/starIcon/StarIcon";
import coursePlaceholder from "@/public/placeholder/course-placeholder.png";
import { InstructorType } from "./types/Instructor.types";
import { GoInfo } from "react-icons/go";

interface InstructorProps {
  instructor: InstructorType;
}

const Instructor: FC<InstructorProps> = ({ instructor }) => {
  return (
    <div className="flex flex-col py-6">
      <div className="flex flex-col gap-y-6 px-5">
        <div className="flex flex-col items-center gap-y-7">
          <div className="relative">
            <Image
              alt="avatar"
              src={"/placeholder/placeholder-avatar.png"}
              width={94}
              height={94}
              className="rounded-full p-[1px] outline outline-2 outline-primary"
            />
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 text-primary">
              <VerifyIcon />
            </span>
          </div>
          <div className="flex flex-col items-center gap-y-1.5">
            <Typography variant="body_big" className="font-semibold">
              {instructor?.fullname}
            </Typography>
            <Typography variant="body_small" color="text">
              {instructor?.headline}
            </Typography>
          </div>
        </div>

        <div className="mx-5 flex items-center gap-x-2 rounded bg-background py-3">
          <span className="flex flex-1 justify-center gap-x-2 border-r border-r-secondary text-primary last:border-none">
            <TwoUserIcon size="small" />
            <Typography variant="body_smallest" color="primary_text">
              +{instructor?.student_count || 0}
            </Typography>
          </span>
          <span className="flex flex-1 items-center justify-center gap-x-2 border-r border-r-secondary text-primary last:border-none">
            <BookIcon />
            <Typography
              variant="body_smallest"
              color="primary_text"
            >{`${instructor?.courses?.length} courses`}</Typography>
          </span>
          <span className="flex flex-1 justify-center gap-x-2 border-r border-r-secondary text-primary last:border-none">
            <StarIcon size="small" />
            <Typography
              variant="body_smallest"
              color="primary_text"
              className="min-w-[65px]"
            >{`${instructor?.rate || 0}/5 rating`}</Typography>
          </span>
        </div>

        <div className="flex flex-col gap-y-4">
          <Typography variant="h3">About</Typography>
          <Typography variant="body_main" color="text" component={"p"}>
            {instructor?.bio}
          </Typography>
        </div>

        <div className="flex flex-col gap-y-4">
          <Typography variant="h3">Courses</Typography>
          <div className="flex flex-wrap gap-4">
            {instructor?.courses?.map((course) => (
              <CourseCard
                key={course?._id}
                name={course?.name}
                category={course?.category}
                id={course?._id}
                price={course?.price}
                rate={course?.rate}
                reviewsCount={course?.review_count}
                type="vertical"
                isFree={course?.price === 0}
                thumbnail={coursePlaceholder}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-4 px-5 pt-6">
        <div className="flex items-center gap-x-1 text-text">
          <GoInfo size={24} />
          <Typography variant="body_smallest" color="text">
            You cannot start a chat until you have purchased the course
          </Typography>
        </div>
        <Button format="primary" disabled>
          Start a Chat
        </Button>
      </div>
    </div>
  );
};

export default Instructor;
