import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"

const Bio = ({
  data: {
    bio: { nodes },
  },
}) => {
  const { info, image, title } = nodes[0]

  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    __typename
    bio: allStrapiBio {
      nodes {
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        info
      }
    }
  }
`

export default Bio
