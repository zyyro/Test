"use client";

import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface Item {
  label: string;
  value: string;
  dot: "green" | "orange" | "red";
  tag?: boolean;
}

interface StatCardProps {
  title: string;
  badge: string;
  badgeColor: "green" | "red";
  icon: LucideIcon;
  iconBg: string;
  items: Item[];
  isActive: boolean;
  onClick: () => void;
}

const dotColors = {
  green:  "bg-emerald-400",
  orange: "bg-amber-400",
  red:    "bg-red-400",
};

const tagColors = {
  green:  "bg-emerald-50 text-emerald-600 border border-emerald-200",
  orange: "bg-amber-50 text-amber-600 border border-amber-200",
  red:    "bg-red-50 text-red-500 border border-red-200",
};

export default function StatCard({
  title, badge, badgeColor, icon: Icon, iconBg, items, isActive, onClick,
}: StatCardProps) {
  const isPositive = badgeColor === "green";

  return (
    <div
      onClick={onClick}
      className={`
        relative rounded-2xl p-6 cursor-pointer transition-all duration-300 select-none bg-white
        ${isActive ? "shadow-lg scale-[1.02]" : "shadow-sm hover:shadow-md hover:scale-[1.01]"}
      `}
      style={{ border: isActive ? "1.5px solid #006cb7" : "1.5px solid #e5e7eb" }}
    >
      {/* Active top accent */}
      {/* {isActive && (
        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: "#006cb7" }} />
      )} */}

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm"
            style={{ background: iconBg }}
          >
            <Icon size={20} color="white" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-base" style={{ color: "#006cb7" }}>
            {title}
          </span>
        </div>

        <div
          className={`flex items-center gap-1 text-sm font-bold px-3 py-1 rounded-full ${
            isPositive ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500"
          }`}
        >
          {isPositive
            ? <TrendingUp size={13} strokeWidth={3} />
            : <TrendingDown size={13} strokeWidth={3} />}
          {badge}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100 mb-4" />

      {/* Items */}
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${dotColors[item.dot]}`} />
              <span className="text-gray-500 text-sm">{item.label}</span>
            </div>
            {item.tag ? (
              <span className={`text-sm font-semibold px-3 py-0.5 rounded-full ${tagColors[item.dot]}`}>
                {item.value}
              </span>
            ) : (
              <span className="text-gray-800 text-sm font-bold">{item.value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
