import { FC } from "react";
import { Pot } from "@/lib/types";
import clsx from "clsx";

type PotSummaryProps = {
  pot: Pot;
};

const PotSummary: FC<PotSummaryProps> = ({ pot }) => {
  const target = 2000; // Example target amount
  const percentage = Math.min((pot.amount / target) * 100, 100);
  const spanSyles = clsx(`w-3 h-3 rounded-full`, {
    "bg-orange-400": pot?.color === "orange",
    "bg-blue-400": pot?.color === "blue",
    "bg-green-500": pot?.color === "green",
    "bg-purple-500": pot?.color === "purple",
  });

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full h-[317px] lg:h-[303px] lg:max-w-[49%]">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className={spanSyles}></span>
          <h3 className="text-lg font-bold">{pot.name}</h3>
        </div>
        <button className="text-gray-400 hover:text-gray-600">⋮</button>
      </div>

      <p className="text-gray-500 text-sm mt-2">Total Saved</p>

      {/* Amount */}
      <p className="text-3xl font-bold mt-1">${pot.amount.toFixed(2)}</p>

      {/* Progress Bar */}
      <div className="w-full h-3 bg-gray-100 rounded-full mt-3">
        <div
          className="h-full rounded-full"
          style={{
            backgroundColor: pot.color.replace("bg-", ""), // Extracting Tailwind color
            width: `${percentage}%`,
          }}
        ></div>
      </div>

      {/* Percentage & Target */}
      <div className="flex justify-between mt-2">
        <p className="text-sm font-bold">{percentage.toFixed(2)}%</p>
        <p className="text-sm text-gray-500">
          Target of ${target.toLocaleString()}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <button className="p-3 bg-beige text-black rounded-lg font-semibold">
          + Add Money
        </button>
        <button className="p-3 bg-beige text-black rounded-lg font-semibold">
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default PotSummary;
