"use client";

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

const monthlyOutreach = [
  { month: "Jan", Reach: 180000, Application: 1200 },
  { month: "Feb", Reach: 220000, Application: 1800 },
  { month: "Mar", Reach: 290000, Application: 2400 },
  { month: "Apr", Reach: 310000, Application: 3000 },
  { month: "May", Reach: 280000, Application: 2600 },
  { month: "Jun", Reach: 260000, Application: 2300 },
];

const channelPerformance = [
  {
    channel: "Facebook",
    Reach: 250000,
    Application: 85000,
    "Conversation%": 1.8,
  },
  {
    channel: "Website",
    Reach: 120000,
    Application: 24300,
    "Conversation%": 2.5,
  },
  { channel: "Email", Reach: 80000, Application: 11000, "Conversation%": 1.2 },
  {
    channel: "Telegram",
    Reach: 95000,
    Application: 13000,
    "Conversation%": 1.4,
  },
  { channel: "Events", Reach: 60000, Application: 20000, "Conversation%": 3.2 },
];

const convTrend = [
  { month: "Jan", rate: 0.0 },
  { month: "Feb", rate: 0.3 },
  { month: "Mar", rate: 0.8 },
  { month: "Apr", rate: 1.2 },
  { month: "May", rate: 1.5 },
  { month: "Jun", rate: 1.37 },
];

const tooltipStyle = {
  borderRadius: 12,
  border: "none",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  fontSize: 12,
};

function yTickK(v: number) {
  return v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v;
}

export default function PRChartsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 mb-6">
      {/* Monthly Outreach Trend */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <h3 className="font-bold text-base mb-1" style={{ color: BLUE }}>
          Monthly Outreach Trend
        </h3>
        <p className="text-gray-400 text-xs mb-4">
          Reach & Application — Jan to Jun
        </p>
        <ResponsiveContainer width="100%" height={210}>
          <LineChart data={monthlyOutreach}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              yAxisId="left"
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => String(value)}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: 11 }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="Reach"
              stroke={BLUE}
              strokeWidth={2.5}
              dot={{ r: 3.5, fill: "white", stroke: BLUE, strokeWidth: 2 }}
              activeDot={{ r: 5 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="Application"
              stroke="#ef4444"
              strokeWidth={2.5}
              dot={{ r: 3.5, fill: "white", stroke: "#ef4444", strokeWidth: 2 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Channel Performance */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <h3 className="font-bold text-base mb-1" style={{ color: BLUE }}>
          Channel Performance
        </h3>
        <p className="text-gray-400 text-xs mb-4">
          Reach · Application · Conversion %
        </p>
        <ResponsiveContainer width="100%" height={210}>
          <BarChart data={channelPerformance} barSize={12}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="channel"
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              yAxisId="left"
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => String(value)}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: 11 }}
            />
            <Bar
              yAxisId="left"
              dataKey="Reach"
              fill={BLUE}
              radius={[3, 3, 0, 0]}
            />
            <Bar
              yAxisId="left"
              dataKey="Application"
              fill="#ef4444"
              radius={[3, 3, 0, 0]}
            />
            <Bar
              yAxisId="right"
              dataKey="Conversation%"
              fill="#06b6d4"
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Application Conversation Trend */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <h3 className="font-bold text-base mb-1" style={{ color: BLUE }}>
          Application Conversation Trend
        </h3>
        <p className="text-gray-400 text-xs mb-4">
          Conversion rate % — Jan to Jun
        </p>
        <ResponsiveContainer width="100%" height={210}>
          <LineChart data={convTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${v}%`}
              domain={[0, 2.5]}
            />
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(v: number) => [`${v}%`, "Conv. Rate"]}
            />
            <Line
              type="monotone"
              dataKey="rate"
              stroke="#10b981"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "white", stroke: "#10b981", strokeWidth: 2 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
