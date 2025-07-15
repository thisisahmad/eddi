import React from "react";
import "./ScoreSection.css";

export default function ScoreSection({ currentScore }) {
  return (
    <div className="reports-score-card">
      <div className="score-section">
        <h2 className="compliance-title">Safe Harbor Compliance</h2>
        <div className="score-meter-container">
          <div className="score-meter">
            <svg className="meter-svg" viewBox="0 0 160 90">
              <path d="M 15 75 A 65 65 0 0 1 145 75" fill="none" stroke="#e5e7eb" strokeWidth="8" strokeLinecap="round" />
              <path
                d={`M 15 75 A 65 65 0 0 1 ${15 + (130 * currentScore) / 100} ${75 - Math.sin((currentScore / 100) * Math.PI) * 65}`}
                fill="none"
                stroke="url(#meterGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                style={{ transition: "all 1.5s ease-out" }}
              />
              <defs>
                <linearGradient id="meterGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
            <div className="meter-text">{currentScore}%</div>
          </div>
        </div>
      </div>
    </div>
  );
} 