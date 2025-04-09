import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Typography from "../typography/Typography";
import FilledStarIcon from "@/components/icons/filledStarIcon/FilledStarIcon";

type CourseCardProps = {
  type: "horizontal" | "vertical";
  id: string;
  thumbnail: string | StaticImageData;
  field: string;
  name: string;
  rate: number;
  reviewsCount: number;
  price?: number;
  isFree?: boolean;
};

const CourseCard: FC<CourseCardProps> = ({
  type,
  id,
  name,
  field,
  price,
  rate,
  reviewsCount,
  thumbnail,
  isFree = false,
}) => {
  return (
    <Link
      href={`/courses/${id}`}
      className={`flex w-full rounded-lg border border-divider ${type === "vertical" ? "max-w-[calc(50%_-_10px)] flex-col gap-y-2.5 p-2.5" : "items-center gap-x-4 p-2"}`}
    >
      <Image
        src={thumbnail}
        alt={name}
        className={`${type === "horizontal" ? "h-[120px] flex-1" : "h-[135px]"} w-full rounded object-cover`}
      />

      <div
        className={`flex flex-col ${type === "horizontal" ? "flex-1 gap-y-2 overflow-hidden text-ellipsis whitespace-nowrap" : "gap-y-1.5"}`}
      >
        <Typography variant="body_small" className="capitalize" color="text">
          {field}
        </Typography>
        <Typography
          variant="body_big"
          className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold"
        >
          {name}
        </Typography>
        <div className="flex items-center gap-x-1 text-yellow-400">
          <Typography
            variant="body_smallest"
            color="primary_text"
          >{`${rate}/5`}</Typography>
          <FilledStarIcon />
          <Typography variant="body_smallest" color="text">
            {reviewsCount}
            {type === "horizontal" && " reviews"}
          </Typography>
        </div>
        {isFree && type === "horizontal" ? (
          <Typography
            variant="body_smallest"
            color="primary"
            className="w-fit rounded bg-secondary p-2"
          >
            Free
          </Typography>
        ) : (
          <Typography variant="body_small" color="primary">
            {isFree ? "Free" : `$${price}`}
          </Typography>
        )}
      </div>
    </Link>
  );
};

export default CourseCard;
