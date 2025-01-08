import React, { FC, InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
}

const InputField: FC<InputFieldProps> = ({
  id,
  disabled,
  type,
  placeholder,
  ...rest
}) => {
  return (
    <input
      type={type}
      disabled={disabled}
      id={id}
      className="h-12 rounded-lg border border-secondary p-2 outline-none placeholder:text-sm hover:border-primary focus:border-primary focus:bg-background"
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default InputField;
