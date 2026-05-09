import { useEffect, useState, useRef } from "react"
import { TERMINAL_LOGS } from "../../constants"

export default function Terminal() {
  const [displayed, setDisplayed] = useState([])
  const [phase, setPhase] = useState("logs")
  const [currentInput, setCurrentInput] = useState("")
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const terminalRef = useRef(null)
  const inputRef = useRef(null)

  // Resume summary for whoami command
  const resumeSummary = `Software Development Engineer with 2 years of experience building backend systems at Walmart Global Tech. 
Works with Java and Spring Boot to develop microservices, REST APIs, and data-driven applications using PostgreSQL and Kafka. 
Experience delivering features from design to production, including testing, deployment, and incident handling. 
Built and maintained services supporting high-volume transactions with a focus on reliability, performance, and monitoring.`

  // Available commands
  const commands = {
    help: {
      description: "Show available commands",
      action: () => {
        return [
          "Available commands:",
          "  help     - Show this help message",
          "  ls       - List available pages",
          "  whoami   - Show profile summary",
          "  clear    - Clear terminal",
          "  date     - Show current date",
          "  echo     - Echo back input",
          "  about    - About this portfolio",
          "  skills   - Show technical skills"
        ]
      }
    },
    ls: {
      description: "List available pages",
      action: () => {
        return [
          "Pages/",
          "├── home/         - Welcome page",
          "├── experience/    - Work experience",
          "├── projects/      - Project portfolio",
          "├── qualification/ - Education & skills",
          "├── resume/        - Resume download",
          "└── contact/       - Contact information"
        ]
      }
    },
    whoami: {
      description: "Show profile summary",
      action: () => {
        return [
          "Mubeen Abdul - Software Development Engineer",
          "",
          resumeSummary,
          "",
          "📧 mubeenabdul1999@gmail.com",
          "🔗 github.com/Abdul-Mubeen-git",
          "💼 linkedin.com/in/dev-mubeen-abdul"
        ]
      }
    },
    clear: {
      description: "Clear terminal",
      action: () => {
        setDisplayed([])
        return []
      }
    },
    date: {
      description: "Show current date",
      action: () => {
        return [new Date().toString()]
      }
    },
    echo: {
      description: "Echo back input",
      action: (args) => {
        return args ? [args] : []
      }
    },
    about: {
      description: "About this portfolio",
      action: () => {
        return [
          "🚀 Interactive Portfolio Terminal",
          "",
          "This portfolio is built with:",
          "• React.js for the frontend",
          "• Spring Boot inspired terminal",
          "• Modern CSS with animations",
          "• Responsive design",
          "",
          "Type 'help' to see available commands!"
        ]
      }
    },
    skills: {
      description: "Show technical skills",
      action: () => {
        return [
          "🔧 Technical Skills:",
          "",
          "Backend:",
          "• Java 8+, Spring Boot, Spring MVC",
          "• Microservices, REST APIs, GraphQL",
          "• PostgreSQL, Redis, Apache Kafka",
          "",
          "Frontend:",
          "• JavaScript, React.js, HTML5, CSS3/Tailwind",
          "",
          "Cloud & DevOps:",
          "• Docker, Kubernetes, AWS, Azure, GCP",
          "• Jenkins, Git, CI/CD"
        ]
      }
    }
  }

  // Auto-scroll
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop =
        terminalRef.current.scrollHeight
    }
  }, [displayed])

  // Prevent page scroll when inside terminal
  const handleWheel = (e) => {
    const el = e.currentTarget
    const isAtTop = el.scrollTop === 0
    const isAtBottom =
      el.scrollHeight - el.scrollTop === el.clientHeight

    if (
      (e.deltaY < 0 && isAtTop) ||
      (e.deltaY > 0 && isAtBottom)
    ) {
      e.preventDefault()
    }
  }

  // Add passive event listener
  useEffect(() => {
    const terminal = terminalRef.current
    if (terminal) {
      terminal.addEventListener('wheel', handleWheel, { passive: false })
      return () => {
        terminal.removeEventListener('wheel', handleWheel, { passive: false })
      }
    }
  }, [])

  // Initial render - show all logs at once
  useEffect(() => {
    if (phase === "logs") {
      setDisplayed([...TERMINAL_LOGS, "", "PortfolioApplication started successfully. Type 'help' for commands.", ""])
      setPhase("interactive")
    }
  }, [phase])

  // Focus input when terminal is interactive
  useEffect(() => {
    if (phase === "interactive" && inputRef.current) {
      inputRef.current.focus()
    }
  }, [phase])

  // Handle command execution
  const executeCommand = (input) => {
    const trimmedInput = input.trim()
    if (!trimmedInput) return

    // Add command to history
    setCommandHistory((prev) => [...prev, trimmedInput])
    setHistoryIndex(-1)

    // Parse command and args
    const [command, ...args] = trimmedInput.split(" ")
    const argsString = args.join(" ")

    // Add command to display
    setDisplayed((prev) => [...prev, `mubeen@portfolio:~$ ${trimmedInput}`])

    // Execute command
    if (commands[command]) {
      const result = commands[command].action(argsString)
      if (result.length > 0) {
        setDisplayed((prev) => [...prev, ...result])
      }
    } else {
      setDisplayed((prev) => [...prev, `Command not found: ${command}. Type 'help' for available commands.`])
    }

    setCurrentInput("")
  }

  // Handle input
  const handleInput = (e) => {
    if (e.key === "Enter") {
      executeCommand(currentInput)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setCurrentInput("")
      }
    }
  }

  return (
    <div className="terminal-wrapper">
      {/* Header */}
      <div className="terminal-titlebar">
        <div className="term-lights">
          <span className="term-light-r" />
          <span className="term-light-y" />
          <span className="term-light-g" />
        </div>
        <span className="term-title-text">
          mubeen@portfolio — spring — 80×24
        </span>
      </div>

      {/* Body */}
      <div
        className="terminal-body"
        ref={terminalRef}
        onClick={() => {
          if (phase === "interactive" && inputRef.current) {
            inputRef.current.focus()
          }
        }}
      >
        {displayed.map((line, index) => {
          if (line === undefined || line === null) return null

          let className = "term-cmd"
          let isPrompt = false

          if (typeof line === 'string' && line.includes("ERROR")) className = "text-red-400"
          else if (typeof line === 'string' && line.includes("INFO")) className = "text-green-400"
          else if (typeof line === 'string' && line.startsWith(">")) className = "text-blue-400"
          else if (typeof line === 'string' && line.startsWith("mubeen@portfolio:~$") && line !== "mubeen@portfolio:~$ ") {
            isPrompt = true
          }

          return (
            <div key={index} className="term-line">
              {isPrompt ? (
                <>
                  <span className="term-prompt-sym">mubeen@portfolio:~$</span>
                  <span className="term-cmd">{line.replace("mubeen@portfolio:~$ ", "")}</span>
                </>
              ) : (
                <span className={className}>{line}</span>
              )}
            </div>
          )
        })}

        {phase === "interactive" && (
          <div className="term-line">
            <span className="term-prompt-sym">mubeen@portfolio:~$ </span>
            <span style={{ position: "relative", display: "inline-flex" }}>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleInput}
                className="term-input"
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "var(--term-text)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "inherit",
                  width: "1px",
                  minWidth: "1px",
                  caretColor: "transparent",
                  position: "absolute",
                  left: 0,
                  top: 0
                }}
              />
              <span style={{
                color: "var(--term-text)",
                fontFamily: "'Menlo', 'Monaco', 'Consolas', 'Courier New', monospace",
                fontSize: "inherit",
                visibility: currentInput ? "visible" : "hidden",
                whiteSpace: "pre"
              }}>
                {currentInput}
              </span>
              <span className="cursor-block" style={{ 
                position: "absolute",
                left: `${currentInput.length * 8.4}px`,
                top: "2px"
              }}></span>
            </span>
          </div>
        )}
      </div>
    </div>
  )
}