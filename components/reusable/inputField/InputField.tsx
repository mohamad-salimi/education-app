"use client";

import React, { FC, InputHTMLAttributes, useState } from "react";
import Typography from "../typography/Typography";
import EyeIcon from "@/components/icons/eyeIcon/EyeIcon";
import { GoInfo } from "react-icons/go";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  description?: string;
  postfix?: string;
}

const InputField: FC<InputFieldProps> = ({
  label,
  id,
  error,
  description,
  disabled,
  type,
  placeholder,
  postfix,
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
            className="absolute inset-y-0 end-0 z-20 flex cursor-pointer items-center px-3 text-text"
            onClick={toggleVisibility}
            aria-label={isVisible ? "Hide password" : "Show password"}
            aria-pressed={isVisible}
            aria-controls="password"
          >
            {isVisible ? (
              <div className="relative inline-block after:absolute after:left-[-2px] after:top-1/2 after:h-[1px] after:w-[22px] after:origin-center after:-translate-y-1/2 after:rotate-45 after:transform after:bg-text after:content-['']">
                <EyeIcon />
              </div>
            ) : (
              <EyeIcon />
            )}
          </button>
        )}
        {postfix && (
          <Typography
            className="absolute inset-y-0 end-0 right-2 z-20 flex items-center text-text"
            variant="body_smallest"
          >
            {postfix}
          </Typography>
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
