"use client";

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";

import { Budget } from "@/lib/types";
import { FC } from "react";
import SpendingSummary from "./SpendingSummary";

ChartJS.register(ArcElement, Tooltip, Legend);

type BudgetsListProps = {
  budgets: Budget[];
  totalLimit: number;
};

const BudgetsList: FC<BudgetsListProps> = ({ budgets, totalLimit }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <SpendingSummary budgets={budgets} totalLimit={totalLimit} />
    </div>
  );
};

export default BudgetsList;
