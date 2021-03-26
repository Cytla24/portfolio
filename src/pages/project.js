import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Projects from "../components/Projects"
import Project from "../components/Project"
import { Link } from "gatsby"
// ...GatsbyImageSharpFluid

const ProjectPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <section className="projects-page">
        <section className="section projects">
          <div className="section-center projects-center">
            <Title title="Projects" />
            <Project
              id={projects.id}
              title={projects[0].title}
              image={projects[0].image}
              description={projects[0].description}
              url={`/projects/${projects[0].slug}`}
            />
            <Project
              id={projects.id}
              title={projects[1].title}
              image={projects[1].image}
              description={projects[1].description}
              url={`/projects/${projects[1].slug}`}
            />
            {/* <Projects projects={projects} title="Projects" /> */}
          </div>
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    __typename
    allStrapiProjects {
      nodes {
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        title
        description
        slug
      }
    }
  }
`

export default ProjectPage
