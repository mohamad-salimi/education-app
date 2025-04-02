import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const InstructorButton = () => {
  return (
    <Link
      href={"/add-course/intro"}
      className="relative flex w-full items-center justify-between overflow-hidden rounded bg-gradient-to-l from-[#8f94fb] to-primary p-5"
    >
      <span className="text-2xl text-white">Be a Mentor</span>
      <MdArrowOutward size={28} color="white" />

      <ul className="absolute left-0 top-0 h-full w-full overflow-hidden">
        <li
          className="absolute bottom-[-150px] left-[25%] h-20 w-20 animate-circle rounded-full bg-white/20"
          style={{ animationDuration: "25s" }}
        ></li>
        <li
          className="absolute bottom-[-150px] left-[10%] h-5 w-5 animate-circle rounded-full bg-white/20"
          style={{ animationDuration: "12s", animationDelay: "2s" }}
        ></li>
        <li
          className="absolute bottom-[-150px] left-[70%] h-5 w-5 animate-circle rounded-full bg-white/20"
          style={{ animationDuration: "25s", animationDelay: "4s" }}
        ></li>
        <li
          className="w-15 h-15 absolute bottom-[-150px] left-[40%] animate-circle rounded-full bg-white/20 duration-[18s]"
          style={{ animationDuration: "18s" }}
        ></li>
        <li
          className="absolute bottom-[-150px] left-[65%] h-5 w-5 animate-circle rounded-full bg-white/20"
          style={{ animationDuration: "25s" }}
        ></li>
        <li
          className="absolute bottom-[-150px] left-[75%] h-28 w-28 animate-circle rounded-full bg-white/20 delay-[3s]"
          style={{ animationDuration: "25s", animationDelay: "3s" }}
        ></li>
        <li
          className="absolute bottom-[-150px] left-[35%] h-36 w-36 animate-circle rounded-full bg-white/20 delay-[7s]"
          style={{ animationDuration: "25s", animationDelay: "7s" }}
        ></li>
        <li
          className="absolute bottom-[-150px] left-[50%] h-6 w-6 animate-circle rounded-full bg-white/20"
          style={{ animationDuration: "45s", animationDelay: "15s" }}
        ></li>
        <li
          className="absolute bottom-[-150px] left-[20%] h-4 w-4 animate-circle rounded-full bg-white/20 delay-[2s] duration-[35s]"
          style={{ animationDuration: "35s", animationDelay: "2s" }}
        ></li>
        <li
          className="absolute bottom-[-150px] left-[85%] h-36 w-36 animate-circle rounded-full bg-white/20 duration-[11s]"
          style={{ animationDuration: "11s" }}
        ></li>
      </ul>
    </Link>
  );
};

export default InstructorButton;
