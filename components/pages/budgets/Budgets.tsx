import { Button } from "@/components/ui/button";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Budgets = async () => {
  // await delay(5000);
  return (
    <div className="h-full w-full">
      <div className="h-[60px]">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold">Budgets</h1>
          <Button className="h-[53px] w-[154px] bg-gray-800 text-white">
            + Add New Budget
          </Button>
        </div>
        <div className="mt-6 flex gap-6 flex-col h-[calc(100%-60px)] overfy-y-auto border-2 border-black">
          <div className="w-full border-2 border-black">Spending Summary</div>
          <div className="w-full border-2 border-black">Budget Cards</div>
        </div>
      </div>
    </div>
  );
};

export default Budgets;
