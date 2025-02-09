import React, { FC } from "react";

import OverviewCard from "./OverviewCard";
import { OverviewCardItem } from "@/lib/types";

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
