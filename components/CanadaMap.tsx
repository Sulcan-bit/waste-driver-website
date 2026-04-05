"use client";

import { useState } from "react";

export function CanadaMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleHover = (city: string, evt: React.MouseEvent<SVGCircleElement>) => {
    const rect = (evt.target as SVGCircleElement).getBoundingClientRect();
    setCoords({ x: rect.x + rect.width / 2, y: rect.y });
    setHovered(city);
  };

  const handleLeave = () => setHovered(null);

  return (
    <div className="relative w-full rounded-3xl bg-slate-900 px-6 py-6 text-white shadow-lg">
      <h3 className="text-lg font-semibold mb-2">Canada Network Map</h3>
      <p className="text-sm text-slate-300 mb-4">
        Calgary (HQ) and major Canadian cities served by Waste Driver.
      </p>

      {/* Tooltip */}
      {hovered && (
        <div
          className="pointer-events-none absolute z-50 -translate-x-1/2 -translate-y-3 rounded-md bg-slate-800 px-3 py-1 text-sm text-white shadow-lg"
          style={{ left: coords.x, top: coords.y }}
        >
          {hovered}
        </div>
      )}

      <div className="relative w-full pb-[55%]">
        <svg
          viewBox="0 0 800 450"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label="Map of Canada with major cities and Calgary HQ"
        >
          {/* Background */}
          <rect width="800" height="450" fill="#020617" />

          {/* Canada outline (your original geometry) */}
          <path
            d="M80 260 L140 190 L210 150 L290 120 L360 110 L430 120 L500 140 L560 180 L610 220 L650 270 L670 320 L640 360 L560 380 L470 390 L380 385 L300 370 L230 340 L170 310 Z"
            fill="#0f172a"
            stroke="#1f2937"
            strokeWidth="2"
          />

          {/* Province-ish separators (your original lines) */}
          <path d="M230 340 L240 260 L250 210" stroke="#1e293b" strokeWidth="1" />
          <path d="M320 360 L330 280 L340 220" stroke="#1e293b" strokeWidth="1" />
          <path d="M410 370 L420 290 L430 230" stroke="#1e293b" strokeWidth="1" />
          <path d="M500 360 L510 290 L520 240" stroke="#1e293b" strokeWidth="1" />

          {/* --- CITY MARKERS + LABELS (ALL ORIGINAL) --- */}

          {/* Vancouver */}
          <circle
            cx="190"
            cy="290"
            r="5"
            fill="#22c55e"
            className="cursor-pointer transition-transform hover:scale-125"
            onMouseEnter={(e) => handleHover("Vancouver", e)}
            onMouseLeave={handleLeave}
          />
          <text x="200" y="285" fontSize="10" fill="#e5e7eb">Vancouver</text>

          {/* Kelowna */}
          <circle
            cx="220"
            cy="270"
            r="4"
            fill="#22c55e"
            className="cursor-pointer transition-transform hover:scale-125"
            onMouseEnter={(e) => handleHover("Kelowna", e)}
            onMouseLeave={handleLeave}
          />
          <text x="230" y="265" fontSize="9" fill="#e5e7eb">Kelowna</text>

          {/* Edmonton */}
          <circle
            cx="310"
            cy="240"
            r="4"
            fill="#22c55e"
            className="cursor-pointer transition-transform hover:scale-125"
            onMouseEnter={(e) => handleHover("Edmonton", e)}
            onMouseLeave={handleLeave}
          />
          <text x="320" y="235" fontSize="9" fill="#e5e7eb">Edmonton</text>

          {/* Calgary (HQ) */}
          <circle
            cx="320"
            cy="270"
            r="6"
            fill="#22c55e"
            stroke="#fbbf24"
            strokeWidth="2"
            className="cursor-pointer transition-transform hover:scale-125"
            onMouseEnter={(e) => handleHover("Calgary (HQ)", e)}
            onMouseLeave={handleLeave}
          />
          <text x="332" y="268" fontSize="10" fill="#fbbf24" fontWeight="bold">
            Calgary (HQ)
          </text>

          {/* Saskatoon */}
          <circle
            cx="380"
            cy="250"
            r="4"
            fill="#22c55e"
            className="cursor-pointer transition-transform hover:scale-125"
            onMouseEnter={(e) => handleHover("Saskatoon", e)}
            onMouseLeave={handleLeave}
          />
          <text x="390" y="245" fontSize="9" fill="#e5e7eb">Saskatoon</text>

          {/* Regina */}
          <circle
            cx="390"
            cy="270"
            r="4"
            fill="#22c55e"
            className="cursor-pointer transition-transform hover:scale-125"
            onMouseEnter={(e) => handleHover("Regina", e)}
            onMouseLeave={handleLeave}
          />
          <text x="400" y="265" fontSize="9" fill="#e5e7eb">Regina</text>

          {/* Winnipeg */}
          <circle
            cx="440"
            cy="260"
            r="4"
            fill="#22c55e"
            className="cursor-pointer transition-transform hover:scale-125"
            onMouseEnter={(e) => handleHover("Winnipeg", e)}
            onMouseLeave={handleLeave}
          />
          <text x="450" y="255" fontSize="9" fill="#e5e7eb">Winnipeg</text>

          {/* Toronto */}
          <circle
            cx="560"
            cy="270"
            r="4"
            fill="#22c55e"
            className="cursor-pointer transition-transform hover:scale-125"
            onMouseEnter={(e) => handleHover("Toronto", e)}
            onMouseLeave={handleLeave}
          />
          <text x="570" y="265" fontSize="9" fill="#e5e7eb">Toronto</text>

          {/* Hamilton */}
          <circle
            cx="550"
            cy="285"
            r="3.5"
            fill="#22c55e"
            className="cursor-pointer transition-transform hover:scale-125"
            onMouseEnter={(e) => handleHover("Hamilton", e)}
            onMouseLeave={handleLeave}
          />
          <text x="560" y="290" fontSize="8" fill="#e5e7eb">Hamilton</text>

          {/* Ottawa */}
          <circle
            cx="590"
            cy="250"
            r="4"
            fill="#22c55e"
            className="cursor-pointer transition-transform hover:scale-125"
            onMouseEnter={(e) => handleHover("Ottawa", e)}
            onMouseLeave={handleLeave}
          />
          <text x="600" y="245" fontSize="9" fill="#e5e7eb">Ottawa</text>

          {/* Montreal */}
          <circle
            cx="620"
            cy="250"
            r="4"
            fill="#22c55e"
            className="cursor-pointer transition-transform hover:scale-125"
            onMouseEnter={(e) => handleHover("Montreal", e)}
            onMouseLeave={handleLeave}
          />
          <text x="630" y="245" fontSize="9" fill="#e5e7eb">Montreal</text>

          {/* Quebec City */}
          <circle
            cx="640"
            cy="235"
            r="4"
            fill="#22c55e"
            className="cursor-pointer transition-transform hover:scale-125"
            onMouseEnter={(e) => handleHover("Quebec City", e)}
            onMouseLeave={handleLeave}
          />
          <text x="650" y="230" fontSize="9" fill="#e5e7eb">Quebec City</text>
        </svg>
      </div>
    </div>
  );
}