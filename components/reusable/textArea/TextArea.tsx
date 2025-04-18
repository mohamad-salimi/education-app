import React, { FC, InputHTMLAttributes } from "react";
import Typography from "../typography/Typography";
import { GoInfo } from "react-icons/go";

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  id?: string;
  placeholder?: string;
  error?: boolean;
  description?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea: FC<TextAreaProps> = ({
  placeholder,
  label,
  id,
  error,
  description,
  onChange,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm" htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        {...rest}
        rows={5}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        className={`min-h-unset block h-auto w-full appearance-none rounded-xl border text-sm ${error ? "border-red-500" : "border-secondary"} bg-white bg-clip-padding px-3 py-2 text-primary_text outline-none transition-all ease-in-out placeholder:text-sm placeholder:text-text hover:border-primary focus:border-primary focus:bg-background focus:outline-none`}
      ></textarea>
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

export default TextArea;
