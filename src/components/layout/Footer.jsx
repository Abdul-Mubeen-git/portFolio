import { APP_CONFIG } from "../../config"

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-left">
        <span>© 2025 Mubeen</span>
        <span className="sep">|</span>
        <span>Built with ♥</span>
      </div>
      <div className="footer-status">
        <div className="status-dot" aria-hidden="true"></div>
        <span>All systems operational</span>
      </div>
      <nav className="footer-right" aria-label="Footer links">
        <a href={APP_CONFIG.social.github} className="footer-link" target="_blank">GitHub</a>
        <a href={APP_CONFIG.social.linkedin} className="footer-link" target="_blank">LinkedIn</a>
        <a href={`mailto:${APP_CONFIG.social.email}`} className="footer-link" target="_blank">Email</a>
      </nav>
    </footer>
  )
}