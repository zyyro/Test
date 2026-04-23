import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { currentStatus } from "./data";

export default function GapsTab() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card className="rounded-2xl border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <CheckCircle2 className="h-5 w-5" />
            Progress Achieved
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {currentStatus.achieved.map((item) => (
            <div key={item} className="rounded-xl bg-emerald-50 p-4 text-sm text-emerald-900">
              {item}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <AlertTriangle className="h-5 w-5" />
            Key Gaps Identified
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {currentStatus.gaps.map((item) => (
            <div key={item} className="rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
              {item}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
