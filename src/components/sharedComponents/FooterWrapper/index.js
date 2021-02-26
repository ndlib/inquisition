/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from 'theme-ui'
import Menu from '@ndlib/gatsby-theme-marble/src/components/Shared/Menu'
import sx from './sx'
import theme from '../../../gatsby-plugin-theme-ui'
import Column from 'components/Shared/Column'
import MultiColumn from 'components/Shared/MultiColumn'
import ndLogo from '@ndlib/gatsby-theme-marble/src/assets/logos/ND_mark_white.svg'

export const FooterWrapper = ({ location, children }) => {
  return (
    <footer sx={theme.styles.Footer}>
      <MultiColumn columns='3'>
        <Column>
          {children}
        </Column>
        <Column>
          <Menu menu='footer' />
        </Column>
        <Column>
          <a href='https://nd.edu' className='desktop'>
            <img
              src={ndLogo}
              sx={sx.ndLogo}
              alt='University of Notre Dame'
            />
          </a>
        </Column>
      </MultiColumn>
    </footer>
  )
}

FooterWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default FooterWrapper
