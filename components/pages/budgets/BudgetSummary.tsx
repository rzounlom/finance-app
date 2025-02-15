import { Budget, Transaction } from "@/lib/types";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type BudgetSummaryProps = {
  budget: Budget;
  transactions: Transaction[];
};

const BudgetSummary: FC<BudgetSummaryProps> = ({ budget, transactions }) => {
  // Filter transactions for this budget category
  const budgetTransactions = transactions.filter(
    (transaction) => transaction.category === budget.name
  );

  // Calculate spent & remaining amounts
  const spent = budgetTransactions.reduce(
    (sum, transaction) => sum + Math.abs(transaction.amount),
    0
  );
  const remaining = budget.amount - spent;
  const spentPercentage = Math.min((spent / budget.amount) * 100, 100); // Ensure max is 100%

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span
            className={clsx(`w-3 h-3 rounded-full`)}
            style={{ backgroundColor: budget.colorHash }}
          ></span>
          <h3 className="text-lg font-bold">{budget.name}</h3>
        </div>
        <button className="text-gray-400 hover:text-gray-600">⋮</button>
      </div>

      <p className="text-gray-500 text-sm mt-2">
        Maximum of ${budget.amount.toFixed(2)}
      </p>

      {/* Progress Bar */}
      <div className="w-full h-3 bg-gray-100 rounded-full mt-3">
        <div
          className="h-full rounded-full"
          style={{
            backgroundColor: budget.colorHash,
            width: `${spentPercentage}%`,
          }}
        ></div>
      </div>

      {/* Spent & Remaining */}
      <div className="flex justify-between mt-4">
        <div className="flex items-center gap-2">
          <span className="w-1 h-6 bg-gray-400 rounded-full"></span>
          <div>
            <p className="text-gray-500 text-sm">Spent</p>
            <p className="text-md font-bold">${spent.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1 h-6 bg-gray-400 rounded-full"></span>
          <div>
            <p className="text-gray-500 text-sm">Remaining</p>
            <p className="text-md font-bold">${remaining.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Latest Spending */}
      <div className="bg-gray-50 p-4 mt-5 rounded-xl">
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-md">Latest Spending</h4>
          <Link
            href="/transactions"
            className="text-sm text-gray-500 flex items-center"
          >
            See All
            <Image
              src="/details-arrow.svg"
              height={12}
              width={12}
              alt="See all transactions"
              className="ml-1"
            />
          </Link>
        </div>

        {/* Recent Transactions */}
        <div className="mt-3 space-y-3">
          {budgetTransactions.slice(0, 3).map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-2 border-b last:border-none"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={transaction.avatar}
                  alt={transaction.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-bold text-gray-900">{transaction.name}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </div>
              <p
                className={`font-bold ${
                  transaction.amount < 0 ? "text-red-500" : "text-teal-500"
                }`}
              >
                {transaction.amount < 0 ? "-" : "+"}$
                {Math.abs(transaction.amount).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetSummary;
