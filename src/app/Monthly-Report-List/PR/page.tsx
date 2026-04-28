"use client";

import CampaignTable from "@/components/monthly-report/Public-Relation/CampaignTable";
import PRChartsSection from "@/components/monthly-report/Public-Relation/PRChartsSection";
import PRSummaryCards from "@/components/monthly-report/Public-Relation/PRSummaryCards";

import MonthlyReportHeader from "@/components/MonthlyReportHeader";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import RecentActivities from "@/components/monthly-report/Public-Relation/RecentActivities";

export default function PRReportPage() {
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
      {/* ── Campaign Table ── */}

      <PRSummaryCards />
      {/* ── Charts ── */}
      <PRChartsSection />
      <div className="grid grid-cols-1 gap-5 mb-8 xl:grid-cols-[2fr_1fr]">
        {/* ── KPI Summary Cards ── */}
        <CampaignTable />
        <RecentActivities />
      </div>
    </div>
  );
}
