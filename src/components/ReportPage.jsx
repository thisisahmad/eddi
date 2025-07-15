"use client" // This component needs client-side interactivity

import { useState, useEffect } from "react"
import "./ReportPage.css" // Import the CSS file
import ScoreSection from "./ScoreSection";

export default function ReportPage() {
  const [currentScore, setCurrentScore] = useState(0)
  const [targetScore] = useState(62)
  const [expandedReports, setExpandedReports] = useState({})

  // Animate score meter on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScore(targetScore)
    }, 500)
    return () => clearTimeout(timer)
  }, [targetScore])

  const toggleReport = (reportId) => {
    setExpandedReports((prev) => ({
      ...prev,
      [reportId]: !prev[reportId],
    }))
  }

  const downloadReport = (reportName, reportType) => {
    // Simulate download functionality
    const element = document.createElement("a")
    const file = new Blob([generateReportContent(reportName, reportType)], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = `${reportName.replace(/\s+/g, "_")}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const generateReportContent = (reportName, reportType) => {
    return `${reportName}
Generated on: ${new Date().toLocaleDateString()}
Report Type: ${reportType}

DETAILED COMPLIANCE CONTROL REPORT – SAFE HARBOR (NEVADA NRS 603A)
================================================================
Company Name: [Company Name]
Report Date: ${new Date().toLocaleDateString()}
Prepared By: EDDI Governance Advisor

EXECUTIVE SUMMARY
================
Overall Compliance: 62%
Legal Protection Status: At Risk (Safe Harbor Not Yet Met)
Total Controls: 18
At Risk: 8
Secured: 7
High Risk: 3

DETAILED COMPLIANCE CONTROLS
===========================
Control ID | Control Description | Status | Owner | Due Date | Evidence Link/Notes
-----------|-------------------|--------|-------|----------|-------------------
1.1 | Asset Inventory Maintained | At Risk | J. Smith | Aug 1, 2025 | No centralized asset tracking
1.3 | Software Inventory Updated | Secured | L. Chen | Completed | Evidence stored (See Link)
2.1 | Unauthorized Devices Detected | At Risk | T. Carter | Aug 15, 2025 | Policy review pending
4.3 | Session Locking Configured | Secured | R. Scott | Completed | Screenshots uploaded
5.3 | Dormant Accounts Disabled | Secured | A. Martin | Completed | Quarterly review logged
7.2 | Remediation Process Defined | At Risk | J. Smith | Sept 1, 2025 | Needs approval from management
8.1 | Audit Log Management | At Risk | S. Miller | Aug 1, 2025 | Audit logs incomplete

This report was generated automatically by the EDDI Governance System.
`
  }

  // Detailed compliance controls data from the screenshot
  const detailedComplianceControls = [
    {
      controlId: "1.1",
      description: "Asset Inventory Maintained",
      status: "At Risk",
      owner: "J. Smith",
      dueDate: "Aug 1, 2025",
      evidence: "No centralized asset tracking",
    },
    {
      controlId: "1.3",
      description: "Software Inventory Updated",
      status: "Secured",
      owner: "L. Chen",
      dueDate: "Completed",
      evidence: "Evidence stored (See Link)",
    },
    {
      controlId: "2.1",
      description: "Unauthorized Devices Detected",
      status: "At Risk",
      owner: "T. Carter",
      dueDate: "Aug 15, 2025",
      evidence: "Policy review pending",
    },
    {
      controlId: "4.3",
      description: "Session Locking Configured",
      status: "Secured",
      owner: "R. Scott",
      dueDate: "Completed",
      evidence: "Screenshots uploaded",
    },
    {
      controlId: "5.3",
      description: "Dormant Accounts Disabled",
      status: "Secured",
      owner: "A. Martin",
      dueDate: "Completed",
      evidence: "Quarterly review logged",
    },
    {
      controlId: "7.2",
      description: "Remediation Process Defined",
      status: "At Risk",
      owner: "J. Smith",
      dueDate: "Sept 1, 2025",
      evidence: "Needs approval from management",
    },
    {
      controlId: "8.1",
      description: "Audit Log Management",
      status: "At Risk",
      owner: "S. Miller",
      dueDate: "Aug 1, 2025",
      evidence: "Audit logs incomplete",
    },
  ]

  const reports = [
    {
      id: "detailed-control",
      name: "Detailed Control Report Template",
      type: "Control Analysis",
      description: "Comprehensive analysis of all security controls with implementation status and recommendations.",
    },
    {
      id: "risk-compliance",
      name: "Risk & Compliance Report (Board Ready)",
      type: "Executive Summary",
      description: "High-level executive summary designed for board presentations and stakeholder communications.",
    },
    {
      id: "audit-evidence",
      name: "Detailed Control Report (Audit Evidence)",
      type: "Audit Documentation",
      description: "Detailed documentation and evidence collection for audit compliance and regulatory requirements.",
    },
    {
      id: "historical-trend",
      name: "Historical Trend / Progress Report",
      type: "Trend Analysis",
      description: "Historical analysis showing compliance progress over time with trend predictions.",
    },
  ]

  return (
    <div className="reports-page-container">
      <div className="reports-grid">
        {/* Left Column - Reports Content */}
        <div className="reports-left-column">
          {/* Score Section */}
          <ScoreSection currentScore={currentScore} />

          {/* Reports List */}
          <div className="reports-list-card">
            <h3 className="reports-title">Available Reports</h3>
            <div className="reports-list">
              {reports.map((report) => (
                <div key={report.id} className="report-item">
                  <div className="report-header" onClick={() => toggleReport(report.id)}>
                    <div className="report-info">
                      <h4 className="report-name">{report.name}</h4>
                      <span className="report-type">{report.type}</span>
                    </div>
                    <div className="report-actions">
                      <button className="expand-btn">{expandedReports[report.id] ? "−" : "+"}</button>
                    </div>
                  </div>

                  {expandedReports[report.id] && (
                    <div className="report-content">
                      <div className="report-description">
                        <p>{report.description}</p>
                      </div>

                      {/* Sample Report Content */}
                      <div className="report-preview">
                        <div className="preview-section">
                          {report.id === "detailed-control" ? (
                            // Detailed Control Report with screenshot data
                            <>
                              <div className="report-header-info">
                                <h4 className="report-main-title">
                                  Detailed Compliance Control Report – Safe Harbor (Nevada NRS 603A)
                                </h4>
                                <div className="report-meta">
                                  <div className="meta-item">
                                    <strong>Company Name:</strong> [Company Name]
                                  </div>
                                  <div className="meta-item">
                                    <strong>Report Date:</strong> {new Date().toLocaleDateString()}
                                  </div>
                                  <div className="meta-item">
                                    <strong>Prepared By:</strong> EDDI Governance Advisor
                                  </div>
                                </div>
                              </div>

                              <div className="executive-summary">
                                <h5>Executive Summary</h5>
                                <div className="summary-grid">
                                  <div className="summary-item">
                                    <span className="summary-label">Overall Compliance:</span>
                                    <span className="summary-value">62%</span>
                                  </div>
                                  <div className="summary-item">
                                    <span className="summary-label">Legal Protection Status:</span>
                                    <span className="summary-value at-risk">✗ At Risk (Safe Harbor Not Yet Met)</span>
                                  </div>
                                  <div className="summary-item">
                                    <span className="summary-label">Total Controls:</span>
                                    <span className="summary-value">18</span>
                                  </div>
                                  <div className="summary-item">
                                    <span className="summary-label">At Risk:</span>
                                    <span className="summary-value">8</span>
                                  </div>
                                  <div className="summary-item">
                                    <span className="summary-label">Secured:</span>
                                    <span className="summary-value">7</span>
                                  </div>
                                  <div className="summary-item">
                                    <span className="summary-label">High Risk:</span>
                                    <span className="summary-value">3</span>
                                  </div>
                                </div>
                              </div>

                              {/* Detailed Compliance Controls Table */}
                              <div className="detailed-controls-section">
                                <h5>Detailed Compliance Controls Table:</h5>
                                <div className="controls-table-container">
                                  <table className="detailed-controls-table">
                                    <thead>
                                      <tr>
                                        <th>Control ID</th>
                                        <th>Control Description</th>
                                        <th>Status</th>
                                        <th>Owner</th>
                                        <th>Due Date</th>
                                        <th>Evidence Link / Notes</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {detailedComplianceControls.map((control, index) => (
                                        <tr key={index}>
                                          <td className="control-id">{control.controlId}</td>
                                          <td className="control-desc">{control.description}</td>
                                          <td>
                                            <span
                                              className={`control-status ${control.status.toLowerCase().replace(" ", "-")}`}
                                            >
                                              {control.status}
                                            </span>
                                          </td>
                                          <td className="control-owner">{control.owner}</td>
                                          <td className="control-date">{control.dueDate}</td>
                                          <td className="control-evidence">{control.evidence}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </>
                          ) : (
                            // Other reports keep their existing content
                            <>
                              <h5>Report Preview</h5>

                              {/* Sample Chart */}
                              <div className="chart-container">
                                <div className="chart-title">Compliance Status Overview</div>
                                <div className="bar-chart">
                                  <div className="chart-bar">
                                    <div className="bar-label">Hardware Inventory</div>
                                    <div className="bar-container">
                                      <div className="bar-fill" style={{ width: "75%" }}></div>
                                      <span className="bar-value">75%</span>
                                    </div>
                                  </div>
                                  <div className="chart-bar">
                                    <div className="bar-label">Software Inventory</div>
                                    <div className="bar-container">
                                      <div className="bar-fill" style={{ width: "75%" }}></div>
                                      <span className="bar-value">75%</span>
                                    </div>
                                  </div>
                                  <div className="chart-bar">
                                    <div className="bar-label">Data Management</div>
                                    <div className="bar-container">
                                      <div className="bar-fill green" style={{ width: "100%" }}></div>
                                      <span className="bar-value">100%</span>
                                    </div>
                                  </div>
                                  <div className="chart-bar">
                                    <div className="bar-label">Access Controls</div>
                                    <div className="bar-container">
                                      <div className="bar-fill red" style={{ width: "45%" }}></div>
                                      <span className="bar-value">45%</span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Sample Pie Chart */}
                              <div className="chart-container">
                                <div className="chart-title">Risk Distribution</div>
                                <div className="pie-chart-container">
                                  <svg className="pie-chart" viewBox="0 0 200 200">
                                    {/* High Risk - Red */}
                                    <path
                                      d="M 100 100 L 100 20 A 80 80 0 0 1 156.57 56.57 Z"
                                      fill="#ef4444"
                                      stroke="white"
                                      strokeWidth="2"
                                    />
                                    {/* Medium Risk - Yellow */}
                                    <path
                                      d="M 100 100 L 156.57 56.57 A 80 80 0 0 1 156.57 143.43 Z"
                                      fill="#f59e0b"
                                      stroke="white"
                                      strokeWidth="2"
                                    />
                                    {/* Low Risk - Green */}
                                    <path
                                      d="M 100 100 L 156.57 143.43 A 80 80 0 1 1 100 20 Z"
                                      fill="#10b981"
                                      stroke="white"
                                      strokeWidth="2"
                                    />
                                  </svg>
                                  <div className="pie-legend">
                                    <div className="legend-item">
                                      <div className="legend-color red"></div>
                                      <span>High Risk (25%)</span>
                                    </div>
                                    <div className="legend-item">
                                      <div className="legend-color yellow"></div>
                                      <span>Medium Risk (35%)</span>
                                    </div>
                                    <div className="legend-item">
                                      <div className="legend-color green"></div>
                                      <span>Low Risk (40%)</span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Sample Data Table */}
                              <div className="data-table-container">
                                <div className="chart-title">Control Status Summary</div>
                                <table className="data-table">
                                  <thead>
                                    <tr>
                                      <th>Control Category</th>
                                      <th>Status</th>
                                      <th>Risk Level</th>
                                      <th>Last Updated</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Hardware Inventory</td>
                                      <td>
                                        <span className="status-badge in-progress">In Progress</span>
                                      </td>
                                      <td>
                                        <span className="risk-badge medium">Medium</span>
                                      </td>
                                      <td>2024-01-15</td>
                                    </tr>
                                    <tr>
                                      <td>Software Inventory</td>
                                      <td>
                                        <span className="status-badge in-progress">In Progress</span>
                                      </td>
                                      <td>
                                        <span className="risk-badge medium">Medium</span>
                                      </td>
                                      <td>2024-01-14</td>
                                    </tr>
                                    <tr>
                                      <td>Data Management</td>
                                      <td>
                                        <span className="status-badge complete">Complete</span>
                                      </td>
                                      <td>
                                        <span className="risk-badge low">Low</span>
                                      </td>
                                      <td>2024-01-10</td>
                                    </tr>
                                    <tr>
                                      <td>Access Controls</td>
                                      <td>
                                        <span className="status-badge pending">Pending</span>
                                      </td>
                                      <td>
                                        <span className="risk-badge high">High</span>
                                      </td>
                                      <td>2024-01-08</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </>
                          )}

                          <div className="download-section">
                            <button className="download-btn" onClick={() => downloadReport(report.name, report.type)}>
                              Download Report
                            </button>
                            <span className="download-info">PDF, Excel, and CSV formats available</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}