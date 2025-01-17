import React, { FC, InputHTMLAttributes } from "react";
import Typography from "../typography/Typography";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
}

const RadioButton: FC<RadioButtonProps> = ({
  label,
  id,
  disabled,
  ...rest
}) => {
  return (
    <label htmlFor={id} className="inline-flex cursor-pointer items-center">
      <input type="radio" className="hidden" {...rest} />
      <span
        className={`relative m-1.5 block h-5 w-5 rounded-full border-2 border-secondary duration-200 ease-in-out before:absolute before:left-1/2 before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-[50%] before:bg-primary before:opacity-0 before:transition-opacity before:duration-200 ${disabled ? "pointer-events-none select-none opacity-[0.5]" : ""}`}
      ></span>
      {label && (
        <Typography variant="body_small" color="text">
          {label}
        </Typography>
      )}
    </label>
  );
};

export default RadioButton;
