"use client";

import MonthlyReportHeader from "@/components/MonthlyReportHeader";
import KpiCards from "@/components/monthly-report/ict-report/KpiCards";
import ChartsSection from "@/components/monthly-report/ict-report/ChartsSection";
import SystemTable from "@/components/monthly-report/ict-report/SystemTable";
import DigitalInfrastructure from "@/components/monthly-report/ict-report/DigitalInfrastructure";

import {
  ImprovementsPanel,
  ChallengesPanel,
  NextActionsPanel,
} from "@/components/monthly-report/ict-report/InsightPanels";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function IctReportPage() {
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

      {/* ── KPI Cards ── */}
      <KpiCards />

      {/* ── Charts ── */}
      <ChartsSection />

      {/* ── System Table + Digital Infrastructure ── */}
      <div className="grid grid-cols-1 gap-5 mb-8 xl:grid-cols-[2fr_1fr]">
        <SystemTable />
        <DigitalInfrastructure />
      </div>

      {/* ── Improvements / Challenges / Next Actions ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <ImprovementsPanel />
        <ChallengesPanel />
        <NextActionsPanel />
      </div>
    </div>
  );
}
