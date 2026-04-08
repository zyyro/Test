"use client";

import {
  Monitor,
  Users,
  Mail,
  FolderOpen,
  ShieldAlert,
  Ticket,
  CheckCircle,
  AlarmClock,
  AlertTriangle,
  Wrench,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const BLUE = "#006cb7";

const kpiCards = [
  {
    icon: Monitor,
    color: BLUE,
    label: "System Uptime",
    value: "99.5%",
    sub: "+0.3%",
    up: true,
  },
  {
    icon: Users,
    color: "#10b981",
    label: "Active Users",
    value: "185",
    sub: "+12 this month",
    up: true,
  },
  {
    icon: Mail,
    color: "#f59e0b",
    label: "Email Accounts",
    value: "47",
    sub: "Managed",
    up: null,
  },
  {
    icon: FolderOpen,
    color: "#6366f1",
    label: "System Projects",
    value: "6",
    sub: "In progress",
    up: null,
  },
  {
    icon: ShieldAlert,
    color: "#ef4444",
    label: "Security Status",
    value: "2",
    sub: "Warnings",
    up: false,
  },
  {
    icon: Ticket,
    color: "#8b5cf6",
    label: "Open Tickets",
    value: "34",
    sub: "+5 today",
    up: false,
  },
  {
    icon: CheckCircle,
    color: "#10b981",
    label: "Resolved Tickets",
    value: "128",
    sub: "This month",
    up: true,
  },
  {
    icon: AlarmClock,
    color: "#f97316",
    label: "Avg Response Time",
    value: "1.4h",
    sub: "-12 min",
    up: true,
  },
  {
    icon: AlertTriangle,
    color: "#ef4444",
    label: "Critical Issues",
    value: "3",
    sub: "Urgent",
    up: false,
  },
  {
    icon: Wrench,
    color: "#06b6d4",
    label: "Maintenance Tasks",
    value: "11",
    sub: "Scheduled",
    up: null,
  },
];

export default function KpiCards() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      {kpiCards.map((k, i) => (
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
            <span className="text-xs mt-3 font-medium text-gray-400">{k.sub}</span>
          )}
        </div>
      ))}
    </div>
  );
}
