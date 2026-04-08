"use client";

import PRSummaryCards from "@/components/monthly-report/Public-Relation/CampaignTable";
import PRChartsSection from "@/components/monthly-report/Public-Relation/PRChartsSection";
import CampaignTable from "@/components/monthly-report/Public-Relation/PRSummaryCards";

import MonthlyReportHeader from "@/components/MonthlyReportHeader";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
      <CampaignTable />
      {/* ── Charts ── */}
      <PRChartsSection />

      {/* ── KPI Summary Cards ── */}
      <PRSummaryCards />
    </div>
  );
}
