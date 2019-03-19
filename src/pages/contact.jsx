import React from "react"
import axios from "axios"

import Layout from "../components/layout"
import SEO from "../components/seo"

class ContactPage extends React.Component {
  state = {
    name: "",
    // lastname: "",
    email: "",
    message: "",
    mailSent: false,
    validForm: false,
  }

  handleInputForm = event => {
    this.setState({ [event.target.name]: event.target.value })
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.message !== ""
      // this.state.lastname === ""
    ) {
      this.setState({
        validForm: true,
      })
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    const content = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    }
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
    axios
      .post(
        "https://hooks.zapier.com/hooks/catch/3107201/lqp2co/",
        content,
        config
      )
      .then(response => {
        this.setState({
          mailSent: true,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    console.log(this.state)
    return (
      <Layout>
        <SEO
          title="Contact"
          keywords={[`frontend`, `javascript`, `gatsby`, `react`, `sass`]}
        />

        <div id="page-content" className="contact-page">
          <div>
            {this.state.mailSent ? (
              <div className="thanksMessage">
                Thank you for getting in touch! <br /> I will get back to you
                shortly.
              </div>
            ) : (
              <form onSubmit={this.handleSubmit}>
                <p>I few ways to get in touch:</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={this.handleInputForm}
                  value={this.state.name}
                />

                {/* <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  onChange={this.handleInputForm}
                  value={this.state.lastname}
                /> */}

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleInputForm}
                  value={this.state.email}
                />

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Message"
                  onChange={this.handleInputForm}
                  value={this.state.message}
                />

                <div className="button">
                  <button type="submit" disabled={!this.state.validForm}>
                    Send
                  </button>
                </div>
              </form>
            )}
          </div>
          <div>
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
              <p className="email">
                <a href="mailto:marcelomaias@gmail.com">
                  marcelomaias@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ContactPage
