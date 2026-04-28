"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import type { LucideIcon } from "lucide-react";

import {
  Megaphone,
  Users,
  FileText,
  ArrowRightLeft,
  BadgeCheck,
  TrendingDown,
} from "lucide-react";

// 🔹 icon map
const iconMap: Record<string, LucideIcon> = {
  Megaphone,
  Users,
  FileText,
  ArrowRightLeft,
  BadgeCheck,
  TrendingDown,
};

// 🔹 types
type KPI = {
  id: number;
  icon: string;
  color: string;
  label: string;
  value: string;
  sub: string;
  subcolor: string;
  sub2: string;
  subcolor2: string;
};

type APIData = {
  kpis: KPI[];
  activities: any[];
};

export default function PRSummaryCards() {
  const [kpis, setKpis] = useState<KPI[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<APIData>("/api/pr/dashboard");

        setKpis(res.data.kpis); // ✅ get only kpis
      } catch (err) {
        console.error("Axios error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 mb-5 gap-4">
      {kpis.map((k) => {
        const Icon = iconMap[k.icon];

        return (
          <div
            key={k.id}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-start gap-3"
          >
            {/* Icon */}
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: `${k.color}15` }}
            >
              <Icon size={20} style={{ color: k.color }} />
            </div>

            {/* Text */}
            <div>
              <p className="text-xs text-gray-400">{k.label}</p>
              <p className="text-2xl font-bold">
                <span style={{ color: k.color }}> {k.value}</span>
              </p>

              <div className="text-sm">
                <span style={{ color: k.subcolor }}>{k.sub}</span>
                <span className="ml-1 text-gray-500">{k.sub2}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
