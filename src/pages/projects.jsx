import React from "react"
import { StaticQuery, graphql } from "gatsby"

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
        blogmd: file(relativePath: { eq: "blog-3.png" }) {
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
        proj05: file(relativePath: { eq: "portfolio-2019.jpg" }) {
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
        <SEO
          title="Projects"
          keywords={[`frontend`, `javascript`, `gatsby`, `react`, `sass`]}
        />
        <div id="projects-content">
          {/* <h1>Projects</h1> */}
          <div id="projects">
            <Project
              image={data.bigben}
              title="Bigben"
              desc={"Ecommerce frontend implements in VTEX (Commercial CMS)"}
              skills={["HTML", "SASS", "Javascript"]}
              siteURL="https://www.bigben.com.br/"
            />
            <Project
              image={data.proj05}
              title="This site"
              desc={"This site is made with Gatsby (React + GraphQL)."}
              skills={["Gatsby", "React", "GraphQL", "SASS"]}
              demoURL=""
              codeURL="https://github.com/marcelomaias/portfolio-2019"
            />
            <Project
              image={data.blogmd}
              title="Markdown blog"
              desc={"A Gatsby static blog that loads Markdown files as posts."}
              skills={["Gatsby", "React", "GraphQL", "SASS"]}
              demoURL="/projects/blog-markdown/"
              codeURL="https://github.com/marcelomaias/gatsby-blog"
            />
            <Project
              image={data.proj06}
              title="Movee"
              desc={"A React SPA making requests to The MovieDB API."}
              skills={["React", "SASS"]}
              demoURL="/projects/moovee"
              codeURL="https://github.com/marcelomaias/moovee"
            />
            <Project
              image={data.proj01}
              title="Landing page"
              desc={"Landing page made with Vue and AOS for the animations."}
              skills={["VueJS", "SASS", "Vuetify"]}
              demoURL="/projects/vue-landing"
              codeURL="https://github.com/marcelomaias/vue-landing"
            />
            <Project
              image={data.proj02}
              title="Bands"
              desc={"A simple SPA made with Vue showcasing a menu animation."}
              skills={["VueJS", "SASS"]}
              demoURL="/projects/vue-bands"
              codeURL="https://github.com/marcelomaias/vue-bands"
            />
            <Project
              image={data.proj03}
              title="Background video"
              desc={"Video used as a background(can be paused)."}
              skills={["HTML", "CSS", "Javascript"]}
              demoURL="/projects/video-bg"
              codeURL="https://github.com/marcelomaias/video-background"
            />
          </div>
        </div>
      </Layout>
    )}
  />
)

export default projectsPage
