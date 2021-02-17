import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import News from "../components/News"

export default ({ data }) => {
  const {
    allStrapiNews: { nodes: news },
  } = data

  return (
    <Layout>
      <Hero />
      {/* <News news={news} title="news" showLink /> */}
    </Layout>
  )
}
// ...GatsbyImageSharpFluid

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
