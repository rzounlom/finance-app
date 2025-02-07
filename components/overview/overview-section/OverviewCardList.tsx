import OverviewCard, { OverviewCardItem } from "./OverviewCard";
import React, { FC } from "react";

type OverviewCardListProps = {
  overviewCardItems: OverviewCardItem[];
};

export const OverviewCardList: FC<OverviewCardListProps> = ({
  overviewCardItems,
}) => {
  return (
    <div className="mt-[28px] md:flex md:items-center md:gap-x-[20px]">
      {overviewCardItems.map((overviewCardItem) => (
        <OverviewCard
          key={overviewCardItem.type}
          overviewItem={overviewCardItem}
        />
      ))}
    </div>
  );
};
