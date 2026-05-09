import { useEffect, useState } from "react"

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("portfolio-theme")
    return stored || "dark"
  })

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("portfolio-theme", theme)
  }, [theme])

  return { theme, setTheme }
}