import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"


const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid {
       ...GatsbyImageSharpFluid 
      }
    }
  }
}
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid }, 
    },
  } = useStaticQuery(query);

  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
          <h1>I'm Aimie</h1>
          <h4>Purpose</h4>
          <p>Welcome! Let me give you some insight into 
           my life.<br></br> This portfolio would serve as a way to showcase  <br></br>
             my work as a Software Engineer. It would include various <br></br>
            projects, websites and scripts I have written. It would <br></br> 
            also include my resume and contact information. Have fun!</p>
        </div>
      </article>
      <Image fluid={fluid} className="hero-img" />
    </div>
  </header>
}

export default Hero
