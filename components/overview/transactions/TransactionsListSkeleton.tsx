import { FC } from "react";

const TransactionsListSkeleton: FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md xl:mt-0 row-span-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-900">Transactions</h3>
        <div className="h-4 w-20 bg-gray-200 rounded-md animate-pulse"></div>
      </div>

      {/* Transactions Skeletons */}
      <div className="divide-y divide-gray-200">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="py-4 flex items-center animate-pulse gap-4"
          >
            {/* Avatar Placeholder */}
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>

            {/* Transaction Details Placeholder */}
            <div className="flex flex-col flex-1">
              <div className="h-4 w-1/2 bg-gray-300 rounded-md mb-2"></div>
              <div className="h-4 w-1/3 bg-gray-300 rounded-md"></div>
            </div>

            {/* Amount Placeholder */}
            <div className="h-4 w-12 bg-gray-300 rounded-md"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsListSkeleton;
