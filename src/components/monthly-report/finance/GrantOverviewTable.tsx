"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const BLUE = "#006cb7";

const grants = [
  {
    program:  "Skills Development Initiative",
    sector:   "Technical",
    approved: 1500000,
    disbursed: 1200000,
    remaining: 300000,
    status:   "Disbursing",
  },
  {
    program:  "Tourism Enhancement Project",
    sector:   "Tourism",
    approved: 1200000,
    disbursed: 900000,
    remaining: 300000,
    status:   "Fully Disbursed",
  },
  {
    program:  "Digital Innovation Support",
    sector:   "Digital",
    approved: 800000,
    disbursed: 450000,
    remaining: 350000,
    status:   "Partially Disbursed",
  },
  {
    program:  "Agriculture Capacity Building",
    sector:   "Agriculture",
    approved: 1000000,
    disbursed: 650000,
    remaining: 350000,
    status:   "Disbursing",
  },
];

const STATUS_STYLES: Record<string, string> = {
  "Disbursing":          "bg-emerald-500 text-white",
  "Fully Disbursed":     "bg-orange-500 text-white",
  "Partially Disbursed": "bg-blue-500 text-white",
};

const fmt = (n: number) =>
  "$" + n.toLocaleString("en-US");

type Col = "program" | "sector" | "approved" | "disbursed" | "remaining" | "status";

const COLS: { key: Col; label: string }[] = [
  { key: "program",   label: "Program"          },
  { key: "sector",    label: "Sector"           },
  { key: "approved",  label: "Approved Budget"  },
  { key: "disbursed", label: "Disbursed"        },
  { key: "remaining", label: "Remaining"        },
  { key: "status",    label: "Status"           },
];

export default function GrantOverviewTable() {
  const [sortCol, setSortCol]  = useState<Col | null>(null);
  const [sortDir, setSortDir]  = useState<"asc" | "desc">("asc");

  function handleSort(col: Col) {
    if (sortCol === col) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortCol(col); setSortDir("asc"); }
  }

  const sorted = [...grants].sort((a, b) => {
    if (!sortCol) return 0;
    const va = a[sortCol], vb = b[sortCol];
    if (typeof va === "number" && typeof vb === "number")
      return sortDir === "asc" ? va - vb : vb - va;
    return sortDir === "asc"
      ? String(va).localeCompare(String(vb))
      : String(vb).localeCompare(String(va));
  });

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
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
                    {sortCol === key
                      ? sortDir === "asc" ? <ChevronUp size={13} /> : <ChevronDown size={13} />
                      : null}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((g, i) => (
              <tr key={i} className="border-t border-gray-50 hover:bg-blue-50/20 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-800">{g.program}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{g.sector}</td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-800">{fmt(g.approved)}</td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-800">{fmt(g.disbursed)}</td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-800">{fmt(g.remaining)}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-lg ${STATUS_STYLES[g.status] ?? "bg-gray-100 text-gray-500"}`}>
                    {g.status}
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
