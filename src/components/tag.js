import React from "react"
import cn from "classnames"

import styles from "./tag.module.css"

export default ({ label, count, clickHandler, className }) => (
  <div className={cn(styles.base, className)} onClick={clickHandler}>
    <span className={styles.label}>{label}</span>
    <span className={styles.count}> ({count})</span>
  </div>
)
