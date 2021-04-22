/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { jsx, Container } from 'theme-ui'
import PropTypes from 'prop-types'
import App from '../../siteapp'
import MarbleBrandFooter from '../MarbleBrandFooter'
import NDBrandHeader from '../NDBrandHeader'
import NDBrandSection from '../NDBrandSection'
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
          gridTemplateColumns: `[screen-start] ${gutterWidth} [container-start sidebar-start] 22vw [sidebar-end content-start] minmax(0, 1fr) [content-end container-end] ${gutterWidth} [screen-end]`,
          gridTemplateRows: `[header-start] auto [header-end content-start] 1fr [content-end]`,
        }}>
          <div id='page-header'>
            {pageHeader}
          </div>
          <main sx={{
            gridColumn: 'container',
            gridRow: 'content',
            position: 'relative',
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: '0',
              bottom: '0',
              left: '70vw',
              width: '100vw',
              zIndex: '-1',
              background: '#fff',
            },
          }}>
            {children}
          </main>
          <NDBrandSection variant='fullBleedLight'>
            <p>
                    For more information about the collection, for appointments to view items for research purposes, or for rights and reproductions,
                    please email us at <a href='mailto:rarebooks@nd.edu'>rarebooks@nd.edu</a> or visit <a href='https://rarebooks.library.nd.edu/using/'>our website</a>.
            </p>
          </NDBrandSection>
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
