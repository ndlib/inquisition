/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import { Footer as ThemeFooter, jsx } from 'theme-ui'
import Menu from 'components/Shared/Menu'
import sx from './sx'

export const FooterWrapper = ({ location, children }) => {
  return (
    <ThemeFooter>
      <div sx={sx.flexWrapper}>
        <div sx={sx.textWrapper}>
          {children}
        </div>
        <div sx={sx.menuWrapper}>
          <Menu menu='footer' />
        </div>
      </div>
    </ThemeFooter>
  )
}

FooterWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default FooterWrapper
