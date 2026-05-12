// components/Logo.tsx
import React from "react";

type LogoProps = {
  size?: number;
  text?: boolean;
  spin?: boolean; // enable hover spin
};

export function Logo({ size = 40, text = true, spin = true }: LogoProps) {
  return (
    <div className="inline-flex items-center gap-2">
      <img
        src="/WasteDriverLogo.png"
        alt="Waste Driver Logo"
        style={{ height: size, width: size }}
        className={spin ? "transition-transform duration-700 hover:rotate-[360deg]" : ""}
      />

      {text && (
        <span className="text-lg font-semibold text-slate-900">
          Waste Driver
        </span>
      )}
    </div>
  );
}
