"use client";

import React from "react";

type SkeletonVariant =
  | "text"
  | "title"
  | "circle"
  | "avatar"
  | "button"
  | "card";

type SkeletonProps = {
  variant?: SkeletonVariant;
  className?: string;
  width?: string;
  height?: string;
};

const variants: Record<SkeletonVariant, string> = {
  text: "h-4 w-32",
  title: "h-6 w-48",
  circle: "h-10 w-10 rounded-full",
  avatar: "h-12 w-12 rounded-full",
  button: "h-10 w-24 rounded",
  card: "h-40 w-full rounded-lg",
};

const Skeleton: React.FC<SkeletonProps> = ({
  variant = "text",
  className = "",
  width,
  height,
}) => {
  return (
    <div
      className={`animate-pulse bg-gray-300 ${variants[variant]} ${className}`}
      style={{ width: width + "px", height: height + "px" }}
    />
  );
};

export default Skeleton;
