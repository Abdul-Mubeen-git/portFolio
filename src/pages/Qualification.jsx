import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import Orbs from "../components/background/Orbs"

export default function Qualification() {
  return (
    <div className="layout">
      <Orbs />
      <Navbar />
      
      <main className="main">
        <section className="page-section">
          <h1 className="page-title">Qualifications</h1>
          
          <div className="qual-section">
            <h2 className="qual-section-title">Education</h2>
            <div className="qual-item">
              <h3>Bachelor of Computer Science</h3>
              <p className="qual-institution">Rajiv Gandhi University of Knowledge and tecnologies.</p>
              <p className="qual-date">2015 - 2019</p>
              <p className="qual-details">
                GPA: 7.8/10.0 • Computer Science and Engineering
              </p>
            </div>
          </div>
          
          <div className="qual-section">
            <h2 className="qual-section-title">Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <ul className="skill-list">
                  <li>React, Next.js, TypeScript</li>
                  <li>HTML5, CSS3, Tailwind CSS</li>
                  <li>JavaScript, Vue.js, Angular</li>
                  <li>Redux, Zustand, Context API</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3>Backend</h3>
                <ul className="skill-list">
                  <li>Node.js, Express, NestJS</li>
                  <li>Python, Django, FastAPI</li>
                  <li>Java, Spring Boot</li>
                  <li>PHP, Laravel</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3>Database</h3>
                <ul className="skill-list">
                  <li>PostgreSQL, MySQL</li>
                  <li>MongoDB, Redis</li>
                  <li>GraphQL, REST APIs</li>
                  <li>Prisma, SQLAlchemy</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3>DevOps</h3>
                <ul className="skill-list">
                  <li>Docker, Kubernetes</li>
                  <li>AWS, GCP, Azure</li>
                  <li>CI/CD, GitHub Actions</li>
                  <li>Linux, Nginx</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
