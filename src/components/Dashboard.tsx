"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import StatCard from "./StatCard";
import SummaryPanel from "./SummaryPanel";
import ProgressSection from "./ProgressSection";
import MonthlyReportHeader from "./MonthlyReportHeader";
// import ITSupportReport from "./ITSupportReport";
import {
  Target,
  Megaphone,
  Users,
  DollarSign,
  BarChart2,
  Monitor,
  LucideIcon,
} from "lucide-react";

const dashboardData: {
  id: string;
  title: string;
  badge: string;
  badgeColor: "green" | "red";
  icon: LucideIcon;
  iconBg: string;
  items: {
    label: string;
    value: string;
    dot: "green" | "orange" | "red";
    tag?: boolean;
  }[];
}[] = [
  {
    id: "strategy",
    title: "Strategy",
    badge: "+2.1%",
    badgeColor: "green",
    icon: Target,
    iconBg: "#006cb7",
    items: [
      { label: "Goal Set", value: "12", dot: "green" },
      { label: "Goal Achieved", value: "8", dot: "orange" },
      { label: "Risk Level", value: "Medium", dot: "orange", tag: true },
    ],
  },
  {
    id: "pr",
    title: "Public Relations",
    badge: "+8.4%",
    badgeColor: "green",
    icon: Megaphone,
    iconBg: "#f59e0b",
    items: [
      { label: "Active Campaigns", value: "6", dot: "green" },
      { label: "Followers", value: "45.2K", dot: "green" },
      { label: "Sentiment", value: "Positive", dot: "green", tag: true },
    ],
  },
  {
    id: "admin",
    title: "Admin HR",
    badge: "-0.5%",
    badgeColor: "red",
    icon: Users,
    iconBg: "#10b981",
    items: [
      { label: "Employees", value: "185", dot: "green" },
      { label: "Attendance", value: "92%", dot: "green" },
      { label: "New Hires", value: "7", dot: "orange", tag: true },
    ],
  },
  {
    id: "finance",
    title: "Finance",
    badge: "+1.1%",
    badgeColor: "green",
    icon: DollarSign,
    iconBg: "#6366f1",
    items: [
      { label: "Spent", value: "$1.6M", dot: "green" },
      { label: "Monthly Costs", value: "$210K", dot: "orange" },
      { label: "Audit", value: "Compliant", dot: "green", tag: true },
    ],
  },
  {
    id: "me",
    title: "Monitoring & Evaluation",
    badge: "+3.2%",
    badgeColor: "green",
    icon: BarChart2,
    iconBg: "#ec4899",
    items: [
      { label: "Projects Monitored", value: "18", dot: "green" },
      { label: "Data Accuracy", value: "96%", dot: "green" },
      { label: "Impact Score", value: "82%", dot: "orange", tag: true },
    ],
  },
  {
    id: "itc",
    title: "ICT",
    badge: "+0.9%",
    badgeColor: "green",
    icon: Monitor,
    iconBg: "#f97316",
    items: [
      { label: "Uptime", value: "99.2%", dot: "green" },
      { label: "System Production", value: "6", dot: "green" },
      { label: "Security Incidents", value: "2", dot: "red", tag: true },
    ],
  },
];

export default function Dashboard() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const router = useRouter();

  const handleCardClick = (cardId: string) => {
    setActiveCard(cardId);

    if (cardId === "strategy") {
      router.push("Monthly-Report-List/Strategy");
    }

    if (cardId === "itc") {
      router.push("Monthly-Report-List/IctReport");
    }
    if (cardId === "pr") {
      router.push("Monthly-Report-List/PR");
    }
    if (cardId === "finance") {
      router.push("Monthly-Report-List/Admin-and-Finance/Finance");
    }
    if (cardId === "admin") {
      router.push("Monthly-Report-List/Admin-and-Finance/AdminReport");
    }
     if (cardId === "me") {
      router.push("Monthly-Report-List/M&E");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      {/* Header */}
      {/* <div className="mb-8 border-b border-gray-200 pb-5">
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: "#006cb7" }}>
          Operations Dashboard
        </h1>
        <p className="text-gray-400 text-base mt-1">
          Compared from last month · Updated just now
        </p>
      </div> */}
      <div className="mb-6">
        <MonthlyReportHeader />
      </div>

      <div className="flex gap-6 flex-wrap xl:flex-nowrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 flex-1">
          {dashboardData.map((card) => (
            <StatCard
              key={card.id}
              {...card}
              isActive={activeCard === card.id}
              onClick={() => handleCardClick(card.id)}
              //   setActiveCard(activeCard === card.id ? null : card.id)
              // }
            />
          ))}
        </div>
        <div className="w-full xl:w-80 shrink-0">
          <SummaryPanel />
        </div>
      </div>

      <div className="mt-6">
        <ProgressSection />
      </div>
    </div>
  );
}
