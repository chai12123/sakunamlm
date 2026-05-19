import React from 'react';

interface Props {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (value: number) => void;
}

export function SliderInput({ label, value, min, max, step, unit, onChange }: Props) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-end mb-2">
        <label className="text-sm md:text-base font-medium text-navy-900">{label}</label>
        <span className="text-sm md:text-base font-bold text-navy-900 bg-gold-400/20 px-3 py-1 rounded-full">
          {value} {unit}
        </span>
      </div>
      <div className="relative w-full h-2 rounded-full bg-gray-200">
        <div 
          className="absolute h-full rounded-full bg-gold-500"
          style={{ width: `${percentage}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute top-0 w-full h-2 opacity-0 cursor-pointer"
          aria-label={label}
        />
        {/* Custom thumb wrapper for visuals */}
        <div 
          className="absolute top-1/2 -mt-3 -ml-3 w-6 h-6 rounded-full bg-white border-4 border-gold-500 shadow pointer-events-none transition-transform"
          style={{ left: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
