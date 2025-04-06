"use client";

import React from "react";
import InputField from "@/components/reusable/inputField/InputField";
import SelectOption from "@/components/reusable/selectOption/SelectOption";
import TextArea from "@/components/reusable/textArea/TextArea";
import Button from "@/components/reusable/button/Button";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

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

interface RegistrationFormInput {
  name: string;
  category: string;
  language: string;
  level: string;
  skills: string;
  price: string;
  description: string;
}

const Registration = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormInput>({
    defaultValues: {
      name: "",
      category: "",
      language: "",
      level: "",
      skills: "",
      price: "",
      description: "",
    },
  });

  const onSubmit: SubmitHandler<RegistrationFormInput> = (data) => {
    console.log(data);
  };
  return (
    <>
      <form
        className="flex flex-col gap-y-4 p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="name"
          control={control}
          rules={{
            required: "Course name is required",
          }}
          render={({ field: { value, onChange } }) => (
            <InputField
              label="Course Name"
              placeholder="Expamle"
              id="course-name"
              onChange={onChange}
              value={value}
              error={!!errors?.name}
              description={errors?.name?.message}
            />
          )}
        />

        <Controller
          name="category"
          control={control}
          rules={{
            required: "Category is required",
          }}
          render={({ field: { value, onChange } }) => {
            return (
              <SelectOption
                id="category"
                label="Category"
                options={categories}
                placeholder="Select Category"
                value={value}
                onChange={onChange}
                error={!!errors?.category}
                description={errors?.category?.message}
              />
            );
          }}
        />

        <Controller
          name="language"
          control={control}
          rules={{
            required: "Language is required",
          }}
          render={({ field: { value, onChange } }) => (
            <SelectOption
              id="language"
              label="Language"
              options={languages}
              placeholder="Select Language"
              value={value}
              onChange={onChange}
              error={!!errors?.language}
              description={errors?.language?.message}
            />
          )}
        />

        <Controller
          name="level"
          control={control}
          rules={{
            required: "Level is required",
          }}
          render={({ field: { value, onChange } }) => (
            <SelectOption
              id="level"
              label="Level"
              options={levels}
              placeholder="Level of your course"
              value={value}
              onChange={onChange}
              error={!!errors?.level}
              description={errors?.level?.message}
            />
          )}
        />

        <Controller
          name="skills"
          control={control}
          rules={{
            required: "Skills is required",
          }}
          render={({ field: { value, onChange } }) => (
            <InputField
              label="Skills"
              placeholder="Skill you will teach"
              id="skills"
              onChange={onChange}
              value={value}
              error={!!errors?.skills}
              description={errors?.skills?.message}
            />
          )}
        />

        <Controller
          name="price"
          control={control}
          rules={{
            required: "Price is required",
          }}
          render={({ field: { value, onChange } }) => (
            <InputField
              label="Price"
              type="tel"
              id="price"
              postfix="USD"
              onChange={onChange}
              value={value}
              error={!!errors?.price}
              description={errors?.price?.message}
            />
          )}
        />

        <Controller
          name="description"
          control={control}
          rules={{
            required: "Description is required",
          }}
          render={({ field }) => {
            return (
              <TextArea
                {...field}
                label="Description"
                id="description"
                placeholder="Briefly describe your course"
                onChange={field.onChange}
                value={field.value}
                error={!!errors?.description}
                description={errors?.description?.message}
              />
            );
          }}
        />
      </form>
      <div className="sticky bottom-0 left-0 flex w-full items-center justify-center border-t border-t-secondary bg-white px-5 py-4 shadow-sm">
        <Button format="primary" type="submit" onClick={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </div>
    </>
  );
};

export default Registration;
