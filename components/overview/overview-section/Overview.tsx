// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

import { OverViewCardType, type OverviewCardItem } from "./OverviewCard";
import { OverviewCardList } from "./OverviewCardList";

const overviewCardItems: OverviewCardItem[] = [
  {
    type: OverViewCardType.CurrentBalance,
    title: "Current Balance",
    amount: 4836,
  },
  {
    type: OverViewCardType.Income,
    title: "Income",
    amount: 3814.25,
  },
  {
    type: OverViewCardType.Expenses,
    title: "Expenses",
    amount: 1700.5,
  },
];

export default async function Overview() {
  return (
    <div className="w-full h-full overflow-y-auto lg:overflow-y-hidden pb-[40px]">
      <h1 className="text-3xl font-semibold">Overview</h1>
      <OverviewCardList overviewCardItems={overviewCardItems} />
    </div>
  );
}
