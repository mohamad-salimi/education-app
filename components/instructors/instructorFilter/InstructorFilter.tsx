import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "@/components/reusable/button/Button";
import Typography from "@/components/reusable/typography/Typography";
import Checkbox from "@/components/reusable/checkbox/Checkbox";

type InstructorFilterProps = {
  checked?: boolean;
  onClose: () => void;
};

interface IFormInput {
  all: boolean;
  design: boolean;
  programing: boolean;
  medicine: boolean;
  soft_skills: boolean;
}

type CategoryType =
  | "all"
  | "design"
  | "programing"
  | "medicine"
  | "soft_skills";

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
    title: "Programing",
    value: "programing",
  },
  {
    title: "Medicine",
    value: "medicine",
  },
  {
    title: "Soft skills",
    value: "soft_skills",
  },
];

const InstructorFilter: FC<InstructorFilterProps> = ({ onClose }) => {
  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      all: false,
      design: false,
      programing: false,
      medicine: false,
      soft_skills: false,
    },
  });

  const onSubmit = (data: IFormInput) => {
    console.log(data);
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
