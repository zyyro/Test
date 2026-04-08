"use client";

import StrategyReportHeader from "@/components/monthly-report/strategy/StrategyReportHeader";
import StrategySummaryCards from "@/components/monthly-report/strategy/StrategySummaryCards";
import ProgramTrendChart from "@/components/monthly-report/strategy/ProgramTrendChart";
import SectorContribution from "@/components/monthly-report/strategy/SectorContribution";
import MonthlyReportHeader from "@/components/MonthlyReportHeader";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function StrategyReportPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans text-gray-800">
      {/* ── Header ── */}
      <div className="mb-8">
        <div className="mb-8">
          <Link href={"/"}>
            <button className="bg-white hover:bg-[#006cb7]/10 text-[#006cb7] px-3 py-2  ml-5 border boder-rounded border-[#006cb7]  rounded-lg">
              <ArrowLeft />
            </button>
          </Link>
        </div>
        <MonthlyReportHeader />
      </div>

      {/* ── Summary KPI Cards ── */}
      <StrategySummaryCards />

      {/* ── Main Content: 2-column layout ── */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {/* Left: Program Trend */}
        <ProgramTrendChart />

        {/* Right: Sector Contribution */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <SectorContribution />
        </div>
      </div>
    </div>
  );
}
