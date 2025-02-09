"use client";

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";

import BudgetCard from "./BudgetCard";
import { Doughnut } from "react-chartjs-2";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

ChartJS.register(ArcElement, Tooltip, Legend);

export type Budget = {
  name: string;
  amount: number;
  color: string;
  colorHash: string;
};

type BudgetsListProps = {
  budgets: Budget[];
  totalLimit: number;
};

const BudgetsList: FC<BudgetsListProps> = ({ budgets, totalLimit }) => {
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
    labels: budgets.map((budget) => budget.name),
    datasets: [
      {
        data: budgets.map((budget) => budget.amount),
        backgroundColor: budgets.map((budget) => budget.colorHash),
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md row-span-7">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold">Budgets</h3>
        <Link
          href="/budgets"
          className="text-sm text-gray-500 flex items-center"
        >
          See Details{" "}
          <span className="ml-1">
            <Image
              src="/details-arrow.svg"
              height={12}
              width={12}
              alt="details arrow right"
            />
          </span>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Chart with Centered Text */}
        <div className="flex justify-center items-center md:w-[80%]">
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
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
          {budgets.map((budget) => (
            <BudgetCard key={budget.name} budget={budget} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetsList;
