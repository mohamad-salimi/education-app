import React, { FC } from "react";
import Typography from "@/components/reusable/typography/Typography";
import BookmarkSection from "../bookmarkSection/BookmarkSection";

interface InfoSectionProps {
  name: string;
  category: string;
  description: string;
}

const InfoSection: FC<InfoSectionProps> = ({ name, category, description }) => {
  return (
    <div className="flex flex-col px-5">
      <div className="flex items-center justify-between">
        <Typography variant="body_main" color="text" className="capitalize">
          {category}
        </Typography>
        <BookmarkSection />
      </div>
      <Typography variant="h1" className="mb-4 mt-1.5 text-[28px]">
        {name}
      </Typography>
      <Typography variant="body_main" color="text" className="leading-[22px]">
        {description}
      </Typography>
    </div>
  );
};

export default InfoSection;
