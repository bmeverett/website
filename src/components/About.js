import React from "react"
import { Container } from "react-bootstrap"

export default ({ html }) => {
  return (
    <Container className="text-center">
      <p
        className="pt-3 text-justify"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Container>
  )
}
