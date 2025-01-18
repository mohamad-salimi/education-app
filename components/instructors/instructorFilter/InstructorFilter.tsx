import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "@/components/reusable/button/Button";
import Typography from "@/components/reusable/typography/Typography";
import RadioButton from "@/components/reusable/radioButton/RadioButton";

type InstructorFilterProps = {
  checked?: boolean;
  onClose: () => void;
};

interface IFormInput {
  category: string;
}

export const categories = [
  {
    title: "All categories",
    value: "",
  },
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

const InstructorFilter: FC<InstructorFilterProps> = ({ onClose }) => {
  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      category: "",
    },
  });

  const onSubmit = () => {
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
            name="category"
            control={control}
            key={item.value}
            render={({ field }) => {
              return (
                <div className="flex items-center justify-between py-1.5">
                  <RadioButton
                    {...field}
                    label={item.title}
                    value={item.value}
                    onChange={field.onChange}
                    checked={item.value === field.value}
                  />
                </div>
              );
            }}
          />
        ))}
        <div>
          <Button format="primary" onClick={onSubmit} className="mt-3">
            Show results
          </Button>
        </div>
      </div>
    </form>
  );
};

export default InstructorFilter;
