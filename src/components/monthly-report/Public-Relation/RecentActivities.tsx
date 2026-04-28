"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  CheckCircle,
  Handshake,
  TrendingUp,
  Calendar,
  MoveRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ActivityIcon = "CheckCircle" | "Handshake" | "TrendingUp" | "Calendar";

const activityIconMap: Record<ActivityIcon, LucideIcon> = {
  CheckCircle,
  Handshake,
  TrendingUp,
  Calendar,
};

type Activity = {
  id: number;
  icon: ActivityIcon;
  iconColor: string;
  textcolor: string;
  bgColor: string;
  text: string;
  sub: string;
  unit: string;
};

type PRDashboardResponse = {
  kpis: [];
  activities: Activity[];
};

export default function RecentActivities() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await axios.get<PRDashboardResponse>("/api/pr/dashboard");
        setActivities(res.data.activities);
      } catch (error) {
        console.error("Axios error:", error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
      <h2 className="text-[#094496] font-semibold mb-4">Recent Activities</h2>

      <div className="space-y-4 mt-10 ">
        {activities.map((item) => {
          const Icon = activityIconMap[item.icon];

          return (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <Icon size={20} style={{ color: item.iconColor }} />
                </div>

                <div>
                  <p
                    className="text-base mt-3 font-medium  text-slate-800"
                    style={{ color: item.textcolor }}
                  >
                    {item.text}
                  </p>
                  <p className="text-xs text-gray-500">{item.sub}</p>
                </div>
              </div>

              <span className="text-xs text-gray-400">{item.unit}</span>
            </div>
          );
        })}
        <div className="w-full h-15 bg-gray-100 rounded-2xl py-4 flex justify-center items-center text-lg font-semibold text-blue-600 shadow-sm hover:bg-s;ate-100 transition">
          <p className="inline-flex items-center gap-2 ">
            View All Activities <MoveRight size={16} strokeWidth={2.5} />{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
