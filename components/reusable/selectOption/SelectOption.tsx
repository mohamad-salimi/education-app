"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

type Options = {
  value: string | number;
  title: string;
};

interface SelectOptionProps {
  label: string;
  placeholder: string;
  id: string;
  options: Options[];
  onChange: (value: string | number) => void;
}

const SelectOption: FC<SelectOptionProps> = ({
  label,
  id,
  placeholder,
  options,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex flex-col gap-y-1.5" ref={selectRef}>
      <label htmlFor={id} className="text-sm text-gray-900">
        {label}
      </label>

      <div
        className={`flex h-12 cursor-pointer items-center justify-between rounded-lg border px-2 py-3 transition-all duration-300 ease-in-out ${isOpen ? "border-primary bg-background" : "border-secondary"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected
          ? options.find((opt) => opt.value === selected)?.title
          : placeholder}
        <span className={`${isOpen ? "rotate-180" : ""} duration-300`}>
          <MdKeyboardArrowDown size={18} />
        </span>
      </div>

      <div
        className={`absolute top-20 z-10 mt-1 w-full overflow-auto rounded-lg border border-secondary bg-white shadow-sm transition-all duration-300 ease-in-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {options.map((option, index) => (
          <div
            key={`${id}_${index}`}
            className={`cursor-pointer rounded p-3 text-sm transition ${selected === option.value ? "bg-indigo-400 text-white" : "hover:bg-indigo-400 hover:text-white"}`}
            onClick={() => handleSelect(option.value as string)}
          >
            {option.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectOption;
