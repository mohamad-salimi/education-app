import React, { FC } from "react";

type BadgeProps = {
  title: string;
  format: "primary" | "info" | "warning" | "error" | "success";
};

const Badge: FC<BadgeProps> = ({ title, format }) => {
  const badgeClasses: Record<BadgeProps["format"], string> = {
    primary: "text-violet-600 bg-violet-50",
    info: "text-indigo-600 bg-indigo-50",
    error: "text-pink-600 bg-pink-50",
    success: "text-teal-600 bg-teal-50",
    warning: "text-amber-500 bg-amber-50",
  };

  return (
    <span
      className={`${badgeClasses[format]} px-3.5 py-2 flex items-center justify-center rounded-[30px] w-fit min-w-[70px] `}
    >
      {title}
    </span>
  );
};

export default Badge;
