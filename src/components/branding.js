import React from "react"
import cn from "classnames"
import { Link } from "gatsby"

import styles from "./branding.module.css"

const Branding = ({ siteTitle, className }) => (
  <h1 className={cn(className, styles.main)}>
    <Link to="/">{siteTitle}</Link>
  </h1>
)

export default Branding
