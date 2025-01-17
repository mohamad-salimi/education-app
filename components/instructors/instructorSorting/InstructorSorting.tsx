import React, { FC } from "react";
import Button from "@/components/reusable/button/Button";
import Typography from "@/components/reusable/typography/Typography";
import RadioButton from "@/components/reusable/radioButton/RadioButton";

type InstructorSortingProps = {
  onClose: () => void;
};

export const categories = [
  {
    title: "Design",
    query: "design",
  },
  {
    title: "Social Sciences",
    query: "social_sciences",
  },
  {
    title: "Sport",
    query: "sport",
  },
  {
    title: "Language Learning",
    query: "language_learning",
  },
  {
    title: "Medicine",
    query: "medicine",
  },
  {
    title: "Data Science",
    query: "data_science",
  },
  {
    title: "Psychology",
    query: "psychology",
  },
];

const InstructorSorting: FC<InstructorSortingProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col gap-y-4 p-5">
      <Typography variant="h3">Sort</Typography>
      <div className="flex flex-col gap-y-2">
        {categories.map((item) => (
          <RadioButton key={item.query} label={item.title} id={item.title} />
        ))}
      </div>
      <Button format="tonal" onClick={onClose} className="mt-3">
        Sort
      </Button>
    </div>
  );
};

export default InstructorSorting;
