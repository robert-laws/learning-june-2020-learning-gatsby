import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query siteNavigationQuery {
      site {
        siteMetadata {
          navigation {
            name
            url
          }
        }
      }
    }
  `)
  return (
    <nav>
      <h2 className="logo">Header</h2>
      <div className="nav_links">
        {data.site.siteMetadata.navigation.map((link, index) => (
          <Link key={index} to={link.url} activeClassName="active">
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
