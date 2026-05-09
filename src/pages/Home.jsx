import { useState, useEffect, useRef } from "react"
import Orbs from "../components/background/Orbs"
import Navbar from "../components/layout/Navbar"
import Terminal from "../components/terminal/Terminal"
import Footer from "../components/layout/Footer"

export default function Home() {
  const [tick, setTick] = useState(0)
  const [mode, setMode] = useState('chaos')
  const [baseMs, setBaseMs] = useState(800)
  const [isGlitching, setIsGlitching] = useState(false)
  const [symState, setSymState] = useState('show-1')
  const intervalRef = useRef(null)
  const glitchTimeoutRef = useRef(null)

  const states = ['show-1', 'show-2', 'both', 'none']
  const seq = ['show-1', 'both', 'show-2', 'both', 'none', 'show-1']

  useEffect(() => {
    if (mode === 'stop') {
      setSymState('show-1')
      setIsGlitching(false)
      clearTimeout(glitchTimeoutRef.current)
      return
    }

    const startDelay = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setTick(t => {
          const newTick = t + 1
          if (mode === 'toggle') {
            setSymState(newTick % 2 === 0 ? 'show-1' : 'show-2')
            triggerGlitch()
          } else if (mode === 'chaos') {
            const pick = states[Math.floor(Math.random() * states.length)]
            setSymState(pick)
            if (Math.random() > 0.35) triggerGlitch()
          } else if (mode === 'pulse') {
            const state = seq[newTick % seq.length]
            setSymState(state)
            if (newTick % seq.length === 2) triggerGlitch(baseMs * 1.5)
          }
          return newTick
        })
      }, baseMs)
    }, 2000)

    return () => {
      clearTimeout(startDelay)
      clearInterval(intervalRef.current)
      clearTimeout(glitchTimeoutRef.current)
      setIsGlitching(false)  
    }
  }, [mode, baseMs])

  const triggerGlitch = (ms = baseMs) => {
    setIsGlitching(true)
    glitchTimeoutRef.current = setTimeout(() => setIsGlitching(false), ms * 0.8)
  }

  return (
    <div className="layout">
      <Orbs />

      <Navbar />

      <main className="main">
        <section className="hero">
          <div className="hero-left">
            <h1 className={`hero-heading ${isGlitching ? 'glitching' : ''}`} data-text="Hi My Name is Mubeen ❝">
              Hi My Name is <br /> Mubeen
              <span className={`sym-glitch ${symState}`}>
                <span className="sym-1">❝</span>
                <span className="sym-2">»</span>
              </span>
            </h1>
            <p className="hero-description">
              Software Development Engineer building scalable backend systems with Java, Spring Boot, and modern cloud technologies.
              Passionate about creating efficient microservices, REST APIs, and data-driven applications that solve real-world problems.
            </p>

            <div className="glitch-controls">
              <div className="controls">
                <button className={`ctrl-btn ${mode === 'toggle' ? 'active' : ''}`} onClick={() => setMode('toggle')}>toggle</button>
                <button className={`ctrl-btn ${mode === 'chaos' ? 'active' : ''}`} onClick={() => setMode('chaos')}>chaos</button>
                <button className={`ctrl-btn ${mode === 'pulse' ? 'active' : ''}`} onClick={() => setMode('pulse')}>pulse</button>
                <button className={`ctrl-btn ${mode === 'stop' ? 'active' : ''}`} onClick={() => setMode('stop')}>stop</button>
              </div>
              <div className="speed-row">
                <span>speed</span>
                <input type="range" min="60" max="800" value={baseMs} onChange={(e) => setBaseMs(parseInt(e.target.value))} step="10" />
                <span>{baseMs}ms</span>
              </div>
            </div>
          </div>

          <Terminal />
        </section>
      </main>

      <Footer />
    </div>
  )
}