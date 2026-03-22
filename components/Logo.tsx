// components/Logo.tsx
import React from "react";

export function Logo() {
  return (
    <div className="inline-flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600">
        <span className="text-lg font-bold text-white">WD</span>
      </div>
      <span className="text-lg font-semibold text-slate-900">
        Waste Driver
      </span>
    </div>
  );
}