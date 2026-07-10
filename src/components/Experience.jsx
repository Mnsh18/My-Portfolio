import { useState } from "react";

function Experience() {

  const [showXopunTech, setShowXopunTech] = useState(false);
  const [showNielit, setShowNielit] = useState(false);

  return (
    <section id="experience" className="experience">

      <h2>Experience</h2>

      <div className="experience-container">

        {/* XopunTech */}

        <div className="experience-card">

          <h3>Software Development Trainee</h3>

          <h4>XopunTech India Pvt. Ltd.</h4>

          <p>Present</p>

          <button
            className="experience-btn"
            onClick={() => setShowXopunTech(!showXopunTech)}
          >
            {showXopunTech ? "Hide Details ▲" : "View Details ▼"}
          </button>

          {showXopunTech && (
            <ul className="experience-list">
              <li>Learning Python programming.</li>
              <li>Practicing Data Structures & Algorithms.</li>
              <li>Working with SQL and databases.</li>
              <li>Using Git & GitHub for version control.</li>
              <li>Building practical software projects.</li>
            </ul>
          )}

        </div>

        {/* NIELIT */}

        <div className="experience-card">

          <h3>Cybersecurity Intern</h3>

          <h4>NIELIT Guwahati</h4>

          <p>July 2025 – August 2025</p>

          <button
            className="experience-btn"
            onClick={() => setShowNielit(!showNielit)}
          >
            {showNielit ? "Hide Details ▲" : "View Details ▼"}
          </button>

          {showNielit && (
            <ul className="experience-list">
              <li>Worked with Burp Suite for web security testing.</li>
              <li>Practiced SQL Injection & XSS using PortSwigger Labs.</li>
              <li>Learned Cisco Packet Tracer networking.</li>
              <li>Worked with REST APIs and Postman.</li>
              <li>Learned cryptography and cloud security fundamentals.</li>
            </ul>
          )}

        </div>

      </div>

    </section>
  );
}

export default Experience;