import React from "react"
import cn from "classnames"
import Item from "./item"
import TextLink from "./textLink"

import styles from "./contentTeaser.module.css"

export default ({ title, attribution, link, blurb }) => {
  return (
    <Item className={cn("teaser", styles.base)}>
      <h2 className={styles.title}>
        <TextLink className={styles.link} href={link}>
          {title}
        </TextLink>
      </h2>
      <h3 className={styles.attribution}>{attribution}</h3>
      <div className={styles.blurb}>{blurb}</div>
    </Item>
  )
}
