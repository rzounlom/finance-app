import Image from "next/image";
import React from "react";

type TransactionCardProps = {
  name: string;
  date: string;
  amount: number;
  avatar: string;
};

const TransactionsCard: React.FC<TransactionCardProps> = ({
  name,
  date,
  amount,
  avatar,
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
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>

      {/* Right: Amount */}
      <p
        className={`text-sm font-semibold ${
          amount > 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {amount > 0
          ? `+$${amount.toFixed(2)}`
          : `-$${Math.abs(amount).toFixed(2)}`}
      </p>
    </div>
  );
};

export default TransactionsCard;
