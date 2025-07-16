import React from 'react';
import logo from '../assets/cybersecurity-logo.png';
import './Header.css';

const Header = ({ onPageChange, activePage }) => (
  <header className="header-section">
    <div className="header-logo-title">
      <img
        src={logo}
        style={{ width: '300px', height: '50px' }}
        alt="Cybersecurity Auditing Logo"
        className="header-logo"
      />
      <h1 className="header-title">
        <span className="header-subtitle">{"Safe Harbor"}</span>
      </h1>
    </div>
    <nav className="header-nav">
      <div className="nav-item">
        <a href="#" className={`nav-link${activePage === 'about' ? ' active' : ''}`} onClick={() => onPageChange('about')}>
          About
        </a>
      </div>
      <div className="nav-item">
        <a href="#" className={`nav-link${activePage === 'compliance' ? ' active' : ''}`} onClick={() => onPageChange('compliance')}>
          Compliance
        </a>
      </div>
      <div className="nav-item">
        <a href="#" className={`nav-link${activePage === 'nextsteps' ? ' active' : ''}`} onClick={() => onPageChange('nextsteps')}>
          Next Steps
        </a>
      </div>
      <div className="nav-item">
        <a href="#" className={`nav-link${activePage === 'report' ? ' active' : ''}`} onClick={() => onPageChange('report')}>
          Reports
        </a>
      </div>
    </nav>
  </header>
);

export default Header;
