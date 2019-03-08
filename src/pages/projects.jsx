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
        bigben: file(relativePath: { eq: "bigben.jpg" }) {
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
              image={data.bigben}
              title="Bigben"
              desc={"Ecommerce frontend implements in VTEX(Commercial CMS)"}
              skills={["HTML", "CSS", "SASS"]}
              siteURL="http://blablabla"
            />
            <Project
              image={data.proj05}
              title="This site"
              desc={"This site is made with React and GraphQL."}
              skills={["HTML", "CSS", "SASS"]}
              demoURL="http://blablabla"
              codeURL="http://blebleble"
            />
            <Project
              image={data.proj06}
              title="Movee"
              desc={"A React SPA making requests to The MovieDB API."}
              skills={["HTML", "CSS", "SASS"]}
              demoURL="http://blablabla"
              codeURL="http://blebleble"
            />
            <Project
              image={data.proj01}
              title="Landing page"
              desc={"Landing page made with Vue and AOS for the animations."}
              skills={["HTML", "CSS", "SASS"]}
              demoURL="http://blablabla"
              codeURL="http://blebleble"
            />
            <Project
              image={data.proj02}
              title="Bands"
              desc={"A simple SPA made with Vue showcasing a menu animation."}
              skills={["HTML", "CSS", "SASS"]}
              demoURL="http://blablabla"
              codeURL="http://blebleble"
            />
            <Project
              image={data.proj03}
              title="Background video"
              desc={"Video used as a background(can be paused)."}
              skills={["HTML", "CSS", "SASS"]}
              demoURL="http://blablabla"
              codeURL="http://blebleble"
            />
          </div>
          <Link to="/">Go back to the homepage</Link>
        </div>
      </Layout>
    )}
  />
)

export default projectsPage
