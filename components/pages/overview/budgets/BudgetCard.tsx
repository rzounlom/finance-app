import { Budget } from "@/lib/types";
import { FC } from "react";
import clsx from "clsx"; // ✅ Ensure to install clsx for safer class handling

type BudgetCardProps = {
  budget: Budget;
};

const BudgetCard: FC<BudgetCardProps> = ({
  budget: { name, amount, color },
}) => {
  // ✅ Safe color mapping approach
  const bgColor = clsx({
    "bg-orange-400": color === "orange",
    "bg-blue-400": color === "blue",
    "bg-teal-500": color === "teal",
    "bg-purple-500": color === "purple",
  });

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center h-full">
        {/* ✅ Correct way to apply Tailwind colors */}
        <span className={`w-1 h-full rounded-full ${bgColor} mr-4`}></span>
      </div>
      <div className="flex flex-col items-start w-full">
        <p className="text-sm text-gray-500">{name}</p>
        <p className="text-md font-bold mt-1">${amount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default BudgetCard;
