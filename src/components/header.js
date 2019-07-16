import { globalHistory } from "@reach/router"
import PropTypes from "prop-types"
import React, { useState } from "react"
import cn from "classnames"
import Branding from "./branding"
import Nav from "./nav"
import BarsButton from "./bars-button"

import styles from "./header.module.css"

const Header = ({ siteTitle, menuItems }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.base}>
      <Branding className={styles.branding} siteTitle={siteTitle} />
      <div className={styles.menuButton}>
        <BarsButton size={32} clickHandler={() => setMenuOpen(!menuOpen)} />
      </div>
      <Nav className={cn(styles.navMenu, { [styles.closed]: !menuOpen })}>
        {menuItems.map(({ displayName, path }) => (
          <Nav.Item
            className={styles.menuItem}
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
