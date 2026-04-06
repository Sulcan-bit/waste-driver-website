"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

type City = {
  name: string;
  x: number;
  y: number;
  r: number;
  hq?: boolean;
  labelX: number;
  labelY: number;
  labelSize: number;
};

const cities: City[] = [
  { name: "Vancouver", x: 190, y: 290, r: 5, labelX: 200, labelY: 285, labelSize: 10 },
  { name: "Kelowna", x: 220, y: 270, r: 4, labelX: 230, labelY: 265, labelSize: 9 },
  { name: "Edmonton", x: 310, y: 240, r: 4, labelX: 320, labelY: 235, labelSize: 9 },
  { name: "Calgary", x: 320, y: 270, r: 6, hq: true, labelX: 332, labelY: 268, labelSize: 10 },

  // ✅ FIXED Saskatoon line
  { name: "Saskatoon", x: 380, y: 250, r: 4, labelX: 390, labelY: 245, labelSize: 9 },

  { name: "Regina", x: 390, y: 270, r: 4, labelX: 400, labelY: 265, labelSize: 9 },
  { name: "Winnipeg", x: 440, y: 260, r: 4, labelX: 450, labelY: 255, labelSize: 9 },
  { name: "Toronto", x: 560, y: 270, r: 4, labelX: 570, labelY: 265, labelSize: 9 },
  { name: "Hamilton", x: 550, y: 285, r: 3.5, labelX: 560, labelY: 290, labelSize: 8 },
  { name: "Ottawa", x: 590, y: 250, r: 4, labelX: 600, labelY: 245, labelSize: 9 },
  { name: "Montreal", x: 620, y: 250, r: 4, labelX: 630, labelY: 245, labelSize: 9 },
  { name: "Quebec City", x: 640, y: 235, r: 4, labelX: 650, labelY: 230, labelSize: 9 },
];

export function CanadaMap() {
  const [activeCity, setActiveCity] = useState<City | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const mapRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close tooltip when tapping outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent | TouchEvent) {
      if (mapRef.current && !mapRef.current.contains(e.target as Node)) {
        setActiveCity(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // NEW: Handle clicking a city
  function handleCityClick(city: City) {
    const encoded = encodeURIComponent(city.name.replace("(HQ)", "").trim());
    router.push(`/request?city=${encoded}`);
  }

  return (
    <div
      ref={mapRef}
      className="relative w-full rounded-3xl bg-slate-900 px-6 py-6 text-white shadow-lg"
    >
      <h3 className="text-lg font-semibold mb-2">Canada Network Map</h3>
      <p className="text-sm text-slate-300 mb-4">
        Calgary (HQ) and major Canadian cities served by Waste Driver.
      </p>

      {/* Tooltip */}
      {activeCity && (
        <div
          className="pointer-events-none fixed z-50 rounded-md bg-slate-800 px-4 py-2 text-sm text-white shadow-lg"
          style={{
            top: tooltipPos.y + 12,
            left: tooltipPos.x + 12,
          }}
        >
          <p className="font-semibold">{activeCity.name}</p>
          <p className="text-slate-300">12 drivers available</p>

          {/* NEW: Clickable request link */}
          <div className="pointer-events-auto mt-1">
            <button
              onClick={() => handleCityClick(activeCity)}
              className="text-emerald-400 underline hover:text-emerald-300"
            >
              Request Pickup in {activeCity.name}
            </button>
          </div>
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

          {/* Canada outline */}
          <path
            d="M80 260 L140 190 L210 150 L290 120 L360 110 L430 120 L500 140 L560 180 L610 220 L650 270 L670 320 L640 360 L560 380 L470 390 L380 385 L300 370 L230 340 L170 310 Z"
            fill="#0f172a"
            stroke="#1f2937"
            strokeWidth="2"
          />

          {/* Province-ish separators */}
          <path d="M230 340 L240 260 L250 210" stroke="#1e293b" strokeWidth="1" />
          <path d="M320 360 L330 280 L340 220" stroke="#1e293b" strokeWidth="1" />
          <path d="M410 370 L420 290 L430 230" stroke="#1e293b" strokeWidth="1" />
          <path d="M500 360 L510 290 L520 240" stroke="#1e293b" strokeWidth="1" />

          {/* City markers */}
          {cities.map((city) => (
            <g
              key={city.name}
              onMouseMove={(e) => {
                setTooltipPos({ x: e.clientX, y: e.clientY });
              }}
              onMouseEnter={(e) => {
                setActiveCity(city);
                setTooltipPos({ x: e.clientX, y: e.clientY });
              }}
              onMouseLeave={() => setActiveCity(null)}
              onTouchStart={(e) => {
                const touch = e.touches[0];
                setActiveCity(city);
                setTooltipPos({ x: touch.clientX, y: touch.clientY });
              }}
              onClick={() => handleCityClick(city)} // NEW CLICK HANDLER
              style={{ cursor: "pointer" }}
            >
              <circle cx={city.x} cy={city.y} r={18} fill="transparent" />

              <circle
                cx={city.x}
                cy={city.y}
                r={city.r}
                fill="#22c55e"
                stroke={city.hq ? "#fbbf24" : "none"}
                strokeWidth={city.hq ? 2 : 0}
                className="transition-transform duration-200"
                style={{
                  transformOrigin: `${city.x}px ${city.y}px`,
                  transform:
                    activeCity?.name === city.name ? "scale(1.35)" : "scale(1)",
                }}
              />

              <text
                x={city.labelX}
                y={city.labelY}
                fontSize={city.labelSize}
                fill={city.hq ? "#fbbf24" : "#e5e7eb"}
                fontWeight={city.hq ? "bold" : "normal"}
              >
                {city.name}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}