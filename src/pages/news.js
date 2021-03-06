import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import News from "../components/News"
// ...GatsbyImageSharpFluid

const news = ({
  data: {
    allStrapiNews: { nodes: news },
  },
}) => {
  return (
    <Layout>
      <section className="blog-page">
        <News news={news} title="news" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    __typename
    allStrapiNews {
      nodes {
        slug
        desc
        date(formatString: "MMMM Do, YYYY")
        title
        id
        category
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

export default news
