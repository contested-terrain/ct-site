import React from "react"
import S from "sanctuary"
import cn from "classnames"
import Tag from "./tag"

import styles from "./filters.module.css"

const buildTags = obj =>
  S.reduce(xs => x => {
    return S.append(<Tag key={x} label={x} count={obj[x]} />)(xs)
  })([])(S.keys(obj))

export default ({ filters }) => {
  return <div className={cn("filters", styles.main)}>{buildTags(filters)}</div>
}
