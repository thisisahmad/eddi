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
        <span className="header-subtitle">{"{ Safe Harbor }"}</span>
      </h1>
    </div>
    <nav className="header-nav">
      <div className="nav-item">
        <a href="#" className={`nav-link${activePage === 'about' ? ' active' : ''}`} onClick={() => onPageChange('about')}>
          About <span style={{ marginLeft: '8px' }}>&#9662;</span> 
        </a>
        <ul className="dropdown-content">
          <li><a href="#">Our Mission</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>   
      </div>
      <div className="nav-item">
        <a href="#" className={`nav-link${activePage === 'compliance' ? ' active' : ''}`} onClick={() => onPageChange('compliance')}>
          Compliance  <span style={{ marginLeft: '8px' }}>&#9662;</span> 
        </a>
        <ul className="dropdown-content">
          <li><a href="#">Regulations</a></li>
          <li><a href="#">Standards</a></li>
          <li><a href="#">Frameworks</a></li>
        </ul>
      </div>
      <div className="nav-item">
        <a href="#" className={`nav-link${activePage === 'nextsteps' ? ' active' : ''}`} onClick={() => onPageChange('nextsteps')}>
          Next Steps <span style={{ marginLeft: '8px' }}>&#9662;</span> 
        </a>
        <ul className="dropdown-content">
          <li><a href="#">Getting Started</a></li>
          <li><a href="#">Consultation</a></li>
          <li><a href="#">Resources</a></li>
        </ul>
      </div>
      <div className="nav-item">
        <a href="#" className="nav-link">
          Audit Reports <span style={{ marginLeft: '8px' }}>&#9662;</span> 
        </a>
        <ul className="dropdown-content">
          <li><a href="#">Sample Reports</a></li>
          <li><a href="#">Request Audit</a></li>
          <li><a href="#">Client Portal</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header; 