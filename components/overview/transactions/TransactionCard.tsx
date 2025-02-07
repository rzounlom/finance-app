import Image from "next/image";
import React from "react";
import { Transaction } from "./TransactionsList";

type TransactionCardProps = {
  transaction: Transaction;
};

const TransactionCard: React.FC<TransactionCardProps> = ({
  transaction: { name, date, amount, avatar },
}) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200 last:border-none">
      {/* Left: Avatar and Name */}
      <div className="flex items-center space-x-4">
        <Image
          src={avatar}
          alt={name}
          height={32}
          width={32}
          className="rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-gray-900">{name}</p>
        </div>
      </div>

      {/* Right: Amount */}
      <div>
        <p
          className={`text-sm font-semibold ${
            amount > 0 ? "text-money-green" : "text-gray-900"
          }`}
        >
          {amount > 0
            ? `+$${amount.toFixed(2)}`
            : `-$${Math.abs(amount).toFixed(2)}`}
        </p>
        <p className="text-sm text-gray-500 mt-2">{date}</p>
      </div>
    </div>
  );
};

export default TransactionCard;
