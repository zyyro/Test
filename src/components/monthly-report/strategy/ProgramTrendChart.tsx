"use client";

import {
  CheckSquare,
  Square,
  TrendingUp,
  TrendingDown,
  Activity,
  Target,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Legend,
  
} from "recharts";

const BLUE = "#006cb7";

const trendData = [
  { month: "Jan", programs: 30, target: 25, lastYear: 20 },
  { month: "Feb", programs: 22, target: 25, lastYear: 18 },
  { month: "Mar", programs: 28, target: 27, lastYear: 22 },
  { month: "Apr", programs: 20, target: 27, lastYear: 19 },
  { month: "May", programs: 35, target: 30, lastYear: 25 },
  { month: "Jun", programs: 25, target: 30, lastYear: 21 },
  { month: "Jul", programs: 18, target: 30, lastYear: 17 },
  { month: "Aug", programs: 30, target: 32, lastYear: 24 },
  { month: "Sep", programs: 22, target: 32, lastYear: 20 },
  { month: "Oct", programs: 48, target: 35, lastYear: 30 },
  { month: "Nov", programs: 38, target: 35, lastYear: 28 },
  { month: "Dec", programs: 42, target: 38, lastYear: 31 },
];

// Monthly highlights
const monthlyHighlights = [
  { month: "Jan", note: "Slow start", color: "#94a3b8" },
  { month: "May", note: "Mid spike", color: "#f59e0b" },
  { month: "Oct", note: "Peak", color: "#10b981" },
  { month: "Dec", note: "Year high", color: BLUE },
];

const tooltipStyle = {
  borderRadius: 12,
  border: "none",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  fontSize: 13,
};

const insightBoxes = [
  {
    label: "Feb – May",
    badge: { text: "Moderate Activity (20–35 programs)", color: "#f59e0b" },
    bullets: ["Total grows over time", "Slight fluctuations between months"],
    bulletColor: BLUE,
  },
  {
    label: "Jan – Oct – Jan",
    badge: { text: "Major Spike (−50)", color: "#10b981" },
    bullets: ["Peak near 50 programs", "Biggest growth of the year"],
    bulletColor: "#10b981",
  },
];

const summaryStats = [
  {
    label: "Peak Month",
    value: "Oct",
    sub: "48 programs",
    color: "#10b981",
    icon: TrendingUp,
  },
  {
    label: "Lowest Month",
    value: "Jul",
    sub: "18 programs",
    color: "#ef4444",
    icon: TrendingDown,
  },
  {
    label: "Annual Total",
    value: "358",
    sub: "programs",
    color: BLUE,
    icon: Activity,
  },
  {
    label: "Monthly Avg",
    value: "29.8",
    sub: "programs",
    color: "#7c3aed",
    icon: Activity,
  },
];

const overallBullets = [
  { text: "Total grows over time", color: "#f59e0b" },
  { text: "Major Improvement", color: BLUE },
  { text: "Major Improvement", color: "#ef4444" },
  { text: "End Higher (~38–43)", color: "#06b6d4" },
  { text: "End Higher (~38–43)", color: "#06b6d4" },
  { text: "Sustained Improvement", color: "#06b6d4" },
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
export default function ProgramTrendChart() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full flex flex-col gap-5">
      {/* ── Title ── */}
      <h3 className="font-bold text-xl" style={{ color: BLUE }}>
        Program Trend Monthly
      </h3>

      {/* ── Summary stat pills ── */}
      <div className="grid grid-cols-4 gap-3">
        {summaryStats.map((s, i) => (
          <div
            key={i}
            className="rounded-xl p-3 text-center border"
            style={{ borderColor: `${s.color}25`, background: `${s.color}08` }}
          >
            <p
              className="text-2xl font-bold leading-tight"
              style={{ color: s.color }}
            >
              {s.value}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
            <p className="text-xs font-semibold text-gray-600 mt-1">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* ── Main Chart ── */}
      <div>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart
            data={trendData}
            margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
          >
            <defs>
              <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={BLUE} stopOpacity={0.2} />
                <stop offset="95%" stopColor={BLUE} stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="lastYearGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.12} />
                <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.01} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 13, fontWeight: 500 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 13 }}
              axisLine={false}
              tickLine={false}
              domain={[0, 58]}
            />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend
              iconType="circle"
              iconSize={10}
              wrapperStyle={{ fontSize: 13, paddingTop: 8 }}
            />
            <ReferenceLine
              y={35}
              stroke="#f59e0b"
              strokeDasharray="4 4"
              strokeWidth={1.5}
              label={{
                value: "Target",
                position: "right",
                fontSize: 11,
                fill: "#f59e0b",
              }}
            />
            {/* Last year */}
            <Area
              type="monotone"
              dataKey="lastYear"
              name="Last Year"
              stroke="#94a3b8"
              strokeWidth={1.5}
              strokeDasharray="4 4"
              fill="url(#lastYearGrad)"
              dot={false}
            />
            {/* Target line */}
            <Area
              type="monotone"
              dataKey="target"
              name="Target"
              stroke="#f59e0b"
              strokeWidth={1.5}
              strokeDasharray="5 3"
              fill="none"
              dot={false}
            />
            {/* This year — on top */}
            <Area
              type="monotone"
              dataKey="programs"
              name="2025 Programs"
              stroke={BLUE}
              strokeWidth={3}
              fill="url(#trendGrad)"
              dot={{ r: 4, fill: "white", stroke: BLUE, strokeWidth: 2.5 }}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
        <p className="text-center text-sm text-gray-400 mt-1">◁▷ 2025</p>
      </div>

      {/* ── Monthly highlights bar ── */}
      <div className="flex gap-2 flex-wrap">
        {monthlyHighlights.map((h, i) => (
          <div
            key={i}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm font-semibold"
            style={{
              borderColor: `${h.color}40`,
              background: `${h.color}10`,
              color: h.color,
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: h.color }}
            />
            {h.month}: {h.note}
          </div>
        ))}
      </div>

      {/* ── Overall banner ── */}
      <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
        <CheckSquare size={18} className="text-emerald-500 shrink-0" />
        <p className="text-lg font-semibold text-gray-700">
          Overall:{" "}
          <span className="text-emerald-600 font-bold">Upward Trend</span> with
          major October spike
        </p>
      </div>

      {/* ── Two insight boxes ── */}
      <div className="grid grid-cols-2 gap-4">
        {insightBoxes.map((box, i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Square size={13} className="text-gray-400" />
              <span className="text-base font-bold text-gray-700">
                {box.label}
              </span>
            </div>
            <p
              className="text-lg font-semibold mb-2"
              style={{ color: box.badge.color }}
            >
              ● {box.badge.text}
            </p>
            {box.bullets.map((b, j) => (
              <p
                key={j}
                className="text-lg text-gray-600 flex items-center gap-1.5 mt-1"
              >
                <span style={{ color: box.bulletColor }}>•</span> {b}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* ── Bottom overall detail ── */}
      <div className="border border-gray-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <CheckSquare size={15} className="text-emerald-500 shrink-0" />
          <p className="text-base font-semibold text-gray-700">
            Overall:{" "}
            <span className="text-emerald-600 font-bold">Upward Trend</span>{" "}
            with major October spike
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-6 gap-y-2">
          {overallBullets.map((b, i) => (
            <p key={i} className="text-lg flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: b.color }}
              />
              <span className="text-gray-600">{b.text}</span>
            </p>
          ))}
        </div>
      </div>
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
