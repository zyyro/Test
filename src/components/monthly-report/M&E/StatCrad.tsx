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
import { Span } from "next/dist/trace";

const BLUE = "#006cb7";

const kpis = [
  {
    icon: Users,
    color: BLUE,
    label: "Enterprise Supported",
    value: "$5,200,000",
    unit: "USD",
    sub: "Up 3.2% from last month",
  },
  {
    icon: CheckCircle,
    color: "#10b981",
    label: "Training Provider Engaged",
    value: 1800,
    unit: "TP",
    sub: "Up 7.8% from last month",
  },
  {
    icon: UserPlus,
    color: "#06b6d4",
    label: "Course Delivered",
    value: 96,
    unit: "Courses",
    sub: "Down 1.5% from last month",
  },
  {
    icon: GraduationCap,
    color: "#7c3aed",
    label: "Provinces Reached",
    value: 14,
    unit: "Provinces",
    sub: "No change from last month",
  },
  {
    icon: TrendingUp,
    color: "#ef4444",
    label: "Certification Rate",
    value: 84,
    unit: "%",
    sub: "Up 2.4% from last month",
  },
];
export default function StatCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 mb-6 ">
      {kpis.map((k, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5 min-h-40 hover:shadow-md transition"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center"
              style={{ background: `${k.color}18` }}
            >
              <k.icon size={20} style={{ color: k.color }} />
            </div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              {k.label}
            </p>
          </div>

          <div className="mt-2">
            <p
              className="text-[35px] font-bold leading-none tracking-normal"
              style={{ color: k.color }}
            >
              {k.value}
              {k.unit && (
                <span className="text-lg ml-2 font-medium">{k.unit}</span>
              )}
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mt-2">
              {k.sub}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
