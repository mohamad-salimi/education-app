import React, { FC, InputHTMLAttributes } from "react";
import Typography from "../typography/Typography";
import TickIcon from "@/components/icons/tickIcon/TickIcon";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
}

const RadioButton: FC<RadioButtonProps> = ({
  label,
  id,
  checked,
  disabled,
  ...rest
}) => {
  return (
    <label
      htmlFor={id}
      className={`inline-flex w-full cursor-pointer items-center justify-between ${disabled ? "pointer-events-none select-none text-text" : ""}`}
    >
      <input type="radio" className="hidden" {...rest} />
      {label && (
        <Typography
          variant="body_main"
          color={checked ? "primary_text" : "text"}
        >
          {label}
        </Typography>
      )}
      {checked && (
        <span className="text-primary">
          <TickIcon />
        </span>
      )}
    </label>
  );
};

export default RadioButton;
