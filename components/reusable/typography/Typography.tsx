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
}

const Typography: FC<TypographyProps> = ({
  variant = "body_main",
  color = "primary_text",
  component: Component = "span",
  children,
}) => {
  return (
    <Component className={`${variantClasses[variant]} ${colorClasses[color]}`}>
      {children}
    </Component>
  );
};

export default Typography;
