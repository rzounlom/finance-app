import { FC } from "react";
import { Pot } from "./PotsCardList";

type PotsCardProps = {
  pot: Pot;
};

export type PotsCardItem = {
  name: string;
  amount: number;
  color: string;
};

const PotsCard: FC<PotsCardProps> = ({ pot }) => {
  return (
    <div className="flex items-center h-[55px] md:h-[43px]">
      <span
        className={`block w-1 h-full rounded-full ${pot.color} mr-4`}
      ></span>
      <div>
        <p className="text-sm text-gray-500">{pot.name}</p>
        <p className="font-bold mt-2">${pot.amount}</p>
      </div>
    </div>
  );
};

export default PotsCard;
