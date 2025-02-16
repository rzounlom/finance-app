"use client";

import { Bill } from "@/lib/types";
import BillsSummary from "./BillsSummary";
import BillsTable from "./BillsTable";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import SortDropdown from "../transactions/SortDropdown";
import { useState } from "react";

type RecurringBillsContainerProps = {
  bills: Bill[];
};

const RecurringBillsContainer: React.FC<RecurringBillsContainerProps> = ({
  bills,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Latest");

  // Filter & Sort Logic
  const filteredBills = bills
    .filter((bill) =>
      bill.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "Latest")
        return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
      if (sortBy === "Oldest")
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
      return 0;
    });

  return (
    <div className="h-full bg-beige p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left - Summary */}
        <div className="lg:w-[30%] w-full">
          <BillsSummary bills={bills} />
        </div>

        {/* Right - Table */}
        <div className="lg:w-[70%] w-full bg-white p-6 rounded-xl shadow-md">
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <div className="relative w-full md:w-[300px]">
              <Input
                type="text"
                placeholder="Search bills"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full h-[45px] border border-gray-300 rounded-lg"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
            <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
          </div>

          {/* Bills Table */}
          <BillsTable bills={filteredBills} />
        </div>
      </div>
    </div>
  );
};

export default RecurringBillsContainer;
