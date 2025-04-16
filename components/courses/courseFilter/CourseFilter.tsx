"use client";

import React, { FC } from "react";
import Typography from "@/components/reusable/typography/Typography";
import SelectOption from "@/components/reusable/selectOption/SelectOption";
import InputField from "@/components/reusable/inputField/InputField";
import Button from "@/components/reusable/button/Button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { sorts } from "constants/Sorts";
import { categories } from "constants/Categories";
import { languages } from "constants/Languages";
import { levels } from "constants/Levels";

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
  const searchParams = useSearchParams();

  const defaultValues = {
    sort: searchParams.get("sort") || "",
    category: searchParams.get("category") || "",
    language: searchParams.get("language") || "",
    level: searchParams.get("level") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
  };
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CourseFilterFormInput>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<CourseFilterFormInput> = async (payload) => {
    const newQuery = new URLSearchParams(searchParams.toString());

    Object.entries(payload).forEach(([key, value]) => {
      if (value) {
        newQuery.set(key, value);
      } else {
        newQuery.delete(key);
      }
    });

    router.push(`/courses?${newQuery.toString()}`);
    onClose();
  };

  const handleReset = () => {
    router.replace("/courses");
    onClose();
  };

  return (
    <div className="flex h-full flex-col gap-y-6 px-5 py-4">
      <div className="flex items-center justify-between">
        <Typography variant="h2">Filter</Typography>
        {searchParams.size > 0 && (
          <Typography
            variant="body_small"
            onClick={handleReset}
            className="flex cursor-pointer items-center gap-x-1 rounded-lg border border-secondary px-2 py-1.5"
          >
            Reset Filters
          </Typography>
        )}
      </div>
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
