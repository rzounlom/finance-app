import { FC } from "react";
import { Pot } from "@/lib/types";
import clsx from "clsx";

type PotCardProps = {
  pot: Pot;
};

const PotCard: FC<PotCardProps> = ({ pot }) => {
  const cardStyles = clsx(`block w-1 h-full rounded-full ${pot?.color} mr-4`);

  return (
    <div className="flex items-center h-[55px] md:h-[43px]">
      <span className={cardStyles}></span>
      <div>
        <p className="text-sm text-gray-500">{pot?.name}</p>
        <p className="font-bold mt-2">${pot?.amount}</p>
      </div>
    </div>
  );
};

export default PotCard;
