import { Link, useLocation } from "react-router-dom"

export default function MobileDrawer({ open, onClose }) {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <div className={`mobile-drawer ${open ? "open" : ""}`}>
      <Link to="/" onClick={onClose} className={isActive("/") ? "active" : ""}>~/home</Link>
      <Link to="/experience" onClick={onClose} className={isActive("/experience") ? "active" : ""}>~/experience</Link>
      <Link to="/projects" onClick={onClose} className={isActive("/projects") ? "active" : ""}>~/projects</Link>
      <Link to="/qualification" onClick={onClose} className={isActive("/qualification") ? "active" : ""}>~/qualification</Link>
      <Link to="/resume" onClick={onClose} className={isActive("/resume") ? "active" : ""}>~/resume</Link>
      <Link to="/contact" onClick={onClose} className={isActive("/contact") ? "active" : ""}>~/contact</Link>
    </div>
  )
}