import React from "react"
import S from "sanctuary"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Filters from "../components/filters"
import List from "../components/list"
import ContentTeaser from "../components/contentTeaser"

import styles from "./resources.module.css"

const matchesAny = things => x => things.some(y => y === x)

const getKeysExcept = keysToStrip => obj =>
  S.reject(matchesAny(keysToStrip))(Object.keys(obj))

const pick = keysToPick => obj =>
  S.reduce(o => k => ({ ...{ [k]: obj[k] }, ...o }))({})(keysToPick)

const flattenResources = rs => r =>
  S.append({
    ...pick(getKeysExcept(["acf"])(r))(r),
    ...S.prop("acf")(r),
  })(rs)

const dataToResources = S.pipe([
  S.value("allWordpressWpResource"),
  S.fromMaybe({}),
  S.value("nodes"),
  S.fromMaybe([]),
  S.reduce(flattenResources)([]),
])

const ResourcesPages = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allWordpressWpResource {
        nodes {
          acf {
            blurb
            excerpt_from_larger_text
            excerpted_from
            link
            resource_author
            topics {
              name
              slug
            }
          }
          title
          link
          id
          date
        }
      }
    }
  `)

  const resources = dataToResources(data)

  return (
    <Layout className={styles.base}>
      <SEO title="Resources" keywords={[`gatsby`, `application`, `react`]} />
      <div className={styles.contentHeader}>
        <h2>Resources</h2>
        <Filters />
      </div>
      <div className={styles.content}>
        <List className="resources">
          {resources.map(r => (
            <ContentTeaser
              title={r.title}
              attribution={r.resource_author}
              blurb={r.blurb}
            />
          ))}
        </List>
      </div>
    </Layout>
  )
}

export default ResourcesPages
