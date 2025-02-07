// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

import {
  OverViewCardType,
  type OverviewCardItem,
} from "./overview/OverviewCard";
import OverviewList from "./overview/OverviewList";
import PotsList, { Pot } from "./pots/PotsList";
import TransactionsList, { Transaction } from "./transactions/TransactionsList";

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

const transactions: Transaction[] = [
  {
    name: "Emma Richardson",
    date: "19 Aug 2024",
    amount: 75.5,
    avatar: "https://avatar.iran.liara.run/public",
  },
  {
    name: "Savory Bites Bistro",
    date: "19 Aug 2024",
    amount: -55.5,
    avatar: "https://avatar.iran.liara.run/public",
  },
  {
    name: "Daniel Carter",
    date: "18 Aug 2024",
    amount: -42.3,
    avatar: "https://avatar.iran.liara.run/public",
  },
  {
    name: "Sun Park",
    date: "17 Aug 2024",
    amount: 120,
    avatar: "https://avatar.iran.liara.run/public",
  },
  {
    name: "Urban Services Hub",
    date: "17 Aug 2024",
    amount: -65,
    avatar: "https://avatar.iran.liara.run/public",
  },
];

export default async function Overview() {
  return (
    <div className="w-full h-full overflow-y-auto lg:overflow-y-hidden pb-[40px]">
      <h1 className="text-3xl font-semibold">Overview</h1>
      <OverviewList overviewCardItems={overviewCardItems} />
      <PotsList pots={pots} />
      <TransactionsList transactions={transactions} />
    </div>
  );
}
