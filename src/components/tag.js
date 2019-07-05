import React from "react"
import cn from "classnames"

import test from "../css/utilities.css"
import styles from "./tag.module.css"

export default ({ label, clickHandler, className }) => (
  <div className={cn(styles.base, className)} onClick={clickHandler}>
    <span className={styles.label}>{label}</span>
  </div>
)
