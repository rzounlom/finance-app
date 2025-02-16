// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

import { Button } from "@/components/ui/button";

const Pots = async () => {
  // await delay(5000);
  return (
    <div className="h-full bg-beige overflow-auto">
      <div className="h-[60px]">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold">Pots</h1>
          <Button className="h-[53px] w-[154px] bg-gray-800 text-white">
            + Add New Pot
          </Button>
        </div>
        <div className="mt-6 flex gap-6 lg:flex-row flex-col h-[calc(100%-60px)] bg-beige">
          <div className="w-full lg:max-w-[40%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Pots;
