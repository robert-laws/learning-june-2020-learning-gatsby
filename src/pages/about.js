import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CodeImage from "../components/codeimage"

const AboutPage = () => {
  return (
    <Layout>
      <SEO
        title="About this Site"
        description="Information about this site"
        pathname="/about"
      />
      <section>
        <h1>About this Site</h1>
        <p>This is a site made with Gatsby.</p>
        <CodeImage src={"/express.png"} alt={"ExpressJS"} />
        <CodeImage src={"/react.png"} alt={"React"} />
        <CodeImage src={"/nodejs.png"} alt={"Node"} width={"220px"} />
      </section>
    </Layout>
  )
}

export default AboutPage
