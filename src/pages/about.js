import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CodeImage from "../components/codeimage"

import "../styles/styles.scss"

import styled from "styled-components"

const Heading = styled.h1`
  margin: 2rem 0
  text-align: center;
  color: #F53;
`

const AboutPage = () => {
  return (
    <Layout>
      <SEO
        title="About this Site"
        description="Information about this site"
        pathname="/about"
      />
      <section>
        <Heading>About this Site</Heading>
        <p>
          This is a site made with{" "}
          <a href="https://www.gatsbyjs.org/">Gatsby</a>.
        </p>
        <CodeImage src={"/express.png"} alt={"ExpressJS"} />
        <CodeImage src={"/react.png"} alt={"React"} />
        <CodeImage src={"/nodejs.png"} alt={"Node"} width={"220px"} />
      </section>
    </Layout>
  )
}

export default AboutPage
