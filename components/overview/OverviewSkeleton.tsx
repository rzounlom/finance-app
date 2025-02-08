import BudgetsListSkeleton from "./budgets/BudgetsListSkeleton";
import OverviewCardsListSkeleton from "./overview/OverviewListSkeleton";
import PotsListSkeleton from "./pots/PotsListSkeleton";
import RecurringBillsListSkeleton from "./recurring-bills/RecurringBillsListSkeleton";
import TransactionsListSkeleton from "./transactions/TransactionsListSkeleton";

const OverviewSkeleton = () => {
  return (
    <div className="h-full w-full">
      <div className="h-[60px]">
        <h1 className="text-3xl font-semibold">Overview</h1>
      </div>
      <div className="h-[calc(100%-60px)]">
        <div className="h-full w-full flex flex-col gap-4 xl:grid xl:grid-flow-col xl:grid-rows-12 xl:gap-6">
          {/* Row 1 */}
          <div className="xl:col-span-12 xl:row-span-2 flex items-center justify-between">
            <OverviewCardsListSkeleton />
          </div>

          {/* Row 2: Main Content */}
          <div className="flex flex-col gap-4 xl:col-span-9 xl:row-span-10 xl:grid xl:grid-flow-col xl:grid-rows-12 xl:gap-6">
            <PotsListSkeleton />
            <TransactionsListSkeleton />
          </div>

          {/* Row 3: Side Content */}
          <div className="pb-[90px] md:pb-[131px] xl:pb-0 flex flex-col gap-4 xl:col-span-3 xl:row-span-10 xl:grid xl:grid-flow-col xl:grid-rows-12 xl:gap-6">
            <BudgetsListSkeleton />
            <RecurringBillsListSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSkeleton;
