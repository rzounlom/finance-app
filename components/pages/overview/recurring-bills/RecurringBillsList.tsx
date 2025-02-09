import { Bill } from "@/lib/types";
import BillCard from "./BillCard";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

type RecurringBillsListProps = {
  bills: Bill[];
};
const RecurringBillsList: FC<RecurringBillsListProps> = ({ bills }) => {
  return (
    <div className="bg-white xl:mt-0 rounded-xl p-6 shadow-md row-span-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
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
