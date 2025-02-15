import { Bill } from "@/lib/types";
import clsx from "clsx";

type BillCardProps = {
  bill: Bill;
};

const BillCard: React.FC<BillCardProps> = ({
  bill: { name, amount, color },
}) => {
  const containerStyles = clsx(
    "flex items-center justify-between bg-beige p-4 rounded-xl shadow-sm border-l-4",
    {
      "border-orange-400": color === "orange",
      "border-blue-400": color === "blue",
      "border-teal-500": color === "teal",
      "border-purple-500": color === "purple",
    }
  );

  return (
    <div className={containerStyles}>
      <div className="flex items-center">
        {/* Colored border */}
        <p className="text-gray-500">{name}</p>
      </div>
      <p className="text-gray-900 font-bold">${amount.toFixed(2)}</p>
    </div>
  );
};

export default BillCard;
