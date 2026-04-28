import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: [
      {
        id: 1,
        category: "Salaries",
        budget: 240000,
        actual: 237000,
        variance: -3000,
        status: "On Track",
      },
      {
        id: 2,
        category: "Office Supplies",
        budget: 30000,
        actual: 35000,
        variance: -5000,
        status: "Over Budget",
      },
      {
        id: 3,
        category: "IT & Equipment",
        budget: 25000,
        actual: 28000,
        variance: -3000,
        status: "Over Budget",
      },
      {
        id: 4,
        category: "Utilities",
        budget: 20000,
        actual: 18000,
        variance: -2000,
        status: "On Track",
      },
    ],
  });
}
