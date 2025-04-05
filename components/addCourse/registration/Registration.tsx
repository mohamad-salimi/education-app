"use client";

import React from "react";
import InputField from "@/components/reusable/inputField/InputField";
import SelectOption from "@/components/reusable/selectOption/SelectOption";
import TextArea from "@/components/reusable/textArea/TextArea";
import Button from "@/components/reusable/button/Button";
import { useForm, Controller } from "react-hook-form";

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

interface RegistrationFormInput {
  name: string;
  category: string;
  language: "english" | "persian";
  skllis: string;
  price: string;
  description: string;
}

const Registration = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormInput>();

  const onSubmit = (data: RegistrationFormInput) => {
    console.log(data);
  };
  return (
    <form
      className="mb-20 flex h-screen flex-col gap-y-4 p-5"
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
        render={({ field: { value, onChange } }) => (
          <SelectOption
            id="category"
            label="Category"
            options={categories}
            placeholder="Select Category"
            value={value}
            onChange={onChange}
          />
        )}
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
          />
        )}
      />

      <Controller
        name="skllis"
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
            error={!!errors?.skllis}
            description={errors?.skllis?.message}
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
        render={({ field: { value, onChange } }) => (
          <TextArea
            label="Description"
            id="description"
            placeholder="Briefly describe your course"
            onChange={onChange}
            value={value}
            error={!!errors?.description}
            description={errors?.description?.message}
          />
        )}
      />

      <div className="fixed bottom-0 left-0 flex w-full items-center justify-center border-t border-secondary bg-white px-5 py-4">
        <Button format="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Registration;
