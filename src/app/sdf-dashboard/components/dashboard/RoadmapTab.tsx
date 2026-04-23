import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { roadmap, quarterlyTrend } from "./data";

function statusTone(status: string) {
  if (status === "Completed") return "bg-emerald-100 text-emerald-700 border-emerald-200";
  if (status === "In Progress") return "bg-amber-100 text-amber-700 border-amber-200";
  return "bg-slate-100 text-slate-700 border-slate-200";
}

export default function RoadmapTab() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 xl:grid-cols-4">
        {roadmap.map((item) => (
          <Card key={item.quarter} className="rounded-2xl border-0 shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-slate-500">{item.period}</div>
                  <h3 className="mt-1 text-xl font-semibold text-slate-900">{item.quarter}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.theme}</p>
                </div>
                <Badge variant="outline" className={`rounded-full ${statusTone(item.status)}`}>
                  {item.status}
                </Badge>
              </div>
              <div className="mt-4 rounded-xl bg-slate-100 p-3 text-sm">
                <div className="text-slate-500">Review meeting</div>
                <div className="mt-1 font-medium text-slate-900">{item.review}</div>
              </div>
              <div className="mt-4 space-y-2">
                {item.focus.map((line) => (
                  <div key={line} className="flex gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="rounded-2xl border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">Quarterly Readiness Trend</CardTitle>
        </CardHeader>
        <CardContent className="h-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={quarterlyTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="quarter" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="completionReadiness" strokeWidth={3} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="frameworkStrength" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
