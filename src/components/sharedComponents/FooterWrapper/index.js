/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from 'theme-ui'
import Menu from '@ndlib/gatsby-theme-marble/src/components/Shared/Menu'
import sx from './sx'
import theme from '../../../gatsby-plugin-theme-ui'

export const FooterWrapper = ({ location, children }) => {
  return (
    <footer sx={theme.styles.Footer}>
      <div sx={sx.flexWrapper}>
        <div sx={sx.textWrapper}>
          {children}
        </div>
        <div sx={sx.menuWrapper}>
          <Menu menu='footer' />
        </div>
      </div>
    </footer>
  )
}

FooterWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default FooterWrapper
