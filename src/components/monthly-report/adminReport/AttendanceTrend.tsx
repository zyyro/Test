"use client";

import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend,
} from "recharts";

const BLUE = "#006cb7";

const attendanceData = [
  { month: "Jan", attendance: 48, leaves: 12, late: 8,  rate: 82 },
  { month: "Feb", attendance: 52, leaves: 10, late: 6,  rate: 85 },
  { month: "Mar", attendance: 45, leaves: 14, late: 9,  rate: 80 },
  { month: "Apr", attendance: 40, leaves: 8,  late: 10, rate: 78 },
  { month: "May", attendance: 55, leaves: 18, late: 5,  rate: 84 },
  { month: "Jun", attendance: 50, leaves: 11, late: 7,  rate: 83 },
  { month: "Jul", attendance: 52, leaves: 13, late: 6,  rate: 85 },
  { month: "Aug", attendance: 48, leaves: 15, late: 8,  rate: 82 },
  { month: "Sep", attendance: 51, leaves: 10, late: 5,  rate: 86 },
  { month: "Oct", attendance: 44, leaves: 12, late: 9,  rate: 79 },
  { month: "Nov", attendance: 46, leaves: 9,  late: 7,  rate: 81 },
  { month: "Dec", attendance: 43, leaves: 11, late: 8,  rate: 80 },
];

const tooltipStyle = {
  borderRadius: 12,
  border: "none",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  fontSize: 12,
};

export default function AttendanceTrend() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full flex flex-col">
      <h3 className="font-bold text-base mb-4" style={{ color: BLUE }}>
        Attendance Trend
      </h3>
      <ResponsiveContainer width="100%" height={260}>
        <ComposedChart data={attendanceData} margin={{ left: -10, right: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis
            yAxisId="left"
            tick={{ fontSize: 10 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${v}%`}
            domain={[0, 90]}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tick={{ fontSize: 10 }}
            axisLine={false}
            tickLine={false}
            domain={[0, 90]}
          />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend iconType="circle" iconSize={9} wrapperStyle={{ fontSize: 12 }} />
          <Bar yAxisId="right" dataKey="attendance" name="Attendance" fill={BLUE}      radius={[3, 3, 0, 0]} barSize={18} stackId="a" />
          <Bar yAxisId="right" dataKey="leaves"     name="Leaves"     fill="#f59e0b"   radius={[0, 0, 0, 0]} barSize={18} stackId="a" />
          <Bar yAxisId="right" dataKey="late"       name="Late"       fill="#ef4444"   radius={[3, 3, 0, 0]} barSize={18} stackId="a" />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="rate"
            name="Attendance %"
            stroke={BLUE}
            strokeWidth={2.5}
            dot={{ r: 3.5, fill: "white", stroke: BLUE, strokeWidth: 2 }}
            activeDot={{ r: 5 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
