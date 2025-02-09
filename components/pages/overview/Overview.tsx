import {
  bills,
  budgets,
  overviewCardItems,
  pots,
  transactions,
} from "@/lib/data";

import BudgetsList from "./budgets/BudgetsList";
import OverviewList from "./overview/OverviewList";
import PotsList from "./pots/PotsList";
import RecurringBillsList from "./recurring-bills/RecurringBillsList";
import TransactionsList from "./transactions/TransactionsList";
import { delay } from "@/lib/utils";

const Overview = async () => {
  await delay(5000);
  return (
    <div className="h-full w-full">
      <div className="h-[60px]">
        <h1 className="text-3xl font-semibold">Overview</h1>
      </div>
      <div className="h-[calc(100%-60px)]">
        <div className="h-full w-full flex flex-col gap-4 xl:grid xl:grid-flow-col xl:grid-rows-12 xl:gap-6">
          {/* Row 1 */}
          <div className="xl:col-span-12 xl:row-span-2 flex items-center justify-between">
            <OverviewList overviewCardItems={overviewCardItems} />
          </div>

          {/* Row 2: Main Content */}
          <div className="flex flex-col gap-4 xl:col-span-9 xl:row-span-10 xl:grid xl:grid-flow-col xl:grid-rows-12 xl:gap-6">
            <PotsList pots={pots} />
            <TransactionsList transactions={transactions} />
          </div>

          {/* Row 3: Side Content */}
          <div className="pb-[90px] md:pb-[131px] xl:pb-0 flex flex-col gap-4 xl:col-span-3 xl:row-span-10 xl:grid xl:grid-flow-col xl:grid-rows-12 xl:gap-6">
            <BudgetsList budgets={budgets} totalLimit={975} />
            <RecurringBillsList bills={bills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
