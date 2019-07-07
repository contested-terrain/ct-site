import React from "react"
import cn from "classnames"

import styles from "./tag.module.css"

export default ({ label, count, onClick, className }) => (
  <div
    className={cn(styles.base, className)}
    data-label={label}
    onClick={onClick}
  >
    <span className={styles.label}>{label}</span>
    <span className={styles.count}> ({count})</span>
  </div>
)
