"use client";

import { Transaction, TransactionCategory } from "@/lib/types";

import CategoryDropdown from "./CategoryDropdown";
import DesktopTransactionRow from "./DesktopTransactionRow";
import MobileTransactionRow from "./MobileTransactionRow";
import { Search } from "lucide-react"; // Example: Using lucide-react icons
import SortDropdown from "./SortDropdown";
import useScreenSize from "@/hooks/useScreenSize";
import { useState } from "react";

type TransactionsTableProps = {
  transactions: Transaction[];
};

const TransactionsTable: React.FC<TransactionsTableProps> = ({
  transactions,
}) => {
  const { height } = useScreenSize();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Latest");
  const [categoryFilter, setCategoryFilter] = useState("All Transactions");
  const [currentPage, setCurrentPage] = useState(1);

  const transactionsPerPage = height <= 1024 ? 9 : 10;

  const categories = [
    "All Transactions",
    ...Object.values(TransactionCategory),
  ];

  // Filter and sort transactions
  const filteredTransactions = transactions
    .filter((transaction) =>
      transaction.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (transaction) =>
        categoryFilter === "All Transactions" ||
        transaction.category === categoryFilter
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "Latest":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "Oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "A to Z":
          return a.name.localeCompare(b.name);
        case "Z to A":
          return b.name.localeCompare(a.name);
        case "Highest":
          return b.amount - a.amount;
        case "Lowest":
          return a.amount - b.amount;
        default:
          return 0;
      }
    });

  // Paginate transactions
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const totalPages = Math.ceil(
    filteredTransactions.length / transactionsPerPage
  );

  return (
    <div className="bg-white rounded-xl p-6 shadow-md overflow-auto mb-[50px] md:mb-0">
      {/* Search and Filters */}
      <div className="relative flex justify-between items-center mb-4 gap-4">
        <div className="relative w-[80%] md:w-[33%] max-w-[320px]">
          <input
            type="text"
            placeholder="Search transaction"
            className="w-full h-[45px] p-2 border border-gray-300 rounded-lg focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* Icon */}
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <Search className="text-gray-400 w-5 h-5" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Sort By Dropdown */}
          <div className="relative flex items-center">
            <label className="hidden md:block mr-2 text-gray-600">
              Sort by
            </label>
            <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
          </div>
          {/* Category Dropdown */}
          <div className="relative flex items-center">
            <label className="hidden md:block mr-2 text-gray-600">
              Category
            </label>
            <CategoryDropdown
              categories={categories}
              setCategory={setCategoryFilter}
              category={categoryFilter}
            />
          </div>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto flex-grow">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead className="sticky top-0 bg-gray-100 text-gray-600 shadow">
            <tr>
              <th className="p-2 text-left w-[40%]">Recipient / Sender</th>
              <th className="p-2 text-left w-[20%]">Category</th>
              <th className="p-2 text-left w-[20%]">Transaction Date</th>
              <th className="p-2 text-left w-[20%]">Amount</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((transaction, index) => (
              <DesktopTransactionRow
                key={`desktop-transaction-${transaction?.id}-${index}`}
                transaction={transaction}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Row View */}
      <div className="md:hidden h-[80%] overflow-y-auto">
        {currentTransactions.map((transaction, idx) => (
          <MobileTransactionRow
            key={`mobile-transaction-${transaction?.id}-${idx}`}
            transaction={transaction}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-2 lg:mt-4">
        <button
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <div className="flex items-center gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`px-3 py-2 rounded-lg ${
                currentPage === index + 1
                  ? "bg-gray-900 text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TransactionsTable;
