import useTheme from "../../hooks/useTheme"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className="theme-toggle"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="toggle-track">
        <div className="toggle-knob">
          {theme === "dark" ? "🌙" : "☀️"}
        </div>
      </div>
    </div>
  )
}