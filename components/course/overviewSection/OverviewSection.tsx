import React, { FC } from "react";
import Typography from "@/components/reusable/typography/Typography";
import LanguageIcon from "@/components/icons/languageIcon/LanguageIcon";
import StarIcon from "@/components/icons/starIcon/StarIcon";
import TwoUserIcon from "@/components/icons/twoUserIcon/TwoUserIcon";

interface OverviewSectionProps {
  language: "persian" | "english";
  rate: number;
  reviewCount: number;
  studentCount: number;
}

const OverviewSection: FC<OverviewSectionProps> = ({
  language,
  rate,
  reviewCount,
  studentCount,
}) => {
  return (
    <div className="px-5">
      <div className="flex items-center gap-5 rounded-lg bg-background p-3">
        <div className="flex flex-1 flex-col items-center gap-y-2 border-r border-secondary text-primary">
          <LanguageIcon />
          <Typography
            variant="body_small"
            color="primary_text"
            className="capitalize"
          >
            {language}
          </Typography>
        </div>

        <div className="flex flex-1 flex-col items-center gap-y-2 border-r border-secondary text-primary">
          <StarIcon size="base" />
          <span className="flex items-center gap-1">
            <Typography
              variant="body_small"
              color="primary_text"
            >{`${rate}/5`}</Typography>
            <Typography variant="body_small" color="text">
              {`(${reviewCount})`}
            </Typography>
          </span>
        </div>

        <div className="flex flex-1 flex-col items-center gap-y-2 text-primary">
          <TwoUserIcon size="base" />
          <Typography
            variant="body_small"
            color="primary_text"
          >{`${studentCount} Students`}</Typography>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
