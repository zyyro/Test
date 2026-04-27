"use client";

import { Check } from "lucide-react";

const tasks = [
  {
    action: "Revise Prakas on ToR & Prakas on SOP",
    owner: "M&E",
    support: "Internal Audit, Admin & Finance",
    timeline: "Q1-2026",
    note: "Finished 1st revision and pending",
    status: "Pending",
  },
  {
    action: "Revise SOP (Part 1, 2, & 3) of SDF",
    owner: "M&E",
    support: "All divisions",
    timeline: "Q1-2026",
    note: "Part 1 & 2 finished and Part 3 is ongoing",
    status: "Completed",
  },









  
  {
    action: "Prepare 2 letters to seek approval on Prakas",
    owner: "M&E",
    support: "Internal Audit, Admin & Finance",
    timeline: "Q1-2026",
    note: "Finished 1st revision and pending",
    status: "Pending",
  },
];
const STATUS_STYLES: Record<string, string> = {
  Pending: "bg-orange-400 text-white",
  Completed: "bg-green-500 text-white",
};

const fmt = (n: number) => "$" + Math.abs(n).toLocaleString("en-US");

export default function ExpenseBreakdownTable() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="font-bold text-lg text-gray-800">Additional Tasks</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-sm">
              {[
                "Action Item ",
                "Owner",
                "Supporting Division",
                "Timeline",
                "Note",
                "Status",
              ].map((h, i) => (
                <th
                  key={i}
                  className="px-7 py-3.5 text-left font-semibold whitespace-nowrap"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tasks.map((t, i) => (
              <tr
                key={i}
                className="border-t border-gray-50 hover:bg-blue-50/20 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-800">
                  {t.action}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-700">
                  {t.owner}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-700">
                  {t.support}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-700">
                  {t.timeline}
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-bold text-red-500">
                    {t.note}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap ${STATUS_STYLES[t.status] ?? "bg-gray-100 text-gray-500"}`}
                  >
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
