import React from "react"
import { Link, StaticQuery } from "gatsby"

class BookContents extends React.Component {
  data_to_jsx(data) {
    return data.allMarkdownRemark.group.map((chapter, index) => (
      <div key={"chapter-" + (index + 1).toString()}>
        <h2>
          Chapter {index + 1} -{" "}
          {chapter.edges[0].node.fields.chapter.split("_")[1]}{" "}
        </h2>
        <ol>
          {chapter.edges
            .sort(function(a, b) {
              return Number(a.node.frontmatter.section) >
                Number(b.node.frontmatter.section)
                ? 1
                : -1
            })
            .map(({ node }) => (
              <li key={node.fields.slug}>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </li>
            ))}
        </ol>
      </div>
    ))
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              sort: { fields: [frontmatter___section], order: ASC }
            ) {
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
        `}
        render={this.data_to_jsx}
      />
    )
  }
}

export default BookContents
