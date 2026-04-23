import { Card, CardContent } from "@/components/ui/card";
import { Activity, Layers3, Target, TrendingUp, type LucideIcon } from "lucide-react";
import { summaryCards } from "./data";

const iconMap: Record<string, LucideIcon> = { Target, Layers3, TrendingUp, Activity };

export default function SummaryCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {summaryCards.map((card) => {
        const Icon = iconMap[card.icon];
        return (
          <Card key={card.label} className="rounded-2xl border-0 shadow-sm">
            <CardContent className="flex items-center justify-between p-5">
              <div>
                <div className="text-sm text-slate-500">{card.label}</div>
                <div className="mt-2 text-3xl font-semibold text-slate-900">{card.value}</div>
              </div>
              <div className="rounded-2xl bg-slate-100 p-3">
                <Icon className="h-5 w-5 text-slate-700" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
