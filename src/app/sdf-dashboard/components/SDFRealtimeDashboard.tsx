"use client";

import { useEffect, useMemo, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeaderSection from "./dashboard/HeaderSection";
import SummaryCards from "./dashboard/SummaryCards";
import OverviewTab from "./dashboard/OverviewTab";
import RoadmapTab from "./dashboard/RoadmapTab";
import GapsTab from "./dashboard/GapsTab";
import ActionsTab from "./dashboard/ActionsTab";
import { divisionActivities } from "./dashboard/data";

function getYearProgress(now: Date): number {
  const start = new Date("2026-01-01T00:00:00");
  const end = new Date("2026-12-31T23:59:59");
  const total = end.getTime() - start.getTime();
  const elapsed = Math.min(Math.max(now.getTime() - start.getTime(), 0), total);
  return Math.round((elapsed / total) * 100);
}

function getCurrentQuarter(now: Date): string {
  const month = now.getMonth() + 1;
  if (month <= 3) return "Q1";
  if (month <= 6) return "Q2";
  if (month <= 9) return "Q3";
  return "Q4";
}

export default function SDFRealtimeDashboard() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const currentQuarter = useMemo(() => getCurrentQuarter(now), [now]);
  const yearProgress = useMemo(() => getYearProgress(now), [now]);
  const totalActivities = useMemo(
    () => divisionActivities.reduce((sum, item) => sum + item.activities, 0),
    []
  );

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <HeaderSection
          now={now}
          currentQuarter={currentQuarter}
          yearProgress={yearProgress}
          totalActivities={totalActivities}
        />
        <SummaryCards />
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4 rounded-2xl bg-white p-1 shadow-sm">
            <TabsTrigger value="overview" className="rounded-xl">Overview</TabsTrigger>
            <TabsTrigger value="roadmap" className="rounded-xl">Roadmap</TabsTrigger>
            <TabsTrigger value="gaps" className="rounded-xl">Progress & Gaps</TabsTrigger>
            <TabsTrigger value="actions" className="rounded-xl">Next Actions</TabsTrigger>
          </TabsList>
          <TabsContent value="overview"><OverviewTab /></TabsContent>
          <TabsContent value="roadmap"><RoadmapTab /></TabsContent>
          <TabsContent value="gaps"><GapsTab /></TabsContent>
          <TabsContent value="actions"><ActionsTab /></TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
