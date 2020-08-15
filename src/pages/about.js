import React from "react"
import { PageLayout, PageTitle, About } from "../components"
import { Container, Image } from "react-bootstrap"
import { graphql } from "gatsby"
import { SEO } from "../utils"

export default ({ data }) => {
  const { author, designations } = data.site.siteMetadata

  const html = data.allMarkdownRemark.edges[0].node.html
  return (
    <PageLayout>
      <SEO title="About Me" />
      <PageTitle title="About Me" />
      <Container>
        <Image
          rounded
          width="140"
          height="140"
          src={`../../icons/Image.png`}
          alt={author}
        />
        <article className="w-75 m-auto pt-2 text-justify">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <About html={html} />
        </article>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        author
        designations
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          id
          html
        }
      }
    }
  }
`
