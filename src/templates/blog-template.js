import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import Image from "gatsby-image"

const ComponentName = ({ data }) => {
  const { content } = data.EachNews
  const { image } = data.EachNews
  const { title } = data.EachNews

  return (
    <Layout>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <h1>{title}</h1>
            <Image fluid={image.childImageSharp.fluid} />
            <ReactMarkdown source={content} className="blog-text" />
            <Link to="/news" className="btn center-btn">
              news
            </Link>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getSingleNew($slug: String) {
    EachNews: strapiNews(slug: { eq: $slug }) {
      content
      title
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default ComponentName
