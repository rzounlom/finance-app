import { FC } from "react";

const PotsListSkeleton: FC = () => {
  return (
    <div className="bg-white xl:mt-0 rounded-xl p-6 shadow-md row-span-4">
      {/* Header */}
      <div className="w-[165] md:w-[100%] flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold">Pots</h3>
        <div className="h-4 w-20 bg-gray-200 rounded-md animate-pulse"></div>
      </div>

      <div className="md:h-[110px] flex flex-col gap-2 md:gap-6 md:flex-row">
        {/* Total Saved */}
        <div className="h-full w-full md:w-[247px] bg-gray-100 rounded-xl p-[20px] flex items-center justify-between mb-6 animate-pulse">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
            <div className="ml-3">
              <div className="h-4 w-20 bg-gray-300 rounded-md"></div>
              <div className="h-6 w-16 bg-gray-300 rounded-md mt-2"></div>
            </div>
          </div>
        </div>

        {/* Individual Pots */}
        <div className="grid grid-cols-2 gap-4 md:flex-1 md:h-[110px]">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="h-[50px] bg-gray-100 rounded-md animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PotsListSkeleton;
