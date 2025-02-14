import { FC } from "react";

const TransactionsTableSkeleton: FC = () => {
  return (
    <div className="w-full flex flex-col h-full bg-white rounded-xl shadow-md min-h-[600px] md:min-h-[800px]">
      {/* Search & Filters Skeleton */}
      <div className="p-4 border-b border-gray-200 flex items-center gap-3 animate-pulse">
        <div className="w-full h-[45px] bg-gray-200 rounded-lg"></div>
        <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
        <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
      </div>

      {/* Desktop Table View Skeleton */}
      <div className="hidden md:block overflow-x-auto flex-grow h-full">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead className="sticky top-0 bg-gray-100 text-gray-600 shadow">
            <tr>
              <th className="p-3 text-left w-[40%]">Recipient / Sender</th>
              <th className="p-3 text-left w-[20%]">Category</th>
              <th className="p-3 text-left w-[20%]">Transaction Date</th>
              <th className="p-3 text-left w-[20%]">Amount</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-gray-50 animate-pulse"
              >
                <td className="p-3 flex items-center gap-3 w-[40%]">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div className="h-4 w-32 bg-gray-300 rounded"></div>
                </td>
                <td className="p-3 w-[20%]">
                  <div className="h-4 w-20 bg-gray-300 rounded"></div>
                </td>
                <td className="p-3 w-[20%]">
                  <div className="h-4 w-24 bg-gray-300 rounded"></div>
                </td>
                <td className="p-3 w-[20%]">
                  <div className="h-4 w-16 bg-gray-300 rounded"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View Skeleton */}
      <div className="md:hidden flex-grow overflow-y-auto h-full">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border-b border-gray-200 animate-pulse"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div>
                <div className="h-4 w-32 bg-gray-300 rounded"></div>
                <div className="h-3 w-20 bg-gray-200 rounded mt-1"></div>
              </div>
            </div>
            <div className="text-right">
              <div className="h-4 w-16 bg-gray-300 rounded"></div>
              <div className="h-3 w-24 bg-gray-200 rounded mt-1"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Footer Skeleton */}
      <div className="flex justify-between items-center p-4 border-t border-gray-200 animate-pulse">
        <div className="w-20 h-10 bg-gray-300 rounded-lg"></div>
        <div className="flex items-center gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="w-8 h-8 bg-gray-300 rounded-lg"></div>
          ))}
        </div>
        <div className="w-20 h-10 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default TransactionsTableSkeleton;
