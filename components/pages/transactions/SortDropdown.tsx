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
        className="w-full h-[45px] flex items-center justify-center text-left p-2 border border-gray-300 rounded-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {sortBy}
        <Image
          className="ml-4"
          src="/arrow-down.svg"
          height={16}
          width={16}
          alt="arrow down"
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 w-full shadow-lg">
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
