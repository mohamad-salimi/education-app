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
      className={`${badgeClasses[format]} flex w-fit min-w-[70px] items-center justify-center rounded-[30px] px-3.5 py-2`}
    >
      {title}
    </span>
  );
};

export default Badge;
