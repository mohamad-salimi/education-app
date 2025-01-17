import React, { FC } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Typography from "@/components/reusable/typography/Typography";
import FilledStarIcon from "@/components/icons/filledStarIcon/FilledStarIcon";

type SuggestionCardProps = {
  id: string;
  thumbnail: string | StaticImageData;
  field: string;
  name: string;
  rate: number;
  reviewsCount: number;
  price: number;
};

const SuggestionCard: FC<SuggestionCardProps> = ({
  field,
  id,
  name,
  price,
  rate,
  reviewsCount,
  thumbnail,
}) => {
  return (
    <Link
      href={`courses/${id}`}
      className="flex max-h-[290px] w-full min-w-[calc(100%_-_40px)] flex-col gap-y-2.5 rounded-xl border border-divider p-2.5 last-of-type:mr-5"
    >
      <div>
        <Image
          src={thumbnail}
          alt={name}
          className="max-h-[170px] w-full rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <Typography variant="body_small" color="text">
          {field}
        </Typography>
        <div className="flex items-center justify-between gap-x-1 text-yellow-400">
          <div className="flex items-center gap-1.5">
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
        <Typography
          variant="body_big"
          className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold"
        >
          {name}
        </Typography>
      </div>
    </Link>
  );
};

export default SuggestionCard;
