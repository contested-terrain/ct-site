import React, { useState } from "react"
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
  S.prop("allWordpressWpResource"),
  S.prop("nodes"),
  S.reduce(flattenResources)([]),
])

// Don't check on value of topics (i.e. use S.K(true) == (x => true))
// because from context we can assume that topics is well-formed.
const getFilters = S.pipe([
  S.map(S.get(S.K(true))("topics")),
  S.justs,
  S.join,
  S.map(S.prop("name")),
  S.reduce(map => key =>
    S.insert(key)(S.fromMaybe(0)(S.value(key)(map)) + 1)(map)
  )({}),
])

const resourceHasTopic = topic =>
  S.pipe([S.prop("topics"), S.any(x => S.equals(topic)(S.prop("name")(x)))])

const filterResources = activeFilter => resources =>
  activeFilter ? S.filter(resourceHasTopic(activeFilter))(resources) : resources

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

  const [activeFilter, setActiveFilter] = useState(false)

  const resources = dataToResources(data)
  const filters = getFilters(resources)

  return (
    <Layout className={styles.base}>
      <SEO title="Resources" keywords={[`gatsby`, `application`, `react`]} />
      <div className={styles.contentHeader}>
        <h2>Resources</h2>
        <Filters
          filters={filters}
          handleFilterClick={e => {
            const getFilterLabel = S.props([
              "currentTarget",
              "dataset",
              "label",
            ])
            setActiveFilter(getFilterLabel(e))
          }}
        />
      </div>
      <div className={styles.content}>
        <List className="resources">
          {filterResources(activeFilter)(resources).map(r => (
            <ContentTeaser
              key={r.id}
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
