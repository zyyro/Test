"use client";

import { useState } from "react";
import MonthlyReportHeader from "@/components/MonthlyReportHeader";
import {
  Monitor,
  Users,
  Mail,
  FolderOpen,
  ShieldAlert,
  Wifi,
  Cloud,
  Globe,
  HardDrive,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  Clock,
  AlertCircle,
  ChevronUp,
  ChevronDown,
  Ticket,
  CheckCircle,
  AlarmClock,
  AlertTriangle,
  Wrench,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const BLUE = "#006cb7";

// ─── Data ─────────────────────────────────────────────────────────────────────
const usageTrend = [
  { month: "Jan", users: 280 },
  { month: "Feb", users: 310 },
  { month: "Mar", users: 295 },
  { month: "Apr", users: 340 },
  { month: "May", users: 320 },
  { month: "Jun", users: 380 },
  { month: "Jul", users: 410 },
  { month: "Aug", users: 390 },
  { month: "Sep", users: 425 },
  { month: "Oct", users: 460 },
  { month: "Nov", users: 445 },
  { month: "Dec", users: 490 },
];

const devData = [
  { name: "Skill Match", eLearning: 4200, Training: 3100, Survey: 2800 },
  { name: "Survey", eLearning: 3800, Training: 2900, Survey: 3200 },
  { name: "Skill Voucher", eLearning: 5100, Training: 4200, Survey: 3600 },
  { name: "PMS", eLearning: 3200, Training: 2700, Survey: 2400 },
  { name: "Joint Training", eLearning: 4600, Training: 3800, Survey: 3100 },
  { name: "E-Learning", eLearning: 5800, Training: 4900, Survey: 4200 },
];

const ticketTrend = [
  { month: "Jan", open: 12, resolved: 80, critical: 2 },
  { month: "Feb", open: 18, resolved: 95, critical: 4 },
  { month: "Mar", open: 14, resolved: 88, critical: 3 },
  { month: "Apr", open: 22, resolved: 102, critical: 5 },
  { month: "May", open: 19, resolved: 98, critical: 3 },
  { month: "Jun", open: 25, resolved: 110, critical: 4 },
  { month: "Jul", open: 30, resolved: 115, critical: 6 },
  { month: "Aug", open: 28, resolved: 108, critical: 5 },
  { month: "Sep", open: 34, resolved: 120, critical: 4 },
  { month: "Oct", open: 31, resolved: 118, critical: 3 },
  { month: "Nov", open: 36, resolved: 125, critical: 5 },
  { month: "Dec", open: 34, resolved: 128, critical: 3 },
];

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

const infra = [
  { icon: Cloud, label: "Microsoft 365", value: "All Services Online" },
  { icon: HardDrive, label: "SharePoint Usage", value: "75% Utilization" },
  { icon: Globe, label: "Website Uptime", value: "99.8%" },
  { icon: Wifi, label: "Backup Status", value: "Up To Date" },
];

const improvements = [
  {
    text: "Enhanced online training registration system",
    sub: "Improved accessibility and user experience for trainees and training providers",
  },
  {
    text: "Completed integration with training provider database",
    sub: "Enabled centralized management of accredited institutions",
  },
  {
    text: "Optimized SDF website performance",
    sub: "Increased loading speed and reliability for nationwide users",
  },
  {
    text: "Upgraded beneficiary data management system",
    sub: "Ensured higher accuracy and reliability of data",
  },
  {
    text: "Introduced automated reporting tools",
    sub: "Facilitated timely and efficient report submission",
  },
];

const challenges = [
  {
    text: "High volume of training applications during peak periods",
    sub: "Causing delays in processing and approval timelines",
  },
  {
    text: "Incomplete data submission from training providers",
    sub: "Affects accuracy of reporting and monitoring",
  },
  {
    text: "Limited system integration with external platforms",
    sub: "Restricts data sharing and automation",
  },
  {
    text: "Internet connectivity issues in rural areas",
    sub: "Impacts access to the SDF system",
  },
  {
    text: "Increasing demand for digital skills training",
    sub: "Exceeds current system capacity",
  },
];

const nextActions = [
  {
    text: "Upgrade SDF online platform",
    sub: "To support increased users and scalability",
  },
  {
    text: "Strengthen data validation mechanisms",
    sub: "Ensure accuracy and reliability of data",
  },
  {
    text: "Enhance integration with partner systems",
    sub: "Enable seamless data exchange",
  },
  {
    text: "Conduct training for system users",
    sub: "Improve usability and reduce errors",
  },
  {
    text: "Expand infrastructure for nationwide access",
    sub: "Focus on rural and remote areas",
  },
];

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

// ─── Helpers ──────────────────────────────────────────────────────────────────
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

const tooltipStyle = {
  borderRadius: 12,
  border: "none",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  fontSize: 13,
};

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function ITCDetailReport() {
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
    <div className="min-h-screen bg-gray-50 p-8 font-sans text-gray-800">
      {/* ── Header ── */}
      <div className="mb-8">
        <MonthlyReportHeader />
      </div>

      {/* ── 10 KPI Cards ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {kpiCards.map((k, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Icon + badge row */}
            <div className="flex items-center justify-between mb-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: `${k.color}15` }}
              >
                <k.icon size={20} style={{ color: k.color }} />
              </div>
              {k.up !== null ? (
                <span
                  className={`flex items-center gap-1 text-xs font-bold ${k.up ? "text-emerald-500" : "text-red-500"}`}
                >
                  {k.up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                  {k.sub}
                </span>
              ) : (
                <span className="text-xs font-medium text-gray-400">
                  {k.sub}
                </span>
              )}
            </div>
            {/* Value */}
            <p
              className="text-4xl font-bold leading-none mb-2"
              style={{ color: k.color }}
            >
              {k.value}
            </p>
            {/* Label */}
            <p className="text-sm text-gray-400">{k.label}</p>
          </div>
        ))}
      </div>

      {/* ── 3 Charts ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
        {/* 1 — System Usage Trend */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="font-bold text-base mb-1" style={{ color: BLUE }}>
            System Usage Trend
          </h3>
          <p className="text-gray-400 text-sm mb-5">
            Monthly active users — Jan to Dec
          </p>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={usageTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip contentStyle={tooltipStyle} />
              <Line
                type="monotone"
                dataKey="users"
                stroke={BLUE}
                strokeWidth={3}
                dot={{ r: 4, fill: BLUE }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 2 — System Development Activity */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="font-bold text-base mb-1" style={{ color: BLUE }}>
            System Development Activity
          </h3>
          <p className="text-gray-400 text-sm mb-5">
            Breakdown by system module
          </p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={devData} barSize={11}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 10 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend
                iconType="circle"
                iconSize={9}
                wrapperStyle={{ fontSize: 12 }}
              />
              <Bar dataKey="eLearning" fill={BLUE} radius={[4, 4, 0, 0]} />
              <Bar dataKey="Training" fill="#10b981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Survey" fill="#f59e0b" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 3 — Support Ticket Trend */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="font-bold text-base mb-1" style={{ color: BLUE }}>
            Support Ticket Trend
          </h3>
          <p className="text-gray-400 text-sm mb-5">
            Open · Resolved · Critical — Jan to Dec
          </p>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={ticketTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend
                iconType="circle"
                iconSize={9}
                wrapperStyle={{ fontSize: 12 }}
              />
              <Line
                type="monotone"
                dataKey="resolved"
                stroke="#10b981"
                strokeWidth={2.5}
                dot={{ r: 3, fill: "#10b981" }}
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="open"
                stroke={BLUE}
                strokeWidth={2.5}
                dot={{ r: 3, fill: BLUE }}
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="critical"
                stroke="#ef4444"
                strokeWidth={2.5}
                dot={{ r: 3, fill: "#ef4444" }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
          {/* Summary pills */}
          <div className="flex gap-2 mt-4 flex-wrap">
            {[
              { label: "Total Open", value: "34", color: BLUE },
              { label: "Resolved", value: "128", color: "#10b981" },
              { label: "Critical", value: "3", color: "#ef4444" },
              { label: "Avg Close", value: "1.4h", color: "#f59e0b" },
            ].map((p) => (
              <div
                key={p.label}
                className="flex-1 min-w-[60px] rounded-xl px-3 py-2 text-center"
                style={{
                  background: `${p.color}10`,
                  border: `1px solid ${p.color}25`,
                }}
              >
                <p className="text-sm font-bold" style={{ color: p.color }}>
                  {p.value}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── System Table + Digital Infrastructure ── */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-5 mb-8">
        {/* Table */}
        <div className="col-span-1 lg:col-span-7 min-w-0 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-base" style={{ color: BLUE }}>
                System Development Status
              </h3>
              <p className="text-gray-400 text-sm mt-0.5">
                All active and monitored systems
              </p>
            </div>
            <span className="text-sm bg-blue-50 text-blue-600 border border-blue-100 px-3 py-1 rounded-full font-semibold whitespace-nowrap">
              {systems.length} Systems
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-sm">
                  {[
                    ["name", "System"],
                    ["status", "Status"],
                    ["feature", "Feature"],
                    ["completed", "Completed"],
                    ["inProgress", "In Progress"],
                    ["pending", "Pending"],
                    ["pct", "Completion %"],
                  ].map(([col, label]) => (
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

        {/* Digital Infrastructure */}
        <div className="col-span-1 lg:col-span-3 min-w-0 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: `${BLUE}15` }}
            >
              <Wifi size={16} style={{ color: BLUE }} />
            </div>
            <h3 className="font-bold text-base" style={{ color: BLUE }}>
              Digital Infrastructure
            </h3>
          </div>

          <div className="space-y-3">
            {infra.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0">
                  <item.icon size={16} style={{ color: BLUE }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-400 text-xs">{item.label}</p>
                  <p className="text-gray-800 text-sm font-semibold">
                    {item.value}
                  </p>
                </div>
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
              </div>
            ))}
          </div>

          <div className="mt-5 p-4 rounded-xl border border-emerald-100 bg-emerald-50/50">
            <p className="text-emerald-600 text-sm font-semibold mb-2">
              Overall Health
            </p>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2.5 bg-emerald-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full"
                  style={{ width: "100%" }}
                />
              </div>
              <span className="text-emerald-600 text-sm font-bold">100%</span>
            </div>
            <p className="text-emerald-500 text-xs mt-2">
              All systems operational
            </p>
          </div>
        </div>
      </div>

      {/* ── Improvements / Challenges / Next Actions ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Improvements */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "#10b98115" }}
            >
              <TrendingUp size={16} className="text-emerald-500" />
            </div>
            <h3 className="font-bold text-base text-emerald-600">
              System Improvements
            </h3>
          </div>
          <div className="space-y-3">
            {improvements.map((c, i) => (
              <div
                key={i}
                className="flex gap-3 p-3 rounded-xl bg-emerald-50/60 border border-emerald-100"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
                <div>
                  <p className="text-gray-800 text-sm font-semibold leading-snug">
                    {c.text}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-amber-50">
              <AlertCircle size={16} className="text-amber-500" />
            </div>
            <h3 className="font-bold text-base text-amber-600">
              System Challenges
            </h3>
          </div>
          <div className="space-y-3">
            {challenges.map((c, i) => (
              <div
                key={i}
                className="flex gap-3 p-3 rounded-xl bg-amber-50/60 border border-amber-100"
              >
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                <div>
                  <p className="text-gray-800 text-sm font-semibold leading-snug">
                    {c.text}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Actions */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-violet-50">
              <Clock size={16} className="text-violet-500" />
            </div>
            <h3 className="font-bold text-base text-violet-600">
              Next Actions
            </h3>
          </div>
          <div className="space-y-3">
            {nextActions.map((a, i) => (
              <div
                key={i}
                className="flex gap-3 p-3 rounded-xl bg-violet-50/60 border border-violet-100"
              >
                <div className="w-6 h-6 rounded-full bg-violet-100 border border-violet-200 flex items-center justify-center shrink-0 text-xs font-bold text-violet-500">
                  {i + 1}
                </div>
                <div>
                  <p className="text-gray-800 text-sm font-semibold leading-snug">
                    {a.text}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{a.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
