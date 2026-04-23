"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Building2, Clock3 } from "lucide-react";

interface Props {
  currentQuarter: string;
  yearProgress: number;
  totalActivities: number;
}

export default function HeaderSection({
  currentQuarter,
  yearProgress,
  totalActivities,
}: Props) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const updateNow = () => setNow(new Date());

    updateNow();
    const timer = setInterval(updateNow, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid gap-4 lg:grid-cols-[1.7fr_1fr]">
      <Card className="rounded-2xl border-0 shadow-sm">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Building2 className="h-4 w-4" />
                Skills Development Fund · Strategic Planning Dashboard
              </div>
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
                  2026 Workplan Real-Time Dashboard
                </h1>
                <p className="mt-2 max-w-3xl text-sm text-slate-600">
                  Live executive view of SDF&apos;s annual workplan, roadmap,
                  gaps, next actions, and division-level activity mix.
                </p>
              </div>
            </div>

            <div className="grid gap-3 rounded-2xl bg-slate-900 p-4 text-white shadow-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock3 className="h-4 w-4" />
                Live status
              </div>

              <div className="text-3xl font-semibold">
                {now
                  ? now.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })
                  : "--:--:--"}
              </div>

              <div className="text-sm text-slate-300">
                {now
                  ? now.toLocaleDateString([], {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "Loading date..."}
              </div>

              <Badge className="w-fit rounded-full bg-cyan-500/20 px-3 py-1 text-cyan-200 hover:bg-cyan-500/20">
                Current quarter: {currentQuarter}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-0 shadow-sm">
        <CardContent className="space-y-4 p-6">
          <div className="text-base font-semibold">2026 Cycle Progress</div>
          <div>
            <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
              <span>Year completion proxy</span>
              <span>{yearProgress}%</span>
            </div>
            <Progress value={yearProgress} className="h-3" />
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              { label: "Focus", value: "Standardization + KPI rollout" },
              { label: "Review cadence", value: "Quarterly" },
              { label: "Divisions", value: "5 active divisions" },
              { label: "Activities tracked", value: String(totalActivities) },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-xl bg-slate-100 p-3">
                <div className="text-slate-500">{label}</div>
                <div className="mt-1 font-medium text-slate-900">{value}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
