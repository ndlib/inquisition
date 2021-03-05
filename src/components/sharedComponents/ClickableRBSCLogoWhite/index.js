/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import { jsx, Image } from 'theme-ui'
import ndLogo from '@ndlib/gatsby-theme-marble/src/assets/logos/rbsc-logo.svg'

const ClickableRBSCLogoWhite = ({ variant }) => {
  return (
    <div sx={{ variant: variant }}>
      <a href='https://rarebooks.library.nd.edu/' >
        <Image src={ndLogo} alt='Rare Books & Special Collections, Hesburgh Libraries, University of Notre Dame' />
      </a>
    </div>
  )
}

ClickableRBSCLogoWhite.propTpyes = {
  variant: PropTypes.string,
}

ClickableRBSCLogoWhite.defaultProps = {
  variant: 'ClickableRBSCLogoWhite.primary',
}

export default ClickableRBSCLogoWhite
