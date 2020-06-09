/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Event implements Node @dontInfer {
      id: ID!
      name: String!
      location: String!
      startDate: Date! @dateformat @proxy(from: "start_date")
      endDate: Date! @dateformat @proxy(from: "end_date")
      url: String!
      collection: String!
    }
  `)
}

exports.createResolvers = ({ createResolvers, getNode }) => {
  const collection = source => getNode(source.parent).relativeDirectory

  createResolvers({
    Event: {
      collection: {
        resolve: source => collection(source),
      },
    },
  })
}
