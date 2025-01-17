import React, { FC, InputHTMLAttributes } from "react";
import SearchIcon from "@/components/icons/searchIcon/SearchIcon";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const SearchInput: FC<SearchInputProps> = ({ id, placeholder, ...rest }) => {
  return (
    <div className="w-full max-w-[500px]">
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 start-0 z-20 flex cursor-pointer items-center px-3 text-text">
          <SearchIcon />
        </div>

        <input
          type={"text"}
          id={id}
          className="ease hover:bg-back h-12 w-full rounded-lg border border-secondary bg-transparent py-2 pl-11 pr-3 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-text hover:border-primary focus:border-primary focus:bg-background focus:shadow focus:outline-none"
          placeholder={placeholder}
          {...rest}
        />
      </div>
    </div>
  );
};

export default SearchInput;
