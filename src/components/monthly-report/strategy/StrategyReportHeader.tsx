"use client";

import { LayoutGrid, ChevronDown } from "lucide-react";

const BLUE = "#006cb7";

const dropdowns = ["Strategy", "March", "2026"];

export default function StrategyReportHeader() {
  return (
    <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
      {/* Title */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${BLUE}15` }}
        >
          <LayoutGrid size={20} style={{ color: BLUE }} />
        </div>
        <h1 className="text-xl font-bold" style={{ color: BLUE }}>
          Strategy Detail Report
        </h1>
      </div>

      {/* Dropdowns */}
      <div className="flex items-center gap-2">
        {dropdowns.map((label) => (
          <button
            key={label}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors shadow-sm"
          >
            {label}
            <ChevronDown size={14} />
          </button>
        ))}
      </div>
    </div>
  );
}
