import { FC } from "react";

const OverviewListSkeleton: FC = () => {
  return (
    <div className="h-full w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
      {/* Skeleton for Current Balance */}
      <div className="h-[119px] w-full md:w-[calc(33.3333%-15px)] bg-gray-900 text-white rounded-xl p-6 shadow-md animate-pulse">
        <div className="h-4 w-1/2 bg-gray-700 rounded-md mb-4"></div>
        <div className="h-8 w-2/3 bg-gray-700 rounded-md"></div>
      </div>

      {/* Skeleton for Income */}
      <div className="h-[119px] w-full md:w-[calc(33.3333%-15px)] bg-white text-gray-900 rounded-xl p-6 shadow-md animate-pulse">
        <div className="h-4 w-1/2 bg-gray-300 rounded-md mb-4"></div>
        <div className="h-8 w-2/3 bg-gray-300 rounded-md"></div>
      </div>

      {/* Skeleton for Expenses */}
      <div className="h-[119px] w-full md:w-[calc(33.3333%-15px)] bg-white text-gray-900 rounded-xl p-6 shadow-md animate-pulse">
        <div className="h-4 w-1/2 bg-gray-300 rounded-md mb-4"></div>
        <div className="h-8 w-2/3 bg-gray-300 rounded-md"></div>
      </div>
    </div>
  );
};

export default OverviewListSkeleton;
