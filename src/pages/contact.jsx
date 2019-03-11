import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact"
      keywords={[`frontend`, `javascript`, `gatsby`, `react`, `sass`]}
    />

    <div id="page-content" className="contact-page">
      <div>
        <p>You can get in touch through the social networks below:</p>
        <div className="social">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/marcelomaia/"
          >
            <i className="icon-linkedin" />
            <div>LinkedIn</div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/marcelomaias"
          >
            <i className="icon-github" />
            <div>GitHub</div>
          </a>
        </div>
      </div>
      <div>
        <p>
          If you prefer, you can reach me by email at
          <a href="mailto:marcelomaias@gmail.com"> marcelomaias@gmail.com</a>.
        </p>
      </div>
    </div>
  </Layout>
)

export default ContactPage
