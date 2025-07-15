import React from 'react';
import './AboutPage.css';
import VideoItem from './VideoItem';
import BlogCard from './BlogCard';

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
            <VideoItem
              src="https://www.youtube.com/embed/f-Z7h5dI6uQ"
              title="CIS Overview"
              label="CIS Overview"
            />
            <VideoItem
              src="https://www.youtube.com/embed/q4y4xzhQR7g"
              title="Cybersecurity Auditors Investigative IT Auditing"
              label="Cybersecurity Auditors Investigative IT Auditing"
            />
            <VideoItem
              src="https://www.youtube.com/embed/Mep0QGxeQDY"
              title="CAT Inc. Intro"
              label="CAT Inc. Intro"
            />
          </div>
          <h2 className="section-title section-title-featured" style={{ marginTop: '2rem' }}>Latest Blogs</h2>
          <div className="blogs-grid">
            <BlogCard
              title="You Can't Protect What You Can't See — Why CEOs Are Now the First to Fall After a Cyberattack"
              meta="Elizabeth Hsu | April 19, 2023"
              excerpt={"If you're a CEO or executive leader, here's the uncomfortable truth: Cybercriminals are already in someone's network — and it might be yours next."}
              list={["32% of Executives Were Fired After a Breach", "87% of breaches now find after a breach"]}
              href="https://www.linkedin.com/pulse/you-cant-protect-what-see-why-ceos-now-first-fall-after-elizabeth-wu-3yvae/?trackingId=JduJZn65STa7J0T7Fxdbng%3D%3D"
            />
            <BlogCard
              title="CAT Is Building That Bridge"
              meta="Elizabeth Hsu | April 19, 2023"
              excerpt={"At CAT, we've asked a bold question: What if executives could see IT risk and performance as clearly as they see revenue, operations, or customer churn?"}
              excerpt2={"Our answer is a new kind of solution — one that doesn't just report on security but redefines how executives lead through IT."}
              href="https://www.linkedin.com/pulse/cat-building-bridge-elizabeth-wu-ou5xe/?trackingId=JduJZn65STa7J0T7Fxdbng%3D%3D"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 