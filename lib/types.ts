// Budget Types
export type Budget = {
  id: string;
  name: string;
  amount: number;
  color: string;
  colorHash: string;
};

//Overview Types
export enum OverViewCardType {
  CurrentBalance = "Current Balance",
  Income = "Income",
  Expenses = "Expenses",
}

export type OverviewCardItem = {
  type: OverViewCardType;
  title: string;
  amount: number;
};

//Pot Types
export type Pot = {
  id: string;
  name: string;
  amount: number;
  color: string;
};

export type PotsCardItem = {
  id: string;
  name: string;
  amount: number;
  color: string;
};

//Transaction Types
export type Transaction = {
  id: string;
  name: string;
  date: string;
  amount: number;
  avatar: string;
  category: string;
};

export enum TransactionCategory {
  Entertainment = "Entertainment",
  DiningOut = "Dining Out",
  Bills = "Bills",
  PersonalCare = "Personal Care",
  General = "General",
  Lifestyle = "Lifestyle",
  Transportation = "Transportation",
}

//Recurring Bills Types
export type Bill = {
  id: string;
  name: string;
  amount: number;
  color: string; // Tailwind CSS class for the left border color
};
