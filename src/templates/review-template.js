import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import Image from "gatsby-image"
import Iframe from "react-iframe"

const ComponentName = ({
  data: {
    allStrapiReviews: { nodes: review },
  },
}) => {
  return (
    <Layout>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <h1>{review[0].title}</h1>
            <Image
              fluid={review[0].image.childImageSharp.fluid}
              className="blog-text"
            />
            <ReactMarkdown source={review[0].body} className="blog-text" />
            <Iframe
              url="https://www.youtube.com/embed/M1bhOaLV4FU"
              width="70%"
              height="450px"
              id="myId"
              className="section-center"
              display="initial"
              position="relative"
            />
            <ReactMarkdown source={review[0].body2} className="blog-text" />

            <Link to="/project" className="btn center-btn">
              projects
            </Link>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    __typename
    allStrapiReviews {
      nodes {
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        slug
        title
        body
        body2
        trailer {
          publicURL
        }
      }
    }
  }
`
export default ComponentName
