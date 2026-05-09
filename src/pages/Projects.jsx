import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import Orbs from "../components/background/Orbs"

export default function Projects() {
  return (
    <div className="layout">
      <Orbs />
      <Navbar />
      
      <main className="main">
        <section className="page-section">
          <h1 className="page-title">Projects</h1>
          <div className="projects-grid">
            <div className="project-card">
              <h3>E-Commerce Platform</h3>
              <p className="project-tech">React, Node.js, MongoDB, Stripe</p>
              <p className="project-description">
                Full-featured e-commerce solution with user authentication, 
                payment processing, and admin dashboard.
              </p>
              <div className="project-links">
                <a href="#" className="project-link">Live Demo</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
            
            <div className="project-card">
              <h3>Task Management System</h3>
              <p className="project-tech">React, Express, PostgreSQL, Docker</p>
              <p className="project-description">
                Collaborative task management tool with real-time updates, 
                drag-and-drop interface, and team collaboration features.
              </p>
              <div className="project-links">
                <a href="#" className="project-link">Live Demo</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
            
            <div className="project-card">
              <h3>Weather Dashboard</h3>
              <p className="project-tech">React, TypeScript, OpenWeather API</p>
              <p className="project-description">
                Responsive weather application with location-based forecasts, 
                interactive maps, and severe weather alerts.
              </p>
              <div className="project-links">
                <a href="#" className="project-link">Live Demo</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
            
            <div className="project-card">
              <h3>Blog Platform</h3>
              <p className="project-tech">Next.js, Prisma, PostgreSQL, Tailwind</p>
              <p className="project-description">
                Modern blogging platform with markdown support, 
                SEO optimization, and comment system.
              </p>
              <div className="project-links">
                <a href="#" className="project-link">Live Demo</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
