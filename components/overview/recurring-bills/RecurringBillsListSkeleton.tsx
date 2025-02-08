import { FC } from "react";

const RecurringBillsListSkeleton: FC = () => {
  return (
    <div className="bg-white xl:mt-0 rounded-xl p-6 shadow-md row-span-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Recurring Bills</h3>
        <div className="h-4 w-20 bg-gray-200 rounded-md animate-pulse"></div>
      </div>

      {/* Skeleton for Bills */}
      <div className="space-y-4">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm animate-pulse"
          >
            {/* Left Border Color Placeholder */}
            <div className="w-1 h-full bg-gray-200 rounded-l-lg"></div>

            {/* Bill Name Placeholder */}
            <div className="h-4 w-1/3 bg-gray-200 rounded-md"></div>

            {/* Bill Amount Placeholder */}
            <div className="h-4 w-16 bg-gray-200 rounded-md"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecurringBillsListSkeleton;
