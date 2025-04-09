import React, { FC } from "react";
import Image from "next/image";
import Typography from "@/components/reusable/typography/Typography";

interface InstructorType {
  _id: string;
  fullname: string;
  //   headline: string;
  //   about: string;
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
              Designer at Webflow
            </Typography>
          </div>
        </div>
        <Typography variant="body_main" color="text">
          Congratulations! My name is Vladyslav, and I will tell and show you
          how to use Webflow. It&lsquo;s a cool tool for building fast and
          easy-to-scalable websites.
        </Typography>
      </div>
    </div>
  );
};

export default InstructorSection;
