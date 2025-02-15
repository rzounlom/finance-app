import { budgets, transactions } from "@/lib/data";

import BudgetSummaryList from "./BudgetSummaryList";
import BudgetsList from "./BudgetsList";
import { Button } from "@/components/ui/button";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Budgets = async () => {
  await delay(5000);
  return (
    <div className="h-full bg-beige overflow-auto">
      <div className="h-[60px]">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold">Budgets</h1>
          <Button className="h-[53px] w-[154px] bg-gray-800 text-white">
            + Add New Budget
          </Button>
        </div>
        <div className="mt-6 flex gap-6 lg:flex-row flex-col h-[calc(100%-60px)] bg-beige">
          <div className="w-full lg:max-w-[40%]">
            <BudgetsList budgets={budgets} totalLimit={975} />
          </div>
          <div className="w-full lg:max-w-[60%] flex flex-col gap-6 bg-beige pb-[100px] lg:pb-[131px]">
            <BudgetSummaryList budgets={budgets} transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budgets;
