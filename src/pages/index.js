import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BookContents from "../components/book_contents"
import { rhythm } from "../utils/typography"

class BookIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const chapters = data.allMarkdownRemark.group
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        {BookContents(chapters)}
      </Layout>
    )
  }
}

export default BookIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___section], order: ASC }) {
      group(field: fields___chapter) {
        edges {
          node {
            excerpt
            fields {
              slug
              chapter
            }
            frontmatter {
              title
              description
              section
            }
          }
        }
      }
    }
  }
`
