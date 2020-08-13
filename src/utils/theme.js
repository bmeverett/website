import React, { Component } from "react"

const defaultState = {
  dark: true,
  toString: () => `light`,
  toggleDark: () => {},
}

const ThemeContext = React.createContext(defaultState)

class ThemeProvider extends Component {
  state = {
    dark: true,
  }

  toString = () => (this.state.dark ? `dark` : `light`)

  toggleDark = () => {
    let dark = !this.state.dark
    this.setState({ dark })
  }

  render() {
    const { children } = this.props
    const { dark } = this.state
    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark: this.toggleDark,
          toString: this.toString,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext

export { ThemeProvider }
