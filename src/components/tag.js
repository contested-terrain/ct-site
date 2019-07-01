import React from "react"
import cn from "classnames"

import test from "../css/utilities.css"
import styles from "./tag.module.css"

console.log(test.red)
console.log(styles)

export default ({ label, clickHandler }) => (
  <div className={cn("tag", styles.main, test.red)} onClick={clickHandler}>
    <span class="tag__label">{label}</span>
  </div>
)
