import { Bill } from "./RecurringBillsList";
import React from "react";

type BillCardProps = {
  bill: Bill;
};

const BillCard: React.FC<BillCardProps> = ({
  bill: { name, amount, color },
}) => {
  return (
    <div
      className={`flex items-center justify-between bg-beige p-4 rounded-xl shadow-sm border-l-4 ${color}`}
    >
      <div className="flex items-center">
        {/* Colored border */}
        <p className="text-gray-500">{name}</p>
      </div>
      <p className="text-gray-900 font-bold">${amount.toFixed(2)}</p>
    </div>
  );
};

export default BillCard;
