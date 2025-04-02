"use client";

import React from "react";
import InputField from "@/components/reusable/inputField/InputField";
import SelectOption from "@/components/reusable/selectOption/SelectOption";

const categories = [
  {
    title: "Design",
    value: "design",
  },
  {
    title: "Social Sciences",
    value: "social_sciences",
  },
  {
    title: "Sport",
    value: "sport",
  },
  {
    title: "Language Learning",
    value: "language_learning",
  },
  {
    title: "Medicine",
    value: "medicine",
  },
  {
    title: "Data Science",
    value: "data_science",
  },
  {
    title: "Psychology",
    value: "psychology",
  },
];

const Registration = () => {
  return (
    <div className="flex flex-col gap-y-4 p-5">
      <InputField label="Course Name" />
      <SelectOption
        id="category"
        label="Category"
        options={categories}
        placeholder="Select Category"
        onChange={() => {}}
      />
    </div>
  );
};

export default Registration;
