"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const attendanceData = [
  { month: "Jan", attendance: 48, leaves: 12, late: 8, rate: 82 },
  { month: "Feb", attendance: 52, leaves: 10, late: 6, rate: 85 },
  { month: "Mar", attendance: 45, leaves: 14, late: 9, rate: 80 },
  { month: "Apr", attendance: 40, leaves: 8, late: 10, rate: 78 },
  { month: "May", attendance: 55, leaves: 18, late: 5, rate: 84 },
  { month: "Jun", attendance: 50, leaves: 11, late: 7, rate: 83 },
  { month: "Jul", attendance: 52, leaves: 13, late: 6, rate: 85 },
  { month: "Aug", attendance: 48, leaves: 15, late: 8, rate: 82 },
  { month: "Sep", attendance: 51, leaves: 10, late: 5, rate: 86 },
  { month: "Oct", attendance: 44, leaves: 12, late: 9, rate: 79 },
  { month: "Nov", attendance: 46, leaves: 9, late: 7, rate: 81 },
  { month: "Dec", attendance: 43, leaves: 11, late: 8, rate: 80 },
];

const chartData = attendanceData.map((item) => {
  const total = item.attendance + item.leaves + item.late;

  return {
    ...item,
    attendancePct: (item.attendance / total) * 100,
    leavesPct: (item.leaves / total) * 100,
    latePct: (item.late / total) * 100,
  };
});

const avgRate = Math.round(
  attendanceData.reduce((sum, item) => sum + item.rate, 0) / attendanceData.length
);

const peakItem = attendanceData.reduce((prev, curr) =>
  curr.rate > prev.rate ? curr : prev
);

const lowestItem = attendanceData.reduce((prev, curr) =>
  curr.rate < prev.rate ? curr : prev
);

const pills = [
  {
    label: "Avg",
    value: `${avgRate}%`,
    extra: "",
    classes:
      "bg-blue-50 border-blue-200 text-blue-700",
    dot: "bg-blue-600",
  },
  {
    label: "Peak",
    value: `${peakItem.rate}%`,
    extra: `(${peakItem.month})`,
    classes:
      "bg-green-50 border-green-200 text-green-700",
    dot: "bg-green-600",
  },
  {
    label: "Lowest",
    value: `${lowestItem.rate}%`,
    extra: `(${lowestItem.month})`,
    classes:
      "bg-orange-50 border-orange-200 text-orange-600",
    dot: "bg-orange-500",
  },
];

type TooltipPayloadItem = {
  payload: {
    month: string;
    attendance: number;
    leaves: number;
    late: number;
    rate: number;
    attendancePct: number;
    leavesPct: number;
    latePct: number;
  };
};

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string;
}) {
  if (!active || !payload || !payload.length) return null;

  const data = payload[0].payload;

  return (
    <div
      style={{
        background: "#fff",
        border: "none",
        borderRadius: 16,
        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        padding: "12px 14px",
        fontSize: 13,
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 8 }}>{label}</div>

      <div style={{ color: "#006cb7", marginBottom: 6 }}>
        Attendance: {data.attendance} ({data.attendancePct.toFixed(0)}%)
      </div>

      <div style={{ color: "#006cb7", marginBottom: 6 }}>
        Attendance Rate: {data.rate}%
      </div>

      <div style={{ color: "#ef4444", marginBottom: 6 }}>
        Late: {data.late} ({data.latePct.toFixed(0)}%)
      </div>

      <div style={{ color: "#f59e0b" }}>
        Leaves: {data.leaves} ({data.leavesPct.toFixed(0)}%)
      </div>
    </div>
  );
}

export default function AttendanceTrend() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full">
      <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
        <h2 className="font-bold text-base" style={{ color: "#006cb7" }}>
          Attendance Trend
        </h2>

        <div className="flex gap-3 flex-wrap">
          {pills.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium ${item.classes}`}
            >
              <div className={`w-2.5 h-2.5 rounded-full ${item.dot}`} />
              <span>{item.label}</span>
              <span className="font-semibold">
                {item.value}
                {item.extra && (
                  <span className="ml-1 text-xs opacity-70">{item.extra}</span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} barCategoryGap="22%">
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
            domain={[0, "auto"]}
          />

          <Tooltip content={<CustomTooltip />} />

          <Legend
            iconType="circle"
            iconSize={9}
            wrapperStyle={{ fontSize: 12 }}
          />

          <Bar
            dataKey="attendance"
            name="Attendance"
            fill="#006cb7"
            radius={[4, 4, 0, 0]}
            barSize={14}
          />

          <Bar
            dataKey="late"
            name="Late"
            fill="#ef4444"
            radius={[4, 4, 0, 0]}
            barSize={14}
          />

          <Bar
            dataKey="leaves"
            name="Leaves"
            fill="#f59e0b"
            radius={[4, 4, 0, 0]}
            barSize={14}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}