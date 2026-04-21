"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const BLUE = "#006cb7";

const systems = [
  {
    name: "Skill Matching",
    status: "Active",
    feature: 12,
    completed: 10,
    inProgress: 1,
    pending: 1,
    pct: 83,
  },
  {
    name: "Survey",
    status: "Active",
    feature: 18,
    completed: 12,
    inProgress: 4,
    pending: 4,
    pct: 67,
  },
  {
    name: "Skill Voucher",
    status: "Processing",
    feature: 31,
    completed: 18,
    inProgress: 8,
    pending: 5,
    pct: 58,
  },
  {
    name: "PMS",
    status: "Inactive",
    feature: 19,
    completed: 11,
    inProgress: 7,
    pending: 1,
    pct: 58,
  },
  {
    name: "Joint Training",
    status: "Active",
    feature: 13,
    completed: 7,
    inProgress: 3,
    pending: 3,
    pct: 54,
  },
  {
    name: "E-Learning",
    status: "Processing",
    feature: 28,
    completed: 18,
    inProgress: 5,
    pending: 5,
    pct: 64,
  },
];

const STATUS_STYLES: Record<string, string> = {
  Active: "bg-emerald-50 text-emerald-600 border border-emerald-200",
  Processing: "bg-amber-50 text-amber-600 border border-amber-200",
  Inactive: "bg-red-50 text-red-500 border border-red-200",
};

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`text-xs font-semibold px-3 py-1 rounded-full ${STATUS_STYLES[status] ?? "bg-gray-100 text-gray-500"}`}
    >
      {status}
    </span>
  );
}

function PctBar({ value }: { value: number }) {
  const color = value >= 75 ? "#10b981" : value >= 55 ? "#f59e0b" : "#ef4444";
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${value}%`,
            background: color,
            transition: "width 0.6s ease",
          }}
        />
      </div>
      <span className="text-sm font-bold w-10 text-right" style={{ color }}>
        {value}%
      </span>
    </div>
  );
}

const COLUMNS: [string, string][] = [
  ["name", "System"],
  ["status", "Status"],
  ["feature", "Feature"],
  ["completed", "Completed"],
  ["inProgress", "In Progress"],
  ["pending", "Pending"],
  ["pct", "Completion %"],
];

export default function SystemTable() {
  const [sortCol, setSortCol] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  function handleSort(col: string) {
    if (sortCol === col) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortCol(col);
      setSortDir("asc");
    }
  }

  const totals = {
    feature: systems.reduce((a, s) => a + s.feature, 0),
    completed: systems.reduce((a, s) => a + s.completed, 0),
    inProgress: systems.reduce((a, s) => a + s.inProgress, 0),
    pending: systems.reduce((a, s) => a + s.pending, 0),
    pct: Math.round(systems.reduce((a, s) => a + s.pct, 0) / systems.length),
  };

  return (
    <div className="min-w-0 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-bold text-base" style={{ color: BLUE }}>
            System Development Status
          </h3>
          <p className="text-gray-400 text-sm mt-0.5">
            All active and monitored systems
          </p>
        </div>

        <span className="shrink-0 text-sm bg-blue-50 text-blue-600 border border-blue-100 px-3 py-1 rounded-full font-semibold whitespace-nowrap">
          {systems.length} Systems
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-sm">
              {COLUMNS.map(([col, label]) => (
                <th
                  key={col}
                  onClick={() => handleSort(col)}
                  className="px-5 py-4 text-left font-semibold cursor-pointer select-none hover:text-blue-600 transition-colors whitespace-nowrap"
                >
                  <span className="flex items-center gap-1">
                    {label}
                    {sortCol === col ? (
                      sortDir === "asc" ? (
                        <ChevronUp size={13} />
                      ) : (
                        <ChevronDown size={13} />
                      )
                    ) : null}
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {systems.map((s, i) => (
              <tr
                key={i}
                className="border-t border-gray-50 hover:bg-blue-50/30 transition-colors"
              >
                <td className="px-5 py-4 font-semibold text-gray-800 text-sm whitespace-nowrap">
                  {s.name}
                </td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <StatusBadge status={s.status} />
                </td>
                <td
                  className="px-5 py-4 font-bold text-sm whitespace-nowrap"
                  style={{ color: BLUE }}
                >
                  {s.feature}
                </td>
                <td className="px-5 py-4 font-bold text-sm text-emerald-600 whitespace-nowrap">
                  {s.completed}
                </td>
                <td className="px-5 py-4 font-bold text-sm text-amber-500 whitespace-nowrap">
                  {s.inProgress}
                </td>
                <td className="px-5 py-4 font-bold text-sm text-red-400 whitespace-nowrap">
                  {s.pending}
                </td>
                <td className="px-5 py-4 min-w-[150px]">
                  <PctBar value={s.pct} />
                </td>
              </tr>
            ))}

            <tr className="border-t-2 border-gray-200 bg-gray-50">
              <td className="px-5 py-4 font-bold text-sm text-gray-700 whitespace-nowrap">
                Total
              </td>
              <td className="px-5 py-4" />
              <td
                className="px-5 py-4 font-bold text-sm whitespace-nowrap"
                style={{ color: BLUE }}
              >
                {totals.feature}
              </td>
              <td className="px-5 py-4 font-bold text-sm text-emerald-600 whitespace-nowrap">
                {totals.completed}
              </td>
              <td className="px-5 py-4 font-bold text-sm text-amber-500 whitespace-nowrap">
                {totals.inProgress}
              </td>
              <td className="px-5 py-4 font-bold text-sm text-red-400 whitespace-nowrap">
                {totals.pending}
              </td>
              <td className="px-5 py-4 min-w-[150px]">
                <PctBar value={totals.pct} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
