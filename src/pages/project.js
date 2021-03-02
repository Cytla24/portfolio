import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid

const ProjectPage = () => {
  return <h2>projects page</h2>
}

export const query = graphql`
  {
    __typename
    allStrapiProjects {
      nodes {
        id
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        description
        title
      }
    }
  }
`

export default ProjectPage
