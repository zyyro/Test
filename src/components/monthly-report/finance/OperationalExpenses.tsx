"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  Users,
  Calendar,
  Settings,
  Wallet,
  Briefcase,
  BadgeDollarSign,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const BLUE = "#006cb7";
const kpiCards = [
  {
    icon: Users,
    label: "Total Salary Cost",
    value: "$240,000",
    sub: "+5% from last quarter • 120 employees",
    up: true,
    color: "#1d4ed8",
  },
  {
    icon: Calendar,
    label: "Monthly Salary Expense",
    value: "$80,000",
    sub: "+3% vs last month • Avg $667 per employee",
    up: true,
    color: "#059669",
  },
  {
    icon: Settings,
    label: "Operational Cost",
    value: "$45,000",
    sub: "-2% vs last month • 18% of total budget",
    up: false,
    color: "#d97706",
  },
  {
    icon: Wallet,
    label: "Remaining Op. Budget",
    value: "$110,000",
    sub: "62% remaining • Available funds",
    up: null,
    color: "#4f46e5",
  },
  {
    icon: Briefcase,
    label: "Staff on Payroll",
    value: "120",
    sub: "6 new hires this quarter",
    up: true,
    color: "#0ea5e9",
  },
  {
    icon: BadgeDollarSign,
    label: "Allowance Budget",
    value: "$18,500",
    sub: "Used for transport and meals",
    up: null,
    color: "#ec4899",
  },
];

// const opCards = [
//   { label: "Total Salary Cost", value: "$240,000" },
//   { label: "Monthly Salary Expense", value: "$80,000" },
//   { label: "Admin & Operational Cost", value: "$45,000" },
//   { label: "Remaining Op. Budget", value: "$110,000" },
// ];

const salaryTrend = [
  { month: "Apr", salary: 4212 },
  { month: "May", salary: 4815 },
  { month: "Jun", salary: 5874 },
  { month: "Jul", salary: 5276 },
  { month: "Aug", salary: 5575 },
  { month: "Sep", salary: 5309 },
  { month: "Oct", salary: 5620 },
  { month: "Nov", salary: 5852 },
  { month: "Dec", salary: 6234 },
];

const expenseBreakdown = [
  { name: "Salaries", value: 50, color: "#3b82f6" },
  { name: "IT Casings", value: 15, color: "#ef4444" },
  { name: "IT & Equipment", value: 15, color: "#f59e0b" },
  { name: "Office Costs", value: 20, color: "#10b981" },
];

const tooltipStyle = {
  borderRadius: 12,
  border: "none",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  fontSize: 12,
};

function yTickK(v: number) {
  return v >= 1000 ? `${(v / 1000).toFixed(0)}K` : v;
}

function renderLabel({ cx, cy, midAngle, outerRadius, name, value }: any) {
  const RADIAN = Math.PI / 180;
  const r = outerRadius + 28;
  const x = cx + r * Math.cos(-midAngle * RADIAN);
  const y = cy + r * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="#555"
      fontSize={10}
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${name} ${value}%`}
    </text>
  );
}

export default function OperationalExpenses() {
  return (
    <div>
      {/* Section header */}
      <div
        className="rounded-2xl px-6 py-4 mb-5 text-center"
        style={{
          background: `linear-gradient(135deg, #003d6b 0%, ${BLUE} 60%, #0099e6 100%)`,
        }}
      >
        <h2 className="text-lg font-bold text-white tracking-wide">
          Operational Expenses
        </h2>
      </div>

      {/* Op KPI cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
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
              <span className="text-xs mt-3 font-medium text-gray-400">
                {k.sub}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
        {/* Monthly Salary Trend */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="font-bold text-base mb-4" style={{ color: BLUE }}>
            Monthly Salary Trend
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={salaryTrend} margin={{ left: -10, right: 10 }}>
              <defs>
                <linearGradient id="salaryGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={BLUE} stopOpacity={0.2} />
                  <stop offset="95%" stopColor={BLUE} stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={yTickK}
              />
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(v: number) => [`$${yTickK(v)}`, "Salary"]}
              />
              <Area
                type="monotone"
                dataKey="salary"
                stroke={BLUE}
                strokeWidth={2.5}
                fill="url(#salaryGrad)"
                dot={{ r: 3.5, fill: "white", stroke: BLUE, strokeWidth: 2 }}
                activeDot={{ r: 5 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Expense Breakdown pie */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="font-bold text-base mb-4" style={{ color: BLUE }}>
            Expense Breakdown
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={expenseBreakdown}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                labelLine={true}
                label={renderLabel}
              >
                {expenseBreakdown.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(v: number) => [`${v}%`, "Share"]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
