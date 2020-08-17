import React from "react"
import { Container } from "react-bootstrap"
import Header from "./Header"
import Footer from "./Footer"

export default ({ children }) => (
  <Container
    fluid
    className="px-0 theme-light app-container min-vh-100"
    style={{ overflow: "hidden" }}
  >
    <Header />
    <Container fluid className="pt-5 mt-5 text-center">
      {children}
    </Container>
    <Footer />
  </Container>
)
