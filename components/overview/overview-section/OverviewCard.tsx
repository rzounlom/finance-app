import "./OverviewCard.scss";

import { FC } from "react";
import clsx from "clsx";

type OverviewCardProps = {
  overviewItem: OverviewCardItem;
};

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

const OverviewCard: FC<OverviewCardProps> = ({
  overviewItem: { type, title, amount },
}) => {
  const overviewCardStyles = clsx(
    "overview-card  lg:mt-0 h-[111px] md:h-[119px] p-[20px] flex flex-col justify-between rounded-xl md:w-[calc(33.3333%-20px)]",
    {
      "bg-gray-900 text-white": type === "Current Balance",
      "bg-white text-gray-900": type !== "Current Balance",
    }
  );

  return (
    <div className={overviewCardStyles}>
      <p>{title}</p>
      <p className="text-3xl font-bold">${amount.toFixed(2)}</p>
    </div>
  );
};

export default OverviewCard;
