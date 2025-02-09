import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pot } from "@/lib/types";
import PotCard from "./PotCard";

type PotsListProps = {
  pots: Pot[];
};

const PotsList: FC<PotsListProps> = ({ pots }) => {
  return (
    <div className="bg-white xl:mt-0 rounded-xl p-6 shadow-md row-span-4">
      {/* Header */}
      <div className="w-[165] md:w-[100%] flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold">Pots</h3>
        <Link href="/pots" className="text-sm text-gray-500 flex items-center">
          See Details{" "}
          <span className="ml-1">
            <Image
              src="/details-arrow.svg"
              height={12}
              width={12}
              alt="details arror right"
            />
          </span>
        </Link>
      </div>

      <div className="md:h-[110px] flex flex-col gap-2 md:gap-6 md:flex-row">
        {/* Total Saved */}
        <div className="h-full w-full md:w-[247px]  bg-beige rounded-xl p-[20px] flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="rounded-full">
              <Image src="/pots-jar.svg" height={40} width={40} alt="pot jar" />
            </div>
            <div className="ml-3">
              <p className="text-gray-500 text-sm">Total Saved</p>
              <p className="text-3xl font-bold mt-2">$850</p>
            </div>
          </div>
        </div>

        {/* Individual Pots */}
        <div className="grid grid-cols-2 gap-4 md:flex-1 md:h-[110px]">
          {pots.map((pot) => (
            <PotCard key={pot.name} pot={pot} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PotsList;
