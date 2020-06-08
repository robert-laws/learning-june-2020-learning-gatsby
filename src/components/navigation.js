import React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <nav>
      <h2 className="logo">Header</h2>
      <div className="nav_links">
        <Link to="/" activeClassName="active">
          Home
        </Link>
        <Link to="/about/" activeClassName="active">
          About Us
        </Link>
        <Link to="/contact/" activeClassName="active">
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navigation
