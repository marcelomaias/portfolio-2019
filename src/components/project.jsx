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
          <a href={props.siteURL}>
            Site <i class="icon-link-ext" />
          </a>
        ) : null}
        {props.demoURL ? (
          <a href={props.demoURL}>
            Demo <i class="icon-link-ext" />
          </a>
        ) : null}
        {props.codeURL ? (
          <a href={props.codeURL}>
            Code <i class="icon-github" />
          </a>
        ) : null}
      </div>
      <h3>{props.title}</h3>
      <span>{props.desc}</span>
    </div>
  )
}

export default project
