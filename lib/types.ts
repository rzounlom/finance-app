// Budget Types
export type Budget = {
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
  name: string;
  amount: number;
  color: string;
};

export type PotsCardItem = {
  name: string;
  amount: number;
  color: string;
};

//Transaction Types
export type Transaction = {
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
  name: string;
  amount: number;
  color: string; // Tailwind CSS class for the left border color
};
