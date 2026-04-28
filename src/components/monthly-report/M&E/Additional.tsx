"use client";

import { useState, useEffect } from "react";
import axios from "axios";

type Activity = {
  id: number;
  action: string;
  owner: string;
  support: string;
  timeline: string;
  note: string;
  status: "Pending" | "Completed";
};
type APIResponse = {
  activities: Activity[];
};
export default function AdditionalPage() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get<APIResponse>("/api/M-E/dashboard");
        setActivities(response.data.activities);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="font-bold text-lg text-[#006cb7]">Additional Tasks</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-sm">
              {[
                "Action Item ",
                "Owner",
                "Supporting Division",
                "Timeline",
                "Note",
                "Status",
              ].map((h, i) => (
                <th
                  key={i}
                  className="px-7 py-3.5 text-left font-semibold whitespace-nowrap"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {activities.map((t, i) => (
              <tr
                key={i}
                className="border-t border-gray-50 hover:bg-blue-50/20 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-800">
                  {t.action}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-700">
                  {t.owner}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-700">
                  {t.support}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-gray-700">
                  {t.timeline}
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-bold text-red-500">
                    {t.note}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap 
                        ${
                          t.status === "Completed"
                            ? "bg-green-500 text-white"
                            : "bg-orange-400 text-white"
                        }`}
                  >
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
