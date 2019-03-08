import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Project from "../components/project"
import SEO from "../components/seo"

const projectsPage = () => (
  <StaticQuery
    query={graphql`
      {
        proj01: file(relativePath: { eq: "proj01.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        proj02: file(relativePath: { eq: "proj02.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        proj03: file(relativePath: { eq: "proj03.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        proj04: file(relativePath: { eq: "proj04.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        proj05: file(relativePath: { eq: "proj05.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        proj06: file(relativePath: { eq: "proj06.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Projects" />
        <div id="projects-content">
          <h1>Projects</h1>
          <div id="projects">
            <Project
              image={data.proj01}
              title="Project One"
              desc={"Bla bla bla"}
            />
            <Project
              image={data.proj02}
              title="Project Two"
              desc={"Bla bla bla"}
            />
            <Project
              image={data.proj03}
              title="Project Three"
              desc={"Bla bla bla"}
            />
            <Project
              image={data.proj04}
              title="Project Four"
              desc={"Bla bla bla"}
            />
            <Project
              image={data.proj05}
              title="Project Five"
              desc={"Bla bla bla"}
            />
            <Project
              image={data.proj06}
              title="Project Six"
              desc={"Bla bla bla"}
            />
          </div>
          <Link to="/">Go back to the homepage</Link>
        </div>
      </Layout>
    )}
  />
)

export default projectsPage
