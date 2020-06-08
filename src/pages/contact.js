import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <SEO
        title="About this Site"
        description="Information about this site"
        pathname="/about"
      />
      <section>
        <h2>Contact Us here....</h2>
      </section>
    </Layout>
  )
}

export default Contact
