"use client";

import { AreaChart, Area, ResponsiveContainer } from "recharts";

const BLUE = "#006cb7";

const sparkData = [
  { v: 3 }, { v: 5 }, { v: 4 }, { v: 7 }, { v: 6 }, { v: 8 }, { v: 7 },
];

const fundCards = [
  { label: "Total Fund Allocated",  value: "$8,500,000", spark: false },
  { label: "Funds Disbursed",       value: "$5,200,000", spark: false },
  { label: "Remaining Budget",      value: "$3,300,000", spark: false },
  { label: "Disbursement Rate",     value: "61%",        spark: true  },
];

export default function FundSummaryCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {fundCards.map((c, i) => (
        <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-400 font-medium mb-2">{c.label}</p>
          <p className="text-2xl font-bold text-gray-800">{c.value}</p>
          {c.spark && (
            <div className="mt-3 h-10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={sparkData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%"  stopColor={BLUE} stopOpacity={0.3} />
                      <stop offset="95%" stopColor={BLUE} stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="v"
                    stroke={BLUE}
                    strokeWidth={2}
                    fill="url(#sparkGrad)"
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
