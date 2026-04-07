import React from "react";

type LogoProps = {
  size?: number; // height of the logo image
  text?: boolean; // show or hide "Waste Driver" text
};

export function Logo({ size = 40, text = true }: LogoProps) {
  return (
    <div className="inline-flex items-center gap-2">
      <img
        src="/WasteDriverLogo.png"
        alt="Waste Driver Logo"
        style={{ height: size, width: size }}
      />

      {text && (
        <span className="text-lg font-semibold text-slate-900">
          Waste Driver
        </span>
      )}
    </div>
  );
}