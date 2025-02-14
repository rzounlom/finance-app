import { Suspense } from "react";
import Transactions from "@/components/pages/transactions/Transactions";
import TransactionsSkeleton from "@/components/pages/transactions/TransactionsSkeleton";

const TranscitonsPage = () => {
  return (
    <Suspense fallback={<TransactionsSkeleton />}>
      <Transactions />
    </Suspense>
  );
};

export default TranscitonsPage;
