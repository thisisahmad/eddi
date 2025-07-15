"use client"

import { useState, useEffect } from "react"
import "./CompliancePage.css"
import ScoreSection from './ScoreSection';

export default function CompliancePage() {
  const [currentScore, setCurrentScore] = useState(0)
  const [targetScore] = useState(62)
  const [expandedSections, setExpandedSections] = useState({
    "hardware-inventory": true,
    "software-inventory": true,
  })

  useEffect(() => {
    const timer = setTimeout(() => setCurrentScore(targetScore), 500)
    return () => clearTimeout(timer)
  }, [targetScore])

  const toggleSection = (id) => {
    setExpandedSections(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const controlsData = [
    {
      id: "hardware-inventory",
      name: "1. Hardware Inventory",
      subItems: [
        { description: "Establish and Maintain Detailed Enterprise Asset Inventory", status: "75%", legalRisk: "Yes" },
        { description: "Address Unauthorized Assets", status: "12%", legalRisk: "No" },
      ],
    },
    {
      id: "software-inventory",
      name: "2. Software Inventory",
      subItems: [
        { description: "Establish and Maintain a Software Inventory", status: "75%", legalRisk: "Yes" },
        { description: "Ensure Authorized Software is Currently Supported", status: "12%", legalRisk: "No" },
        { description: "Address Unauthorized Software", status: "12%", legalRisk: "No" },
      ],
    },
  ]

  const additionalControls = Array.from({ length: 14 }, (_, i) => {
    const name = [
      "Data Management",
      "Secure Configuration",
      "Inventory of Accounts",
      "Access Grants",
      "Vulnerability Management",
      "Audit Log Management",
      "Email and Web Browser",
      "Malware Defense",
      "Data Recovery",
      "Network Infrastructure",
      "Security Awareness Training",
      "Service Provider",
      "Application Software Security",
      "Incident Response"
    ][i]
    return {
      id: `control-${i + 3}`,
      name: `${i + 3}. ${name}`
    }
  })

  return (
    <div className="compliance-page-container">
      <div className="compliance-grid">
        <div className="compliance-left-column">
          <div className="main-content-card">
            <div className="content-header-with-meter">
              <div className="header-left">
                <ScoreSection currentScore={currentScore} />
              </div>
              <div className="table-header-compact">
                <div className="header-cell-compact control-name-header">Control Name</div>
                <div className="header-cell-compact status-header">Status</div>
                <div className="header-cell-compact legal-risk-header">Legal risk</div>
              </div>
            </div>
            <div className="controls-section-compact">
              {controlsData.map(control => (
                <div key={control.id} className="control-group-compact">
                  <div className="control-main-row-compact">
                    <div className="control-name-cell-compact">
                      <button
                        className="expand-button-compact"
                        onClick={() => toggleSection(control.id)}
                        aria-expanded={expandedSections[control.id]}
                      >
                        {expandedSections[control.id] ? "−" : "+"}
                      </button>
                      <span className="control-title-compact">{control.name}</span>
                    </div>
                    <div className="status-cell-compact" />
                    <div className="legal-risk-cell-compact" />
                  </div>
                  {expandedSections[control.id] && (
                    <div className="sub-items-compact">
                      {control.subItems.map((subItem, index) => (
                        <div key={index} className="sub-item-row-compact">
                          <div className="control-name-cell-compact sub-item-name-compact">{subItem.description}</div>
                          <div className="status-cell-compact">
                            <span className="status-badge-compact">{subItem.status}</span>
                          </div>
                          <div className="legal-risk-cell-compact">
                            <span className={`risk-badge-compact ${subItem.legalRisk.toLowerCase()}`}>{subItem.legalRisk}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="additional-controls-compact">
                {additionalControls.map((control, index) => (
                  <div key={index} className="additional-control-row-compact">
                    <div className="control-name-cell-compact">
                    <button
                        className="expand-button-compact"
                        style={{visibility:"hidden"}}
                        onClick={() => toggleSection(control.id)}
                        aria-expanded={expandedSections[control.id]}
                      >
                        {expandedSections[control.id] ? "−" : "+"}
                      </button>
                      <span className="expand-button-compact-placeholder"></span>
                      <span className="control-title-compact">{control.name}</span>
                    </div>
                    <div className="status-cell-compact" />
                    <div className="legal-risk-cell-compact" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}