import TransactionsTableSkeleton from "./TransactionsTableSkeleton";

const TransactionsSkeleton = () => {
  return (
    <div className="h-full w-full">
      <div className="h-[60px] grid grid-cols-12 gap-6">
        <div className="col-span-12 row-span-1">
          <h1 className="text-3xl font-semibold">Transactions</h1>
        </div>
        <div className="h-[calc(100%-60px)] col-span-12 row-span-11 pb-[100px] md:pb-[131px] xl:pb-0">
          <TransactionsTableSkeleton />
        </div>
      </div>
    </div>
  );
};

export default TransactionsSkeleton;
