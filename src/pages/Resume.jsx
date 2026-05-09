import { useState } from "react"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import Orbs from "../components/background/Orbs"


const plainTextResume = `MUBEEN ABDUL - SOFTWARE ENGINEER

CONTACT
Email: mubeenabdul1999@gmail.com
GitHub: github.com/Abdul-Mubeen-git
LinkedIn: linkedin.com/in/dev-mubeen-abdul
Phone: +91 80083 72473
Location: Bangalore, India

SUMMARY
Software Development Engineer with 2 years of experience building backend systems at Walmart Global Tech. 
Works with Java and Spring Boot to develop microservices, REST APIs, and data-driven applications using 
PostgreSQL and Kafka. Experience delivering features from design to production, including testing, deployment, 
and incident handling. Built and maintained services supporting high-volume transactions with a focus on 
reliability, performance, and monitoring. Hands-on with CI/CD pipelines, cloud platforms (Azure, GCP), 
and production monitoring using Splunk and Grafana. Interested in automation and AI-driven engineering solutions.

EXPERIENCE

SOFTWARE ENGINEER | Walmart Global Tech (Contract via WCC) | May 2025 -- November 2025
Project: Walmart International Marketplace -- Seller Center & Label Service
Technologies: Java, Spring Boot, Azure, REST APIs, GraphQL, JUnit, WireMock, Splunk, Grafana, Prometheus

• Delivered 10+ features across 3 microservices (Order, Returns, Label), coordinating with 4+ teams including Product, QA, and DevOps, and delivering all committed sprint items on time.
• Drove test coverage from 50% to 80% by authoring 150+ JUnit unit tests and WireMock-based integration tests, directly reducing regression failures in production releases.
• Led migration of 50+ REST and GraphQL endpoints to V2, refactoring data models and request/response contracts to align with redesigned order management flows.
• Built an Excel-based bulk upload pipeline in Java capable of processing 1,000+ records per batch, replacing a manual data entry process and cutting update time significantly.
• Reduced production downtime by 15% and improved root cause analysis turnaround by 25% by leveraging Splunk log queries and Grafana dashboards to pinpoint issues within specific time windows.
• Integrated canary releases into CI/CD pipeline, reducing rollback occurrences by 2 times per quarter and improving developer confidence in pushing new features to production environments.

SOFTWARE DEVELOPER | Walmart Global Tech (Contract via MThree) | January 2024 -- May 2025
Project: Walmart International Marketplace -- Seller Center
Technologies: Java, Spring Boot, GCP, REST APIs, GraphQL, JUnit, Mockito

• Built and shipped Spring Boot microservices and REST API integrations for Walmart International Marketplace Seller Center, covering seller onboarding and order management flows.
• Improved API query efficiency and scalability by 15% by optimizing endpoint logic and deploying services on Azure Cloud with proper load balancing and resource configuration.
• Established consistent API standards across team by implementing input validation, structured exception handling, and versioning, reducing downstream integration failures.
• Introduced Test-Driven Development (TDD) using JUnit and Mockito to team's workflow, increasing unit test coverage and catching bugs before they reached production.
• Executed a manual database remediation on Label Creation DB, updating 1,000+ records over one week to correct data inconsistencies — coordinating carefully to avoid impact on live services.
• Updated OpenAPI documentation to reflect contract changes across multiple endpoints, adding new request and response field definitions to keep API contracts accurate for downstream consumers.

SKILLS

Backend Technologies: Java 8+, Spring Boot, Spring MVC, Spring Data JPA, Hibernate, REST APIs, GraphQL and WebSocket APIs
Frontend: JavaScript, React.js, HTML5, CSS3/Tailwind
Databases & Messaging: PostgreSQL, Redis, Apache Kafka
Cloud & DevOps: Docker, Kubernetes, AWS, Azure, GCP, Jenkins, Git
Testing & Observability: JUnit, Mockito, WireMock, Prometheus, Grafana, Splunk
Core Concepts: Data Structures & Algorithms, OOP, Operating Systems, SOLID Principles, Design Patterns, Multithreading, Event-Driven Architecture, Microservices, OAuth and JWT
Tools & Practices: Maven, Tomcat, CI/CD, Agile/Scrum, TDD, Debugging, Confluence

EDUCATION

IIIT - Rajiv Gandhi University of Knowledge Technologies | July 2018 -- September 2022
Bachelor of Technology in Computer Science and Information Technology | CGPA: 7.7/10`

