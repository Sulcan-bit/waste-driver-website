import React from "react";

type LogoProps = {
  size?: number; // controls height of the icon box
  text?: boolean; // allows hiding the "Waste Driver" text when needed
};

export function Logo({ size = 40, text = true }: LogoProps) {
  return (
    <div className="inline-flex items-center gap-2">
      <div
        className="flex items-center justify-center rounded-2xl bg-emerald-600"
        style={{ width: size, height: size }}
      >
        <span className="text-lg font-bold text-white">WD</span>
      </div>

      {text && (
        <span className="text-lg font-semibold text-slate-900">
          Waste Driver
        </span>
      )}
    </div>
  );
}