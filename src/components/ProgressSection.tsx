"use client";

import MonthlyTrendChart from "./MonthlyTrendChart";

const completionData = {
  percentage: 62,
  completed: 76,
  pending: 19,
  inProgress: 28,
};

const total =
  completionData.completed + completionData.inProgress + completionData.pending;

const categories = [
  { label: "Completed", value: completionData.completed, color: "#053570" },
  { label: "In Progress", value: completionData.inProgress, color: "#0B74F4" },
  { label: "Pending", value: completionData.pending, color: "#8FBFFA" },
];

const systemPerformance = [
  { label: "Skill Matching", value: 83, color: "#ef4444" }, // red
  { label: "Survey", value: 67, color: "#f97316" }, // orange
  { label: "Skill Voucher", value: 58, color: "#eab308" }, // yellow
  { label: "HR System", value: 58, color: "#84cc16" }, // green
  { label: "Joint Training", value: 54, color: "#06b6d4" }, // cyan
  { label: "E-Learning", value: 64, color: "#3b82f6" },
  { label: "Skill Framework", value: 56, color: "#a855f7" }, // purple
  { label: "My Skill, My Job", value: 76, color: "#F52779" },
];

function DonutChart({ percentage }: { percentage: number }) {
  const size = 180;
  const strokeWidth = 24;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const cx = size / 2;
  const cy = size / 2;

  const gap = 10; // space between segments
  const totalGap = gap * categories.length;
  const usableCircumference = circumference - totalGap;

  let offset = 0;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        {categories.map((seg, i) => {
          const valuePct = seg.value / total;
          const dash = valuePct * usableCircumference;

          const currentOffset = offset;
          offset += dash + gap;

          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${dash} ${circumference}`}
              strokeDashoffset={-currentOffset}
              strokeLinecap="butt"
              className="transition-all duration-700"
            />
          );
        })}
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold" style={{ color: "#006cb7" }}>
          {percentage}%
        </span>
        <span className="text-sm text-gray-400">Completion</span>
      </div>
    </div>
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
      <span className="text-gray-600 text-sm w-32 shrink-0">{label}</span>
      <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${value}%`, background: color }}
        />
      </div>
      <span
        className="text-sm font-bold w-10 text-right"
        style={{ color: "#006cb7" }}
      >
        {value}%
      </span>
    </div>
  );
}

export default function ProgressSection() {
  return (
    <div className="flex gap-5 flex-wrap lg:flex-nowrap">
      {/* Overall Progress */}
      <div className="flex-1 grid sm:grid-cols-1  md:grid-col-2 bg-white border border-gray-200 rounded-2xl p-6 min-w-75 shadow-sm">
        <h2 className="font-bold text-base mb-5" style={{ color: "#006cb7" }}>
          Overall Progress
        </h2>

        <div className="flex items-center gap-6">
          <DonutChart percentage={completionData.percentage} />
          <div className="flex-1 space-y-4">
            {categories.map((item) => {
              const pct = Math.round((item.value / total) * 100);
              return (
                <div key={item.label}>
                  <div className="grid grid-cols-1 md:grid-cols-2 mb-1.5 items-center">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: item.color }}
                      />
                      <span className="text-gray-600 text-sm">
                        {item.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 md:justify-end">
                      <span className="text-sm text-gray-400">{pct}%</span>
                      <span className="text-sm font-bold text-gray-700 w-6 text-right">
                        {item.value}
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${pct}%`, background: item.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm text-gray-400">Total Tasks</span>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              {categories.map((c, i) => (
                <div
                  key={i}
                  className="w-5 h-5 rounded-full border-2 border-white"
                  style={{ background: c.color }}
                />
              ))}
            </div>
            <span className="text-base font-bold" style={{ color: "#006cb7" }}>
              {total}
            </span>
          </div>
        </div>
      </div>

      {/* System Performance */}
      <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-6 min-w-70 shadow-sm">
        <h2 className="font-bold text-base mb-5" style={{ color: "#006cb7" }}>
          System Performance
        </h2>
        <div className="space-y-4">
          {systemPerformance.map((item) => (
            <BarRow key={item.label} {...item} />
          ))}
        </div>
      </div>

      {/* Monthly Trend Chart */}
      <MonthlyTrendChart />
    </div>
  );
}
