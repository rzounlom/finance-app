import { FC } from "react";

const PotsSkeleton: FC = () => {
  return (
    <div className="h-full overflow-auto bg-beige animate-pulse">
      {/* Header */}
      <div className="h-[60px] flex items-center justify-between">
        <div className="h-8 w-32 bg-gray-300 rounded"></div>
        <div className="h-[53px] w-[154px] bg-gray-400 rounded-lg"></div>
      </div>

      {/* Content */}
      <div className="mt-6 h-[calc(100%-60px)] bg-beige">
        <div className="pb-[100px] w-full flex flex-col flex-wrap gap-6 md:flex-row">
          {/* Skeletons for PotSummary Cards */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md w-full h-[317px] lg:h-[303px] lg:max-w-[49%]"
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
                  <div className="h-6 w-24 bg-gray-300 rounded"></div>
                </div>
                <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
              </div>

              <div className="h-4 w-28 bg-gray-300 rounded mt-2"></div>

              {/* Amount */}
              <div className="h-10 w-36 bg-gray-300 rounded mt-2"></div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-gray-200 rounded-full mt-3">
                <div className="h-full bg-gray-400 rounded-full w-1/4"></div>
              </div>

              {/* Percentage & Target */}
              <div className="flex justify-between mt-2">
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
                <div className="h-4 w-28 bg-gray-300 rounded"></div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="h-12 bg-gray-200 rounded-lg"></div>
                <div className="h-12 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PotsSkeleton;
