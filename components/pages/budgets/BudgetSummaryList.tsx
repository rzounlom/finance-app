import { Budget, Transaction } from "@/lib/types";

import BudgetSummary from "./BudgetSummary";
import { FC } from "react";

type BudgetSummaryListProps = {
  budgets: Budget[];
  transactions: Transaction[];
};

const BudgetSummaryList: FC<BudgetSummaryListProps> = ({
  budgets,
  transactions,
}) => {
  return budgets.map((budget) => (
    <BudgetSummary
      key={budget.name}
      budget={budget}
      transactions={transactions}
    />
  ));
};

export default BudgetSummaryList;
