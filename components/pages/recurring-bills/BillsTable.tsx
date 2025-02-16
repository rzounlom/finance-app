import { Bill } from "@/lib/types";

type BillsTableProps = {
  bills: Bill[];
};

const BillsTable: React.FC<BillsTableProps> = ({ bills }) => {
  return (
    <div className="w-full mt-4">
      {/* Desktop Table */}
      <table className="hidden md:table w-full border-collapse">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="p-3 text-left">Bill Title</th>
            <th className="p-3 text-left">Due Date</th>
            <th className="p-3 text-left">Amount</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr
              key={bill.id}
              className="border-t border-gray-200 hover:bg-gray-50"
            >
              <td className="p-3 flex items-center gap-3">
                <span className={`w-6 h-6 rounded-full ${bill.color}`}></span>
                <span className="font-bold">{bill.name}</span>
              </td>
              <td className="p-3 text-teal-600">{bill.dueDate}</td>
              <td
                className={`p-3 font-bold ${
                  bill.status === "Due Soon" ? "text-red-500" : ""
                }`}
              >
                ${bill.amount.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Card View */}
      <div className="md:hidden flex flex-col gap-4">
        {bills.map((bill) => (
          <div
            key={bill.id}
            className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md"
          >
            <div className="flex items-center gap-3">
              <span className={`w-6 h-6 rounded-full ${bill.color}`}></span>
              <div>
                <p className="font-bold">{bill.name}</p>
                <p className="text-sm text-teal-600">{bill.dueDate}</p>
              </div>
            </div>
            <p
              className={`font-bold ${
                bill.status === "Due Soon" ? "text-red-500" : ""
              }`}
            >
              ${bill.amount.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillsTable;
