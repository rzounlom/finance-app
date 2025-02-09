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
        className="flex items-center justify-center w-full h-full text-left p-2 border border-gray-300 rounded-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {category}{" "}
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
