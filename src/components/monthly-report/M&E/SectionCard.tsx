"use client";

import { useEffect, useRef, useState } from "react";
import {
  Cable,
  FolderInput,
  FolderOutput,
  BadgeCheck,
  Monitor,
  Wheat,
  HardHat,
  Plane,
  Ticket,
  Briefcase,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const GROUPS = [
  { label: "Female", pct: 45, count: 1989, color: "#7c3aed", fill: "#8b5cf6" },
  { label: "Youth", pct: 52, count: 2302, color: "#1d4ed8", fill: "#3b82f6" },
  { label: "Disabled", pct: 6, count: 266, color: "#0e7490", fill: "#06b6d4" },
];

const FOOTER_STATS = [
  { label: "Graduates", target: 3420 },
  { label: "Placed", target: 2462 },
  { label: "MSME", target: 1820 },
];

const inputs = [
  { value: "5,200,000", sub: "Total Budget Disbursed" },
  { value: "12,000,000", sub: "SDF Co-Financing" },
  { value: "1,800,000", sub: "Employer Contributions" },
];

const courseBySector = [
  { label: "Agriculture", value: 40, color: "#16a34a", icon: Wheat },
  { label: "ICT / Digital", value: 30, color: "#06b6d4", icon: Monitor },
  { label: "Construction", value: 30, color: "#f59e0b", icon: HardHat },
  { label: "Tourism", value: 20, color: "#ec4899", icon: Plane },
  { label: "Skills Voucher", value: 50, color: "#006cb7", icon: Ticket },
  { label: "SMP", value: 35, color: "#7c3aed", icon: Briefcase },
];

const OUTPUT_ROWS = [
  { label: "Completed", value: "3,960" },
  { label: "Graduated", value: "3,420" },
];

const bars = [
  { label: "Female:", pct: 45, color: "#3E0570" },
  { label: "Youth:", pct: 52, color: "#6F09C8" },
  { label: "Disabled:", pct: 20, color: "#9527F5" },
];

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useCountUp(target: number, duration: number, trigger: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setValue(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, trigger]);
  return value;
}

// ─── Primitives ──────────────────────────────────────────────────────────────

function AnimatedNumber({
  target,
  duration,
  trigger,
}: {
  target: number;
  duration: number;
  trigger: boolean;
}) {
  const value = useCountUp(target, duration, trigger);
  return <>{value.toLocaleString()}</>;
}

