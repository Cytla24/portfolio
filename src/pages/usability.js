import React from "react"
import Layout from "../components/Layout"
import Project from "../components/Project"
import Title from "../components/Title"
import { graphql } from "gatsby"

const Usability = ({
  data: {
    allStrapiUsabilities: { nodes: usabilites },
  },
}) => {
  return (
    <Layout>
      <section className="projects-page">
        <section className="section projects">
          <div className="section-center projects-center">
            <Title title="Usability Report" />
            <Project
              id={usabilites.id}
              title=""
              image={usabilites[0].image}
              description={usabilites[0].description}
              url="/files/usability-report.pdf"
            />
          </div>
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    __typename
    allStrapiUsabilities {
      nodes {
        id
        title
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Usability
