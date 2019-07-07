import React from "react"
import S from "sanctuary"
import cn from "classnames"
import Tag from "./tag"

import styles from "./filters.module.css"

const buildTags = (fs, handleFilterClick) =>
  S.reduce(xs => x => {
    return S.append(
      <Tag key={x} label={x} count={fs[x]} onClick={handleFilterClick} />
    )(xs)
  })([])(S.keys(fs))

export default ({ filters, handleFilterClick }) => {
  return (
    <div className={cn("filters", styles.main)}>
      {buildTags(filters, handleFilterClick)}
    </div>
  )
}
