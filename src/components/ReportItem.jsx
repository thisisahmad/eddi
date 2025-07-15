import React from "react";
import "./ReportItem.css";

export default function ReportItem({ report, expanded, onToggle, onDownload, detailedComplianceControls }) {
  return (
    <div className="report-item">
      <div className="report-header" onClick={onToggle}>
        <div className="report-info">
          <h4 className="report-name">{report.name}</h4>
          <span className="report-type">{report.type}</span>
        </div>
        <div className="report-actions">
          <button className="expand-btn">{expanded ? "−" : "+"}</button>
        </div>
      </div>
      {expanded && (
        <div className="report-content">
          <div className="report-description">
            <p>{report.description}</p>
          </div>
          <div className="report-preview">
            <div className="preview-section">
              {report.id === "detailed-control" ? (
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
                                <span className={`control-status ${control.status.toLowerCase().replace(" ", "-")}`}>
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
                        <path d="M 100 100 L 100 20 A 80 80 0 0 1 156.57 56.57 Z" fill="#ef4444" stroke="white" strokeWidth="2" />
                        <path d="M 100 100 L 156.57 56.57 A 80 80 0 0 1 156.57 143.43 Z" fill="#f59e0b" stroke="white" strokeWidth="2" />
                        <path d="M 100 100 L 156.57 143.43 A 80 80 0 1 1 100 20 Z" fill="#10b981" stroke="white" strokeWidth="2" />
                      </svg>
                      <div className="pie-legend">
                        <div className="legend-item"><div className="legend-color red"></div><span>High Risk (25%)</span></div>
                        <div className="legend-item"><div className="legend-color yellow"></div><span>Medium Risk (35%)</span></div>
                        <div className="legend-item"><div className="legend-color green"></div><span>Low Risk (40%)</span></div>
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
            </div>
            <div className="download-section">
              <button className="download-btn" onClick={onDownload}>Download Report</button>
              <span className="download-info">PDF, Excel, and CSV formats available</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 