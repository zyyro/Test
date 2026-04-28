"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Check } from "lucide-react";

const fmt = (n: number) => "$" + Math.abs(n).toLocaleString("en-US");

type TestTable = {
  id: string;
  category: string;
  budget: number;
  actual: number;
  variance: number;
  status: "On Track" | "Over Budget";
};

export default function TestTable() {
  const [data, setData] = useState<TestTable[]>([]);

  useEffect(() => {
    const fetchTestTable = async () => {
      try {
        const response = await axios.get<{ data: TestTable[] }>(
          "/api/finance/dashboard",
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching test table data:", error);
      }
    };
    fetchTestTable();
  }, []);
  return (
    <div className="bg-white rounded-2xl border border-gray-100 pb-8.5 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="font-bold text-lg text-gray-800">
          Expense Breakdown (With Axios){" "}
        </h3>
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
            {data.map((e, i) => (
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
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap 
                        ${
                          e.status === "On Track"
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                        }`}
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
