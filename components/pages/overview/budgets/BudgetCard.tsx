import { Budget } from "@/lib/types";
import { FC } from "react";

type BudgetCardProps = {
  budget: Budget;
};

const BudgetCard: FC<BudgetCardProps> = ({
  budget: { name, amount, color },
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center h-full">
        <span className={`w-1 h-full rounded-full ${color} mr-4`}></span>
      </div>
      <div className="flex flex-col items-start w-full">
        <p className="text-sm text-gray-500">{name}</p>{" "}
        <p className="text-md font-bold mt-1">${amount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default BudgetCard;
