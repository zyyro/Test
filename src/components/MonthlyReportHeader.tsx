"use client";

import { useState, useRef, useEffect } from "react";

const DIVISIONS = [
  "All Division",
  "Strategy",
  "PR",
  "Admin And Finance",
  "M & E",
  "ITC",
];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const YEARS = ["2024", "2025", "2026", "2027"];

// ─── Icons ────────────────────────────────────────────────────────────────────

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect
        x="1.5"
        y="2.5"
        width="15"
        height="13"
        rx="2.5"
        stroke="white"
        strokeWidth="1.4"
      />
      <path d="M1.5 6.5h15" stroke="white" strokeWidth="1.4" />
      <path
        d="M5.5 1v3M12.5 1v3"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="6" cy="10" r="0.9" fill="white" />
      <circle cx="9" cy="10" r="0.9" fill="white" />
      <circle cx="12" cy="10" r="0.9" fill="white" />
      <circle cx="6" cy="13" r="0.9" fill="white" />
      <circle cx="9" cy="13" r="0.9" fill="white" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      style={{
        transition: "transform 0.25s cubic-bezier(0.4,0,0.2,1)",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        flexShrink: 0,
      }}
    >
      <path
        d="M3.5 5.25l3.5 3.5 3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M2.5 7l3.5 3.5 5.5-6"
        stroke="#1a6fc4"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <rect
        x="1"
        y="4"
        width="11"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M4 12V8h5v4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M4 1h5l1 3H3L4 1z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <circle
        cx="6.5"
        cy="6.5"
        r="5.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M6.5 3.5v3l2 1.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Dropdown ─────────────────────────────────────────────────────────────────

interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  icon?: React.ReactNode;
  minWidth?: number;
}

function Dropdown({
  value,
  onChange,
  options,
  icon,
  minWidth = 130,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, []);

  function handleOpen() {
    if (ref.current) {
      const r = ref.current.getBoundingClientRect();
      setCoords({ top: r.bottom + 6, left: r.left, width: r.width });
    }
    setOpen((p) => !p);
  }

  return (
    <div ref={ref} style={{ position: "relative", minWidth }}>
      <button
        onClick={handleOpen}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "8px",
          width: "100%",
          background: open ? "#f0f6ff" : "#ffffff",
          border: `1.5px solid ${open ? "#1a6fc4" : "#dde3ef"}`,
          borderRadius: "10px",
          padding: "8px 12px",
          color: "#1a2540",
          fontSize: "17px",
          fontWeight: 500,
          cursor: "pointer",
          transition: "all 0.2s ease",
          whiteSpace: "nowrap",
          boxShadow: open
            ? "0 0 0 3px rgba(26,111,196,0.12)"
            : "0 1px 2px rgba(0,0,0,0.05)",
        }}
        onMouseEnter={(e) => {
          if (!open) {
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "#a0b8dd";
            (e.currentTarget as HTMLButtonElement).style.background = "#f8faff";
          }
        }}
        onMouseLeave={(e) => {
          if (!open) {
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "#dde3ef";
            (e.currentTarget as HTMLButtonElement).style.background = "#ffffff";
          }
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "#4a5678",
          }}
        >
          {icon}
          <span style={{ color: "#1a2540" }}>{value}</span>
        </span>
        <span style={{ color: "#8896b3" }}>
          <ChevronIcon open={open} />
        </span>
      </button>

      {open && (
        <ul
          style={{
            position: "fixed",
            zIndex: 9999,
            top: coords.top,
            left: coords.left,
            minWidth: Math.max(coords.width, minWidth),
            background: "#ffffff",
            border: "1.5px solid #e4eaf5",
            borderRadius: "12px",
            boxShadow:
              "0 12px 32px rgba(26,37,64,0.13), 0 2px 8px rgba(26,37,64,0.07)",
            padding: "6px",
            margin: 0,
            listStyle: "none",
            animation: "dropIn 0.18s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <style>{`
            @keyframes dropIn {
              from { opacity: 0; transform: translateY(-6px) scale(0.98); }
              to   { opacity: 1; transform: translateY(0) scale(1); }
            }
          `}</style>
          {options.map((opt) => {
            const isSelected = opt === value;
            return (
              <li
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px 10px",
                  fontSize: "17px",
                  cursor: "pointer",
                  borderRadius: "8px",
                  color: isSelected ? "#1a6fc4" : "#2d3a52",
                  background: isSelected ? "#eef4ff" : "transparent",
                  fontWeight: isSelected ? 600 : 400,
                  transition: "background 0.13s",
                }}
                onMouseEnter={(e) => {
                  if (!isSelected)
                    (e.currentTarget as HTMLLIElement).style.background =
                      "#f4f7fd";
                }}
                onMouseLeave={(e) => {
                  if (!isSelected)
                    (e.currentTarget as HTMLLIElement).style.background =
                      "transparent";
                }}
              >
                {opt}
                {isSelected && <CheckIcon />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function MonthlyReportHeader() {
  const [division, setDivision] = useState("All Division");
  const [month, setMonth] = useState("March");
  const [year, setYear] = useState("2026");

  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "14px",
        background: "linear-gradient(135deg, #1a6fc4 0%, #1558a0 100%)",
        borderRadius: "14px",
        padding: "14px 20px",
        boxShadow: "0 4px 20px rgba(26,111,196,0.25)",
      }}
    >
      {/* Left — title + subtitle */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            background: "rgba(255,255,255,0.18)",
            borderRadius: "10px",
            border: "1.5px solid rgba(255,255,255,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <CalendarIcon />
        </div>
        <div>
          <div
            style={{
              fontSize: "25px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.2px",
              lineHeight: 1.2,
            }}
          >
            Monthly Report
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "3px",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "17px",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              <BuildingIcon />
              {division}
            </span>
            <span
              style={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.4)",
                display: "inline-block",
              }}
            />
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "17px",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              <ClockIcon />
              Updated {timeString}
            </span>
          </div>
        </div>
      </div>

      {/* Right — dropdowns */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Dropdown
          value={division}
          onChange={setDivision}
          options={DIVISIONS}
          minWidth={140}
        />
        <Dropdown
          value={month}
          onChange={setMonth}
          options={MONTHS}
          minWidth={120}
        />
        <Dropdown
          value={year}
          onChange={setYear}
          options={YEARS}
          minWidth={90}
        />
      </div>
    </div>
  );
}
