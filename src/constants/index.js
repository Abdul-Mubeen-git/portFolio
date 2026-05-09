// Verifiable time function for terminal logs
const getCurrentTimestamp = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')
  
  return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`
}

export const TERMINAL_LOGS = [
  "  .   ____          _            __ _ _",
  "  /\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\",
  "( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\",
  " \\/   ___)| |_)| | | | | | (_| |  ) ) ) )",
  "  '  |____| .__|_| |_| |_| |\\__, | / / / /",
  " =========|_|==============|___/=/_/_/_/",
  " ",
  " :: Spring Boot :: (v3.2.0)",
  " ",
  `${getCurrentTimestamp()} INFO  Starting PortfolioApplication...`,
  `${getCurrentTimestamp()} INFO  Running with Java 1.8`,
  `${getCurrentTimestamp()} INFO  No active profile set`,
  `${getCurrentTimestamp()} INFO  Tomcat started on port(s): 8080`,
  `${getCurrentTimestamp()} INFO  Started PortfolioApplication`,
  " "
]