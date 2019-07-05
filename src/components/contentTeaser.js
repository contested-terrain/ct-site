import React from "react"
import cn from "classnames"
import Item from "./item"

import styles from "./contentTeaser.module.css"

export default ({ title, attribution, blurb }) => {
  return (
    <Item className={cn("teaser", styles.base)}>
      <h3 className={styles.title}>{title}</h3>
      <h5 className={styles.attribution}>{attribution}</h5>
      <div className={styles.blurb}>{blurb}</div>
    </Item>
  )
}
