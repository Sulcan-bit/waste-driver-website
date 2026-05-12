// components/Logo.tsx
import React from "react";

type LogoProps = {
  size?: number;
  text?: boolean;
  spin?: boolean;
};

export function Logo({ size = 40, text = true, spin = true }: LogoProps) {
  return (
    <div className="inline-flex items-center gap-2">
      {/* Tire only spins */}
      <div className={spin ? "transition-transform duration-700 group-hover:rotate-[360deg]" : ""}>
        <img
          src="/WasteDriverLogo.png"
          alt="Waste Driver Logo"
          style={{ height: size, width: size }}
        />
      </div>

      {text && (
        <span className="text-lg font-semibold text-slate-900">
          Waste Driver
        </span>
      )}
    </div>
  );
}

