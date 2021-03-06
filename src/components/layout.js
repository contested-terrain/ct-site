/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import cn from "classnames"

import Header from "./header"
import "./normalize.css"
import "./global.css"

const Layout = ({ children, className }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuItems {
              displayName
              path
            }
          }
        }
        sitePage {
          path
        }
      }
    `}
    render={data => {
      console.log(data)
      return (
        <div className={cn("container", className)}>
          <Header
            siteTitle={data.site.siteMetadata.title}
            menuItems={data.site.siteMetadata.menuItems}
          />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <main>
              <div style={{ height: 0, borderBottom: "solid 1px gray" }} />
              {children}
            </main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
        </div>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
