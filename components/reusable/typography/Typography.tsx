import React, { FC, ReactNode } from "react";
import {
  TypographyColors,
  TypographyVarinats,
  variantClasses,
  colorClasses,
} from "./Typography.types";

interface TypographyProps {
  variant: TypographyVarinats;
  color?: TypographyColors;
  component?: React.ElementType;
  children: ReactNode;
  className?: string;
}

const Typography: FC<TypographyProps> = ({
  variant = "body_main",
  color,
  component: Component = "span",
  children,
  className,
}) => {
  return (
    <Component
      className={`${variantClasses[variant]} ${color ? colorClasses[color] : "text-inherit"} ${className ? className : ""}`}
    >
      {children}
    </Component>
  );
};

export default Typography;
