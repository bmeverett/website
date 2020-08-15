import React from "react"
import { Container, Row, Col } from "react-bootstrap"

export default ({ html }) => {
  return (
    <Container className="p-1 project-link text-center">
      <Row>
        <Col className="col-md-6 col-12">
          <p
            className="text-justify mt-2"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Col>
      </Row>
    </Container>
  )
}
