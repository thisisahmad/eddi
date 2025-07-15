import React from "react";
import "./ScoreSection.css";

export default function ScoreSection({ currentScore }) {
  const radius = 65;
  const arcLength = Math.PI * radius; // Half-circle length

  const strokeDasharray = arcLength;
  const strokeDashoffset = arcLength * (1 - currentScore / 100);

  return (
    <div className="reports-score-card">
      <div className="score-section">
        <h2 className="compliance-title">Safe Harbor Compliance</h2>
        <div className="score-meter-container">
          <div className="score-meter">
            <svg className="meter-svg" viewBox="0 0 160 90">
              <defs>
                <linearGradient id="meterGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>

              {/* Base arc (light gray background) */}
              <path
                d="M 15 75 A 65 65 0 0 1 145 75"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="8"
                strokeLinecap="round"
              />

              {/* Progress arc */}
              <path
                d="M 15 75 A 65 65 0 0 1 145 75"
                fill="none"
                stroke="url(#meterGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                style={{ transition: "stroke-dashoffset 1s ease-out" }}
              />
            </svg>

            <div className="meter-text">{currentScore}%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
