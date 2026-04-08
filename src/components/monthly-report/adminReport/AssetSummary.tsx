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
 
];


export default function HRInsightPanels() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 gap-5">
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
     

      {/* Next Actions */}
    
      
    </div>
  );
}
