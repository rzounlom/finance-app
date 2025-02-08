import OverviewCard, { OverviewCardItem } from "./OverviewCard";
import React, { FC } from "react";

type OverviewListProps = {
  overviewCardItems: OverviewCardItem[];
};

const OverviewList: FC<OverviewListProps> = ({ overviewCardItems }) => {
  return (
    <div className="h-full w-full flex flex-col md:flex-row justify-between items-center">
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
