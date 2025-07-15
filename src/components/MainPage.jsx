"use client" // This component needs client-side interactivity

import React, { useState } from 'react';
import Header from './Header';
import ChatBox from './ChatBox';
import AboutPage from './AboutPage';
import CompliancePage from './CompliancePage';
import NextStepsPage from './NextStepsPage';
import ReportPage from './ReportPage';
import './MainPage.css';

export default function MainPage() {
  const [activePage, setActivePage] = useState('about');

  let LeftContent;
  if (activePage === 'about') LeftContent = <AboutPage />;
  else if (activePage === 'compliance') LeftContent = <CompliancePage />;
  else if (activePage === 'nextsteps') LeftContent = <NextStepsPage />;
  else if (activePage === 'report') LeftContent = <ReportPage />;
  else LeftContent = <AboutPage />;

  return (
    <div className="main-page-container">
      <div className="main-grid">
        <div className="left-column">
          <Header onPageChange={setActivePage} activePage={activePage} />
          {LeftContent}
        </div>
        {/* Right Column - Chat Box */}
        <div className="right-column">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}   