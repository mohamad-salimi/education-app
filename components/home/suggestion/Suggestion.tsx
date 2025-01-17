import React from "react";
import Link from "next/link";
import { StaticImageData } from "next/image";
import Typography from "@/components/reusable/typography/Typography";
import SuggestionCard from "./suggestionCard/SuggestionCard";
import courseThumbnail from "@/public/placeholder/suggest-course-placeholder.png";

type CoursesType = {
  id: string;
  thumbnail: string | StaticImageData;
  field: string;
  name: string;
  rate: number;
  reviewsCount: number;
  price: number;
};

const courses: CoursesType[] = [
  {
    id: "1",
    name: "Webflow course ",
    field: "Design",
    price: 150,
    rate: 5,
    reviewsCount: 98,
    thumbnail: courseThumbnail,
  },
  {
    id: "2",
    name: "Data Science",
    field: "Programing",
    price: 139,
    rate: 5,
    reviewsCount: 114,
    thumbnail: courseThumbnail,
  },
  {
    id: "3",
    name: "Meta IOS Developer",
    field: "Programing",
    price: 199,
    rate: 4.8,
    reviewsCount: 398,
    thumbnail: courseThumbnail,
  },
  {
    id: "4",
    name: "Adobe Photoshop",
    field: "Design",
    price: 174,
    rate: 4.8,
    reviewsCount: 354,
    thumbnail: courseThumbnail,
  },
];

const Suggestion = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex items-center justify-between px-5">
        <Typography variant="h1">Just for you</Typography>
        <Link href={"/courses"} className="text-base text-text">
          See All
        </Link>
      </div>
      <div className="hide-scrollbar flex gap-x-4 overflow-y-hidden overflow-x-scroll pl-5">
        {courses.map((course) => (
          <SuggestionCard
            key={course.id}
            id={course.id}
            name={course.name}
            field={course.field}
            price={course.price}
            rate={course.rate}
            reviewsCount={course.reviewsCount}
            thumbnail={course.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default Suggestion;
