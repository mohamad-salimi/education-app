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
  onClick?: () => void;
}

const Typography: FC<TypographyProps> = ({
  variant = "body_main",
  color,
  component: Component = "span",
  children,
  className,
  onClick,
}) => {
  return (
    <Component
      className={`${variantClasses[variant]} ${color ? colorClasses[color] : "text-inherit"} ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

export default Typography;
