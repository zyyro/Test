"use client";

import {
  Users,
  CheckCircle,
  UserPlus,
  GraduationCap,
  TrendingUp,
  UserMinus,
  Monitor,
} from "lucide-react";

const BLUE = "#006cb7";

const kpis = [
  {
    icon: Users,
    color: BLUE,
    label: "Total Staff",
    value: "125",
    unit: "",
    sub: "5% increase from last month",
  },
  {
    icon: CheckCircle,
    color: "#10b981",
    label: "Attendance Rate",
    value: "92",
    unit: "%",
    sub: "Improved by 3% from last month",
  },
  {
    icon: UserPlus,
    color: "#06b6d4",
    label: "New Staff",
    value: "8",
    unit: "",
    sub: "5 in Admin, 3 in Finance",
  },
  {
    icon: GraduationCap,
    color: "#7c3aed",
    label: "Training Participation",
    value: "76",
    unit: "%",
    sub: "Up by 12% from last month",
  },
  {
    icon: TrendingUp,
    color: "#f97316",
    label: "Productivity Score",
    value: "88",
    unit: "%",
    sub: "Based on attendance + tasks completed",
  },
  {
    icon: UserMinus,
    color: "#ef4444",
    label: "Leave Rate",
    value: "8",
    unit: "%",
    sub: "Based on total staff count",
  },
  {
    icon: Monitor,
    color: "#eab308",
    label: "Assets in Use",
    value: "85",
    unit: "",
    sub: "Out of 174 total assets",
  },
];

export default function HRSummaryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-7 gap-4 mb-6">
      {kpis.map((k, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5 min-h-[160px] hover:shadow-md transition"
        >
          {/* Top Row */}
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: `${k.color}18` }}
            >
              <k.icon size={20} style={{ color: k.color }} />
            </div>

            <p className="text-sm font-semibold text-gray-500">{k.label}</p>
          </div>

          {/* Main Content */}
          <div className="mt-2">
            <p
              className="text-[40px] font-bold leading-none tracking-tight"
              style={{ color: k.color }}
            >
              {k.value}
              {k.unit && <span className="text-xl ml-1">{k.unit}</span>}
            </p>

            <p className="text-sm mt-3 text-gray-400">{k.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
