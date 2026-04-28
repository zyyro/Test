"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const BLUE = "#006cb7";

const campaigns = [
  {
    name: "Skills for Tomorrow",
    channel: "Facebook",
    reach: 389800,
    application: 648,
    convRate: 1.8,
    costPerCampaign: "$15/Person",
  },
  {
    name: "Boost Your Skills",
    channel: "Website",
    reach: 123500,
    application: 243,
    convRate: 2.5,
    costPerCampaign: "$30/Person",
  },
  {
    name: "Upgrade Your Future",
    channel: "Event",
    reach: 34900,
    application: 876,
    convRate: 1.6,
    costPerCampaign: "$25/Person",
  },
  {
    name: "Future Workforce Initiative",
    channel: "Facebook",
    reach: 254000,
    application: 1452,
    convRate: 4.8,
    costPerCampaign: "$18/Person",
  },
];

const CHANNEL_COLORS: Record<string, string> = {
  Facebook: "bg-blue-50 text-blue-600 border border-blue-200",
  Website: "bg-emerald-50 text-emerald-600 border border-emerald-200",
  Event: "bg-violet-50 text-violet-600 border border-violet-200",
  Email: "bg-amber-50 text-amber-600 border border-amber-200",
  Telegram: "bg-cyan-50 text-cyan-600 border border-cyan-200",
};

function ConvRateBadge({ value }: { value: number }) {
  const color = value >= 4 ? "#10b981" : value >= 2 ? "#f59e0b" : "#ef4444";
  return (
    <span
      className="text-sm font-bold px-3 py-0.5 rounded-full"
      style={{ background: `${color}15`, color }}
    >
      {value}%
    </span>
  );
}

type Col =
  | "name"
  | "channel"
  | "reach"
  | "application"
  | "convRate"
  | "costPerCampaign";
const COLUMNS: { key: Col; label: string }[] = [
  { key: "name", label: "Campaign Name" },
  { key: "channel", label: "Channel" },
  { key: "reach", label: "Reach" },
  { key: "application", label: "Application" },
  { key: "convRate", label: "Conv. Rate %" },
  { key: "costPerCampaign", label: "Cost Per Campaign" },
];

export default function CampaignTable() {
  const [sortCol, setSortCol] = useState<Col | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  function handleSort(col: Col) {
    if (sortCol === col) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortCol(col);
      setSortDir("asc");
    }
  }

  const sorted = [...campaigns].sort((a, b) => {
    if (!sortCol) return 0;
    const va = a[sortCol],
      vb = b[sortCol];
    if (typeof va === "number" && typeof vb === "number")
      return sortDir === "asc" ? va - vb : vb - va;
    return sortDir === "asc"
      ? String(va).localeCompare(String(vb))
      : String(vb).localeCompare(String(va));
  });

  const totals = {
    reach: campaigns.reduce((a, c) => a + c.reach, 0),
    application: campaigns.reduce((a, c) => a + c.application, 0),
    convRate: +(
      campaigns.reduce((a, c) => a + c.convRate, 0) / campaigns.length
    ).toFixed(2),
  };

  return (
    <div className="">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg" style={{ color: BLUE }}>
              Campaign Performance
            </h3>
            <p className="text-gray-400 text-sm mt-0.5">
              All campaigns this period
            </p>
          </div>
          <span className="text-sm bg-blue-50 text-blue-600 border border-blue-100 px-3 py-1 rounded-full font-semibold">
            {campaigns.length} Campaigns
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-sm">
                {COLUMNS.map(({ key, label }) => (
                  <th
                    key={key}
                    onClick={() => handleSort(key)}
                    className="px-6 py-4 text-left font-semibold cursor-pointer select-none hover:text-blue-600 transition-colors whitespace-nowrap"
                  >
                    <span className="flex items-center gap-1">
                      {label}
                      {sortCol === key ? (
                        sortDir === "asc" ? (
                          <ChevronUp size={13} />
                        ) : (
                          <ChevronDown size={13} />
                        )
                      ) : null}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((c, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-50 hover:bg-blue-50/30 transition-colors"
                >
                  <td
                    className="px-6 py-4 font-semibold text-sm"
                    style={{ color: BLUE }}
                  >
                    {c.name}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${CHANNEL_COLORS[c.channel] ?? "bg-gray-100 text-gray-500"}`}
                    >
                      {c.channel}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold text-sm text-gray-800">
                    {c.reach.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 font-bold text-sm text-gray-800">
                    {c.application.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <ConvRateBadge value={c.convRate} />
                  </td>
                  <td className="px-6 py-4 font-semibold text-sm text-gray-700">
                    {c.costPerCampaign}
                  </td>
                </tr>
              ))}

              {/* Totals row */}
              <tr className="border-t-2 border-gray-200 bg-gray-50">
                <td className="px-6 py-4 font-bold text-sm text-gray-700">
                  Total / Avg
                </td>
                <td className="px-6 py-4 text-sm text-gray-400">
                  {campaigns.length} channels
                </td>
                <td
                  className="px-6 py-4 font-bold text-sm"
                  style={{ color: BLUE }}
                >
                  {totals.reach.toLocaleString()}
                </td>
                <td className="px-6 py-4 font-bold text-sm text-emerald-600">
                  {totals.application.toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <ConvRateBadge value={totals.convRate} />
                </td>
                <td className="px-6 py-4 text-sm text-gray-400">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
