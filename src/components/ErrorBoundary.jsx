import React from "react"

export default class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(err) {
    console.error(err)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>
    }
    return this.props.children
  }
}