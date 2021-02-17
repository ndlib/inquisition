/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import Menu from '@ndlib/gatsby-theme-marble/src/components/Shared/Menu'
import ndLogo from '@ndlib/gatsby-theme-marble/src/assets/logos/ND_mark_white.svg'
import WordMark from 'components/Layout/PageWrapper/NavigationHeader/WordMark'
import sx from './sx'
import theme from '../../../gatsby-plugin-theme-ui'

export const LargeHeaderWrapper = ({ location, children }) => {
  return (
    <header sx={theme.styles.Header}>
      <WordMark />
      <div sx={sx.wrapper}>
        {children}
      </div>
      <div sx={sx.secondRow}>
        <div sx={sx.triangleTopright} />
        <div sx={sx.rightOfTriangle} />
      </div>
      <div sx={sx.topBar}>
        <Menu menu='top' />
      </div>
      <div className='logo'>
        <a href='https://nd.edu' className='desktop'>
          <img
            src={ndLogo}
            sx={sx.ndLogo}
            alt='University of Notre Dame'
          />
        </a>
      </div>
    </header>
  )
}

LargeHeaderWrapper.propTpyes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
}

export default LargeHeaderWrapper
