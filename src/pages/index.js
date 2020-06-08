import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ParagraphWrapper = styled.div`
  border-radius: 1rem;
  background: #fff;
  border: 1px solid #ddd;
  padding: 1rem 1rem 0;
  margin: 1rem 0;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello Everyone!</h1>

    <ParagraphWrapper>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </ParagraphWrapper>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
