"use client";

import { Users } from "lucide-react";
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
} from "recharts";

const BLUE = "#006cb7";

const genderData = [
  { name: "Male",   value: 58, color: BLUE      },
  { name: "Female", value: 42, color: "#ef4444" },
];

const deptData = [
  { name: "Tech",  value: 40, color: "#f59e0b" },
  { name: "Ops",   value: 30, color: "#ef4444" },
  { name: "Admin", value: 30, color: "#10b981" },
];

const tooltipStyle = {
  borderRadius: 10,
  border: "none",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  fontSize: 12,
};

function InnerLabel({ cx, cy, data }: { cx: number; cy: number; data: typeof genderData }) {
  return (
    <>
      {data.map((d, i) => {
        const angle = i === 0 ? -40 : 40;
        const rad = (angle * Math.PI) / 180;
        const r = 32;
        const x = cx + r * Math.cos(rad);
        const y = cy + r * Math.sin(rad);
        return (
          <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight="bold" fill="white">
            <tspan x={x} dy="-6">{d.value}%</tspan>
            <tspan x={x} dy="13">{d.name}</tspan>
          </text>
        );
      })}
    </>
  );
}

export default function StaffBreakdown() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full flex flex-col gap-4">
      <h3 className="font-bold text-base" style={{ color: BLUE }}>Staff Breakdown</h3>

      {/* Two pies */}
      <div className="grid grid-cols-2 gap-2 flex-1">
        {/* Gender */}
        <div>
          <p className="text-xs font-semibold text-center text-gray-500 mb-1">Gender</p>
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
                label={({ cx, cy, midAngle, innerRadius, outerRadius, value, name }) => {
                  const RADIAN = Math.PI / 180;
                  const r = (innerRadius + outerRadius) / 2;
                  const x = cx + r * Math.cos(-midAngle * RADIAN);
                  const y = cy + r * Math.sin(-midAngle * RADIAN);
                  return (
                    <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fill="white" fontSize={10} fontWeight="bold">
                      <tspan x={x} dy="-5">{value}%</tspan>
                      <tspan x={x} dy="12">{name}</tspan>
                    </text>
                  );
                }}
              >
                {genderData.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* By Department */}
        <div>
          <p className="text-xs font-semibold text-center text-gray-500 mb-1">By Department</p>
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
                label={({ cx, cy, midAngle, innerRadius, outerRadius, value, name }) => {
                  const RADIAN = Math.PI / 180;
                  const r = (innerRadius + outerRadius) / 2;
                  const x = cx + r * Math.cos(-midAngle * RADIAN);
                  const y = cy + r * Math.sin(-midAngle * RADIAN);
                  return (
                    <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fill="white" fontSize={10} fontWeight="bold">
                      <tspan x={x} dy="-5">{value}%</tspan>
                      <tspan x={x} dy="12">{name}</tspan>
                    </text>
                  );
                }}
              >
                {deptData.map((e, i) => <Cell key={i} fill={e.color} />)}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100" />

      {/* Employment + New Joiners */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-2">Employment</p>
          <div className="flex items-center gap-3">
            <div className="text-center">
              <p className="text-xl font-bold" style={{ color: BLUE }}>75</p>
              <p className="text-xs text-gray-400">Permanent</p>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="text-center">
              <p className="text-xl font-bold text-amber-500">20</p>
              <p className="text-xs text-gray-400">Contract</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <Users size={14} style={{ color: BLUE }} />
            <p className="text-xs text-gray-600">
              New Joiners This Month: <span className="font-bold" style={{ color: BLUE }}>8</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold text-gray-500 mb-1">New Joiners This Month</p>
          <p className="text-4xl font-bold" style={{ color: BLUE }}>8</p>
        </div>
      </div>
    </div>
  );
}
