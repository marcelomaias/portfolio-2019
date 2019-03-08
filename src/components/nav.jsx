import React from "react"
import { Link } from "gatsby"

const nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" activeClassName="active">
            Welcome
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default nav
