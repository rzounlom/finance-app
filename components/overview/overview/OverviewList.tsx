import OverviewCard, { OverviewCardItem } from "./OverviewCard";
import React, { FC } from "react";

type OverviewListProps = {
  overviewCardItems: OverviewCardItem[];
};

const OverviewList: FC<OverviewListProps> = ({ overviewCardItems }) => {
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

export default OverviewList;
