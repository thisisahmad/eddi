import React from "react";

export default function ScoreMeter({ score }) {
  return (
    <div className="score-meter">
      <svg className="meter-svg" viewBox="0 0 160 90">
        <path d="M 15 75 A 65 65 0 0 1 145 75" fill="none" stroke="#e5e7eb" strokeWidth="8" strokeLinecap="round" />
        <path
          className="meter-progress-path"
          d={`M 15 75 A 65 65 0 0 1 ${15 + (130 * score) / 100} ${75 - Math.sin((score / 100) * Math.PI) * 65}`}
          fill="none"
          stroke="url(#meterGradient)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="meterGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
      </svg>
      <div className="meter-text">{score}%</div>
    </div>
  );
} 