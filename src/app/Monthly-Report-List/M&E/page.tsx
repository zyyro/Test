"use client";

import MonthlyReportHeader from "@/components/MonthlyReportHeader";
import StatCard from "@/components/monthly-report/M&E/StatCrad";
import SectionCard from "@/components/monthly-report/M&E/SectionCard";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// import MESummaryCards from "@/components/monthly-report/M&E/MESummaryCards";
// import MEChartsSection from "@/components/monthly-report/M&E/MEChartsSection";
// import CampaignTable from "@/components/monthly-report/M&E/CampaignTable";

export default function MEReportPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans text-gray-800">
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

      <StatCard />
      <SectionCard />
    </div>
  );
}
