import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Img from "gatsby-image"
import { graphql } from "gatsby"

const Contact = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="About this Site"
        description="Information about this site"
        pathname="/about"
      />
      <section>
        <h2>Contact Us here....</h2>
        <Img fixed={data.bodyImage.childImageSharp.fixed} alt="Robot" />
      </section>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  {
    bodyImage: file(relativePath: { eq: "dolly-callout.png" }) {
      childImageSharp {
        fixed(width: 288, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
