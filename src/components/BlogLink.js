import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Card from "react-bootstrap/Card"

export default props => {
  console.log(props.featuredImage)
  return (
    <Card className="card-container" as={Link} to={props.to}>
      {props.featuredImage ? (
        <Card.Img as={Img} fluid={props.featuredImage} className="h-50" />
      ) : null}

      <Card.Body className="pt-3">
        <Card.Title>
          <h4>{props.title}</h4>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.subtitle}
        </Card.Subtitle>
        <Card.Text>{props.excerpt}</Card.Text>
      </Card.Body>
    </Card>
  )
}
