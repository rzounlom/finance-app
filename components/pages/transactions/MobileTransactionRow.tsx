import { FC } from "react";
import Image from "next/image";
import { Transaction } from "@/lib/types";

type MobileTransactionRowProps = {
  transaction: Transaction;
};

const MobileTransactionRow: FC<MobileTransactionRowProps> = ({
  transaction,
}) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-full`}
        >
          <Image
            src={transaction.avatar}
            alt={transaction.name}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>

        {/* Transaction Info */}
        <div>
          <p className="font-bold text-gray-900">{transaction.name}</p>
          <p className="text-sm text-gray-500">{transaction.category}</p>
        </div>
      </div>

      {/* Amount & Date */}
      <div className="text-right">
        <p
          className={`font-bold ${
            transaction.amount > 0 ? "text-money-green" : "text-gray-900"
          }`}
        >
          {transaction.amount > 0 ? "+" : ""}$
          {Math.abs(transaction.amount).toFixed(2)}
        </p>
        <p className="text-sm text-gray-500">{transaction.date}</p>
      </div>
    </div>
  );
};

export default MobileTransactionRow;
