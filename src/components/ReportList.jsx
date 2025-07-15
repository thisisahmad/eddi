import React from "react";
import ReportItem from "./ReportItem";
import "./ReportList.css";

export default function ReportList({ reports, expandedReports, toggleReport, downloadReport, detailedComplianceControls }) {
  return (
    <div className="reports-list-card">
      <h3 className="reports-title">Available Reports</h3>
      <div className="reports-list">
        {reports.map((report) => (
          <ReportItem
            key={report.id}
            report={report}
            expanded={!!expandedReports[report.id]}
            onToggle={() => toggleReport(report.id)}
            onDownload={() => downloadReport(report.name, report.type)}
            detailedComplianceControls={detailedComplianceControls}
          />
        ))}
      </div>
    </div>
  );
} 