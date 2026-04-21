"use client";

import { Check } from "lucide-react";

const expenses = [
  {
    category: "Salaries",
    budget: 240000,
    actual: 237000,
    variance: -3000,
    status: "On Track",
  },
  {
    category: "Office Supplies",
    budget: 30000,
    actual: 35000,
    variance: -5000,
    status: "Over Budget",
  },
  {
    category: "IT & Equipment",
    budget: 25000,
    actual: 28000,
    variance: -3000,
    status: "Over Budget",
  },
  {
    category: "Utilities",
    budget: 20000,
    actual: 18000,
    variance: -2000,
    status: "On Track",
  },
];

const STATUS_STYLES: Record<string, string> = {
  "On Track": "bg-emerald-500 text-white",
  "Over Budget": "bg-red-500 text-white",
};

const fmt = (n: number) => "$" + Math.abs(n).toLocaleString("en-US");

export default function ExpenseBreakdownTable() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="font-bold text-lg text-gray-800">Expense Breakdown</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-sm">
              {["Category", "Budget", "Actual", "Variance", "Status", ""].map(
                (h, i) => (
                  <th
                    key={i}
                    className="px-6 py-3.5 text-left font-semibold whitespace-nowrap"
                  >
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {expenses.map((e, i) => (
              <tr
                key={i}
                className="border-t border-gray-50 hover:bg-blue-50/20 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-800">
                  {e.category}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-700">
                  {fmt(e.budget)}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-700">
                  {fmt(e.actual)}
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-bold text-red-500">
                    -{fmt(e.variance)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap ${STATUS_STYLES[e.status] ?? "bg-gray-100 text-gray-500"}`}
                  >
                    {e.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Check size={18} className="text-emerald-500" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
