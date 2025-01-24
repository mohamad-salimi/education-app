import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "@/components/reusable/button/Button";
import Typography from "@/components/reusable/typography/Typography";
import Checkbox from "@/components/reusable/checkbox/Checkbox";
import { useRouter, useSearchParams } from "next/navigation";

type InstructorFilterProps = {
  onClose: () => void;
};

interface IFormInput {
  all: boolean;
  design: boolean;
  programming: boolean;
  data: boolean;
  product: boolean;
  marketing: boolean;
  teacher: boolean;
}

type CategoryType =
  | "all"
  | "design"
  | "programming"
  | "data"
  | "product"
  | "marketing"
  | "teacher";

export const categories = [
  {
    title: "All categories",
    value: "all",
  },
  {
    title: "Design",
    value: "design",
  },
  {
    title: "Programming",
    value: "programming",
  },
  {
    title: "Product",
    value: "product",
  },
  {
    title: "Data Science",
    value: "data",
  },
  {
    title: "Marketing",
    value: "marketing",
  },
  {
    title: "General Science",
    value: "teacher",
  },
];

const InstructorFilter: FC<InstructorFilterProps> = ({ onClose }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fields = searchParams.get("field_of_teaching");
  console.log(fields);

  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      all: false,
      design: false,
      programming: false,
      data: false,
      product: false,
      marketing: false,
      teacher: false,
    },
  });

  const onSubmit = async (payload: IFormInput) => {
    const selectedCategories = Object.keys(payload).reduce<string[]>(
      (acc, key) => (payload[key as keyof IFormInput] ? [...acc, key] : acc),
      [],
    );
    router.push(
      `/instructors?field_of_teaching=${selectedCategories.join("_")}`,
    );
    onClose();
  };

  return (
    <form
      className="flex flex-col gap-y-4 p-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h2" className="font-semibold">
        Filter
      </Typography>
      <div className="flex flex-col gap-y-2">
        {categories.map((item) => (
          <Controller
            name={item.value as CategoryType}
            control={control}
            key={item.value}
            render={({ field }) => {
              return (
                <div className="flex items-center justify-between py-1.5">
                  <Checkbox
                    {...field}
                    label={item.title}
                    value={item.value}
                    onChange={field.onChange}
                    checked={field.value}
                  />
                </div>
              );
            }}
          />
        ))}
        <div>
          <Button
            format="primary"
            onClick={handleSubmit(onSubmit)}
            className="mt-3"
          >
            Show results
          </Button>
        </div>
      </div>
    </form>
  );
};

export default InstructorFilter;
