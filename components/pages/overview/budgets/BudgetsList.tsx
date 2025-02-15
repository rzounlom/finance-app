"use client";

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";

import { Budget } from "@/lib/types";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import SpendingSummary from "./SpendingSummary";

ChartJS.register(ArcElement, Tooltip, Legend);

type BudgetsListProps = {
  budgets: Budget[];
  totalLimit: number;
};

const BudgetsList: FC<BudgetsListProps> = ({ budgets, totalLimit }) => {
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

      <SpendingSummary budgets={budgets} totalLimit={totalLimit} />
    </div>
  );
};

export default BudgetsList;
