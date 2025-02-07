// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

import {
  OverViewCardType,
  type OverviewCardItem,
} from "./overview-section/OverviewCard";
import { OverviewCardList } from "./overview-section/OverviewCardList";
import PotsCardList, { Pot } from "./pots-section/PotsCardList";

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

const pots: Pot[] = [
  { name: "Savings", amount: 159, color: "bg-green-500" },
  { name: "Gift", amount: 40, color: "bg-blue-400" },
  { name: "Concert Ticket", amount: 110, color: "bg-purple-500" },
  { name: "New Laptop", amount: 10, color: "bg-orange-400" },
];

export default async function Overview() {
  return (
    <div className="w-full h-full overflow-y-auto lg:overflow-y-hidden pb-[40px]">
      <h1 className="text-3xl font-semibold">Overview</h1>
      <OverviewCardList overviewCardItems={overviewCardItems} />
      <PotsCardList pots={pots} />
    </div>
  );
}
