import React, { FC, ReactNode } from "react";
import { TypographyVarinats } from "./Typography.types";

interface TypographyProps {
  variant: TypographyVarinats;
  color?: string;
  component?: React.ElementType;
  children: ReactNode;
}

const Typography: FC<TypographyProps> = ({
  variant = "body_main",
  color = "text-gray-800",
  component: Component = "span",
  children,
}) => {
  const variantClasses: Record<TypographyProps["variant"], string> = {
    h1: "text-3xl font-bold",
    h2: "text-2xl",
    h3: "text-xl font-bold",
    h4: "text-lg font-bold",
    body_big: "text-lg",
    body_main: "text-base",
    body_small: "text-sm",
    body_smallest: "text-xs",
  };

  return (
    <Component className={`${variantClasses[variant]} ${`text-${color}`} `}>
      {children}
    </Component>
  );
};

export default Typography;
