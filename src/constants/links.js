import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "news",
    url: "/news/",
  },
  {
    id: 3,
    text: "bio",
    url: "/bio/",
  },
  {
    id: 4,
    text: "usability",
    url: "/usability/",
  },
  {
    id: 5,
    text: "project",
    url: "/project/",
  },
  {
    id: 6,
    text: "demo",
    url: "/demo/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
