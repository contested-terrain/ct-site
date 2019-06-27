import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Filters from "../components/filters.js"

const ResourcesPages = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>Resources</h2>
    <Filters />
  </Layout>
)

export default ResourcesPages
