import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="left-column">
      <div className="content-card">
        <div className="card-content">
          <h2 className="section-title">What is Nevada's Safe Harbor Law?</h2>
          <p className="text-content">
            Nevada's Safe Harbor Law (NRS 603A) provides legal protection for businesses that implement and
            maintain strong cybersecurity controls aligned with nationally recognized standards, like the CIS
            Controls.
          </p>
          <h3 className="subsection-title">Why It Matters to You:</h3>
          <ul className="list-content">
            <li>If a data breach occurs, businesses that meet Safe Harbor standards can reduce or eliminate liability for damages.</li>
            <li>It's a defensible shield for executives and boards — proof that your organization took reasonable steps to protect data.</li>
            <li>Safe Harbor isn't optional; it's smart risk management and part of your legal strategy to avoid lawsuits and penalties.</li>
          </ul>
          <h3 className="subsection-title">EDDI Helps You Qualify.</h3>
          <p className="text-content">
            We track your compliance progress, highlight gaps, and provide clear actions so you can confidently meet
            Safe Harbor requirements — and protect your leadership from personal liability.
          </p>
        </div>
      </div>
      <div className="content-card no-padding">
        <div className="card-content">
          <h2 className="section-title section-title-featured">Featured Videos</h2>
          <div className="videos-grid">
            <div className="video-item">
              <div className="video-embed-container">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="CIS Center for Internet Security"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="video-title">CIS Center for Internet Security</p>
            </div>
            <div className="video-item">
              <div className="video-embed-container">
                <iframe
                  src="https://www.youtube.com/embed/y6120QO_o_o"
                  title="Closed or Locked"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="video-title">Closed or Locked</p>
            </div>
            <div className="video-item">
              <div className="video-embed-container">
                <iframe
                  src="https://www.youtube.com/embed/M7lc1UVf-VE"
                  title="Introducing EDDI-L"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="video-title">Introducing EDDI-L</p>
            </div>
          </div>
          <h2 className="section-title section-title-featured" style={{ marginTop: '2rem' }}>Latest Blogs</h2>
          <div className="blogs-grid">
            <div className="blog-card">
              <div className="blog-card-content">
                <h3 className="blog-title">You Can't Protect What You Can't See — Why CEOs Are Now the First to Fall After a Cyberattack</h3>
                <p className="blog-meta">Elizabeth Hsu | April 19, 2023</p>
                <p className="blog-excerpt">
                  If you're a CEO or executive leader, here's the uncomfortable truth: Cybercriminals
                  are already in someone's network — and it might be yours next.
                </p>
                <ul className="blog-list">
                  <li>32% of Executives Were Fired After a Breach</li>
                  <li>87% of breaches now find after a breach</li>
                </ul>
                <a href="#" className="blog-read-more">Read More</a>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-card-content">
                <h3 className="blog-title">CAT Is Building That Bridge</h3>
                <p className="blog-meta">Elizabeth Hsu | April 19, 2023</p>
                <p className="blog-excerpt">
                  At CAT, we've asked a bold question: What if executives could see IT risk and performance
                  as clearly as they see revenue, operations, or customer churn?
                </p>
                <p className="blog-excerpt">
                  Our answer is a new kind of solution — one that doesn't just report on security but
                  redefines how executives lead through IT.
                </p>
                <a href="#" className="blog-read-more">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 