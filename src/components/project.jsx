import React from "react"
import Img from "gatsby-image"

const project = props => {
  return (
    <div>
      <Img fluid={props.image.childImageSharp.fluid} />
      <h3>{props.title}</h3>
      <span>{props.desc}</span>
    </div>
  )
}

export default project
