"use client";

import React, { FC } from "react";
import { useRouter } from "next/navigation";
import Typography from "@/components/reusable/typography/Typography";
import ChevronLeftIcon from "@/components/icons/chevronLeftIcon/ChevronLeftIcon";

type HeaderProps = {
  title: string;
};

const Header: FC<HeaderProps> = ({ title }) => {
  const router = useRouter();
  return (
    <div className="sticky top-0 z-10 flex items-center justify-center border-b border-divider bg-white px-5 py-3.5 shadow-sm">
      <button
        onClick={() => router.replace("/")}
        className="absolute left-5 text-primary"
      >
        <ChevronLeftIcon />
      </button>
      <Typography variant="body_big" className="font-semibold">
        {title}
      </Typography>
    </div>
  );
};

export default Header;
