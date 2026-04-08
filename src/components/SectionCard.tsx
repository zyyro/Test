import { BRAND_COLOR } from "@/lib/helper";
import React from "react";

const SectionCard = ({
  icon: Icon,
  title,
  step,
  right,
  children,
}: {
  icon?: React.ElementType;
  title: string;
  step?: number;
  right?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div
    style={{ borderLeftColor: BRAND_COLOR }}
    className="bg-transparent md:bg-white md:rounded-xl md:border md:border-gray-200 md:border-l-4 md:shadow-sm relative overflow-visible"
  >
    {/* HEADER */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-0 md:px-6 py-4 border-b border-gray-100 md:bg-gray-50/60">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-3">
        {step && (
          <span
            style={{ backgroundColor: BRAND_COLOR }}
            className="flex items-center justify-center w-7 h-7 rounded-full text-white text-xs font-bold shrink-0"
          >
            {step}
          </span>
        )}

        {Icon && (
          <Icon className="h-5 w-5 shrink-0" style={{ color: BRAND_COLOR }} />
        )}

        <h2 className="text-sm md:text-base font-semibold text-gray-700 tracking-wide uppercase">
          {title}
        </h2>
      </div>

      {/* RIGHT SIDE (Dropdown etc.) */}
      {right && (
        <div
          style={{ backgroundColor: BRAND_COLOR }}
          className="rounded-lg text-white  font-bold flex items-center shadow-sm w-fit "
        >
          {right}
        </div>
      )}
    </div>

    {/* CONTENT */}
    <div className="px-0 md:px-6 py-4 md:py-5">{children}</div>
  </div>
);

export default SectionCard;
