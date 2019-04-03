import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../scss/_fontello.scss"
import maiaPic from "../images/maia.jpg"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div>
        <img src={maiaPic} alt="Marcelo pic" />
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <h2>Frontend web developer</h2>
        <section className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>SASS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>VueJS</span>
          <span>NodeJS</span>
          <span>Git</span>
          <span>Gulp</span>
        </section>
        <h3>Backend Experience</h3>
        <section className="skills">
          <span>Apache</span>
          <span>Nginx</span>
          <span>NodeJS</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>Drupal</span>
          <span>Composer</span>
        </section>
        <div className="social">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/marcelomaia/"
          >
            <i className="icon-linkedin" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/marcelomaias"
          >
            <i className="icon-github" />
          </a>
        </div>
        <small>
          I can also play electric bass if needed.
          <i className="icon-emo-laugh" />
        </small>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
