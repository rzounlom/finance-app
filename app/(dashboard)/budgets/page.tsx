import Budgets from "@/components/pages/budgets/Budgets";
import BudgetsSkeleton from "@/components/pages/budgets/BudgetsSkeleton";
import { Suspense } from "react";

const BudgetsPage = () => {
  return (
    <Suspense fallback={<BudgetsSkeleton />}>
      <Budgets />
    </Suspense>
  );
};

export default BudgetsPage;
