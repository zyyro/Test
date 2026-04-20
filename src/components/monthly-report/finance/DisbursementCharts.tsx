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
import { text } from "stream/consumers";

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
  return v >= 1000 ? `${(v / 1000).toFixed(0)}K` : v;
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

export default function DisbursementCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
      {/* Monthly Disbursement */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h3 className="font-bold text-base mb-4" style={{ color: BLUE }}>
          Monthly Disbursement
        </h3>
        <ResponsiveContainer width="100%" height={220}>
          <ComposedChart
            data={disbursementData}
            margin={{ left: -10, right: 10 }}
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
              formatter={(v: number) => [`$${yTickK(v)}`, ""]}
            />
            <Bar
              dataKey="disbursed"
              name="Disbursed"
              fill={BLUE}
              radius={[4, 4, 0, 0]}
              barSize={22}
            />
            <Line
              type="monotone"
              dataKey="cumulative"
              name="Trend"
              stroke="#06b6d4"
              strokeWidth={2.5}
              dot={{ r: 3.5, fill: "white", stroke: "#06b6d4", strokeWidth: 2 }}
              activeDot={{ r: 5 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Budget by Sector */}
      {/* <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h3 className="font-bold text-base mb-4" style={{ color: BLUE }}>
          Budget by Sector
        </h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <ResponsiveContainer width="120%" height={220}>
            <PieChart>
              <Pie
                data={sectorBudget}
                cx="50%"
                cy="50%"
                outerRadius={95}
                innerRadius={50}
                dataKey="value"
                labelLine={true}
                label={renderLabel}
              >
                {sectorBudget.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(v: number) => [`${v}%`, "Share"]}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="ml-15 p-5">
            {sectorBudgetLeft.map((item, i) => (
              <li
                key={i}
                className="flex items-start mt-3 gap-2 text-lg text-gray-600"
              >
                <span
                  className="w-2.5 h-2.5 rounded-full mt-3 shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span>{item.text}</span>
                <span className="font-bold text-gray-800">{item.sub}</span>
              </li>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}
