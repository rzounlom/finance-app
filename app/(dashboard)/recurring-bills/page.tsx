import RecurringBills from "@/components/pages/recurring-bills/RecurringBills";
import { Suspense } from "react";

const RecurringBillsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RecurringBills />
    </Suspense>
  );
};

export default RecurringBillsPage;
