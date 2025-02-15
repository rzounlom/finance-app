import { Budget } from "@/lib/types";
import BudgetCard from "./BudgetCard";
import { Doughnut } from "react-chartjs-2";
import { FC } from "react";

type SpendingSummaryProps = {
  budgets: Budget[];
  totalLimit: number;
};

const SpendingSummary: FC<SpendingSummaryProps> = ({ budgets, totalLimit }) => {
  const totalUsed = budgets.reduce((sum, budget) => sum + budget.amount, 0);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    cutout: "70%", // Creates the ring effect
  };

  const data = {
    labels: budgets.map((budget: Budget) => budget.name),
    datasets: [
      {
        data: budgets.map((budget: Budget) => budget.amount),
        backgroundColor: budgets.map((budget: Budget) => budget.colorHash),
      },
    ],
  };
  return (
    <div className="flex flex-col md:flex-row xl:flex-col gap-6">
      {/* Chart with Centered Text */}
      <div className="flex justify-center items-center md:w-[45%]">
        <div className="relative w-40 h-40 mb-4 md:mb-0 md:w-56 md:h-56">
          <Doughnut data={data} options={options} />
          {/* Centered Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-2xl font-bold">${totalUsed.toFixed(2)}</p>
            <p className="text-sm text-gray-500">of ${totalLimit} limit</p>
          </div>
        </div>
      </div>

      {/* Budget Cards */}
      <div className="flex flex-col md:w-[55%]">
        <h3 className="ml-[16px] font-semibold">Spending Summary</h3>
        <div className="mt-2">
          {budgets.map((budget) => (
            <BudgetCard key={budget.name} budget={budget} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpendingSummary;
