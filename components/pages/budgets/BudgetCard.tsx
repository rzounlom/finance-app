import { Budget } from "@/lib/types";
import { FC } from "react";
import { LineVertical } from "@phosphor-icons/react";
import clsx from "clsx"; // ✅ Ensure to install clsx for safer class handling

type BudgetCardProps = {
  budget: Budget;
};

const BudgetCard: FC<BudgetCardProps> = ({
  budget: { name, amount, color },
}) => {
  // ✅ Safe color mapping approach
  const pillColor = clsx({
    "text-orange-400": color === "orange",
    "text-blue-400": color === "blue",
    "text-teal-500": color === "teal",
    "text-purple-500": color === "purple",
  });

  return (
    <div className="flex items-center h-[42px] border-b-[1px] border-gray-100">
      <LineVertical size={42} className={pillColor} />
      <div className="w-full flex items-start justify-between">
        <p className="text-sm text-gray-500">{name}</p>
        <p className="text-md font-bold mt-1">${amount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default BudgetCard;
