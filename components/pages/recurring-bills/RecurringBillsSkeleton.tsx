const RecurringBillsSkeleton = () => {
  return (
    <div className="h-full bg-beige overflow-auto p-6">
      {/* Header */}
      <div className="h-[60px] mb-6">
        <div className="flex items-center">
          <h1 className="text-3xl font-semibold">Recurring Bills</h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left - Summary Skeleton */}
        <div className="lg:w-[30%] w-full">
          <div className="animate-pulse flex flex-col gap-6">
            {/* Total Bills Card */}
            <div className="bg-gray-300 h-[120px] rounded-xl"></div>

            {/* Summary */}
            <div className="bg-gray-300 h-[160px] rounded-xl"></div>
          </div>
        </div>

        {/* Right - Table Skeleton */}
        <div className="lg:w-[70%] w-full bg-white p-6 rounded-xl shadow-md">
          {/* Search & Sort Skeleton */}
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
            {/* Search Input */}
            <div className="w-full md:w-[300px] h-[45px] bg-gray-300 rounded-lg"></div>
            {/* Sort Dropdown */}
            <div className="w-[150px] h-[45px] bg-gray-300 rounded-lg"></div>
          </div>

          {/* Table Skeleton (Desktop) */}
          <div className="hidden md:block w-full mt-4 animate-pulse">
            <div className="w-full h-[40px] bg-gray-300 rounded-lg mb-2"></div>
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-full h-[50px] bg-gray-300 rounded-lg mb-2"
              ></div>
            ))}
          </div>

          {/* Mobile Card Skeleton */}
          <div className="md:hidden flex flex-col gap-4 mt-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="h-[80px] bg-gray-300 rounded-xl animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecurringBillsSkeleton;
