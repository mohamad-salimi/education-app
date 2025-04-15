import React, { FC } from "react";
import Typography from "@/components/reusable/typography/Typography";
import SelectOption from "@/components/reusable/selectOption/SelectOption";
import InputField from "@/components/reusable/inputField/InputField";
import Button from "@/components/reusable/button/Button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const categories = [
  {
    title: "Design",
    value: "design",
  },
  {
    title: "Programming",
    value: "programming",
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

const languages = [
  {
    title: "English",
    value: "english",
  },
  {
    title: "Persian",
    value: "persian",
  },
];

const sorts = [
  {
    title: "Highest Rate",
    value: "highestRated",
  },
  {
    title: "Most Expensive",
    value: "mostExpensive",
  },
  {
    title: "Cheapest",
    value: "cheapest",
  },
  {
    title: "Newest",
    value: "newest",
  },
];

const levels = [
  {
    title: "Beginner",
    value: "beginner",
  },
  {
    title: "Intermediate",
    value: "intermediate",
  },
  {
    title: "Advanced",
    value: "advanced",
  },
];

interface CourseFilterProps {
  onClose: VoidFunction;
}

interface CourseFilterFormInput {
  sort: string;
  category: string;
  language: string;
  level: string;
  minPrice: string;
  maxPrice: string;
}

const CourseFilter: FC<CourseFilterProps> = ({ onClose }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CourseFilterFormInput>({
    defaultValues: {
      sort: "",
      category: "",
      language: "",
      level: "",
      minPrice: "",
      maxPrice: "",
    },
  });

  const onSubmit: SubmitHandler<CourseFilterFormInput> = async (payload) => {
    console.log(payload);
  };

  return (
    <div className="flex h-full flex-col gap-y-6 px-5 py-4">
      <Typography variant="h2">Filter</Typography>
      <form
        className="flex flex-1 flex-col gap-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="sort"
          control={control}
          render={({ field: { value, onChange } }) => {
            return (
              <SelectOption
                id="sort"
                label="Sort"
                options={sorts}
                placeholder="Select Sort"
                value={value}
                onChange={onChange}
              />
            );
          }}
        />

        <Controller
          name="category"
          control={control}
          render={({ field: { value, onChange } }) => {
            return (
              <SelectOption
                id="category"
                label="Category"
                options={categories}
                placeholder="Select Category"
                value={value}
                onChange={onChange}
              />
            );
          }}
        />

        <Controller
          name="language"
          control={control}
          render={({ field: { value, onChange } }) => {
            return (
              <SelectOption
                id="language"
                label="Language"
                options={languages}
                placeholder="Select Language"
                value={value}
                onChange={onChange}
              />
            );
          }}
        />

        <Controller
          name="level"
          control={control}
          render={({ field: { value, onChange } }) => {
            return (
              <SelectOption
                id="level"
                label="Level"
                options={levels}
                placeholder="Select Level"
                value={value}
                onChange={onChange}
              />
            );
          }}
        />

        <div className="flex items-center justify-between gap-x-4">
          <Controller
            name="minPrice"
            control={control}
            render={({ field: { value, onChange } }) => {
              return (
                <InputField
                  id="minPrice"
                  label="Min Price"
                  value={value}
                  onChange={onChange}
                  type="tel"
                  postfix="USD"
                  error={!!errors?.minPrice}
                  description={errors?.minPrice?.message}
                />
              );
            }}
          />

          <Controller
            name="maxPrice"
            control={control}
            render={({ field: { value, onChange } }) => {
              return (
                <InputField
                  id="maxPrice"
                  label="Max Price"
                  value={value}
                  onChange={onChange}
                  type="tel"
                  postfix="USD"
                  error={!!errors?.maxPrice}
                  description={errors?.maxPrice?.message}
                />
              );
            }}
          />
        </div>
      </form>
      <div className="flex items-center gap-x-4">
        <Button
          format="primary"
          disabled={isSubmitting}
          onClick={handleSubmit(onSubmit)}
        >
          Search
        </Button>
        <Button onClick={onClose} format="text">
          Close
        </Button>
      </div>
    </div>
  );
};

export default CourseFilter;
