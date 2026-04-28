import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    activities: [
      {
        id: 1,
        action: "Revise Prakas on ToR & Prakas on SOP",
        owner: "M&E",
        support: "Internal Audit, Admin & Finance",
        timeline: "Q1-2026",
        note: "Finished 1st revision and pending",
        status: "Pending",
      },
      {
        id: 2,
        action: "Revise SOP (Part 1, 2, & 3) of SDF",
        owner: "M&E",
        support: "All divisions",
        timeline: "Q1-2026",
        note: "Part 1 & 2 finished and Part 3 is ongoing",
        status: "Completed",
      },
      {
        id: 3,
        action: "Prepare 2 letters to seek approval on Prakas",
        owner: "M&E",
        support: "Internal Audit, Admin & Finance",
        timeline: "Q1-2026",
        note: "Finished 1st revision and pending",
        status: "Pending",
      },
    ],
  });
}
