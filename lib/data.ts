import {
  Bill,
  Budget,
  OverViewCardType,
  OverviewCardItem,
  Pot,
  Transaction,
} from "./types";

export const overviewCardItems: OverviewCardItem[] = [
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

export const pots: Pot[] = [
  { name: "Savings", amount: 159, color: "bg-green-500" },
  { name: "Gift", amount: 40, color: "bg-blue-400" },
  { name: "Concert Ticket", amount: 110, color: "bg-purple-500" },
  { name: "New Laptop", amount: 10, color: "bg-orange-400" },
];

export const transactions: Transaction[] = [
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

export const budgets: Budget[] = [
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

export const bills: Bill[] = [
  { name: "Paid Bills", amount: 190.0, color: "border-l-teal-500" },
  { name: "Total Upcoming", amount: 194.98, color: "border-l-orange-400" },
  { name: "Due Soon", amount: 59.98, color: "border-l-blue-400" },
];
