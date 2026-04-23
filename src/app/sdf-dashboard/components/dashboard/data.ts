export const summaryCards = [
  { label: "Strategic Goal", value: 1, icon: "Target" },
  { label: "Strategic Pillars", value: 5, icon: "Layers3" },
  { label: "Key Strategies", value: 16, icon: "TrendingUp" },
  { label: "Key Activities", value: 78, icon: "Activity" },
];

export const divisionActivities = [
  { division: "SD", full: "Strategy", activities: 19 },
  { division: "CE", full: "Communication & Engagement", activities: 6 },
  { division: "M&E", full: "Monitoring & Evaluation", activities: 16 },
  { division: "AF", full: "Administration & Finance", activities: 28 },
  { division: "ICT", full: "ICT", activities: 9 },
];

export const roadmap = [
  {
    quarter: "Q1", period: "Jan–Mar 2026", theme: "Launch & Foundation",
    review: "April 10", status: "Completed",
    focus: ["First joint workplan launched", "Strategic Planning set up", "First quarterly review underway"],
  },
  {
    quarter: "Q2", period: "Apr–Jun 2026", theme: "Improve",
    review: "July 2026", status: "In Progress",
    focus: ["Finalize standard workplan template", "Draft KPI framework approved", "Division orientations done"],
  },
  {
    quarter: "Q3", period: "Jul–Sep 2026", theme: "Strengthen & Refine",
    review: "October 2026", status: "Upcoming",
    focus: ["Compare Q1 vs Q2 vs Q3 trends", "Refine KPI framework", "Support underperforming activities"],
  },
  {
    quarter: "Q4", period: "Oct–Dec 2026", theme: "Plan Ahead",
    review: "January 2027", status: "Upcoming",
    focus: ["Annual report drafted", "KPI framework updated for 2027", "2027 workplan planning begins"],
  },
];

export const currentStatus = {
  achieved: [
    "First joint workplan across all 5 divisions",
    "Strategic Goal and 5 Pillars endorsed by BOD",
    "All divisions actively participated in planning",
    "Strategic Planning function established to lead coordination",
  ],
  gaps: [
    "Inconsistent formats and definitions across divisions",
    "KPI framework still concentrated on trainees and budget awards",
    "Some activities are not yet linked to measurable outcomes",
    "Reporting template and review schedule not yet finalized",
  ],
};

export const nextSteps = [
  { slot: "W3 - Apr", task: "Consolidate division inputs and review RBM / LogFrame references" },
  { slot: "W4 - Apr", task: "Develop draft standard workplan template and send for verification" },
  { slot: "W1 - May", task: "Draft initial institutional KPI framework" },
  { slot: "W2 - May", task: "Design planning and monitoring framework" },
  { slot: "W3 - May", task: "Present drafts to management for validation and feedback" },
  { slot: "W4 - May", task: "Update all 5 divisions with guidance, template, and orientation session" },
];

export const maturityRadar = [
  { metric: "Standardization", value: 55 },
  { metric: "Alignment", value: 60 },
  { metric: "Monitoring", value: 40 },
  { metric: "KPI Design", value: 45 },
  { metric: "Reporting", value: 35 },
  { metric: "Cross-Division Use", value: 65 },
];

export const quarterlyTrend = [
  { quarter: "Q1", completionReadiness: 58, frameworkStrength: 42 },
  { quarter: "Q2", completionReadiness: 72, frameworkStrength: 64 },
  { quarter: "Q3", completionReadiness: 81, frameworkStrength: 78 },
  { quarter: "Q4", completionReadiness: 90, frameworkStrength: 88 },
];
