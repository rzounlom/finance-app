"use client";

import React, { useState } from "react";
import { Transaction, TransactionCategory } from "@/lib/types";

import CategoryDropdown from "./CategoryDropdown";
import Image from "next/image";
import { Search } from "lucide-react"; // Example: Using lucide-react icons
import SortDropdown from "./SortDropdown";

type TransactionsTableProps = {
  transactions: Transaction[];
};

const TransactionsTable: React.FC<TransactionsTableProps> = ({
  transactions,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Latest");
  const [categoryFilter, setCategoryFilter] = useState("All Transactions");
  const [currentPage, setCurrentPage] = useState(1);

  const transactionsPerPage = 10;

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
    <div className="bg-white rounded-xl p-6 shadow-md">
      {/* Search and Filters */}
      <div className="relative flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <div className="relative w-[80%] max-w-[320px]">
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
            <label className="mr-2 text-gray-600">Sort by</label>
            <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
          </div>
          {/* Category Dropdown */}
          <div className="relative flex items-center">
            <label className="mr-2 text-gray-600">Category</label>
            <CategoryDropdown
              categories={categories}
              setCategory={setCategoryFilter}
              category={categoryFilter}
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="w-full">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead className="hidden md:block w-full">
            <tr className="bg-gray-100 text-gray-600 text-left">
              <th className="p-3">Recipient / Sender</th>
              <th className="p-3">Category</th>
              <th className="p-3">Transaction Date</th>
              <th className="p-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((transaction, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-gray-50"
              >
                <td className="p-3 flex items-center gap-3">
                  <Image
                    src={transaction.avatar}
                    alt={transaction.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span>{transaction.name}</span>
                </td>
                <td className="p-3">{transaction.category}</td>
                <td className="p-3">{transaction.date}</td>
                <td
                  className={`p-3 ${
                    transaction.amount > 0 ? "text-teal-500" : "text-red-500"
                  }`}
                >
                  {transaction.amount > 0 ? "+" : ""}$
                  {Math.abs(transaction.amount).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
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
