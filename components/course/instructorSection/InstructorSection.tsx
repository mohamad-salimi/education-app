import React, { FC } from "react";
import Image from "next/image";
import Typography from "@/components/reusable/typography/Typography";

interface InstructorType {
  _id: string;
  fullname: string;
  headline: string;
  bio: string;
}

interface InstructorSectionProps {
  instructor: InstructorType;
}

const InstructorSection: FC<InstructorSectionProps> = ({ instructor }) => {
  return (
    <div className="flex flex-col gap-y-4 px-5">
      <Typography variant="h2">Created by</Typography>
      <div className="flex flex-col gap-y-[18px]">
        <div className="flex items-center gap-x-3">
          <div className="flex">
            <Image
              alt="avatar"
              src={"/placeholder/placeholder-avatar.png"}
              width={48}
              height={48}
              className="rounded-full p-[1px] outline outline-2 outline-primary"
            />
          </div>
          <div className="flex flex-col gap-y-1.5">
            <Typography variant="body_big" className="capitalize">
              {instructor?.fullname}
            </Typography>
            <Typography variant="body_small" color="text">
              {instructor?.headline}
            </Typography>
          </div>
        </div>
        <Typography variant="body_main" color="text" className="line-clamp-3">
          {instructor?.bio}
        </Typography>
      </div>
    </div>
  );
};

export default InstructorSection;