function BarFill({
  pct,
  color,
  trigger,
}: {
  pct: number;
  color: string;
  trigger: boolean;
}) {
  return (
    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full"
        style={{
          width: trigger ? `${pct}%` : "0%",
          background: color,
          transition: "width 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </div>
  );
}

function BarRow({
  label,
  value,
  color,
  icon: Icon,
}: {
  label: string;
  value: number;
  color: string;
  icon: React.ElementType;
}) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
        style={{ background: `${color}15` }}
      >
        <Icon size={16} style={{ color }} />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium mb-1 leading-none text-slate-700">
          {label}
          <span className="text-sm ml-2" style={{ color }}>
            {value}%
          </span>
        </p>
        <div
          className="h-2 rounded-full overflow-hidden"
          style={{ background: `${color}25` }}
        >
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{ width: `${value}%`, background: color }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Panel: Inputs ────────────────────────────────────────────────────────────

function InputsPanel() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: "#006cb715" }}
        >
          <FolderInput size={20} className="text-[#006cb7]" />
        </div>
        <h3 className="font-bold text-2xl text-[#006cb7]">Inputs</h3>
      </div>
      <div className="space-y-3">
        {inputs.map((c, i) => (
          <div
            key={i}
            className="flex gap-3 p-3 rounded-xl bg-[#006cb715] border border-[#006cb715]"
          >
            <div className="w-2 h-2 rounded-full bg-[#006cb7] mt-2 shrink-0" />
            <div>
              <p className="text-gray-800 text-2xl font-semibold leading-snug">
                ${c.value}
              </p>
              <p className="text-gray-400 text-sm mt-1">{c.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Panel: Activities ────────────────────────────────────────────────────────

function ActivitiesPanel() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: "#f59e0b15" }}
        >
          <Cable size={20} className="text-amber-500" />
        </div>
        <h3 className="font-bold text-2xl text-amber-600">Activities</h3>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          Course By Sector
        </p>
      </div>
      <div className="space-y-4 text-[5px] font-semibold uppercase tracking-[0.2em] text-slate-400">
        {courseBySector.map((item) => (
          <BarRow key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}

// ─── Panel: Output ────────────────────────────────────────────────────────────

function OutputPanel() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: "#8b5cf615" }}
        >
          <FolderOutput size={20} className="text-violet-500" />
        </div>
        <h3 className="font-bold text-2xl text-violet-600">Output</h3>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <h1 className="text-[15px] font-semibold uppercase tracking-[0.2em] text-slate-400 ">
          Enrolled
        </h1>
        <div className="flex items-center gap-4 px-3 py-1 bg-violet-100 border border-violet-300 rounded-lg">
          <span className="text-[15px] font-semibold uppercase tracking-[0.2em] text-gray-800">
            4,420
          </span>
          <span className="text-[15px] font-semibold uppercase tracking-[0.2em]0 text-violet-600">
            41.02%
          </span>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-4">
        {OUTPUT_ROWS.map((o, i) => (
          <div
            key={o.label}
            className={`flex items-baseline ${i < OUTPUT_ROWS.length - 1 ? "border-b border-gray-200" : ""}`}
          >
            <span className="w-32 shtink-0   px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] 00 text-gray-500 border-r border-gray-200">
              {o.label}
            </span>
            <span className="px-4 py-3 text-[15px] font-semibold uppercase tracking-[0.2em] text-violet-600 font-mono tabular-nums">
              {o.value}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-3 flex flex-col gap-5">
        {bars.map((b) => (
          <div key={b.label} className="flex items-center gap-2.5">
            <span className="w-16 shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em]  text-gray-500">
              {b.label}
            </span>
            <span className="w-9 text-[12px] font-semibold uppercase tracking-[0.2em] text-violet-600">
              {b.pct}%
            </span>
            <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-violet-500 rounded-full transition-all duration-700"
                style={{ width: `${b.pct}%`, backgroundColor: b.color }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-slate-400 mt-6">
        MSME Workers Reached 1,820
      </p>
    </div>
  );
}

// ─── Panel: Outcomes ──────────────────────────────────────────────────────────

function OutcomesPanel() {
  const [triggered, setTriggered] = useState(false);
  const [livePulse, setLivePulse] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTriggered(true);
      },
      { threshold: 0.3 },
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setLivePulse((p) => !p), 900);
    return () => clearInterval(interval);
  }, []);

  const placementValue = useCountUp(72, 1200, triggered);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
      style={{
        boxShadow:
          "0 4px 6px -1px rgba(0,0,0,.04), 0 2px 4px -1px rgba(0,0,0,.03)",
      }}
    >
      {/* Header */}
      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: "#10b98115" }}
          >
            <BadgeCheck size={20} className="text-emerald-500" />
          </div>
          <h3 className="font-bold text-2xl text-emerald-500">Outcomes</h3>
        </div>
        {/* Body */}
        <div className="p-2">
          <p className="text-[15px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">
            Job placement rate
          </p>

          <div className="flex items-baseline gap-2 mb-2.5">
            <span className="text-[36px] font-bold text-slate-900 leading-none font-mono tabular-nums tracking-tight">
              {placementValue}
            </span>
            <span className="text-base font-semibold text-slate-400">%</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-green-600 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full ml-1">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path
                  d="M4 6.5V1.5M1.5 4L4 1.5 6.5 4"
                  stroke="#16a34a"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Contribution 78%
            </span>
          </div>

          {/* Main bar */}
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden relative mb-1">
            <div
              className="h-full rounded-full relative"
              style={{
                width: triggered ? "72%" : "0%",
                background: "linear-gradient(90deg, #16a34a, #22c55e)",
                transition: "width 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <span
                className="absolute right-0 top-0 bottom-0 w-0.5 rounded-full"
                style={{ background: "#16a34a", boxShadow: "0 0 6px #22c55e" }}
              />
            </div>
          </div>
          <div className="flex justify-between mb-4">
            {["0%", "25%", "50%", "75%", "100%"].map((l) => (
              <span key={l} className="text-[9px] text-slate-300 font-medium">
                {l}
              </span>
            ))}
          </div>

          <div className="border-t border-slate-100 mb-3.5" />

          <p className="text-[10px] font-light uppercase tracking-[0.2em] text-slate-400 mb-3">
            Breakdown by group
          </p>

          <div className="flex flex-col gap-3">
            {GROUPS.map((g) => (
              <div key={g.label} className="flex items-center gap-2.5">
                <span
                  className="text-[11px] font-semibold text-white px-2.5 py-1 rounded-md min-w-16 text-center shrink-0"
                  style={{ background: g.color }}
                >
                  {g.label}
                </span>
                <div className="flex-1 flex flex-col gap-1">
                  <BarFill pct={g.pct} color={g.fill} trigger={triggered} />
                  <div className="flex justify-between items-center">
                    <span
                      className="text-[11px] font-bold font-mono tabular-nums"
                      style={{ color: g.color }}
                    >
                      {g.pct}%
                    </span>
                    <span className="text-[10px] text-slate-300">
                      ~{g.count.toLocaleString()} trainees
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Footer */}
        <div className="px-4 py-3 bg-slate-50 border-t rounded-xl border-slate-100 flex items-center justify-between">
          {FOOTER_STATS.map((s, i) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="text-center">
                <div className="text-[15px] font-bold text-slate-900 font-mono tabular-nums">
                  <AnimatedNumber
                    target={s.target}
                    duration={1400}
                    trigger={triggered}
                  />
                </div>
                <div className="text-[9px] font-medium uppercase tracking-widest text-slate-400 mt-0.5">
                  {s.label}
                </div>
              </div>
              {i < FOOTER_STATS.length - 1 && (
                <div className="w-px h-7 bg-slate-200" />
              )}
            </div>
          ))}
          <div className="flex items-center gap-1.5">
            <div
              className="w-1.5 h-1.5 rounded-full bg-green-400"
              style={{
                opacity: livePulse ? 1 : 0.3,
                transition: "opacity .3s",
              }}
            />
            <span className="text-[10px] text-slate-400">Live</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function SectionCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
      <InputsPanel />
      <ActivitiesPanel />
      <OutputPanel />
      <OutcomesPanel />
    </div>
  );
}
