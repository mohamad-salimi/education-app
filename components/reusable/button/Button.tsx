import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  format: "primary" | "tonal" | "text";
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  format,
  disabled,
  className,
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
      } w-full min-w-[250px] rounded-xl px-3 py-4 ${
        disabled ? "pointer-events-none opacity-50" : ""
      } ${className ? className : ""}`}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
