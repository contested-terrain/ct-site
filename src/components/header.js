import { globalHistory } from "@reach/router"
import PropTypes from "prop-types"
import React from "react"
import Branding from "./branding"
import Nav from "./nav"

import styles from "./header.module.css"

const Header = ({ siteTitle, menuItems }) => {
  return (
    <header className={styles.main}>
      <Branding className={styles.branding} siteTitle={siteTitle} />
      <Nav className={styles.nav}>
        {menuItems.map(({ displayName, path }) => (
          <Nav.Item
            href={path}
            isSelected={globalHistory.location.pathname === path}
          >
            {displayName}
          </Nav.Item>
        ))}
      </Nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
