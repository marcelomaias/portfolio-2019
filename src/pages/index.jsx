import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="home-content">
      <p>
        I'm Marcelo Maia, a self-taught front-end web developer with a love of
        performant, beautiful, and usable web applications.
      </p>
      <p>
        While mostly focusing on the client side, I also have experience working
        with backend technologies like Apache, PHP, MySQL and Drupal.
      </p>
      {/* <Image /> */}
    </div>
    {/* <Link to="/about/">Go to the About Page</Link> */}
  </Layout>
)

export default IndexPage
