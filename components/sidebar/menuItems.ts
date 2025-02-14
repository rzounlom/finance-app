import {
  ArrowsDownUp,
  ChartDonut,
  House,
  IconProps,
  Receipt,
  TipJar,
} from "@phosphor-icons/react";

export const menuItems: MenuItem[] = [
  { label: "Overview", icon: House, url: "/" },
  { label: "Transactions", icon: ArrowsDownUp, url: "/transactions" },
  { label: "Budgets", icon: ChartDonut, url: "/budgets" },
  { label: "Pots", icon: TipJar, url: "/pots" },
  { label: "Recurring bills", icon: Receipt, url: "/recurring-bills" },
];

export type MenuItemProps = {
  menuItem: MenuItem;
  minimized?: boolean;
  isActive?: boolean;
  onClick: (url: string) => void;
};

export type MenuItem = {
  label: string;
  icon: React.ComponentType<IconProps>;
  url: string;
};
