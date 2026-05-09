import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import ThemeToggle from "../ui/ThemeToggle"
import MobileDrawer from "../ui/MobileDrawer"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <>
      <header className="navbar">
        
        {/* Logo */}
        <div className="nav-logo">
          <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#logo-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="url(#logo-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="url(#logo-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="logo-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                <stop stop-color="#833ab4"/>
                <stop offset="0.5" stop-color="#e1306c"/>
                <stop offset="1" stop-color="#f77737"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* ✅ Desktop Nav Links */}
        <nav className="nav-links">
          <Link to="/" className={isActive("/") ? "active" : ""}>~/home</Link>
          <Link to="/experience" className={isActive("/experience") ? "active" : ""}>~/experience</Link>
          <Link to="/projects" className={isActive("/projects") ? "active" : ""}>~/projects</Link>
          <Link to="/qualification" className={isActive("/qualification") ? "active" : ""}>~/qualification</Link>
          <Link to="/resume" className={isActive("/resume") ? "active" : ""}>~/resume</Link>
          <Link to="/contact" className={isActive("/contact") ? "active" : ""}>~/contact</Link>
        </nav>

        {/* Title */}

        {/* Right side */}
        <div className="nav-right">
          <ThemeToggle />

          <button
            className={`hamburger ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* ✅ Mobile Drawer */}
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </>
  )
}