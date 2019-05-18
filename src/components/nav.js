import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"
import { Link } from "gatsby"

import styles from "./nav.module.css"

////////////// Nav

const Nav = ({ currentPath, children, className }) => (
  <div className={cn(className, styles.main)}>{children}</div>
)

Nav.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string,
}

////////////// Item

const Item = ({ href, isSelected, className, children }) => (
  <Link
    className={cn(className, styles.item, {
      [styles.selected]: isSelected,
    })}
    to={href}
  >
    {children}
  </Link>
)

Item.propTypes = {
  href: PropTypes.string,
  isSelected: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
}

// For Convenience
Nav.Item = Item

export default Nav
