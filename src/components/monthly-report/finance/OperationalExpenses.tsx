"use client";

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, PieChart, Pie, Cell,
} from "recharts";

const BLUE = "#006cb7";

const opCards = [
  { label: "Total Salary Cost",       value: "$240,000" },
  { label: "Monthly Salary Expense",  value: "$80,000"  },
  { label: "Admin & Operational Cost",value: "$45,000"  },
  { label: "Remaining Op. Budget",    value: "$110,000" },
];

const salaryTrend = [
  { month: "Apr", salary: 4200 },
  { month: "May", salary: 4800 },
  { month: "Jun", salary: 5800 },
  { month: "Jul", salary: 5200 },
  { month: "Aug", salary: 5500 },
  { month: "Sep", salary: 5300 },
  { month: "Oct", salary: 5600 },
  { month: "Nov", salary: 5800 },
  { month: "Dec", salary: 6400 },
];

const expenseBreakdown = [
  { name: "Salaries",        value: 50, color: "#3b82f6" },
  { name: "IT Casings",      value: 15, color: "#ef4444" },
  { name: "IT & Equipment",  value: 15, color: "#f59e0b" },
  { name: "Office Costs",    value: 20, color: "#10b981" },
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
    <text x={x} y={y} fill="#555" fontSize={10} textAnchor="middle" dominantBaseline="central">
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
        style={{ background: `linear-gradient(135deg, #003d6b 0%, ${BLUE} 60%, #0099e6 100%)` }}
      >
        <h2 className="text-lg font-bold text-white tracking-wide">Operational Expenses</h2>
      </div>

      {/* Op KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        {opCards.map((c, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <p className="text-xs text-gray-400 font-medium mb-2">{c.label}</p>
            <p className="text-2xl font-bold text-gray-800">{c.value}</p>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
        {/* Monthly Salary Trend */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="font-bold text-base mb-4" style={{ color: BLUE }}>
            Monthly Salary Trend
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={salaryTrend} margin={{ left: -10, right: 10 }}>
              <defs>
                <linearGradient id="salaryGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor={BLUE} stopOpacity={0.2} />
                  <stop offset="95%" stopColor={BLUE} stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={yTickK} />
              <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`$${yTickK(v)}`, "Salary"]} />
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
                cx="20%"
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
              <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}%`, "Share"]} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
