"use client" // This component needs client-side interactivity

import { useState, useEffect } from "react"
import "./NextStepsPage.css"
import ScoreSection from './ScoreSection';

export default function NextStepsPage() {
  const [currentScore, setCurrentScore] = useState(0)
  const [targetScore] = useState(62)
  const [showAssignModal, setShowAssignModal] = useState(false)
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [selectedControl, setSelectedControl] = useState(null)
  const [selectedAssignee, setSelectedAssignee] = useState(null)
  const [emailContent, setEmailContent] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScore(targetScore)
    }, 500)
    return () => clearTimeout(timer)
  }, [targetScore])

  const assignees = [
    { name: "Bob", title: "COO" },
    { name: "Mark", title: "IT Director" },
    { name: "George", title: "System Admin" },
  ]

  const redControls = [
    { name: "7. Vulnerability Management", status: "75%", businessRisk: "Yes" },
    { name: "1. Establish and Maintain Detailed Enterprise Asset Inventory", status: "12%", businessRisk: "No" },
    { name: "5. Inventory of Accounts", status: "12%", businessRisk: "No" },
    { name: "4. Secure Configuration", status: "75%", businessRisk: "Yes" },
    { name: "6. Access Grants", status: "75%", businessRisk: "Yes" },
  ]

  const yellowControls = [
    { name: "Address Unauthorized Assets", status: "", businessRisk: "" },
    { name: "Software Inventory", status: "", businessRisk: "" },
    { name: "Establish and Maintain a Software Inventory", status: "", businessRisk: "" },
    { name: "Ensure Authorized Software is Currently Supported", status: "", businessRisk: "" },
    { name: "Address Unauthorized Software", status: "", businessRisk: "" },
    { name: "1. Hardware Inventory", status: "", businessRisk: "" },
  ]

  const greenControls = [
    { name: "3. Data Management", status: "", businessRisk: "" },
    { name: "8. Audit Log Management", status: "", businessRisk: "" },
    { name: "16. Application Software Security", status: "", businessRisk: "" },
  ]

  const handleAssignClick = (control) => {
    setSelectedControl(control)
    setShowAssignModal(true)
  }

  const handleAssigneeSelect = (assignee) => {
    setSelectedAssignee(assignee)
    setShowAssignModal(false)
    console.log(`Assigned ${selectedControl.name} to ${assignee.name}`)
  }

  const handleEmailClick = (assignee) => {
    setSelectedAssignee(assignee)
    setEmailContent(
      `Hi ${assignee.name},\n\nYou have been assigned to handle: ${selectedControl?.name}\n\nPlease review and take necessary action.\n\nBest regards,`
    )
    setShowEmailModal(true)
    setShowAssignModal(false)
  }

  const handleSendEmail = () => {
    console.log(`Email sent to ${selectedAssignee.name}:`, emailContent)
    setShowEmailModal(false)
    setEmailContent("")
  }

  return (
    <div className="nextsteps-page-container">
      <div className="nextsteps-grid">
        <div className="nextsteps-left-column">
          <div className="score-financial-card">
            <div className="score-section">
              <ScoreSection currentScore={currentScore} />
            </div>

            <div className="financial-info">
              <div className="financial-item">
                <span className="financial-label">Current Financial Exposure:</span>
                <span className="financial-value">$3,500,000</span>
              </div>
              <div className="financial-item">
                <span className="financial-label">Legal Protection Status:</span>
                <span className="legal-status incomplete">Incomplete</span>
              </div>
            </div>
          </div>

          <div className="status-section red-section">
            <div className="status-header">
              <div className="status-indicator red"></div>
              <div className="status-info">
                <h3 className="status-title">Red — Immediate Action Required</h3>
                <p className="status-description">
                  Controls that are non-compliant, high-risk, and flagged as legally vulnerable.
                </p>
              </div>
              <button className="action-btn">Action</button>
            </div>

            <div className="controls-table">
              <div className="table-header">
                <div className="header-cell">Control Name</div>
                <div className="header-cell">Status</div>
                <div className="header-cell">Business Risk</div>
                <div className="header-cell">Actions</div>
              </div>

              {redControls.map((control, index) => (
                <div key={index} className="table-row">
                  <div className="cell control-name">{control.name}</div>
                  <div className="cell status">{control.status}</div>
                  <div className="cell business-risk">{control.businessRisk}</div>
                  <div className="cell actions">
                    <button className="escalate-btn">Escalate</button>
                    <button className="assign-btn" onClick={() => handleAssignClick(control)}>
                      Assign ▼
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="status-section yellow-section">
            <div className="status-header">
              <div className="status-indicator yellow"></div>
              <div className="status-info">
                <h3 className="status-title">Yellow — At Risk / Needs Attention</h3>
                <p className="status-description">
                  Controls partially implemented, overdue for review, or gaps identified.
                </p>
              </div>
            </div>

            <div className="simple-controls-list">
              {yellowControls.map((control, index) => (
                <div key={index} className="simple-control-item">
                  {control.name}
                </div>
              ))}
            </div>
          </div>

          <div className="status-section green-section">
            <div className="status-header">
              <div className="status-indicator green"></div>
              <div className="status-info">
                <h3 className="status-title">Green — Maintained / Up to Date</h3>
                <p className="status-description">Controls validated, current, and documented with evidence.</p>
              </div>
            </div>

            <div className="simple-controls-list">
              {greenControls.map((control, index) => (
                <div key={index} className="simple-control-item">
                  {control.name}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {showAssignModal && (
        <div className="modal-overlay" onClick={() => setShowAssignModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Assign Control</h3>
              <button className="close-btn" onClick={() => setShowAssignModal(false)}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <p className="assign-text">Assign "{selectedControl?.name}" to:</p>
              <div className="assignees-list">
                {assignees.map((assignee, index) => (
                  <div key={index} className="assignee-item">
                    <button className="assignee-btn" onClick={() => handleAssigneeSelect(assignee)}>
                      <span className="assignee-name">{assignee.name}</span>
                      <span className="assignee-title">{assignee.title}</span>
                    </button>
                    <button className="email-btn" onClick={() => handleEmailClick(assignee)}>
                      Email
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {showEmailModal && (
        <div className="modal-overlay" onClick={() => setShowEmailModal(false)}>
          <div className="modal-content email-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Send Email to {selectedAssignee?.name}</h3>
              <button className="close-btn" onClick={() => setShowEmailModal(false)}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="email-field">
                <label>To:</label>
                <input type="email" value={`${selectedAssignee?.name.toLowerCase()}@company.com`} readOnly />
              </div>
              <div className="email-field">
                <label>Subject:</label>
                <input type="text" value={`Assignment: ${selectedControl?.name}`} readOnly />
              </div>
              <div className="email-field">
                <label>Message:</label>
                <textarea value={emailContent} onChange={(e) => setEmailContent(e.target.value)} rows={8} />
              </div>
              <div className="email-actions">
                <button className="send-btn" onClick={handleSendEmail}>
                  Send Email
                </button>
                <button className="cancel-btn" onClick={() => setShowEmailModal(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}