"use client";

import { Users, DollarSign, Server, Activity } from "lucide-react";

const summaryItems = [
  {
    icon: Users,
    iconColor: "#006cb7",
    label: "Total Staff",
    value: "185 Employees",
    sub: "93 Female",
    subColor: "text-pink-500",
  },
  {
    icon: DollarSign,
    iconColor: "#10b981",
    label: "Total Budget",
    value: "$2,500,000",
    sub: null,
  },
  {
    icon: Server,
    iconColor: "#f59e0b",
    label: "System Status",
    value: "3 Active",
    sub: "3 Issue",
    subColor: "text-red-500",
    valueSplit: true,
  },
  {
    icon: Activity,
    iconColor: "#ec4899",
    label: "KPI Score",
    value: "74%",
    sub: null,
    kpi: true,
  },
];

export default function SummaryPanel() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full shadow-sm">
      <h2 className="font-bold text-xl mb-5" style={{ color: "#006cb7" }}>
        Summary
      </h2>

      <div className="space-y-4">
        {summaryItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-blue-50 transition-colors"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: `${item.iconColor}15`,
                  border: `1px solid ${item.iconColor}30`,
                }}
              >
                <Icon size={20} style={{ color: item.iconColor }} strokeWidth={2.5} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-gray-400 text-sm mb-1">{item.label}</p>

                {item.kpi ? (
                  <KPIBar value={74} />
                ) : item.valueSplit ? (
                  <p className="text-gray-800 text-base font-bold">
                    {item.value}{" "}
                    <span className="text-gray-300 font-normal">/</span>{" "}
                    <span className={item.subColor ?? ""}>{item.sub}</span>
                  </p>
                ) : (
                  <p className="text-gray-800 text-base font-bold">
                    {item.value}
                    {item.sub && (
                      <>
                        {" "}
                        <span className="text-gray-300 font-normal">/</span>{" "}
                        <span className={item.subColor ?? "text-gray-500 font-normal"}>
                          {item.sub}
                        </span>
                      </>
                    )}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function KPIBar({ value }: { value: number }) {
  const color = value >= 80 ? "#10b981" : value >= 60 ? "#f59e0b" : "#ef4444";
  return (
    <div>
      <p className="text-gray-800 text-base font-bold mb-2">{value}%</p>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${value}%`, background: color }}
        />
      </div>
    </div>
  );
}
