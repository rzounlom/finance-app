// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

import BudgetsList, { Budget } from "./budgets/BudgetsList";
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

const budgets: Budget[] = [
  {
    name: "Entertainment",
    amount: 50,
    color: "bg-orange-400",
    colorHash: "#fb923c",
  },
  {
    name: "Dining Out",
    amount: 75,
    color: "bg-blue-400",
    colorHash: "#60a5fa",
  },
  { name: "Bills", amount: 400, color: "bg-teal-500", colorHash: "#14b8a6" },
  {
    name: "Personal Care",
    amount: 100,
    color: "bg-purple-500",
    colorHash: "#a855f7",
  },
];

const Overview = async () => {
  return (
    <div className="h-full w-full">
      <div className="h-[60px]">
        <h1 className="text-3xl font-semibold">Overview</h1>
      </div>
      <div className="h-[calc(100%-60px)]">
        <div className="h-full w-full grid grid-flow-col grid-rows-12 gap-6">
          <div className="col-span-12 row-span-2 flex items-center justify-between">
            <OverviewList overviewCardItems={overviewCardItems} />
          </div>
          <div className="col-span-6 row-span-10  grid grid-flow-col grid-rows-12 gap-6 ">
            <PotsList pots={pots} />
            {/* <div className="bg-white mt-[2%] xl:mt-0 rounded-xl p-6 shadow-md row-span-8">
              Transactions
            </div> */}
            <TransactionsList transactions={transactions} />
          </div>
          <div className="col-span-6 row-span-10 grid grid-flow-col grid-rows-12 gap-6 ">
            {/* <div className="bg-white mt-[2%] xl:mt-0 rounded-xl p-6 shadow-md row-span-7">
              Budgets
            </div> */}

            <BudgetsList budgets={budgets} totalLimit={975} />
            <div className="bg-white mt-[2%] xl:mt-0 rounded-xl p-6 shadow-md row-span-5">
              Recurring Bills
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
