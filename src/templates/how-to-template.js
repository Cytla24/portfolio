import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import Image from "gatsby-image"

const ComponentName = ({
  data: {
    allStrapiHowtos: { nodes: howto },
  },
}) => {
  return (
    <Layout>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <h1>{howto[0].title}</h1>
            <div className="blog-text">
              <Image fluid={howto[0].image.childImageSharp.fluid} />
            </div>
            <div className="blog-text">
              <ReactMarkdown source={howto[0].intro} />
            </div>
            <div className="blog-text">
              <h3>STEP 1: Measure and Cut out Wire</h3>
              <Image fluid={howto[0].pic1.childImageSharp.fluid} />
            </div>
            <ReactMarkdown source={howto[0].text1} className="blog-text" />
            {/* <ReactMarkdown source={howto[0].text2} className="blog-text" /> */}
            <div className="blog-text">
              <h3>STEP 2: Loop crimp bead and ring clasp</h3>
              <Image fluid={howto[0].pic2.childImageSharp.fluid} />
            </div>
            <ReactMarkdown source={howto[0].text3} className="blog-text" />
            <div className="blog-text">
              <h3>STEP 3: Tighten end loop and crimp bead</h3>
              <Image fluid={howto[0].pic3.childImageSharp.fluid} />
            </div>
            <ReactMarkdown source={howto[0].text4} className="blog-text" />
            <div className="blog-text">
              <h3>STEP 4: Slip in custom beads</h3>
              <Image fluid={howto[0].pic4.childImageSharp.fluid} />
            </div>
            <ReactMarkdown source={howto[0].text5} className="blog-text" />
            <div className="blog-text">
              <h3>STEP 5: Loop crimp bead and hook clasp</h3>
              <Image fluid={howto[0].pic5.childImageSharp.fluid} />
            </div>
            <ReactMarkdown source={howto[0].text6} className="blog-text" />
            <div className="blog-text">
              <h3>STEP 6: Squeeze crimp bead with plier</h3>
              <Image fluid={howto[0].pic7.childImageSharp.fluid} />
            </div>
            <div className="blog-text">
              <h3>Enjoy</h3>
            </div>
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
    allStrapiHowtos {
      nodes {
        pic1 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pic2 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pic3 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pic4 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pic5 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pic6 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pic7 {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        text1
        text2
        text3
        text4
        text5
        text6
        text7
        title
        slug
        intro
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
export default ComponentName
