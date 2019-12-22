import React from "react"
import { Link, StaticQuery } from "gatsby"

class BookContents extends React.Component {
  data_to_jsx(data) {
    return data.allMarkdownRemark.group.map((chapter, index) => (
      <div key={"chapter-" + (index + 1).toString()}>
        <p>
          <Link to={chapter.edges[0].node.fields.slug}>
            CHAPTER {index + 1} -{" "}
            {chapter.edges[0].node.fields.chapter.split("_")[1].toUpperCase()}{" "}
          </Link>
        </p>
        {chapter.edges
          .slice(1)
          .sort(function(a, b) {
            return Number(a.node.frontmatter.section) >
              Number(b.node.frontmatter.section)
              ? 1
              : -1
          })
          .map(({ node }) => (
            <p key={node.fields.slug}>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </p>
          ))}
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
