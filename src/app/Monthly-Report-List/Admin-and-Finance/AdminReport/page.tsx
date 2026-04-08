"use client";

import HRSummaryCards from "@/components/monthly-report/adminReport/HRSummaryCards";
import StaffBreakdown from "@/components/monthly-report/adminReport/StaffBreakdown";
import AttendanceTrend from "@/components/monthly-report/adminReport/AttendanceTrend";
import AssetInventory from "@/components/monthly-report/adminReport/AssetInventory";
import HRInsightPanels from "@/components/monthly-report/adminReport/HRInsightPanels";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import MonthlyReportHeader from "@/components/MonthlyReportHeader";
import AssetSummary from "@/components/monthly-report/adminReport/AssetSummary";

export default function HRReportPage() {
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
      <HRSummaryCards />

      {/* ── Staff Breakdown + Attendance Trend ── */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mb-6">
        <StaffBreakdown />
        <AttendanceTrend />
      </div>

      {/* ── Asset Inventory ── */}
      <div className="flex gap-5 mb-8 flex-wrap xl:flex-nowrap">
        <div className="w-full xl:w-[70%]">
          <AssetInventory />
        </div>
        <div className="w-full xl:w-[30%]">
         <AssetSummary />
        </div>
      </div>

      {/* ── HR Updates / Internal Issues / Next Actions ── */}
      <HRInsightPanels />
    </div>
  );
}
