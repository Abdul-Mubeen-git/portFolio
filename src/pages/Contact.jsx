import { useState } from "react"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import Orbs from "../components/background/Orbs"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to a backend service
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="layout">
      <Orbs />
      <Navbar />
      
      <main className="main">
        <section className="page-section">
          <h1 className="page-title">Contact Us</h1>
          
          <div className="contact-container">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>I'm always interested in hearing about new opportunities and exciting projects.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <h3>📧 Email</h3>
                  <a href="mailto:mubeenabdul1999@gmail.com">mubeenabdul1999@gmail.com</a>
                </div>
                
                <div className="contact-method">
                  <h3>💼 LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/dev-mubeen-abdul" target="_blank" rel="noopener noreferrer">
                    linkedin
                  </a>
                </div>
                
                <div className="contact-method">
                  <h3>🐙 GitHub</h3>
                  <a href="https://github.com/Abdul-Mubeen-git" target="_blank" rel="noopener noreferrer">
                    github
                  </a>
                </div>
                
                <div className="contact-method">
                  <h3>🌐 Portfolio</h3>
                  <a href="https://mubeen.dev" target="_blank" rel="noopener noreferrer">
                    mubeen.dev
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h2>Send a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="form-textarea"
                  />
                </div>
                
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
