/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import { jsx, Image } from 'theme-ui'
import ndLogo from '@ndlib/gatsby-theme-marble/src/assets/logos/ND_mark_white.svg'

const ClickableNDLogoWhite = ({ variant, width, height }) => {
  return (
    <div sx={{ variant: variant }}>
      <a href='https://nd.edu' title='University of Notre Dame'>
        <Image src={ndLogo} width={width} height={height} alt='University of Notre Dame' />
      </a>
    </div>
  )
}

ClickableNDLogoWhite.propTpyes = {
  variant: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

ClickableNDLogoWhite.defaultProps = {
  variant: 'ClickableNDLogoWhite.primary',
  width: 180,
  height: 42.2,
}

export default ClickableNDLogoWhite
