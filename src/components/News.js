import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import New from "./New"
import Blogs from "./Blogs"

const News = ({ news, title, showLink }) => {
  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center blogs-center">
        {news.map(each_news => {
          return <New key={each_news.id} {...each_news} />
        })}
      </div>
      {showLink && (
        <Link to="/news" className="btn center-btn">
          News
        </Link>
      )}
    </section>
  )
}

export default News
