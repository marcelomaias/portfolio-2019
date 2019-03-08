import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      {
        profilePic: file(relativePath: { eq: "maia.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        <Img fluid={data.profilePic.childImageSharp.fluid} />
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
          <span>PHP</span>
          <span>MySQL</span>
          <span>Drupal</span>
          <span>Drush</span>
          <span>Composer</span>
        </section>
      </header>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
