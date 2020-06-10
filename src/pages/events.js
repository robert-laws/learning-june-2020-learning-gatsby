import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Event from "../components/event"

const Events = ({ data }) => {
  return (
    <Layout>
      <SEO title="Events" />
      <section>
        <h1>Events</h1>
        <hr />
        {console.log(data.futureEvents.nodes)}
        {data.futureEvents.nodes.map(event => (
          <Event key={event.id} event={event} />
        ))}
      </section>
    </Layout>
  )
}

export default Events

export const query = graphql`
  {
    futureEvents: allEvent(
      filter: { collection: { eq: "future" } }
      sort: { fields: startDate, order: ASC }
    ) {
      nodes {
        id
        name
        startDate
        endDate
        location
        url
      }
    }
  }
`
