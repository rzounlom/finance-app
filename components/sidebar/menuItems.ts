export const menuItems: MenuItem[] = [
  { label: "Overview", icon: "/house.svg", url: "/" },
  { label: "Transactions", icon: "/transactions.svg", url: "/transactions" },
  { label: "Budgets", icon: "/budgets.svg", url: "/budgets" },
  { label: "Pots", icon: "/pots.svg", url: "/pots" },
  { label: "Recurring bills", icon: "/bills.svg", url: "/recurring-bills" },
];

export type MenuItemProps = {
  menuItem: MenuItem;
  minimized?: boolean;
  isActive?: boolean;
  onClick: (url: string) => void;
};

export type MenuItem = {
  label: string;
  icon: string;
  url: string;
};
