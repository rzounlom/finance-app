import "./OverviewCard.scss";

import { FC } from "react";
import { OverviewCardItem } from "@/lib/types";
import clsx from "clsx";

type OverviewCardProps = {
  overviewItem: OverviewCardItem;
};

const OverviewCard: FC<OverviewCardProps> = ({
  overviewItem: { type, title, amount },
}) => {
  const overviewCardStyles = clsx(
    "overview-card lg:mt-0 h-full max-h-[119px] p-[20px] flex flex-col justify-between rounded-xl w-full md:w-[calc(33.3333%-15px)] shadow-md",
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