export default function Resume() {
  const [activeTab, setActiveTab] = useState("view")


  const handleDownloadText = () => {
    const blob = new Blob([plainTextResume], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Mubeen_Abdul_Resume.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }


  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(plainTextResume)
      alert("Plain text resume copied to clipboard!")
    } catch (err) {
      console.error("Failed to copy:", err)
      alert("Failed to copy plain text resume")
    }
  }

  const handlePrint = () => {
    const printWindow = window.open("", "_blank")
    printWindow.document.write(`
      <html>
        <head>
          <title>Mubeen Abdul - Resume</title>
          <style>
            @page {
              margin: 0.5in;
              size: letter;
            }
            body { 
              font-family: 'Georgia', serif; 
              line-height: 1.4; 
              max-width: 100%;
              margin: 0;
              padding: 0;
              color: #000;
              background: #fff;
              font-size: 11pt;
            }
            .resume-header {
              text-align: center;
              margin-bottom: 30px;
              padding-bottom: 15px;
              border-bottom: 2px solid #007ACC;
            }
            .resume-header h1 {
              font-size: 18pt;
              font-weight: bold;
              margin: 0 0 10px 0;
              text-transform: uppercase;
              letter-spacing: 2px;
            }
            .contact-info {
              font-size: 10pt;
              color: #007ACC;
              margin: 8px 0;
            }
            .section-title {
              font-size: 14pt;
              font-weight: bold;
              color: #007ACC;
              border-bottom: 1px solid #007ACC;
              padding-bottom: 2px;
              margin-top: 25px;
              margin-bottom: 15px;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            .experience-item {
              margin-bottom: 20px;
            }
            .job-title {
              font-weight: bold;
              font-size: 12pt;
              margin: 0;
            }
            .company-info {
              font-style: italic;
              color: #555;
              margin: 2px 0;
            }
            .project-info {
              margin: 5px 0;
            }
            .bullet-list {
              margin: 8px 0 0 20px;
              padding: 0;
            }
            .bullet-list li {
              margin-bottom: 6px;
              line-height: 1.3;
            }
            .skills-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 10px;
              margin-top: 10px;
            }
            .skill-category {
              margin-bottom: 8px;
            }
            .skill-category strong {
              display: block;
              font-weight: bold;
            }
            .education-item {
              margin-bottom: 15px;
            }
            .degree-info {
              font-style: italic;
            }
            @media print {
              body { font-size: 10pt; }
              .resume-header h1 { font-size: 16pt; }
              .section-title { font-size: 12pt; }
              .job-title { font-size: 11pt; }
              .contact-info { font-size: 9pt; }
            }
          </style>
        </head>
        <body>
          <div class="resume-header">
            <h1>MUBEEN ABDUL</h1>
            <div class="contact-info">
              📧 mubeenabdul1999@gmail.com | 🔗 github.com/Abdul-Mubeen-git | 💼 linkedin.com/in/dev-mubeen-abdul | 📱 +91 80083 72473 | 📍 Bangalore, India
            </div>
          </div>
          
          <div class="section-title">Summary</div>
          <p>Software Development Engineer with 2 years of experience building backend systems at Walmart Global Tech. Works with Java and Spring Boot to develop microservices, REST APIs, and data-driven applications using PostgreSQL and Kafka. Experience delivering features from design to production, including testing, deployment, and incident handling. Built and maintained services supporting high-volume transactions with a focus on reliability, performance, and monitoring. Hands-on with CI/CD pipelines, cloud platforms (Azure, GCP), and production monitoring using Splunk and Grafana. Interested in automation and AI-driven engineering solutions.</p>
          
          <div class="section-title">Experience</div>
          
          <div class="experience-item">
            <div class="job-title">Software Engineer</div>
            <div class="company-info">Walmart Global Tech (Contract via WCC) | May 2025 -- November 2025 | Bangalore, Karnataka</div>
            <div class="project-info"><strong>Project:</strong> Walmart International Marketplace -- Seller Center & Label Service</div>
            <div class="project-info"><strong>Technologies:</strong> Java, Spring Boot, Azure, REST APIs, GraphQL, JUnit, WireMock, Splunk, Grafana, Prometheus</div>
            <ul class="bullet-list">
              <li>Delivered 10+ features across 3 microservices (Order, Returns, Label), coordinating with 4+ teams including Product, QA, and DevOps, and delivering all committed sprint items on time.</li>
              <li>Drove test coverage from 50% to 80% by authoring 150+ JUnit unit tests and WireMock-based integration tests, directly reducing regression failures in production releases.</li>
              <li>Led migration of 50+ REST and GraphQL endpoints to V2, refactoring data models and request/response contracts to align with redesigned order management flows.</li>
              <li>Built an Excel-based bulk upload pipeline in Java capable of processing 1,000+ records per batch, replacing a manual data entry process and cutting update time significantly.</li>
              <li>Reduced production downtime by 15% and improved root cause analysis turnaround by 25% by leveraging Splunk log queries and Grafana dashboards to pinpoint issues within specific time windows.</li>
              <li>Integrated canary releases into CI/CD pipeline, reducing rollback occurrences by 2 times per quarter and improving developer confidence in pushing new features to production environments.</li>
            </ul>
          </div>
          
          <div class="experience-item">
            <div class="job-title">Software Developer</div>
            <div class="company-info">Walmart Global Tech (Contract via MThree) | January 2024 -- May 2025 | Bangalore, Karnataka</div>
            <div class="project-info"><strong>Project:</strong> Walmart International Marketplace -- Seller Center</div>
            <div class="project-info"><strong>Technologies:</strong> Java, Spring Boot, GCP, REST APIs, GraphQL, JUnit, Mockito</div>
            <ul class="bullet-list">
              <li>Built and shipped Spring Boot microservices and REST API integrations for Walmart International Marketplace Seller Center, covering seller onboarding and order management flows.</li>
              <li>Improved API query efficiency and scalability by 15% by optimizing endpoint logic and deploying services on Azure Cloud with proper load balancing and resource configuration.</li>
              <li>Established consistent API standards across team by implementing input validation, structured exception handling, and versioning, reducing downstream integration failures.</li>
              <li>Introduced Test-Driven Development (TDD) using JUnit and Mockito to team's workflow, increasing unit test coverage and catching bugs before they reached production.</li>
              <li>Executed a manual database remediation on Label Creation DB, updating 1,000+ records over one week to correct data inconsistencies — coordinating carefully to avoid impact on live services.</li>
              <li>Updated OpenAPI documentation to reflect contract changes across multiple endpoints, adding new request and response field definitions to keep API contracts accurate for downstream consumers.</li>
            </ul>
          </div>
          
          <div class="section-title">Skills</div>
          <div class="skills-grid">
            <div class="skill-category">
              <strong>Backend Technologies:</strong> Java 8+, Spring Boot, Spring MVC, Spring Data JPA, Hibernate, REST APIs, GraphQL and WebSocket APIs
            </div>
            <div class="skill-category">
              <strong>Frontend:</strong> JavaScript, React.js, HTML5, CSS3/Tailwind
            </div>
            <div class="skill-category">
              <strong>Databases & Messaging:</strong> PostgreSQL, Redis, Apache Kafka
            </div>
            <div class="skill-category">
              <strong>Cloud & DevOps:</strong> Docker, Kubernetes, AWS, Azure, GCP, Jenkins, Git
            </div>
            <div class="skill-category">
              <strong>Testing & Observability:</strong> JUnit, Mockito, WireMock, Prometheus, Grafana, Splunk
            </div>
            <div class="skill-category">
              <strong>Core Concepts:</strong> Data Structures & Algorithms, OOP, Operating Systems, SOLID Principles, Design Patterns, Multithreading, Event-Driven Architecture, Microservices, OAuth and JWT
            </div>
            <div class="skill-category">
              <strong>Tools & Practices:</strong> Maven, Tomcat, CI/CD, Agile/Scrum, TDD, Debugging, Confluence
            </div>
          </div>
          
          <div class="section-title">Education</div>
          <div class="education-item">
            <div class="job-title">IIIT - Rajiv Gandhi University of Knowledge Technologies</div>
            <div class="degree-info">Bachelor of Technology in Computer Science and Information Technology | July 2018 -- September 2022 | CGPA: 7.7/10</div>
          </div>
        </body>
      </html>
    `)
    printWindow.document.close()
    printWindow.print()
  }

  return (
    <div className="layout">
      <Orbs />
      <Navbar />
      
      <main className="main">
        <section className="page-section">
          <h1 className="page-title">Resume</h1>
          
          <div className="resume-tabs">
            <button 
              className={`tab-button ${activeTab === "view" ? "active" : ""}`}
              onClick={() => setActiveTab("view")}
            >
              View Resume
            </button>
            <button 
              className={`tab-button ${activeTab === "actions" ? "active" : ""}`}
              onClick={() => setActiveTab("actions")}
            >
              Download & Actions
            </button>
          </div>

          {activeTab === "view" && (
            <div className="resume-view">
              <div className="resume-content formatted">
                <div className="resume-header">
                  <h1>MUBEEN ABDUL</h1>
                  <div className="contact-info">
                    <p>📧 mubeenabdul1999@gmail.com</p>
                    <p>🔗 github.com/Abdul-Mubeen-git</p>
                    <p>💼 linkedin.com/in/dev-mubeen-abdul</p>
                    <p>📱 +91 80083 72473</p>
                    <p>📍 Bangalore, India</p>
                  </div>
                </div>
                
                <div className="resume-section">
                  <h2>SUMMARY</h2>
                  <p>Software Development Engineer with 2 years of experience building backend systems at Walmart Global Tech. Works with Java and Spring Boot to develop microservices, REST APIs, and data-driven applications using PostgreSQL and Kafka. Experience delivering features from design to production, including testing, deployment, and incident handling. Built and maintained services supporting high-volume transactions with a focus on reliability, performance, and monitoring. Hands-on with CI/CD pipelines, cloud platforms (Azure, GCP), and production monitoring using Splunk and Grafana. Interested in automation and AI-driven engineering solutions.</p>
                </div>

                <div className="resume-section">
                  <h2>EXPERIENCE</h2>
                  
                  <div className="experience-item">
                    <h3>Software Engineer</h3>
                    <p className="company">Walmart Global Tech (Contract via WCC) | May 2025 -- November 2025</p>
                    <p className="location">Bangalore, Karnataka</p>
                    <p><strong>Project:</strong> Walmart International Marketplace -- Seller Center & Label Service</p>
                    <p><strong>Technologies:</strong> Java, Spring Boot, Azure, REST APIs, GraphQL, JUnit, WireMock, Splunk, Grafana, Prometheus</p>
                    <ul>
                      <li>Delivered 10+ features across 3 microservices (Order, Returns, Label), coordinating with 4+ teams including Product, QA, and DevOps, and delivering all committed sprint items on time.</li>
                      <li>Drove test coverage from 50% to 80% by authoring 150+ JUnit unit tests and WireMock-based integration tests, directly reducing regression failures in production releases.</li>
                      <li>Led migration of 50+ REST and GraphQL endpoints to V2, refactoring data models and request/response contracts to align with redesigned order management flows.</li>
                      <li>Built an Excel-based bulk upload pipeline in Java capable of processing 1,000+ records per batch, replacing a manual data entry process and cutting update time significantly.</li>
                      <li>Reduced production downtime by 15% and improved root cause analysis turnaround by 25% by leveraging Splunk log queries and Grafana dashboards to pinpoint issues within specific time windows.</li>
                      <li>Integrated canary releases into CI/CD pipeline, reducing rollback occurrences by 2 times per quarter and improving developer confidence in pushing new features to production environments.</li>
                    </ul>
                  </div>

                  <div className="experience-item">
                    <h3>Software Developer</h3>
                    <p className="company">Walmart Global Tech (Contract via MThree) | January 2024 -- May 2025</p>
                    <p className="location">Bangalore, Karnataka</p>
                    <p><strong>Project:</strong> Walmart International Marketplace -- Seller Center</p>
                    <p><strong>Technologies:</strong> Java, Spring Boot, GCP, REST APIs, GraphQL, JUnit, Mockito</p>
                    <ul>
                      <li>Built and shipped Spring Boot microservices and REST API integrations for Walmart International Marketplace Seller Center, covering seller onboarding and order management flows.</li>
                      <li>Improved API query efficiency and scalability by 15% by optimizing endpoint logic and deploying services on Azure Cloud with proper load balancing and resource configuration.</li>
                      <li>Established consistent API standards across team by implementing input validation, structured exception handling, and versioning, reducing downstream integration failures.</li>
                      <li>Introduced Test-Driven Development (TDD) using JUnit and Mockito to team's workflow, increasing unit test coverage and catching bugs before they reached production.</li>
                      <li>Executed a manual database remediation on Label Creation DB, updating 1,000+ records over one week to correct data inconsistencies — coordinating carefully to avoid impact on live services.</li>
                      <li>Updated OpenAPI documentation to reflect contract changes across multiple endpoints, adding new request and response field definitions to keep API contracts accurate for downstream consumers.</li>
                    </ul>
                  </div>
                </div>

                <div className="resume-section">
                  <h2>SKILLS</h2>
                  <div className="skills-grid">
                    <div className="skill-category">
                      <h4>Backend Technologies</h4>
                      <p>Java 8+, Spring Boot, Spring MVC, Spring Data JPA, Hibernate, REST APIs, GraphQL and WebSocket APIs</p>
                    </div>
                    <div className="skill-category">
                      <h4>Frontend</h4>
                      <p>JavaScript, React.js, HTML5, CSS3/Tailwind</p>
                    </div>
                    <div className="skill-category">
                      <h4>Databases & Messaging</h4>
                      <p>PostgreSQL, Redis, Apache Kafka</p>
                    </div>
                    <div className="skill-category">
                      <h4>Cloud & DevOps</h4>
                      <p>Docker, Kubernetes, AWS, Azure, GCP, Jenkins, Git</p>
                    </div>
                    <div className="skill-category">
                      <h4>Testing & Observability</h4>
                      <p>JUnit, Mockito, WireMock, Prometheus, Grafana, Splunk</p>
                    </div>
                    <div className="skill-category">
                      <h4>Core Concepts</h4>
                      <p>Data Structures & Algorithms, OOP, Operating Systems, SOLID Principles, Design Patterns, Multithreading, Event-Driven Architecture, Microservices, OAuth and JWT</p>
                    </div>
                    <div className="skill-category">
                      <h4>Tools & Practices</h4>
                      <p>Maven, Tomcat, CI/CD, Agile/Scrum, TDD, Debugging, Confluence</p>
                    </div>
                  </div>
                </div>

                <div className="resume-section">
                  <h2>EDUCATION</h2>
                  <div className="education-item">
                    <h3>IIIT - Rajiv Gandhi University of Knowledge Technologies</h3>
                    <p className="degree">Bachelor of Technology in Computer Science and Information Technology</p>
                    <p className="date">July 2018 -- September 2022</p>
                    <p className="gpa">CGPA: 7.7/10</p>
                  </div>
                </div>
              </div>
            </div>
          )}


          {activeTab === "actions" && (
            <div className="resume-actions">
              <div className="action-buttons">
                <div className="action-group">
                  <h4>Download Options</h4>
                  <button onClick={handleDownloadText} className="action-btn secondary">
                    📝 Download Plain Text
                  </button>
                </div>
                
                <div className="action-group">
                  <h4>Copy Options</h4>
                  <button onClick={handleCopyText} className="action-btn secondary">
                    📄 Copy Plain Text
                  </button>
                </div>
                
                <div className="action-group">
                  <h4>Print</h4>
                  <button onClick={handlePrint} className="action-btn primary">
                    🖨️ Print Resume
                  </button>
                </div>
              </div>
              
              <div className="resume-info">
                <h3>Resume Information</h3>
                <p><strong>Formats Available:</strong> Plain Text (.txt), Web View</p>
                <p><strong>Plain Text:</strong> ATS-friendly, compatible with all systems</p>
                <p><strong>Last Updated:</strong> 2025</p>
                <p><strong>Contact:</strong> mubeenabdul1999@gmail.com | +91 80083 72473</p>
              </div>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
