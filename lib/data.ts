import {
  Bill,
  Budget,
  OverViewCardType,
  OverviewCardItem,
  Pot,
  Transaction,
  TransactionCategory,
} from "./types";

import { v4 as uuidv4 } from "uuid";

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
  { id: uuidv4(), name: "Savings", amount: 159, color: "bg-green-500" },
  { id: uuidv4(), name: "Gift", amount: 40, color: "bg-blue-400" },
  { id: uuidv4(), name: "Concert Ticket", amount: 110, color: "bg-purple-500" },
  { id: uuidv4(), name: "New Laptop", amount: 10, color: "bg-orange-400" },
];

export const transactions: Transaction[] = [
  {
    id: uuidv4(),
    name: "Emma Richardson",
    date: "19 Aug 2024",
    amount: 75.5,
    avatar: "https://avatar.iran.liara.run/public",
    category: TransactionCategory.DiningOut,
  },
  {
    id: uuidv4(),
    name: "Savory Bites Bistro",
    date: "19 Aug 2024",
    amount: -55.5,
    avatar: "https://avatar.iran.liara.run/public",
    category: TransactionCategory.General,
  },
  {
    id: uuidv4(),
    name: "Daniel Carter",
    date: "18 Aug 2024",
    amount: -42.3,
    avatar: "https://avatar.iran.liara.run/public",
    category: TransactionCategory.Lifestyle,
  },
  {
    id: uuidv4(),
    name: "Sun Park",
    date: "17 Aug 2024",
    amount: 120,
    avatar: "https://avatar.iran.liara.run/public",
    category: TransactionCategory.Transportation,
  },
  {
    id: uuidv4(),
    name: "Urban Services Hub",
    date: "17 Aug 2024",
    amount: -65,
    avatar: "https://avatar.iran.liara.run/public",
    category: TransactionCategory.Bills,
  },
];

export const budgets: Budget[] = [
  {
    id: uuidv4(),
    name: "Entertainment",
    amount: 500,
    color: "orange",
    colorHash: "#fb923c",
  },
  {
    id: uuidv4(),
    name: "Dining Out",
    amount: 75,
    color: "blue",
    colorHash: "#60a5fa",
  },
  {
    id: uuidv4(),
    name: "Bills",
    amount: 400,
    color: "teal",
    colorHash: "#14b8a6",
  },
  {
    id: uuidv4(),
    name: "Personal Care",
    amount: 100,
    color: "purple",
    colorHash: "#a855f7",
  },
];

export const bills: Bill[] = [
  {
    id: uuidv4(),
    name: "Paid Bills",
    amount: 190.0,
    color: "teal",
  },
  {
    id: uuidv4(),
    name: "Total Upcoming",
    amount: 194.98,
    color: "orange",
  },
  { id: uuidv4(), name: "Due Soon", amount: 59.98, color: "blue" },
];
