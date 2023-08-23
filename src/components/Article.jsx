import React from "react"

const Article = ({ title, origin, image, content }) => {
  return (
    <article>
      <h2>{title}</h2>
      <h3>
        Origin: <b>{origin}</b>
      </h3>
      <img src={image} alt={"photo de " + title} />
      <p>{content}</p>
    </article>
  )
}

export default Article
