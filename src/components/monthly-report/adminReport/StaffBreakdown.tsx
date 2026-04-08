"use client";

import { Users } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const BLUE = "#006cb7";

const genderData = [
  { name: "Male", value: 58, color: BLUE },
  { name: "Female", value: 42, color: "#ef4444" },
];

const deptData = [
  { name: "Tech", value: 40, color: "#f59e0b" },
  { name: "Ops", value: 30, color: "#ef4444" },
  { name: "Admin", value: 30, color: "#10b981" },
];
const MaleFemale = [
  { label: "Male", value: "58", color: "#2563eb" },
  { label: "Female", value: "42", color: "#ef4444" },
];
const byDepartment = [
  { label: "Tech", value: "40", color: "#f59e0b" },
  { label: "Ops", value: "30", color: "#ef4444" },
  { label: "Admin", value: "30", color: "#10b981" },
];

const tooltipStyle = {
  borderRadius: 10,
  border: "none",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  fontSize: 12,
};

type StaffStatColor = "blue" | "green" | "orange";

type StaffStat = {
  label: string;
  value: string;
  sub?: string;
  color: StaffStatColor;
};

const staffStats: StaffStat[] = [
  {
    label: "Total Staff",
    value: "125",
    sub: "+5% from last month",
    color: "blue",
  },
  {
    label: "New Joiners",
    value: "8",
    sub: "This month",
    color: "green",
  },
  {
    label: "Employment Split",
    value: "75 / 20",
    sub: "Permanent / Contract",
    color: "orange",
  },
];

const colorMap: Record<
  StaffStatColor,
  { bg: string; border: string; text: string; dot: string }
> = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-700",
    dot: "bg-blue-600",
  },
  green: {
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-700",
    dot: "bg-green-600",
  },
  orange: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    text: "text-orange-600",
    dot: "bg-orange-500",
  },
};

function InnerLabel({
  cx,
  cy,
  data,
}: {
  cx: number;
  cy: number;
  data: typeof genderData;
}) {
  return (
    <>
      {data.map((d, i) => {
        const angle = i === 0 ? -40 : 40;
        const rad = (angle * Math.PI) / 180;
        const r = 32;
        const x = cx + r * Math.cos(rad);
        const y = cy + r * Math.sin(rad);
        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={11}
            fontWeight="bold"
            fill="white"
          >
            <tspan x={x} dy="-6">
              {d.value}%
            </tspan>
            <tspan x={x} dy="13">
              {d.name}
            </tspan>
          </text>
        );
      })}
    </>
  );
}

function BarRow({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-gray-600 text-sm w-10 shrink-0">{label}</span>
      <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${value}%`, background: color }}
        />
      </div>
      <span className="text-sm font-bold w-10 text-right" style={{ color }}>
        {value}%
      </span>
    </div>
  );
}

export default function StaffBreakdown() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full flex flex-col gap-4">
      <h3 className="font-bold text-base" style={{ color: BLUE }}>
        Staff Breakdown
      </h3>

      {/* Two pies */}
      <div className="grid grid-cols-2 gap-2 flex-1">
        {/* Gender */}
        <div className="grid grid-cols-2 gap-2 just">
          <div>
            <p className="text-xs font-semibold text-center text-gray-500 mb-1">
              Gender
            </p>
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  outerRadius={72}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  labelLine={false}
                  label={({
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    value,
                    name,
                  }) => {
                    const RADIAN = Math.PI / 180;
                    const r = (innerRadius + outerRadius) / 2;
                    const x = cx + r * Math.cos(-midAngle * RADIAN);
                    const y = cy + r * Math.sin(-midAngle * RADIAN);
                    return (
                      <text
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill="white"
                        fontSize={10}
                        fontWeight="bold"
                      >
                        <tspan x={x} dy="-5">
                          {value}%
                        </tspan>
                        <tspan x={x} dy="12">
                          {name}
                        </tspan>
                      </text>
                    );
                  }}
                >
                  {genderData.map((e, i) => (
                    <Cell key={i} fill={e.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col gap-3 mt-18">
            {MaleFemale.map((item) => (
              <BarRow key={item.label} {...item} />
            ))}
          </div>
        </div>

        {/* By Department */}
        <div>
          <p className="text-xs font-semibold text-center text-gray-500 mb-1">
            By Department
          </p>
          <div className="grid grid-cols-2 gap-2 just">
            <div>
              <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                  <Pie
                    data={deptData}
                    cx="50%"
                    cy="50%"
                    outerRadius={72}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                    labelLine={false}
                    label={({
                      cx,
                      cy,
                      midAngle,
                      innerRadius,
                      outerRadius,
                      value,
                      name,
                    }) => {
                      const RADIAN = Math.PI / 180;
                      const r = (innerRadius + outerRadius) / 2;
                      const x = cx + r * Math.cos(-midAngle * RADIAN);
                      const y = cy + r * Math.sin(-midAngle * RADIAN);
                      return (
                        <text
                          x={x}
                          y={y}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fill="white"
                          fontSize={10}
                          fontWeight="bold"
                        >
                          <tspan x={x} dy="-5">
                            {value}%
                          </tspan>
                          <tspan x={x} dy="12">
                            {name}
                          </tspan>
                        </text>
                      );
                    }}
                  >
                    {deptData.map((e, i) => (
                      <Cell key={i} fill={e.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={tooltipStyle} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div>
              <div className="flex flex-col gap-3 mt-11">
                {byDepartment.map((item) => (
                  <BarRow key={item.label} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100" />

      {/* Employment + New Joiners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
        {staffStats.map((item, i) => {
          const c = colorMap[item.color];

          return (
            <div
              key={i}
              className={`rounded-xl border px-4 py-3 ${c.bg} ${c.border}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-2 h-2 rounded-full ${c.dot}`} />
                <span className={`text-sm font-medium ${c.text}`}>
                  {item.label}
                </span>
              </div>

              <div className={`text-2xl font-bold ${c.text}`}>{item.value}</div>

              {item.sub && (
                <p className="text-xs text-gray-500 mt-1">{item.sub}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
