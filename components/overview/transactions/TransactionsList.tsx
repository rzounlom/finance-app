import React from "react";
import TransactionCard from "./TransactionCard";

type Transaction = {
  name: string;
  date: string;
  amount: number;
  avatar: string;
};

type TransactionsListProps = {
  transactions: Transaction[];
};

const TransactionsList: React.FC<TransactionsListProps> = ({
  transactions,
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-900">Transactions</h3>
        <button className="text-sm text-gray-500 flex items-center">
          View All <span className="ml-1">→</span>
        </button>
      </div>

      {/* Transactions Cards */}
      <div className="divide-y divide-gray-200">
        {transactions.map((transaction, index) => (
          <TransactionCard
            key={index}
            name={transaction.name}
            date={transaction.date}
            amount={transaction.amount}
            avatar={transaction.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionsList;
