const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const section = path.resolve(`./src/templates/section.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: {
            fields: [fields___chapter, frontmatter___section]
            order: ASC
          }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                chapter
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === 0 ? null : posts[index - 1].node
    const next = index === posts.length - 1 ? null : posts[index + 1].node

    createPage({
      path: post.node.fields.slug,
      component: section,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode }).split("/")[1]
    createNodeField({
      name: `chapter`,
      node,
      value,
    })
  }
}
