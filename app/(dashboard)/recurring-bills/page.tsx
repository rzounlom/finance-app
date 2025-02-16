import RecurringBills from "@/components/pages/recurring-bills/RecurringBills";
import RecurringBillsSkeleton from "@/components/pages/recurring-bills/RecurringBillsSkeleton";
import { Suspense } from "react";

const RecurringBillsPage = () => {
  return (
    <Suspense fallback={<RecurringBillsSkeleton />}>
      <RecurringBills />
    </Suspense>
  );
};

export default RecurringBillsPage;
