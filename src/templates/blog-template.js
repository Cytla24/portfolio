import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"

const ComponentName = ({ data }) => {
  const { content } = data.EachNews

  return (
    <Layout>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
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
  query GetSingleNew($slug: String) {
    EachNews: strapiNews(slug: { eq: $slug }) {
      content
    }
  }
`

export default ComponentName
