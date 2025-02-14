import React, { useState } from "react";

import Image from "next/image";

type CategoryDropdownProps = {
  category: string;
  setCategory: (value: string) => void;
  categories: string[];
};

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  category,
  setCategory,
  categories,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:w-[177px] h-[45px]">
      {/* Select Input */}
      <button
        className="flex items-center justify-center w-full h-full text-left p-2 md:border md:border-gray-300 md:rounded-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="hidden md:block">{category}</span>
        <Image
          className="hidden md:block ml-4"
          src="/arrow-down.svg"
          height={16}
          width={16}
          alt="arrow down icon"
        />

        <Image
          className="md:hidden ml-4"
          src="/filter.svg"
          height={20}
          width={20}
          alt="filter icon"
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="min-w-[160px] absolute z-10 bg-white border border-gray-300 rounded-lg mt-1 left-[-100px] md:left-0 w-full shadow-lg">
          {categories.map((option) => (
            <button
              key={option}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                category === option ? "font-bold" : "text-gray-700"
              }`}
              onClick={() => {
                setCategory(option);
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

export default CategoryDropdown;
