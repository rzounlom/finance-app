export const menuItems = [
  { label: "Overview", icon: "/house.svg", url: "/" },
  { label: "Transactions", icon: "/transactions.svg", url: "/transactions" },
  { label: "Budgets", icon: "/budgets.svg", url: "/budgets" },
  { label: "Pots", icon: "/pots.svg", url: "/pots" },
  { label: "Recurring bills", icon: "/bills.svg", url: "/recurring-bills" },
];

export type MenuItemProps = {
  icon: string;
  label: string;
  minimized?: boolean;
  isActive?: boolean;
  onClick: (label: string) => void;
};
