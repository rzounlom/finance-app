import React, { useState } from "react";

import Image from "next/image";

type SortDropdownProps = {
  sortBy: string;
  setSortBy: (value: string) => void;
};

const SortDropdown: React.FC<SortDropdownProps> = ({ sortBy, setSortBy }) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = ["Latest", "Oldest", "A to Z", "Z to A", "Highest", "Lowest"];

  return (
    <div className="relative md:w-[113px] h-[45px] ">
      {/* Select Input */}
      <button
        className="w-full h-full flex items-center justify-center text-left p-2 md:border md:border-gray-300 md:rounded-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="hidden md:block">{sortBy}</span>
        <Image
          className="hidden md:block ml-4"
          src="/arrow-down.svg"
          height={16}
          width={16}
          alt="arrow down icon"
        />

        <Image
          className="md:hidden ml-4"
          src="/sort.svg"
          height={20}
          width={20}
          alt="sort icon"
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="min-w-[95px] absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 w-full shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                sortBy === option ? "font-bold" : "text-gray-700"
              }`}
              onClick={() => {
                setSortBy(option);
                setIsOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
