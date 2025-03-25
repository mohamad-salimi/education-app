"use client";

import React, { FC } from "react";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Typography from "@/components/reusable/typography/Typography";
import LibraryIcon from "@/components/icons/libraryIcon/LibraryIcon";
import SearchIcon from "@/components/icons/searchIcon/SearchIcon";
import CourseIcon from "@/components/icons/courseIcon/CourseIcon";
import UserIcon from "@/components/icons/userIcon/UserIcon";
import { MdLogin } from "react-icons/md";

const navItems = (session: Session | null) => [
  { id: "search", href: "/", label: "Search", Icon: SearchIcon },
  { id: "course", href: "/courses", label: "Courses", Icon: CourseIcon },
  { id: "library", href: "/library", label: "Library", Icon: LibraryIcon },
  {
    id: "user",
    href: session ? "/profile" : "/signin",
    label: session ? "Account" : "Login",
    Icon: session ? UserIcon : MdLogin,
  },
];

type BottomNavigationProps = {
  session: Session | null;
};

const BottomNavigation: FC<BottomNavigationProps> = ({ session }) => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 z-40 flex w-full max-w-[500px] items-center justify-between gap-x-4 bg-white px-5">
      {navItems(session).map(({ id, href, label, Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={id}
            href={href}
            className={`flex w-full flex-col items-center gap-y-2 border-t py-2 transition-colors duration-300 ${
              isActive
                ? "border-primary text-primary"
                : "border-transparent text-text"
            }`}
          >
            <Icon size={25} />
            <Typography variant="body_smallest">{label}</Typography>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
