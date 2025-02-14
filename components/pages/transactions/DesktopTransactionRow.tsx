import { FC } from "react";
import Image from "next/image";
import { Transaction } from "@/lib/types";

type DesktopTransactionRowProps = {
  transaction: Transaction;
};

const DesktopTransactionRow: FC<DesktopTransactionRowProps> = ({
  transaction,
}) => {
  return (
    <tr className="border-t border-gray-200 hover:bg-gray-50">
      <td className="p-1 lg:p-3 flex items-center gap-3 w-full">
        <Image
          src={transaction.avatar}
          alt={transaction.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <span>{transaction.name}</span>
      </td>
      <td className="p-1 lg:p-3 w-[20%]">{transaction.category}</td>
      <td className="p-1 lg:p-3 w-[20%]">{transaction.date}</td>
      <td
        className={`p-1 lg:p-3 w-[20%] ${
          transaction.amount > 0 ? "text-money-green" : "text-gray-900"
        }`}
      >
        {transaction.amount > 0 ? "+" : ""}$
        {Math.abs(transaction.amount).toFixed(2)}
      </td>
    </tr>
  );
};

export default DesktopTransactionRow;
