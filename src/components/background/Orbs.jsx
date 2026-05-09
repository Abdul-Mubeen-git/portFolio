import { useState, useEffect } from "react"

export default function Orbs() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="bg-canvas">
      <div
        className="orb orb-1"
        style={{
          transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)`
        }}
      />
      <div
        className="orb orb-2"
        style={{
          transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 20}px)`
        }}
      />
      <div
        className="orb orb-3"
        style={{
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * 40}px)`
        }}
      />
      <div
        className="orb orb-4"
        style={{
          transform: `translate(${mousePos.x * 35}px, ${mousePos.y * -25}px)`
        }}
      />
      <div
        className="orb orb-5"
        style={{
          transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -35}px)`
        }}
      />
    </div>
  )
}