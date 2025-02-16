import RecurringBillsContainer from "./RecurringBillsContainer";
// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
import { bills } from "@/lib/data";

const RecurringBills = async () => {
  // await delay(5000);
  return (
    <div className="h-full bg-beige overflow-auto">
      <div className="h-[60px]">
        <div className="flex items-center">
          <h1 className="text-3xl font-semibold">Recurring Biils</h1>
        </div>
        <div className="mt-6 h-[calc(100%-60px)] bg-beige">
          <RecurringBillsContainer bills={bills} />
        </div>
      </div>
    </div>
  );
};

export default RecurringBills;
