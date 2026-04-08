"use client";

import { useState } from "react";

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const trendData = {
  kpi:        [68, 70, 65, 72, 71, 74, 73, 76, 74, 78, 75, 74],
  attendance: [88, 90, 87, 92, 91, 93, 90, 92, 94, 91, 93, 92],
  budget:     [1.2, 1.4, 1.3, 1.5, 1.4, 1.6, 1.5, 1.7, 1.6, 1.8, 1.7, 1.6],
};

const lines = [
  { key: "kpi",        label: "KPI Score",   color: "#006cb7" },
  { key: "attendance", label: "Attendance",  color: "#10b981" },
  { key: "budget",     label: "Budget ($M)", color: "#f59e0b" },
] as const;

type LineKey = typeof lines[number]["key"];

function normalize(values: number[]): number[] {
  const min = Math.min(...values);
  const max = Math.max(...values);
  return values.map((v) => (v - min) / (max - min || 1));
}

function buildPath(values: number[], w: number, h: number, pad: number): string {
  const norm = normalize(values);
  const points = norm.map((v, i) => {
    const x = pad + (i / (values.length - 1)) * (w - pad * 2);
    const y = pad + (1 - v) * (h - pad * 2);
    return [x, y] as [number, number];
  });
  return points.reduce((acc, [x, y], i) => {
    if (i === 0) return `M ${x},${y}`;
    const [px, py] = points[i - 1];
    const cpx = (px + x) / 2;
    return `${acc} C ${cpx},${py} ${cpx},${y} ${x},${y}`;
  }, "");
}

export default function MonthlyTrendChart() {
  const [active, setActive] = useState<LineKey[]>(["kpi", "attendance", "budget"]);
  const [hovered, setHovered] = useState<{
    month: string; x: number; values: Record<string, number>;
  } | null>(null);

  const W = 480; const H = 220; const PAD = 18;

  const toggleLine = (key: LineKey) => {
    setActive((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * W;
    const idx = Math.round(((mouseX - PAD) / (W - PAD * 2)) * (months.length - 1));
    const clamped = Math.max(0, Math.min(months.length - 1, idx));
    const x = PAD + (clamped / (months.length - 1)) * (W - PAD * 2);
    setHovered({
      month: months[clamped],
      x,
      values: {
        kpi:        trendData.kpi[clamped],
        attendance: trendData.attendance[clamped],
        budget:     trendData.budget[clamped],
      },
    });
  };

  return (
    <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-6 min-w-[280px] shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
        <h2 className="font-bold text-base" style={{ color: "#006cb7" }}>
          Monthly Trend
        </h2>
        <div className="flex gap-2 flex-wrap">
          {lines.map((line) => (
            <button
              key={line.key}
              onClick={() => toggleLine(line.key)}
              className="flex items-center gap-1.5 text-sm px-3 py-1 rounded-full border transition-all"
              style={
                active.includes(line.key)
                  ? { background: `${line.color}15`, borderColor: `${line.color}40`, color: line.color }
                  : { borderColor: "#e5e7eb", color: "#9ca3af", background: "transparent" }
              }
            >
              <span className="w-2.5 h-2.5 rounded-full"
                style={{ background: active.includes(line.key) ? line.color : "#d1d5db" }} />
              {line.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="relative">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full"
          style={{ height: H }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHovered(null)}
        >
          {[0, 0.25, 0.5, 0.75, 1].map((v) => {
            const y = PAD + (1 - v) * (H - PAD * 2);
            return <line key={v} x1={PAD} y1={y} x2={W - PAD} y2={y} stroke="#f3f4f6" strokeWidth={1.5} />;
          })}

          {lines.map((line) => {
            if (!active.includes(line.key)) return null;
            const data = trendData[line.key];
            const path = buildPath(data, W, H, PAD);
            const norm = normalize(data);
            const lastX = PAD + ((data.length - 1) / (data.length - 1)) * (W - PAD * 2);
            const firstY = PAD + (1 - norm[0]) * (H - PAD * 2);
            const lastY = PAD + (1 - norm[norm.length - 1]) * (H - PAD * 2);
            const areaPath = `${path} L ${lastX},${H - PAD} L ${PAD},${H - PAD} Z`;
            return (
              <g key={line.key}>
                <path d={areaPath} fill={line.color} fillOpacity={0.06} />
                <path d={path} fill="none" stroke={line.color} strokeWidth={3} strokeLinecap="round" />
                <circle cx={PAD} cy={firstY} r={4} fill={line.color} />
                <circle cx={lastX} cy={lastY} r={4} fill={line.color} />
              </g>
            );
          })}

          {hovered && (
            <>
              <line x1={hovered.x} y1={PAD} x2={hovered.x} y2={H - PAD}
                stroke="#006cb7" strokeWidth={1} strokeDasharray="3 3" strokeOpacity={0.4} />
              {lines.map((line) => {
                if (!active.includes(line.key)) return null;
                const data = trendData[line.key];
                const idx = months.indexOf(hovered.month);
                const norm = normalize(data);
                const cy = PAD + (1 - norm[idx]) * (H - PAD * 2);
                return <circle key={line.key} cx={hovered.x} cy={cy} r={6}
                  fill={line.color} stroke="white" strokeWidth={2} />;
              })}
            </>
          )}
        </svg>

        {/* Tooltip */}
        {hovered && (
          <div
            className="absolute top-1 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm pointer-events-none shadow-lg z-10"
            style={{ left: Math.min(hovered.x + 14, W - 140) }}
          >
            <p className="font-bold mb-1.5" style={{ color: "#006cb7" }}>{hovered.month}</p>
            {lines.map((line) =>
              active.includes(line.key) ? (
                <div key={line.key} className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: line.color }} />
                  <span className="text-gray-400">{line.label}:</span>
                  <span className="font-bold text-gray-700">
                    {line.key === "budget" ? `$${hovered.values[line.key]}M` : `${hovered.values[line.key]}%`}
                  </span>
                </div>
              ) : null
            )}
          </div>
        )}
      </div>

      {/* X-axis */}
      <div className="flex justify-between mt-2 px-1">
        {months.map((m) => (
          <span key={m} className="text-gray-400 text-xs">{m}</span>
        ))}
      </div>
    </div>
  );
}
