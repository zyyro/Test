"use client";

import {
  Users,
  TrendingUp,
  Target,
  AlertTriangle,
  BarChart3,
  Lightbulb,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const BLUE = "#006cb7";

const sectorData = [
  { name: "Top-Heavy Focus", value: 40, color: "#7c3aed" },
  { name: "Balance Middle Sectors", value: 35, color: "#ef4444" },
  { name: "Gap Sector", value: 25, color: "#06b6d4" },
];

const monthlyBySector = [
  { month: "Jan", TopHeavy: 18, Balance: 14, Gap: 8 },
  { month: "Feb", TopHeavy: 16, Balance: 12, Gap: 6 },
  { month: "Mar", TopHeavy: 20, Balance: 15, Gap: 9 },
  { month: "Apr", TopHeavy: 15, Balance: 11, Gap: 7 },
  { month: "May", TopHeavy: 22, Balance: 17, Gap: 10 },
  { month: "Jun", TopHeavy: 19, Balance: 13, Gap: 8 },
  { month: "Jul", TopHeavy: 14, Balance: 10, Gap: 6 },
  { month: "Aug", TopHeavy: 21, Balance: 16, Gap: 9 },
  { month: "Sep", TopHeavy: 17, Balance: 12, Gap: 7 },
  { month: "Oct", TopHeavy: 30, Balance: 22, Gap: 14 },
  { month: "Nov", TopHeavy: 24, Balance: 18, Gap: 11 },
  { month: "Dec", TopHeavy: 26, Balance: 20, Gap: 12 },
];

const sectorHealth = [
  {
    color: "#7c3aed",
    title: "Top Heavy Focus",
    pct: 40,
    programs: 22,
    growth: "+18%",
    risk: "High Concentration",
    riskColor: "#ef4444",
    bullets: [
      "One sector has 40% of all programs",
      "Large priority to top 2 (52% of Programs)",
    ],
  },
  {
    color: "#ef4444",
    title: "Balance Middle Sectors",
    pct: 35,
    programs: 19,
    growth: "+8%",
    risk: "Stable",
    riskColor: "#10b981",
    bullets: ["Two sectors at 20% each", "Stable but not dominant"],
  },
  {
    color: "#06b6d4",
    title: "Gap Sector (25%)",
    pct: 25,
    programs: 13,
    growth: "+3%",
    risk: "Underserved",
    riskColor: "#f59e0b",
    bullets: ["Smallest sector by allocation", "Underserved or low priority"],
  },
];

const overallInsights = [
  "Concentrated growth in top sectors, with limited diversification.",
  "Growth is strong but heavily concentrated in a few sectors.",
];

const combinedInsights = [
  {
    highlight: "Growth in program",
    rest: " is mainly driven by the top sectors (35%+25%)",
  },
  { highlight: "Trend shows growth", rest: " (programs increasing)" },
  { highlight: "sector shows focus", rest: " (40% in top 2 priority sectors)" },
  { highlight: "Trend shows growth", rest: " (programs increasing)" },
  { highlight: "sector shows focus", rest: " (40% in top 2 priority sectors)" },
];

const recommendations = [
  {
    icon: Target,
    color: "#7c3aed",
    text: "Diversify program allocation to reduce top-heavy risk",
  },
  {
    icon: TrendingUp,
    color: "#10b981",
    text: "Scale Gap Sector investment — currently at only 25%",
  },
  {
    icon: AlertTriangle,
    color: "#f59e0b",
    text: "Monitor Balance Middle Sectors to prevent decline",
  },
  {
    icon: Lightbulb,
    color: BLUE,
    text: "Consider pilot programs in underserved gap areas",
  },
];

const tooltipStyle = {
  borderRadius: 10,
  border: "none",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  fontSize: 12,
};

function renderCustomLabel({ cx, cy, midAngle, outerRadius, percent }: any) {
  const RADIAN = Math.PI / 180;
  const r = outerRadius + 22;
  const x = cx + r * Math.cos(-midAngle * RADIAN);
  const y = cy + r * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="#555"
      fontSize={11}
      fontWeight={600}
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
}

export default function SectorContribution() {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-bold text-lg" style={{ color: BLUE }}>
        Sector Contribution
      </h3>

      {/* ── Row 1: Donut + Sector Health Cards ── */}
      <div className="flex gap-15 flex-wrap">
        <div className="flex flex-col items-center justify-center min-w-[200px]">
          <ResponsiveContainer width={250} height={250}>
            <PieChart>
              <Pie
                data={sectorData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={1}
                dataKey="value"
                labelLine={false}
                label={renderCustomLabel}
              >
                {sectorData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-400 -mt-2">
            Total: <span className="font-bold text-gray-700">54 Programs</span>
          </p>
        </div>

        {/* Sector detail cards */}
        <div className="flex flex-col gap-2 flex-1 min-w-[220px] justify-center">
          {sectorHealth.map((s, i) => (
            <div
              key={i}
              className="rounded-xl p-3 border"
              style={{
                borderColor: `${s.color}30`,
                background: `${s.color}06`,
              }}
            >
              <div className="flex items-center justify-between mb-1.5">
                <p
                  className="text-lg font-bold flex items-center gap-1.5"
                  style={{ color: s.color }}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block shrink-0"
                    style={{ background: s.color }}
                  />
                  {s.title}
                </p>
                <div className="flex items-center gap-2">
                  <span
                    className="text-sm font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: `${s.riskColor}15`,
                      color: s.riskColor,
                    }}
                  >
                    {s.risk}
                  </span>
                  <span className="text-sm font-bold text-emerald-600">
                    {s.growth}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-1.5">
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${s.pct}%`, background: s.color }}
                  />
                </div>
                <span
                  className="text-sm font-bold w-8 text-right"
                  style={{ color: s.color }}
                >
                  {s.pct}%
                </span>
                <span className="text-sm text-gray-400">
                  {s.programs} programs
                </span>
              </div>
              {s.bullets.map((b, j) => (
                <p
                  key={j}
                  className="text-sm text-gray-500 flex items-center gap-1"
                >
                  <span className="text-gray-300">›</span> {b}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Row 2: Monthly Breakdown Bar Chart ── */}
      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          <BarChart3 size={14} style={{ color: BLUE }} />
          <p className="text-sm font-bold" style={{ color: BLUE }}>
            Monthly Program Allocation by Sector
          </p>
        </div>
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={monthlyBySector} barSize={8}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: 11 }}
            />
            <Bar
              dataKey="TopHeavy"
              name="Top Heavy"
              fill="#7c3aed"
              radius={[3, 3, 0, 0]}
            />
            <Bar
              dataKey="Balance"
              name="Balance"
              fill="#ef4444"
              radius={[3, 3, 0, 0]}
            />
            <Bar
              dataKey="Gap"
              name="Gap Sector"
              fill="#06b6d4"
              radius={[3, 3, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ── Row 3: Overall + Combined Insights ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: `${BLUE}15` }}
            >
              <Users size={13} style={{ color: BLUE }} />
            </div>
            <p className="text-lg font-bold" style={{ color: BLUE }}>
              Overall Insight
            </p>
          </div>
          <ul className="space-y-2 mb-3">
            {overallInsights.map((insight, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-600"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1 shrink-0" />
                {insight}
              </li>
            ))}
          </ul>
          {/* Quick stat pills */}
          <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-100">
            {sectorData.map((s, i) => (
              <div
                key={i}
                className="text-center rounded-lg py-1.5"
                style={{ background: `${s.color}10` }}
              >
                <p className="text-lg font-bold" style={{ color: s.color }}>
                  {s.value}%
                </p>
                <p className="text-[9px] text-gray-400 leading-tight">
                  {s.name.split(" ")[0]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: `${BLUE}15` }}
            >
              <Users size={13} style={{ color: BLUE }} />
            </div>
            <p className="text-lg font-bold" style={{ color: BLUE }}>
              Combined Insight
            </p>
          </div>
          <ul className="space-y-2">
            {combinedInsights.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-600"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1 shrink-0" />
                <span>
                  <span className="font-bold text-gray-800">
                    {item.highlight}
                  </span>
                  {item.rest}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Row 4: Strategic Recommendations ── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-amber-50">
            <Lightbulb size={13} className="text-amber-500" />
          </div>
          <p className="text-lg font-bold text-amber-600">
            Strategic Recommendations
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {recommendations.map((r, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 p-2.5 rounded-xl bg-gray-50 border border-gray-100"
            >
              <div
                className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: `${r.color}15` }}
              >
                <r.icon size={12} style={{ color: r.color }} />
              </div>
              <p className="text-sm text-gray-600 leading-snug">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
