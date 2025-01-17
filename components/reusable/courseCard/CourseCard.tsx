import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Typography from "../typography/Typography";
import FilledStarIcon from "@/components/icons/filledStarIcon/FilledStarIcon";

type CourseCardProps = {
  id: string;
  thumbnail: string | StaticImageData;
  field: string;
  name: string;
  rate: number;
  reviewsCount: number;
  price: number;
};

const CourseCard: FC<CourseCardProps> = ({
  id,
  name,
  field,
  price,
  rate,
  reviewsCount,
  thumbnail,
}) => {
  return (
    <Link
      href={`/courses/${id}`}
      className="flex w-full max-w-[calc(50%_-_10px)] flex-col gap-y-2.5 rounded-lg border border-divider p-2.5"
    >
      <div>
        <Image src={thumbnail} alt={name} className="w-full rounded" />
      </div>
      <div className="flex flex-col gap-y-1.5">
        <Typography variant="body_small" color="text">
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
          </Typography>
        </div>
        <Typography variant="body_small" color="primary">
          ${price}
        </Typography>
      </div>
    </Link>
  );
};

export default CourseCard;
