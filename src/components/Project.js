import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"

const Project = ({ id, title, image, description, url }) => {
  return (
    <article className="project">
      <Image fluid={image.childImageSharp.fluid} className="project-img" />
      <div className="project-info">
        {/* <h3>My {title}</h3> */}
        {/* <p className="project-desc">{description}</p> */}
        <ReactMarkdown source={description} className="project-desc" />
        <div className="project-links">
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {}

export default Project
