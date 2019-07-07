import React from "react"
import S from "sanctuary"
import cn from "classnames"
import Tag from "./tag"

import styles from "./filters.module.css"

const buildTags = (fs, activeFilter, handleFilterClick) =>
  S.reduce(xs => x => {
    return S.append(
      <Tag
        key={x}
        label={x}
        count={fs[x]}
        selected={x === activeFilter}
        onClick={handleFilterClick}
      />
    )(xs)
  })([])(S.keys(fs))

export default ({ filters, activeFilter, handleFilterClick }) => {
  return (
    <div className={cn("filters", styles.main)}>
      {buildTags(filters, activeFilter, handleFilterClick)}
    </div>
  )
}
