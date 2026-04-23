import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { nextSteps } from "./data";

export default function ActionsTab() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <Card className="rounded-2xl border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">Immediate Next Steps</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {nextSteps.map((step) => (
            <div key={step.slot} className="flex gap-4 rounded-2xl border border-slate-200 p-4">
              <div className="min-w-20 rounded-xl bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">
                {step.slot}
              </div>
              <div className="text-sm text-slate-700">{step.task}</div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">Dashboard Notes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-slate-600">
          <div className="rounded-xl bg-slate-100 p-4">
            This version is a real-time executive dashboard shell based on the uploaded workplan deck.
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            To make it fully operational, connect live sources for division reporting, KPI values, budget updates, and quarterly submissions.
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            Recommended next integration points: Google Sheets/Excel tracker, reporting form, KPI database, or API feed from division owners.
          </div>
          <div className="rounded-xl bg-slate-900 p-4 text-white">
            Current build status: <span className="font-semibold">Ready for data wiring</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
