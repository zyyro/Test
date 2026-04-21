"use client";

import {
  ClipboardList,
  BarChart2,
  Trophy,
  Target,
  TrendingUp,
} from "lucide-react";

const BLUE = "#006cb7";

const cards = [
  {
    icon: ClipboardList,
    color: BLUE,
    label: "Total Approved Program",
    value: 56,
    unit: "Program",
  },
  {
    icon: BarChart2,
    color: "#06b6d4",
    label: "Ongoing Program",
    value: 34,
    unit: "Program",
  },
  {
    icon: Trophy,
    color: "#10b981",
    label: "Completed Program",
    value: 18,
    unit: "Program",
  },
  {
    icon: TrendingUp,
    color: "#f59e0b",
    label: "Growth Rate",
    value: "+12%",
    unit: "YoY",
  },
  {
    icon: Target,
    color: "#7c3aed",
    label: "Sector Diversification",
    value: 3.2,
    unit: "Index",
  },
];

function PriorityAlignmentCard() {
  const pct = 82;
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex-1 min-w-[180px]">
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: `${BLUE}15` }}
        >
          <BarChart2 size={15} style={{ color: BLUE }} />
        </div>
        <p className="text-xs font-semibold text-gray-500 leading-tight">
          Priority Sector
          <br />
          Alignment
        </p>
      </div>
      <p className="text-3xl font-bold mb-2" style={{ color: BLUE }}>
        {pct}%
      </p>
      <div className="relative h-2.5 bg-gray-100 rounded-full overflow-visible">
        <div
          className="h-full rounded-full"
          style={{ width: `${pct}%`, background: "#10b981" }}
        />
        {/* Marker */}
        <div
          className="absolute -top-0.5 flex flex-col items-center"
          style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
        >
          <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-emerald-500 shadow-sm" />
          <span className="text-[9px] font-bold text-emerald-600 mt-0.5">
            {pct}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default function StrategySummaryCards() {
  return (
    <div className="flex gap-4 mb-6 flex-wrap">
      {cards.map((c, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex-1 min-w-[140px]"
        >
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: `${c.color}15` }}
            >
              <c.icon size={15} style={{ color: c.color }} />
            </div>
            <p className="text-xs font-semibold text-gray-500">{c.label}</p>
          </div>
          <p className="text-4xl font-bold" style={{ color: c.color }}>
            {c.value}{" "}
            <span className="text-base font-medium text-gray-400">
              {c.unit}
            </span>
          </p>
        </div>
      ))}
      <PriorityAlignmentCard />
    </div>
  );
}
