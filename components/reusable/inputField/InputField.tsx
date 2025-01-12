import React, { FC, InputHTMLAttributes } from "react";
import Typography from "../typography/Typography";
import { GoInfo } from "react-icons/go";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  description?: string;
}

const InputField: FC<InputFieldProps> = ({
  label,
  id,
  error,
  description,
  disabled,
  type,
  placeholder,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        disabled={disabled}
        id={id}
        className={`h-12 rounded-lg border p-2 outline-none placeholder:text-sm hover:border-primary focus:border-primary focus:bg-background ${error ? "border-red-500" : "border-secondary"}`}
        placeholder={placeholder}
        {...rest}
      />
      {(error || description) && (
        <Typography
          variant="body_smallest"
          color={error ? "red-500" : "text"}
          className="flex items-center gap-1"
        >
          <GoInfo />

          {description}
        </Typography>
      )}
    </div>
  );
};

export default InputField;
