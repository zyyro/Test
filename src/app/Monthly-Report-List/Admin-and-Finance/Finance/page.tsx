"use client";

import FundSummaryCards from "@/components/monthly-report/finance/FundSummaryCards";
import DisbursementCharts from "@/components/monthly-report/finance/DisbursementCharts";
import GrantOverviewTable from "@/components/monthly-report/finance/GrantOverviewTable";
import OperationalExpenses from "@/components/monthly-report/finance/OperationalExpenses";
import ExpenseBreakdownTable from "@/components/monthly-report/finance/ExpenseBreakdownTable";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MonthlyReportHeader from "@/components/MonthlyReportHeader";

export default function FinanceReportPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans text-gray-800">
      {/* ── Header + Filters ── */}
      {/* <FinanceHeader /> */}
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
      {/* ── Fund KPI Cards ── */}
      <FundSummaryCards />

      {/* ── Disbursement + Sector Pie ── */}
      <DisbursementCharts />

      {/* ── Grant Overview Table ── */}
      <GrantOverviewTable />

      {/* ── Operational Expenses (header, KPIs, charts) ── */}
      <OperationalExpenses />

      {/* ── Expense Breakdown Table ── */}
      {/* <ExpenseBreakdownTable /> */}
    </div>
  );
}
