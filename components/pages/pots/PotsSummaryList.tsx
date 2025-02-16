import { FC } from "react";
import { Pot } from "@/lib/types";
import PotSummary from "./PotSummary";

type PotsSummaryListProps = {
  pots: Pot[];
};

const PotsSummaryList: FC<PotsSummaryListProps> = ({ pots }) => {
  return (
    <div className="w-full flex flex-col flex-wrap gap-6 md:flex-row">
      {pots.map((pot) => (
        <PotSummary key={pot.id} pot={pot} />
      ))}
    </div>
  );
};

export default PotsSummaryList;
