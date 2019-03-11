import React from "react"
import Img from "gatsby-image"

const project = props => {
  return (
    <div>
      <div className="imgContainer">
        <Img fluid={props.image.childImageSharp.fluid} />
        <div className="skills">
          {props.skills.map(skill => (
            <span key={skill.toString()}>{skill}</span>
          ))}
        </div>
      </div>
      <div className="links">
        {props.siteURL ? (
          <a href={props.siteURL} target="_blank" rel="noopener noreferrer">
            Site <i className="icon-link-ext" />
          </a>
        ) : null}
        {props.demoURL ? (
          <a href={props.demoURL} target="_blank" rel="noopener noreferrer">
            Demo <i className="icon-link-ext" />
          </a>
        ) : null}
        {props.codeURL ? (
          <a href={props.codeURL} target="_blank" rel="noopener noreferrer">
            Code <i className="icon-github" />
          </a>
        ) : null}
      </div>
      <h3>{props.title}</h3>
      <span>{props.desc}</span>
    </div>
  )
}

export default project
