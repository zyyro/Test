"use client";

import { TrendingUp, AlertCircle, Clock } from "lucide-react";

const Quarterly1 = [
  { text: "Updates QA framework and quality standards" },
  { text: "Establish checklists for compliance and performance monitoring" },
  { text: "Conduct Know-Your-Customer (KYC) on training proposal received" },
  {
    text: "Conduct monitoring and orientation on training project implementation",
  },
  { text: "Update M&E Framework and indicator matrix" },
  { text: "Collect routine monitoring data using standardized tools" },
];

const Quarterly2 = [
  { text: "Assessment on training providers" },
  { text: "Introducing digital tools for real-time tracking" },
  { text: "Continuously developing staff capacity and loyalty" },
  {
    text: "Conduct tracer study on training proposals and document lessons learned",
  },
];

const Quarterly3 = [
  { text: "Conduct independent verification (IV) on training proposals (WB)" },
  { text: "Dissemination of IV and tracer study findings (WB)" },
];
const Quarterly4 = [
  {
    text: "Introduce a central database (Management Information System) for data storage and analysis",
  },
];

// ─── Individual panels ────────────────────────────────────────────────────────

export function Quarterly1Panel() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: "#10b98115" }}
        >
          <TrendingUp size={16} className="text-emerald-500" />
        </div>
        <h3 className="font-bold text-base text-emerald-600">
          Quarterly Plan - Q1
        </h3>
      </div>
      <div className="space-y-3">
        {Quarterly1.map((c, i) => (
          <div
            key={i}
            className="flex gap-3 p-3 rounded-xl bg-emerald-50/60 border border-emerald-100"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
            <div>
              <p className="text-gray-800 text-sm font-semibold leading-snug">
                {c.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Quarterly2Panel() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-amber-50">
          <AlertCircle size={16} className="text-amber-500" />
        </div>
        <h3 className="font-bold text-base text-amber-600">
          Quarterly Plan - Q2
        </h3>
      </div>
      <div className="space-y-3">
        {Quarterly2.map((c, i) => (
          <div
            key={i}
            className="flex gap-3 p-3 rounded-xl bg-amber-50/60 border border-amber-100"
          >
            <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
            <div>
              <p className="text-gray-800 text-sm font-semibold leading-snug">
                {c.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Quarterly3Panel() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-violet-50">
          <Clock size={16} className="text-violet-500" />
        </div>
        <h3 className="font-bold text-base text-violet-600">
          Quarterly Plan - Q3
        </h3>
      </div>
      <div className="space-y-3">
        {Quarterly3.map((a, i) => (
          <div
            key={i}
            className="flex gap-3 p-3 rounded-xl bg-violet-50/60 border border-violet-100"
          >
            <div className="w-6 h-6 rounded-full bg-violet-100 border border-violet-200 flex items-center justify-center shrink-0 text-xs font-bold text-violet-500">
              {i + 1}
            </div>
            <div>
              <p className="text-gray-800 text-sm font-semibold leading-snug">
                {a.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Quarterly4Panel() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#006cb715]">
          <Clock size={16} className="text-[#006cb7]" />
        </div>
        <h3 className="font-bold text-base text-[#006cb7]">
          Quarterly Plan - Q4
        </h3>
      </div>
      <div className="space-y-3">
        {Quarterly4.map((a, i) => (
          <div
            key={i}
            className="flex gap-3 p-3 rounded-xl bg-[#006cb715] border border-[#006cb715]"
          >
            <div className="w-6 h-6 rounded-full bg-[#006cb715] border border-[#006cb715] flex items-center justify-center shrink-0 text-xs font-bold text-[#006cb7]">
              {i + 1}
            </div>
            <div>
              <p className="text-[#006cb7] text-sm font-semibold leading-snug">
                {a.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
