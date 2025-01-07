import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  format: "primary" | "tonal" | "text";
}

const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  format,
  disabled,
  ...rest
}) => {
  const buttonClasses: Record<ButtonProps["format"], string> = {
    primary: "bg-primary text-white hover:shadow-primary",
    tonal: "bg-secondary text-primary hover:shadow-secondary",
    text: "bg-white text-primary hover:bg-secondary",
  };
  return (
    <button
      className={`${
        buttonClasses[format]
      } px-3 py-4 rounded-xl min-w-[250px] w-full  ${
        disabled ? "opacity-50 pointer-events-none" : ""
      }`}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
