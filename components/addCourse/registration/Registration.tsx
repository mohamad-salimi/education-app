"use client";

import React, { useState } from "react";
import InputField from "@/components/reusable/inputField/InputField";
import SelectOption from "@/components/reusable/selectOption/SelectOption";
import TextArea from "@/components/reusable/textArea/TextArea";
import Button from "@/components/reusable/button/Button";
import toast, { Toaster } from "react-hot-toast";
import {
  useForm,
  Controller,
  SubmitHandler,
  useFieldArray,
} from "react-hook-form";
import { GoPlus } from "react-icons/go";
import { IoIosClose } from "react-icons/io";

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
  skills: { value: string }[];
  skillInput?: string; //  For temporary entry maintenance only
  price: string;
  description: string;
}

const Registration = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    register,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<RegistrationFormInput>({
    defaultValues: {
      name: "",
      category: "",
      language: "",
      level: "",
      skills: [],
      skillInput: "",
      price: "",
      description: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const skillInputValue = watch("skillInput");
  const isTyping = !!skillInputValue;

  const handleAddSkill = () => {
    const input = (getValues("skillInput") as string).trim();
    const existing = fields.map((f) => f.value);
    if (input && !existing.includes(input)) {
      append({ value: input });
      setValue("skillInput", "");
    }
  };

  const onSubmit: SubmitHandler<RegistrationFormInput> = async (payload) => {
    const finalPayload = { ...payload };
    delete finalPayload.skillInput;

    setLoading(true);
    const res = await fetch("/api/course", {
      method: "POST",
      body: JSON.stringify(finalPayload),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
    }
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
            validate: (value) =>
              value.length > 0 || "Please add at least one skill",
          }}
          render={() => (
            <div className="flex flex-col gap-2">
              <label htmlFor="skills" className="text-sm">
                Skills
              </label>

              <div className="flex items-start gap-x-3 gap-y-1.5">
                <Controller
                  name="skillInput"
                  control={control}
                  render={({ field }) => (
                    <div className="flex-auto">
                      <InputField
                        {...field}
                        error={!!errors?.skills}
                        description={errors?.skills?.root?.message}
                        placeholder="Skill you will teach"
                      />
                    </div>
                  )}
                />
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className={`flex h-12 items-center justify-center rounded-lg border border-secondary p-2 ${
                    isTyping ? "bg-background" : "bg-white"
                  }`}
                >
                  <GoPlus size={18} />
                </button>
              </div>

              {fields?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {fields.map((field, index) => (
                    <div
                      key={field.id}
                      className="flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1.5 text-sm text-indigo-600"
                    >
                      <input
                        type="hidden"
                        {...register(`skills.${index}.value` as const)}
                      />
                      {field.value}
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="text-indigo-600 hover:text-indigo-800"
                      >
                        <IoIosClose size={24} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
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
        <Button
          disabled={loading}
          format="primary"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </div>

      <Toaster />
    </>
  );
};

export default Registration;
