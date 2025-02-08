import BillCard from "./BillCard";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

export type Bill = {
  name: string;
  amount: number;
  color: string; // Tailwind CSS class for the left border color
};

type RecurringBillsListProps = {
  bills: Bill[];
};
const RecurringBillsList: FC<RecurringBillsListProps> = ({ bills }) => {
  return (
    <div className="bg-white mt-[2%] xl:mt-0 rounded-xl p-6 shadow-md row-span-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold">Recurring Bills</h3>
        <Link
          href="recurring-bills"
          className="text-sm text-gray-500 flex items-center"
        >
          See Details
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

      {/* List of Bills */}
      <div className="space-y-4">
        {bills.map((bill, index) => (
          <BillCard key={index} bill={bill} />
        ))}
      </div>
    </div>
  );
};

export default RecurringBillsList;
