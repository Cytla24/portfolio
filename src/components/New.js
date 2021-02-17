import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

const New = ({ id, title, image, date, category, slug, desc }) => {
  return (
    <Link to={`/news/${slug}`} className="blog" key={id}>
      <article>
        <Image fluid={image.childImageSharp.fluid} className="blog-img" />
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

New.propTypes = {}

export default New
