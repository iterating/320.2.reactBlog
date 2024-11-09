import React from "react"
import "../App.css"

function Article({ date, title, imageUrl, content }) {
  return (
    <article className="article">
      <h2>{date}</h2>
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} className="article-image" />
      <p>{content}</p>
      <a href="#" className="read-more">
        Continues ...
      </a>
    </article>
  )
}

export default Article
