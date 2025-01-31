import React, { FC, InputHTMLAttributes } from "react";
import Typography from "../typography/Typography";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
}

const Checkbox: FC<CheckboxProps> = ({
  label,
  id,
  checked,
  disabled,
  ...rest
}) => {
  return (
    <label
      className={`inline-flex w-full cursor-pointer items-center justify-between ${disabled ? "pointer-events-none select-none text-text" : ""}`}
      htmlFor={id}
    >
      {label && (
        <Typography
          variant="body_main"
          color={checked ? "primary_text" : "text"}
        >
          {label}
        </Typography>
      )}
      <input
        type="checkbox"
        id={id}
        className={`relative aspect-square h-6 w-6 cursor-pointer !appearance-none rounded border border-secondary bg-white !text-transparent !outline-none !ring-0 !ring-offset-0 transition-all duration-300 ease-in-out after:absolute after:left-[50%] after:top-[40%] after:h-[55%] after:w-[30%] after:-translate-x-2/4 after:-translate-y-2/4 after:rotate-[45deg] after:border-b-[0.17em] after:border-r-[0.17em] after:border-b-white after:border-r-white after:opacity-0 after:drop-shadow-[1px_0.5px_1px_rgba(56,149,248,0.5)] after:transition-all after:duration-200 after:ease-linear checked:!border-neutral-50 checked:!bg-gradient-to-tr checked:!from-primary checked:!to-primary checked:after:rotate-45 checked:after:opacity-100 focus-visible:!outline-2 focus-visible:!outline-offset-2 ${checked ? "!border-neutral-50 !bg-gradient-to-tr !from-primary !to-primary after:rotate-45 after:opacity-100" : ""}`}
        {...rest}
      />
    </label>
  );
};

export default Checkbox;
