/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { jsx, Container } from 'theme-ui'
import PropTypes from 'prop-types'
import App from '../../siteapp'
import MarbleBrandFooter from '../MarbleBrandFooter'
import NDBrandHeader from '../NDBrandHeader'
import ClickableRBSCLogoWhite from '../ClickableRBSCLogoWhite'

const gutterWidth = '5vw'

const NDBrandLayout = ({ location, children, pageHeader }) => {
  return (
    <Container sx={{
      display: 'grid',
      minHeight: '100%',
      gridTemplateRows: '[header-start] auto [header-end main-start] minmax(auto, 1fr) [main-end footer-start] auto [footer-end]',
    }}>
      <App location={location}>
        <NDBrandHeader location={location} />
        <div id='content' sx={{
          gridTemplateColumns: `[screen-start] ${gutterWidth} [container-start sidebar-start] var(--sidebar-width) [sidebar-end content-start] minmax(0, 1fr) [content-end container-end] ${gutterWidth} [screen-end]`,
        }}>
          <div id='page-header' sx={{ gridColumn: 'screen', gridRow: 'header' }}>
            {pageHeader}
          </div>
          <main sx={{
            gridColumn: 'container',
            gridRow: 'content',
          }}>
            {children}
          </main>
          <MarbleBrandFooter logo={(<ClickableRBSCLogoWhite />)} />
        </div>
      </App>
    </Container>
  )
}

NDBrandLayout.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  pageHeader: PropTypes.object,
}
export default NDBrandLayout
