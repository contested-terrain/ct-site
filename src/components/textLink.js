import React from "react"
import cn from "classnames"

import styles from "./textLink.module.css"

export default ({ className, children, target, href, ...rest }) => (
  <a className={cn(className, styles.base)} href={href} target={target}>
    {children}
  </a>
)
