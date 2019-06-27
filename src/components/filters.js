import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
    <div className="filters">
      {filterNames.map(f => (
        <div>{f}</div>
      ))}
    </div>
  )
}
