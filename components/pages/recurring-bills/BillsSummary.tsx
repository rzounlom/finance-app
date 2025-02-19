import { Bill } from "@/lib/types";
import { Receipt } from "@phosphor-icons/react";

type BillsSummaryProps = {
  bills: Bill[];
};

const BillsSummary: React.FC<BillsSummaryProps> = ({ bills }) => {
  const totalAmount = bills.reduce((acc, bill) => acc + bill.amount, 0);
  const paidBills = bills.filter((bill) => bill.status === "Paid");
  const upcomingBills = bills.filter((bill) => bill.status === "Upcoming");
  const dueSoonBills = bills.filter((bill) => bill.status === "Due Soon");

  return (
    <div className="flex flex-col gap-6">
      {/* Total Bills Card */}
      <div className="bg-gray-900 flex flex-col justify-between text-white p-6 rounded-xl h-[190px]">
        <Receipt size={40} />
        <div className="flex flex-col gap-[11px]">
          <h3 className="font-semibold">Total Bills</h3>
          <p className="text-4xl font-bold">${totalAmount.toFixed(2)}</p>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold">Summary</h3>
        <div className="mt-4 space-y-2">
          <p className="h-[36px] border-b-[1px] border-gray-[#69686826] flex justify-between text-gray-600">
            Paid Bills{" "}
            <span className="font-bold">
              {paidBills.length} ($
              {paidBills.reduce((acc, b) => acc + b.amount, 0).toFixed(2)})
            </span>
          </p>
          <p className="h-[36px] border-b-[1px] border-gray-[#69686826] flex justify-between text-gray-600">
            Total Upcoming{" "}
            <span className="font-bold">
              {upcomingBills.length} ($
              {upcomingBills.reduce((acc, b) => acc + b.amount, 0).toFixed(2)})
            </span>
          </p>
          <p className="h-[36px] border-b-[1px] border-gray-[#69686826] flex justify-between text-money-red">
            Due Soon{" "}
            <span className="font-bold">
              {dueSoonBills.length} ($
              {dueSoonBills.reduce((acc, b) => acc + b.amount, 0).toFixed(2)})
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BillsSummary;
