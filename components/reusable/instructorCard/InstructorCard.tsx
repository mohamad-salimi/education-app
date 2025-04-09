import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Typography from "@/components/reusable/typography/Typography";
import BookIcon from "@/components/icons/bookIcon/BookIcon";
import StarIcon from "@/components/icons/starIcon/StarIcon";
import TwoUserIcon from "@/components/icons/twoUserIcon/TwoUserIcon";
import VerifyIcon from "@/components/icons/verifyIcon/VerifyIcon";

type InstructorCardProps = {
  id: string;
  name: string;
  headline: string;
  studentCount: number;
  courseCount: number;
  rating: number;
};

const InstructorCard: FC<InstructorCardProps> = ({
  id,
  name,
  headline,
  courseCount,
  rating,
  studentCount,
}) => {
  return (
    <Link
      href={`/instructors/${id}`}
      className="flex flex-col gap-y-3 border border-divider p-3"
    >
      <div className="flex items-center gap-x-3">
        <div className="relative">
          <Image
            alt="avatar"
            src={"/placeholder/placeholder-avatar.png"}
            width={46}
            height={46}
            className="rounded-full p-[1px] outline outline-2 outline-primary"
          />
          <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 text-primary">
            <VerifyIcon />
          </span>
        </div>
        <div className="flex flex-col gap-y-1.5">
          <Typography variant="body_big" className="font-semibold">
            {name}
          </Typography>
          <Typography variant="body_small" color="text">
            {headline}
          </Typography>
        </div>
      </div>

      <div className="flex items-center justify-between rounded bg-background px-6 py-3">
        <span className="flex gap-x-2 text-primary">
          <TwoUserIcon size="small" />
          <Typography variant="body_smallest" color="primary_text">
            +{studentCount}
          </Typography>
        </span>
        <span className="flex gap-x-2 text-primary">
          <BookIcon />
          <Typography
            variant="body_smallest"
            color="primary_text"
          >{`${courseCount} courses`}</Typography>
        </span>
        <span className="flex gap-x-2 text-primary">
          <StarIcon size="small" />
          <Typography
            variant="body_smallest"
            color="primary_text"
            className="min-w-[65px]"
          >{`${rating}/5 rating`}</Typography>
        </span>
      </div>
    </Link>
  );
};

export default InstructorCard;
