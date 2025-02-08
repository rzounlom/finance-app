import { FC } from "react";

const BudgetsListSkeleton: FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md row-span-7">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold">Budgets</h3>
        <div className="h-4 w-20 bg-gray-200 rounded-md animate-pulse"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Chart Skeleton */}
        <div className="flex justify-center items-center md:w-[80%]">
          <div className="relative w-40 h-40 md:w-56 md:h-56 mb-4 md:mb-0 animate-pulse">
            <div className="absolute inset-0 w-full h-full rounded-full bg-gray-100"></div>
            {/* Centered Text Skeleton */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="h-6 w-16 bg-gray-200 rounded-md mb-2"></div>
              <div className="h-4 w-24 bg-gray-200 rounded-md"></div>
            </div>
          </div>
        </div>

        {/* Budget Cards Skeleton */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="h-16 bg-gray-100 rounded-md animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetsListSkeleton;
