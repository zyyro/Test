"use client";

import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const BLUE = "#006cb7";

const disbursementData = [
  { month: "Apr", disbursed: 6200, cumulative: 6200 },
  { month: "May", disbursed: 8500, cumulative: 9100 },
  { month: "Jun", disbursed: 7800, cumulative: 9800 },
  { month: "Jul", disbursed: 9200, cumulative: 10200 },
  { month: "Aug", disbursed: 7500, cumulative: 9500 },
  { month: "Sep", disbursed: 8100, cumulative: 9800 },
  { month: "Oct", disbursed: 9800, cumulative: 10500 },
  { month: "Nov", disbursed: 11200, cumulative: 11800 },
  { month: "Dec", disbursed: 13500, cumulative: 13000 },
];

const sectorBudget = [
  { name: "Technical", value: 30, color: "#7c3aed" },
  { name: "Tourism", value: 25, color: "#f59e0b" },
  { name: "Digital", value: 20, color: "#3b82f6" },
  { name: "Agriculture", value: 20, color: "#ef4444" },
  { name: "Other", value: 5, color: "#10b981" },
];

const sectorBudgetLeft = [
  { text: "Technical", sub: "30%", color: "#7c3aed" },
  { text: "Tourism", sub: "25%", color: "#f59e0b" },
  { text: "Digital", sub: "20%", color: "#3b82f6" },
  { text: "Agriculture", sub: "20%", color: "#ef4444" },
  { text: "Other", sub: "5%", color: "#10b981" },
];

const tooltipStyle = {
  borderRadius: 12,
  border: "none",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  fontSize: 12,
};

function yTickK(v: number) {
  return v >= 1000 ? `${(v / 1000).toFixed(0)}K` : `${v}`;
}

function renderLabel({ cx, cy, midAngle, outerRadius, name, value }: any) {
  const RADIAN = Math.PI / 180;
  const r = outerRadius + 30;
  const x = cx + r * Math.cos(-midAngle * RADIAN);
  const y = cy + r * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#555"
      fontSize={11}
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${name} ${value}%`}
    </text>
  );
}

function FinancialHighlights() {
  const highlights = [
    { label: "Approved Budget", value: "$8,500,000" },
    { label: "Disbursed Amount", value: "$5,200,000" },
    { label: "Remaining Balance", value: "$3,300,000" },
    { label: "Pending Approvals", value: "$1,200,000" },
    { label: "Utilization Rate", value: "61%" },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full">
      <h3 className="font-bold text-base mb-4" style={{ color: BLUE }}>
        Financial Highlights
      </h3>

      <div className="space-y-4">
        {highlights.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between border-b border-gray-100 pb-3"
          >
            <span className="text-sm text-gray-500">{item.label}</span>
            <span className="text-sm font-bold text-gray-800">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
        <p className="text-sm font-semibold text-emerald-700">Report Insight</p>
        <p className="text-xs text-emerald-600 mt-1">
          Budget utilization is progressing steadily, with strong disbursement
          performance and controlled remaining balance.
        </p>
      </div>
    </div>
  );
}

export default function DisbursementCharts() {
  return (
    <div className="space-y-6 mb-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Monthly Disbursement */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h3 className="font-bold text-base mb-4" style={{ color: BLUE }}>
            Monthly Disbursement
          </h3>

          <ResponsiveContainer width="100%" height={220}>
            <ComposedChart
              data={disbursementData}
              margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
            >
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
                formatter={(value) => [
                  `$${yTickK(Number(value) || 0)}`,
                  "Salary",
                ]}
              />
              <Bar
                dataKey="disbursed"
                fill={BLUE}
                radius={[4, 4, 0, 0]}
                barSize={22}
              />
              <Line
                type="monotone"
                dataKey="cumulative"
                stroke="#06b6d4"
                strokeWidth={2.5}
                dot={{
                  r: 3.5,
                  fill: "white",
                  stroke: "#06b6d4",
                  strokeWidth: 2,
                }}
                activeDot={{ r: 5 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <FinancialHighlights />
      </div>
    </div>
  );
}
