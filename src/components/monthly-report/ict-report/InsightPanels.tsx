"use client";

import { TrendingUp, AlertCircle, Clock } from "lucide-react";

const improvements = [
  { text: "Enhanced online training registration system",       sub: "Improved accessibility and user experience for trainees and training providers" },
  { text: "Completed integration with training provider database", sub: "Enabled centralized management of accredited institutions" },
  { text: "Optimized SDF website performance",                  sub: "Increased loading speed and reliability for nationwide users" },
  { text: "Upgraded beneficiary data management system",        sub: "Ensured higher accuracy and reliability of data" },
  { text: "Introduced automated reporting tools",               sub: "Facilitated timely and efficient report submission" },
];

const challenges = [
  { text: "High volume of training applications during peak periods", sub: "Causing delays in processing and approval timelines" },
  { text: "Incomplete data submission from training providers",       sub: "Affects accuracy of reporting and monitoring" },
  { text: "Limited system integration with external platforms",       sub: "Restricts data sharing and automation" },
  { text: "Internet connectivity issues in rural areas",              sub: "Impacts access to the SDF system" },
  { text: "Increasing demand for digital skills training",            sub: "Exceeds current system capacity" },
];

const nextActions = [
  { text: "Upgrade SDF online platform",               sub: "To support increased users and scalability" },
  { text: "Strengthen data validation mechanisms",     sub: "Ensure accuracy and reliability of data" },
  { text: "Enhance integration with partner systems",  sub: "Enable seamless data exchange" },
  { text: "Conduct training for system users",         sub: "Improve usability and reduce errors" },
  { text: "Expand infrastructure for nationwide access", sub: "Focus on rural and remote areas" },
];

// ─── Individual panels ────────────────────────────────────────────────────────

export function ImprovementsPanel() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#10b98115" }}>
          <TrendingUp size={16} className="text-emerald-500" />
        </div>
        <h3 className="font-bold text-base text-emerald-600">System Improvements</h3>
      </div>
      <div className="space-y-3">
        {improvements.map((c, i) => (
          <div key={i} className="flex gap-3 p-3 rounded-xl bg-emerald-50/60 border border-emerald-100">
            <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0" />
            <div>
              <p className="text-gray-800 text-sm font-semibold leading-snug">{c.text}</p>
              <p className="text-gray-400 text-xs mt-1">{c.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChallengesPanel() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-amber-50">
          <AlertCircle size={16} className="text-amber-500" />
        </div>
        <h3 className="font-bold text-base text-amber-600">System Challenges</h3>
      </div>
      <div className="space-y-3">
        {challenges.map((c, i) => (
          <div key={i} className="flex gap-3 p-3 rounded-xl bg-amber-50/60 border border-amber-100">
            <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
            <div>
              <p className="text-gray-800 text-sm font-semibold leading-snug">{c.text}</p>
              <p className="text-gray-400 text-xs mt-1">{c.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function NextActionsPanel() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-violet-50">
          <Clock size={16} className="text-violet-500" />
        </div>
        <h3 className="font-bold text-base text-violet-600">Next Actions</h3>
      </div>
      <div className="space-y-3">
        {nextActions.map((a, i) => (
          <div key={i} className="flex gap-3 p-3 rounded-xl bg-violet-50/60 border border-violet-100">
            <div className="w-6 h-6 rounded-full bg-violet-100 border border-violet-200 flex items-center justify-center shrink-0 text-xs font-bold text-violet-500">
              {i + 1}
            </div>
            <div>
              <p className="text-gray-800 text-sm font-semibold leading-snug">{a.text}</p>
              <p className="text-gray-400 text-xs mt-1">{a.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
