import React from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle, WorkHistory } from "../components"
import { SEO, Utils } from "../utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Container from "react-bootstrap/Container"
import ThemeContext from "../../src/utils/theme"

export default ({ data }) => {
  const history = data.allMarkdownRemark.edges || []
  const images = data.allFile.edges || []
  const imageMap = Utils.getImageMap(images, /\/[work].*\/|$/, true)
  console.log(imageMap)

  return (
    <ThemeContext.Consumer>
      {({ toString }) => {
        return (
          <PageLayout>
            <SEO title="Resume" />
            <PageTitle title="Resume">
              &nbsp;
              <a href="../../resume.pdf" target="_blank" download>
                <FontAwesomeIcon
                  style={{ fontSize: "2rem" }}
                  icon={["fas", "file-download"]}
                  className="icons file"
                />
              </a>
            </PageTitle>
            <Container className="mt-5 pt-3" fluid>
              {history.map(({ node }) => {
                let index = 0
                if (
                  imageMap[node.fields.slug].length > 1 &&
                  toString() === "dark"
                ) {
                  index = imageMap[node.fields.slug].findIndex(i =>
                    i.srcSet.includes("dark")
                  )
                }
                return (
                  <div key={node.id}>
                    <WorkHistory
                      frontmatter={node.frontmatter}
                      image={imageMap[node.fields.slug][index]}
                      html={node.html}
                    />
                    <hr className="w-75" />
                  </div>
                )
              })}
            </Container>
          </PageLayout>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/work/" } }
      sort: { fields: [frontmatter___startDate], order: DESC }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            company
            location
            position
            tags
            startDate(formatString: "MMMM YYYY")
            endDate(formatString: "MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
    allFile(
      filter: {
        extension: { eq: "png" }
        relativePath: { regex: "/company/" }
        relativeDirectory: { regex: "/content/work/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  }
`
