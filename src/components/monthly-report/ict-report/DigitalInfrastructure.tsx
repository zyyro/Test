"use client";

import { Cloud, HardDrive, Globe, Wifi, CheckCircle2 } from "lucide-react";

const BLUE = "#006cb7";

const infra = [
  { icon: Cloud, label: "Microsoft 365", value: "All Services Online" },
  { icon: HardDrive, label: "SharePoint Usage", value: "75% Utilization" },
  { icon: Globe, label: "Website Uptime", value: "99.8%" },
  { icon: Wifi, label: "Backup Status", value: "Up To Date" },
];

export default function DigitalInfrastructure() {
  return (
    <div className="min-w-0 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: `${BLUE}15` }}
        >
          <Wifi size={16} style={{ color: BLUE }} />
        </div>
        <h3 className="font-bold text-base" style={{ color: BLUE }}>
          Digital Infrastructure
        </h3>
      </div>

      <div className="space-y-3">
        {infra.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100"
          >
            <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0">
              <item.icon size={16} style={{ color: BLUE }} />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-gray-400 text-xs">{item.label}</p>
              <p className="text-gray-800 text-sm font-semibold break-words">
                {item.value}
              </p>
            </div>

            <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
          </div>
        ))}
      </div>

      <div className="mt-5 p-4 rounded-xl border border-emerald-100 bg-emerald-50/50">
        <p className="text-emerald-600 text-sm font-semibold mb-2">
          Overall Health
        </p>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2.5 bg-emerald-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full"
              style={{ width: "100%" }}
            />
          </div>
          <span className="text-emerald-600 text-sm font-bold">100%</span>
        </div>
        <p className="text-emerald-500 text-xs mt-2">All systems operational</p>
      </div>
    </div>
  );
}
