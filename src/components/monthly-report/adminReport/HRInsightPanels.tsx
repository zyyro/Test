"use client";

import { FileText, AlertCircle, ChevronRight } from "lucide-react";
import { text } from "stream/consumers";

const BLUE = "#006cb7";

const hrUpdates = [
  { text: "3 New Staff Onboarded", sub: "→ Today • ITC & Admin and Finance Divisions" },
  {
    text: "Training Completed Successfully",
    sub: "→ Last Week • Admin and Finance Divisions",
  },
  { text: "Attendance Improved This Month", sub: "→ This Month • Management" },
  { text: "Two Employees Promoted Successfully", sub: "→ Finance & ICT" },
  { text: "Policy Updated Released", sub: "→ Remote Work Guidelines v2.1" },
];

const internalIssues = [
  {
    text: "Limited Spare Laptops",
    highlight: "Limited",
    sub: "→ Critical • ITC Division • 5 units left",
  },
  {
    text: "Monitor Replacement Delayed",
    highlight: null,
    sub: "→ Pending • ITC Division • Expected next week",
  },
  {
    text: "Incomplete Asset Handover",
    highlight: null,
    sub: "→ In Progress • Admin Department",
  },
  {
    text: "Network Downtime Reported",
    highlight: "Low",
    sub: "→ Yesterday • Affected 12 users",
  },
  {
    text: "Delayed Onboarding Process",
    highlight: "Delayed",
    sub: "→ Alert • HR Department • 2 pending onboardings",
  },
];

const nextActions = [
  {
    text: "Update Asset Register",
    color: BLUE,
    sub: "→ Due Today • Assigned to Admin Team",
  },
  {
    text: "Procure New Devices",
    color: "#10b981",
    sub: "→ 5 Laptops Needed • Budget Approved",
  },
  {
    text: "Complete Staff Onboarding",
    color: "#10b981",
    sub: "→ Due This Week • Admin and Finance Divisions",
  },
  {
    text: "Schedule Training Sessions",
    color: "#f59e0b",
    sub: "→ Plan for Next Month • Focus on IT Skills",
  },
  {
    text: "Review Remote Work Policy",
    color: "#8b5cf6",
    sub: "→ Due Next Month • Involve All Departments",
  },
];
const recentActivities = [
  { text: "Update Asset Register", sub: "→ Due Today • Admin" },
  {
    text: "Complete Staff Onboarding",
    color: "#10b981",
    sub: "→ 2 employees pending • Admin and Finance Divisions",
  },
  {
    text: "Schedule Monthly Training",
    color: "#10b981",
    sub: "→ Due This Week • Admin and Finance Divisions",
  },
  {
    text: "Resolve IT Support Tickets",
    color: "#f59e0b",
    sub: "→→ 3 open issues • Focus on network problems",
  },
  {
    text: "Submit Monthly Report",
    color: "#8b5cf6",
    sub: "→ Deadline: Friday • Assigned to Admin Team",
  },
];
export default function HRInsightPanels() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-6">
      {/* HR Updates */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: `${BLUE}15` }}
          >
            <FileText size={13} style={{ color: BLUE }} />
          </div>
          <h3 className="font-bold text-base" style={{ color: BLUE }}>
            HR Updates
          </h3>
        </div>
        {/* <div className="space-y-3">
          {hrUpdates.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ background: BLUE }}
              />
              <p className="text-sm text-gray-700">{item}</p>
            </div>
          ))}
        </div> */}
        <div className="space-y-3">
          {hrUpdates.map((c, i) => (
            <div
              key={i}
              className="flex gap-3 p-3 rounded-xl bg-blue-50/60 border border-blue-100"
            >
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
              <div>
                <p className="text-gray-800 text-sm font-semibold leading-snug">
                  {c.text}
                </p>
                <p className="text-gray-400 text-xs mt-1">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Internal Issues */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-amber-50">
            <AlertCircle size={13} className="text-amber-500" />
          </div>
          <h3 className="font-bold text-base text-amber-600">
            Internal Issues
          </h3>
        </div>
        <div className="space-y-3">
          {internalIssues.map((c, i) => (
            <div
              key={i}
              className="flex gap-3 p-3 rounded-xl bg-amber-50/60 border border-amber-100"
            >
              <div className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0" />
              <div>
                <p className="text-gray-800 text-sm font-semibold leading-snug">
                  {c.text}
                </p>
                <p className="text-gray-400 text-xs mt-1">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Actions */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-violet-50">
            <ChevronRight size={13} className="text-violet-500" />
          </div>
          <h3 className="font-bold text-base text-violet-600">Next Actions</h3>
        </div>
        <div className="space-y-3">
          {nextActions.map((c, i) => (
            <div
              key={i}
              className="flex gap-3 p-3 rounded-xl bg-violet-50/60 border border-violet-100"
            >
              <div className="w-2 h-2 rounded-full bg-violet-600 mt-2 shrink-0" />
              <div>
                <p className="text-gray-800 text-sm font-semibold leading-snug">
                  {c.text}
                </p>
                <p className="text-gray-400 text-xs mt-1">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-green-50">
            <ChevronRight size={13} className="text-green-500" />
          </div>
          <h3 className="font-bold text-base text-green-600">Recent Activities</h3>
        </div>
        <div className="space-y-3">
          {recentActivities.map((c, i) => (
            <div
              key={i}
              className="flex gap-3 p-3 rounded-xl bg-green-50/60 border border-green-100"
            >
              <div className="w-2 h-2 rounded-full bg-green-600 mt-2 shrink-0" />
              <div>
                <p className="text-gray-800 text-sm font-semibold leading-snug">
                  {c.text}
                </p>
                <p className="text-gray-400 text-xs mt-1">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
