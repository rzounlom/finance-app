import Budgets from "@/components/pages/budgets/Budgets";
import { Suspense } from "react";

const BudgetsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Budgets />
    </Suspense>
  );
};

export default BudgetsPage;
