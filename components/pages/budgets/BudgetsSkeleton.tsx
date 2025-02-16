import React from "react";

const BudgetsSkeleton: React.FC = () => {
  return (
    <div className="h-full bg-beige overflow-auto animate-pulse">
      {/* Header */}
      <div className="h-[60px] flex items-center justify-between">
        <div className="h-8 w-32 bg-gray-300 rounded"></div>
        <div className="h-[53px] w-[154px] bg-gray-400 rounded-lg"></div>
      </div>

      {/* Content */}
      <div className="mt-6 flex gap-6 lg:flex-row flex-col h-[calc(100%-60px)] bg-beige">
        {/* Left Column - Budgets List */}
        <div className="w-full lg:max-w-[40%]">
          <div className="bg-white rounded-xl p-6 shadow-md h-[300px] flex flex-col space-y-4">
            {/* Title Skeleton */}
            <div className="h-6 w-32 bg-gray-300 rounded"></div>

            {/* Budget Items Skeleton */}
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full bg-gray-400"></span>
                  <div className="h-4 w-24 bg-gray-300 rounded"></div>
                </div>
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Budget Summary List */}
        <div className="w-full lg:max-w-[60%] flex flex-col gap-6 bg-beige pb-[100px] lg:pb-[131px]">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              {/* Header */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                  <div className="h-6 w-32 bg-gray-300 rounded"></div>
                </div>
                <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-gray-200 rounded-full mt-3">
                <div className="h-full bg-gray-400 rounded-full w-1/3"></div>
              </div>

              {/* Spent & Remaining */}
              <div className="flex justify-between mt-4">
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
              </div>

              {/* Transactions Skeleton */}
              <div className="bg-gray-100 p-4 mt-5 rounded-xl">
                <div className="flex justify-between items-center">
                  <div className="h-5 w-24 bg-gray-300 rounded"></div>
                  <div className="h-4 w-16 bg-gray-300 rounded"></div>
                </div>
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 border-b last:border-none"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <div>
                        <div className="h-4 w-32 bg-gray-300 rounded"></div>
                        <div className="h-3 w-20 bg-gray-200 rounded mt-1"></div>
                      </div>
                    </div>
                    <div className="h-4 w-16 bg-gray-300 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetsSkeleton;
