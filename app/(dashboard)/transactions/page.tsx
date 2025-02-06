import { Suspense } from "react";
import Transactions from "@/components/pages/transactions/Transactions";

const TranscitonsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Transactions />
    </Suspense>
  );
};

export default TranscitonsPage;
