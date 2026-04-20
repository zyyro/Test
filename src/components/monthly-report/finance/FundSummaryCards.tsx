"use client";

import { AreaChart, Area, ResponsiveContainer } from "recharts";
import {
  Wallet,
  DollarSign,
  Percent,
  Clock,
  FolderKanban,
  TrendingUp,
  TrendingDown,
  type LucideIcon,
} from "lucide-react";

const BLUE = "#006cb7";

const sparkData = [
  { v: 3 },
  { v: 5 },
  { v: 4 },
  { v: 7 },
  { v: 6 },
  { v: 8 },
  { v: 7 },
];

type FundCard = {
  icon: LucideIcon;
  color: string;
  label: string;
  value: string;
  sub: string;
  up: boolean | null;
  spark?: boolean;
};

const fundCards: FundCard[] = [
  {
    icon: Wallet,
    color: BLUE,
    label: "Total Funds Allocated",
    value: "$8,500,000",
    sub: "+0.3%",
    up: true,
    spark: true,
  },
  {
    icon: TrendingUp,
    color: "#10b981",
    label: "Funds Distributed",
    value: "$5,200,000",
    sub: "+12 this month",
    up: true,
  },
  {
    icon: DollarSign,
    color: "#f59e0b",
    label: "Remaining Funds",
    value: "$3,300,000",
    sub: "Managed",
    up: null,
  },
  {
    icon: Percent,
    color: "#6366f1",
    label: "Disbursement Rate",
    value: "61%",
    sub: "In progress",
    up: null,
  },
  {
    icon: Clock,
    color: "#dc2626",
    label: "Pending Approvals",
    value: "$1,200,000",
    sub: "Awaiting approval",
    up: false,
  },
  {
    icon: FolderKanban,
    color: "#0ea5e9",
    label: "Active Projects",
    value: "24",
    sub: "Ongoing",
    up: null,
  },
];

export default function FundSummaryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
      {fundCards.map((k, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: `${k.color}15` }}
            >
              <k.icon size={20} style={{ color: k.color }} />
            </div>

            <p className="text-sm font-semibold text-gray-500">{k.label}</p>
          </div>

          <p
            className="text-4xl mt-3 font-bold leading-none mb-2"
            style={{ color: k.color }}
          >
            {k.value}
          </p>
          {k.up !== null ? (
            <span
              className={`flex items-center gap-1 text-xs font-bold ${k.up ? "text-emerald-500" : "text-red-500"}`}
            >
              {k.up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
              {k.sub}
            </span>
          ) : (
            <span className="text-xs mt-3 font-medium text-gray-400">
              {k.sub}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
