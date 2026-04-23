import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
} from "recharts";
import { divisionActivities, maturityRadar } from "./data";

export default function OverviewTab() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Card className="rounded-2xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">Division Activity Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={divisionActivities}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="division" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="activities" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">Planning Maturity Snapshot</CardTitle>
          </CardHeader>
          <CardContent className="h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={maturityRadar}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis domain={[0, 100]} />
                <Radar dataKey="value" fillOpacity={0.35} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-2xl border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">Division Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {divisionActivities.map((item) => (
              <div key={item.division} className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-xs uppercase tracking-wide text-slate-400">{item.division}</div>
                <div className="mt-1 text-lg font-semibold text-slate-900">{item.full}</div>
                <div className="mt-3 text-3xl font-semibold text-slate-900">{item.activities}</div>
                <div className="text-sm text-slate-500">Key activities</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
