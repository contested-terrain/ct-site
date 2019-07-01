import React from "react"
import cn from "classnames"
import { useStaticQuery, graphql } from "gatsby"
import Tag from "./tag"

import styles from "./filters.module.css"

const getFilters = data => {
  if (!data.allWordpressTag) {
    return []
  }

  return data.allWordpressTag.nodes.map(tags => tags.name)
}

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressTag {
        nodes {
          name
        }
      }
    }
  `)

  const filterNames = getFilters(data)

  return (
    <div className={cn("filters", styles.main)}>
      {filterNames.map(f => (
        <Tag
          key={f}
          label={f}
          clickHandler={() => {
            console.log(`filter click: ${f}`)
          }}
        />
      ))}
    </div>
  )
}
