"use client";

import React, { FC, InputHTMLAttributes, useState } from "react";
import Typography from "../typography/Typography";
import { GoInfo } from "react-icons/go";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

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
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={isVisible ? "text" : type}
          disabled={disabled}
          id={id}
          className={`h-12 w-full rounded-lg border p-2 outline-none placeholder:text-sm hover:border-primary focus:border-primary focus:bg-background ${error ? "border-red-500" : "border-secondary"}`}
          placeholder={placeholder}
          {...rest}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute inset-y-0 end-0 z-20 flex cursor-pointer items-center px-3"
            onClick={toggleVisibility}
            aria-label={isVisible ? "Hide password" : "Show password"}
            aria-pressed={isVisible}
            aria-controls="password"
          >
            {isVisible ? (
              <AiOutlineEyeInvisible color="#8A90A2" aria-hidden="true" />
            ) : (
              <AiOutlineEye color="#8A90A2" aria-hidden="true" />
            )}
          </button>
        )}
      </div>
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
