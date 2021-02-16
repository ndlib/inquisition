/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Header, jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import LoginButton from '@ndlib/gatsby-theme-marble/src/components/Layout/PageWrapper/NavigationHeader/LoginButton'
import ndLogo from 'assets/images/ND_mark_white.svg'
import sx from './sx'
import WordMark from 'components/Layout/PageWrapper/NavigationHeader/WordMark'

export const SmallHeaderWrapper = ({ location, children }) => {
  return (
    <Header>
      <WordMark />
      <div sx={sx.wrapper}>
        {children}
      </div>
      <div sx={sx.secondRow}>
        <div sx={sx.triangleTopright} />
        <div sx={sx.rightOfTriangle} />
      </div>
      <div sx={sx.topBar}>
        <div sx={sx.extraTriangle} />
        <Link
          to='/exhibits'
          sx={sx.exhibitsLink}
        >Digital Exhibits
        </Link>
        <Link
          to='/browse'
          sx={sx.browseLink}
        >Browse
        </Link>
        <div sx={sx.loginWrapper}>
          <LoginButton location={location} />
        </div>
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
    </Header>
  )
}

SmallHeaderWrapper.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
}
export default SmallHeaderWrapper
