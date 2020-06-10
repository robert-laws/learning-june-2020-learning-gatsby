import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const Article = ({ data }) => {
  const article = data.markdownRemark

  return (
    <Layout>
      <article>
        <h2>{article.frontmatter.title}</h2>
        <p>by {article.frontmatter.author}</p>
      </article>
    </Layout>
  )
}

export default Article

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        subject
        author
      }
    }
  }
`
