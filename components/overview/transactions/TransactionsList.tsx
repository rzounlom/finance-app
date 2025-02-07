import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import TransactionCard from "./TransactionCard";

export type Transaction = {
  name: string;
  date: string;
  amount: number;
  avatar: string;
};

type TransactionsListProps = {
  transactions: Transaction[];
};

const TransactionsList: FC<TransactionsListProps> = ({ transactions }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md mt-[28px] lg:max-w-[60%]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-900">Transactions</h3>
        <Link
          href="/transactions"
          className="text-sm text-gray-500 flex items-center"
        >
          View All{" "}
          <span className="ml-1">
            <Image
              src="/details-arrow.svg"
              height={12}
              width={12}
              alt="details arror right"
            />
          </span>
        </Link>
      </div>

      {/* Transactions Cards */}
      <div className="divide-y divide-gray-200">
        {transactions.map((transaction, index) => (
          <TransactionCard key={index} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default TransactionsList;
