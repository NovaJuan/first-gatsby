import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo
      title="Home"
      meta={[{ name: "description", content: "This is my Gatsby site!" }]}
    />
    <h1>Welcome to My Site</h1>
    <p>This is my Gatsby Site</p>
    <Link to="/about">About Us</Link>
    <Link to="/services">Services</Link>
  </Layout>
)

export default IndexPage
