"use client";

import { Megaphone, Users, FileText, Eye, ArrowRightLeft } from "lucide-react";

const BLUE = "#006cb7";

const kpis = [
  { icon: Megaphone,      color: BLUE,      label: "Campaign Conducted",  value: "12",       unit: ""    },
  { icon: Users,          color: "#10b981", label: "Outreach Reach",      value: "650,000",  unit: ""    },
  { icon: FileText,       color: "#f59e0b", label: "Applications Received", value: "890",    unit: ""    },
  { icon: Eye,            color: "#06b6d4", label: "Awareness Level",     value: "72%",      unit: ""    },
  { icon: ArrowRightLeft, color: "#7c3aed", label: "Conversation Rate",   value: "1.37%",    unit: ""    },
];

export default function PRSummaryCards() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
      {kpis.map((k, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-start gap-3"
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
            style={{ background: `${k.color}15` }}
          >
            <k.icon size={18} style={{ color: k.color }} />
          </div>
          <div>
            <p className="text-xs text-gray-400 font-medium leading-snug mb-1">{k.label}</p>
            <p className="text-3xl font-bold leading-none" style={{ color: k.color }}>
              {k.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
