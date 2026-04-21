"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const BLUE = "#006cb7";

const sectorBudget = [
  { name: "Technical", value: 30, color: "#7c3aed" },
  { name: "Tourism", value: 25, color: "#f59e0b" },
  { name: "Digital", value: 20, color: "#3b82f6" },
  { name: "Agriculture", value: 20, color: "#ef4444" },
  { name: "Other", value: 5, color: "#10b981" },
];
const sectorBudgetLeft = [
  { text: "Technical", sub: "30%", color: "#7c3aed" },
  { text: "Tourism", sub: "25%", color: "#f59e0b" },
  { text: "Digital", sub: "20%", color: "#3b82f6" },
  { text: "Agriculture", sub: "20%", color: "#ef4444" },
  { text: "Other", sub: "5%", color: "#10b981" },
];
const tooltipStyle = {
  borderRadius: 12,
  border: "none",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  fontSize: 12,
};
const grants = [
  {
    program: "Skills Development Initiative",
    sector: "Technical",
    approved: 1500000,
    disbursed: 1200000,
    remaining: 300000,
    status: "Disbursing",
  },
  {
    program: "Tourism Enhancement Project",
    sector: "Tourism",
    approved: 1200000,
    disbursed: 900000,
    remaining: 300000,
    status: "Fully Disbursed",
  },
  {
    program: "Digital Innovation Support",
    sector: "Digital",
    approved: 800000,
    disbursed: 450000,
    remaining: 350000,
    status: "Partially Disbursed",
  },
  {
    program: "Agriculture Capacity Building",
    sector: "Agriculture",
    approved: 1000000,
    disbursed: 650000,
    remaining: 350000,
    status: "Disbursing",
  },
];

const STATUS_STYLES: Record<string, string> = {
  Disbursing: "bg-emerald-500 text-white",
  "Fully Disbursed": "bg-orange-500 text-white",
  "Partially Disbursed": "bg-blue-500 text-white",
};

const fmt = (n: number) => "$" + n.toLocaleString("en-US");

type Col =
  | "program"
  | "sector"
  | "approved"
  | "disbursed"
  | "remaining"
  | "status";

const COLS: { key: Col; label: string }[] = [
  { key: "program", label: "Program" },
  { key: "sector", label: "Sector" },
  { key: "approved", label: "Approved Budget" },
  { key: "disbursed", label: "Disbursed" },
  { key: "remaining", label: "Remaining" },
  { key: "status", label: "Status" },
];

function renderLabel({ cx, cy, midAngle, outerRadius, name, value }: any) {
  const RADIAN = Math.PI / 180;
  const r = outerRadius + 30;
  const x = cx + r * Math.cos(-midAngle * RADIAN);
  const y = cy + r * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="#555"
      fontSize={11}
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${name} ${value}%`}
    </text>
  );
}

export default function GrantOverviewTable() {
  const [sortCol, setSortCol] = useState<Col | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  function handleSort(col: Col) {
    if (sortCol === col) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortCol(col);
      setSortDir("asc");
    }
  }

  const sorted = [...grants].sort((a, b) => {
    if (!sortCol) return 0;
    const va = a[sortCol],
      vb = b[sortCol];
    if (typeof va === "number" && typeof vb === "number")
      return sortDir === "asc" ? va - vb : vb - va;
    return sortDir === "asc"
      ? String(va).localeCompare(String(vb))
      : String(vb).localeCompare(String(va));
  });

  return (
    <div className="flex gap-5 mb-8 flex-wrap xl:flex-nowrap">
      {/* Grant Overview (70%) */}
      <div className="w-full xl:w-[70%] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="font-bold text-lg text-gray-800">Grant Overview</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm">
                {COLS.map(({ key, label }) => (
                  <th
                    key={key}
                    onClick={() => handleSort(key)}
                    className="px-6 py-3.5 text-left font-semibold cursor-pointer select-none hover:text-blue-600 transition-colors whitespace-nowrap"
                  >
                    <span className="flex items-center gap-1">
                      {label}
                      {sortCol === key ? (
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
              {sorted.map((g, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-50 hover:bg-blue-50/20 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">
                    {g.program}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {g.sector}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                    {fmt(g.approved)}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                    {fmt(g.disbursed)}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                    {fmt(g.remaining)}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg ${
                        STATUS_STYLES[g.status] ?? "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {g.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Budget by Sector (30%) */}
      <div className="w-full xl:w-[30%] bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h3 className="font-bold text-base mb-4" style={{ color: BLUE }}>
          Budget by Sector
        </h3>

        <div className="grid grid-cols-2 gap-4 items-center">
          {/* Chart */}
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={sectorBudget}
                cx="50%"
                cy="50%"
                outerRadius={90}
                innerRadius={50}
                dataKey="value"
                labelLine={true}
                label={renderLabel}
              >
                {sectorBudget.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(v) => [`${v}%`, "Share"]}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Legend */}
          <ul className="p-2">
            {sectorBudgetLeft.map((item, i) => (
              <li
                key={i}
                className="flex items-center mt-3 gap-2 text-sm text-gray-600"
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="flex-1">{item.text}</span>
                <span className="font-bold text-gray-800">{item.sub}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
