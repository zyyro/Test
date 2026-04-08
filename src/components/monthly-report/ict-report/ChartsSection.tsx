"use client";

import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend,
} from "recharts";

const BLUE = "#006cb7";

const usageTrend = [
  { month: "Jan", users: 280 }, { month: "Feb", users: 310 },
  { month: "Mar", users: 295 }, { month: "Apr", users: 340 },
  { month: "May", users: 320 }, { month: "Jun", users: 380 },
  { month: "Jul", users: 410 }, { month: "Aug", users: 390 },
  { month: "Sep", users: 425 }, { month: "Oct", users: 460 },
  { month: "Nov", users: 445 }, { month: "Dec", users: 490 },
];

const devData = [
  { name: "Skill Match",    eLearning: 4200, Training: 3100, Survey: 2800 },
  { name: "Survey",         eLearning: 3800, Training: 2900, Survey: 3200 },
  { name: "Skill Voucher",  eLearning: 5100, Training: 4200, Survey: 3600 },
  { name: "PMS",            eLearning: 3200, Training: 2700, Survey: 2400 },
  { name: "Joint Training", eLearning: 4600, Training: 3800, Survey: 3100 },
  { name: "E-Learning",     eLearning: 5800, Training: 4900, Survey: 4200 },
];

const ticketTrend = [
  { month: "Jan", open: 12, resolved: 80,  critical: 2 },
  { month: "Feb", open: 18, resolved: 95,  critical: 4 },
  { month: "Mar", open: 14, resolved: 88,  critical: 3 },
  { month: "Apr", open: 22, resolved: 102, critical: 5 },
  { month: "May", open: 19, resolved: 98,  critical: 3 },
  { month: "Jun", open: 25, resolved: 110, critical: 4 },
  { month: "Jul", open: 30, resolved: 115, critical: 6 },
  { month: "Aug", open: 28, resolved: 108, critical: 5 },
  { month: "Sep", open: 34, resolved: 120, critical: 4 },
  { month: "Oct", open: 31, resolved: 118, critical: 3 },
  { month: "Nov", open: 36, resolved: 125, critical: 5 },
  { month: "Dec", open: 34, resolved: 128, critical: 3 },
];

const tooltipStyle = {
  borderRadius: 12,
  border: "none",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  fontSize: 13,
};

const ticketPills = [
  { label: "Total Open", value: "34",   color: BLUE      },
  { label: "Resolved",   value: "128",  color: "#10b981" },
  { label: "Critical",   value: "3",    color: "#ef4444" },
  { label: "Avg Close",  value: "1.4h", color: "#f59e0b" },
];

export default function ChartsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
      {/* System Usage Trend */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h3 className="font-bold text-base mb-1" style={{ color: BLUE }}>
          System Usage Trend
        </h3>
        <p className="text-gray-400 text-sm mb-5">Monthly active users — Jan to Dec</p>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={usageTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={tooltipStyle} />
            <Line type="monotone" dataKey="users" stroke={BLUE} strokeWidth={3}
              dot={{ r: 4, fill: BLUE }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* System Development Activity */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h3 className="font-bold text-base mb-1" style={{ color: BLUE }}>
          System Development Activity
        </h3>
        <p className="text-gray-400 text-sm mb-5">Breakdown by system module</p>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={devData} barSize={11}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend iconType="circle" iconSize={9} wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey="eLearning" fill={BLUE}      radius={[4, 4, 0, 0]} />
            <Bar dataKey="Training"  fill="#10b981"   radius={[4, 4, 0, 0]} />
            <Bar dataKey="Survey"    fill="#f59e0b"   radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Support Ticket Trend */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
        <h3 className="font-bold text-base mb-1" style={{ color: BLUE }}>
          Support Ticket Trend
        </h3>
        <p className="text-gray-400 text-sm mb-5">Open · Resolved · Critical — Jan to Dec</p>
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={ticketTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend iconType="circle" iconSize={9} wrapperStyle={{ fontSize: 12 }} />
            <Line type="monotone" dataKey="resolved" stroke="#10b981" strokeWidth={2.5}
              dot={{ r: 3, fill: "#10b981" }} activeDot={{ r: 5 }} />
            <Line type="monotone" dataKey="open"     stroke={BLUE}    strokeWidth={2.5}
              dot={{ r: 3, fill: BLUE }}    activeDot={{ r: 5 }} />
            <Line type="monotone" dataKey="critical" stroke="#ef4444" strokeWidth={2.5}
              dot={{ r: 3, fill: "#ef4444" }} activeDot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex gap-2 mt-4 flex-wrap">
          {ticketPills.map((p) => (
            <div
              key={p.label}
              className="flex-1 min-w-[60px] rounded-xl px-3 py-2 text-center"
              style={{ background: `${p.color}10`, border: `1px solid ${p.color}25` }}
            >
              <p className="text-sm font-bold" style={{ color: p.color }}>{p.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{p.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
