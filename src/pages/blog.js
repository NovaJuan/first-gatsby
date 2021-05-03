import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <h1>Latest Posts</h1>
      {data.allMarkdownRemark.nodes.map(post => (
        <div key={post.id}>
          <h3>{post.frontmatter.title}</h3>
          <small>
            Posted By {post.frontmatter.author} on {post.frontmatter.date}
          </small>
          <br />
          <br />
          <Link to={post.frontmatter.path}>Read more...</Link>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query BlogPage {
    allMarkdownRemark {
      nodes {
        id
        fileAbsolutePath
        frontmatter {
          path
          title
          date
          author
        }
      }
    }
  }
`
