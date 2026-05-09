import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import Orbs from "../components/background/Orbs"

export default function Experience() {
  return (
    <div className="layout">
      <Orbs />
      <Navbar />
      
      <main className="main">
        <section className="page-section">
          <h1 className="page-title">Experience</h1>
          <div className="experience-container">
            <div className="experience-item">
              <h3>Software Engineer</h3>
              <p className="company">Walmart Global Tech (Contract via WCC) • May 2025 -- November 2025</p>
              <p className="location">Bangalore, Karnataka</p>
              <p><strong>Project:</strong> Walmart International Marketplace -- Seller Center & Label Service</p>
              <p><strong>Technologies:</strong> Java, Spring Boot, Azure, REST APIs, GraphQL, JUnit, WireMock, Splunk, Grafana, Prometheus</p>
              <ul className="experience-details">
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
              <p className="company">Walmart Global Tech (Contract via MThree) • January 2024 -- May 2025</p>
              <p className="location">Bangalore, Karnataka</p>
              <p><strong>Project:</strong> Walmart International Marketplace -- Seller Center</p>
              <p><strong>Technologies:</strong> Java, Spring Boot, GCP, REST APIs, GraphQL, JUnit, Mockito</p>
              <ul className="experience-details">
                <li>Built and shipped Spring Boot microservices and REST API integrations for Walmart International Marketplace Seller Center, covering seller onboarding and order management flows.</li>
                <li>Improved API query efficiency and scalability by 15% by optimizing endpoint logic and deploying services on Azure Cloud with proper load balancing and resource configuration.</li>
                <li>Established consistent API standards across team by implementing input validation, structured exception handling, and versioning, reducing downstream integration failures.</li>
                <li>Introduced Test-Driven Development (TDD) using JUnit and Mockito to team's workflow, increasing unit test coverage and catching bugs before they reached production.</li>
                <li>Executed a manual database remediation on Label Creation DB, updating 1,000+ records over one week to correct data inconsistencies — coordinating carefully to avoid impact on live services.</li>
                <li>Updated OpenAPI documentation to reflect contract changes across multiple endpoints, adding new request and response field definitions to keep API contracts accurate for downstream consumers.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
