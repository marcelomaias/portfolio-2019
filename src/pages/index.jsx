import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import logoHTML from "../images/logos/logo-html.svg"
import logoCSS from "../images/logos/logo-css.svg"
import logoSASS from "../images/logos/logo-sass.svg"
import logoReact from "../images/logos/logo-react.svg"
import logoVue from "../images/logos/logo-vue.svg"
import logoNode from "../images/logos/logo-node.svg"
import logoGulp from "../images/logos/logo-gulp.svg"
import logoGit from "../images/logos/logo-git.svg"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`frontend`, `javascript`, `gatsby`, `react`, `sass`]}
    />

    <div id="page-content">
      <p>
        I'm Marcelo Maia, a self-taught front-end web developer with a love of
        performant, beautiful, and usable web applications.
      </p>
      <p>
        While mostly focusing on the client side, I also have experience working
        with backend technologies like NodeJS, Express and MongoDB.
      </p>
    </div>

    <div className="logos">
      <img src={logoHTML} alt="Logo HTML" />
      <img src={logoCSS} alt="Logo CSS" />
      <img src={logoSASS} alt="Logo SASS" />
      <img src={logoReact} alt="Logo React" />
      <img src={logoVue} alt="Logo Vue" />
      <img src={logoNode} alt="Logo Node" />
      <img src={logoGulp} alt="Logo Gulp" />
      <img src={logoGit} alt="Logo Git" />
    </div>
  </Layout>
)

export default IndexPage
