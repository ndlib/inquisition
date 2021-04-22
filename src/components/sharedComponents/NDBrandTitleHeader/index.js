/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import { jsx, Heading } from 'theme-ui'

export const NDBrandTitleHeader = ({ location, variant, title }) => {
  const gutterWidth = '5vw'

  return (
    <div id='page-header' variant={`pageHeaders.${variant}`} sx={{
      position: 'relative',
      display: 'grid',
      gridColumn: 'screen',
      gridRow: 'header',
      gridTemplateRows: '[header-start] 5rem [title-start] auto [title-end lede-start] auto [lede-end] 3.5rem [header-end]',
      gridTemplateColumns: `[screen-start] ${gutterWidth} [container-start title-start] 1fr [title-end image-start] 0 [image-end container-end] ${gutterWidth} [screen-end]`,
      marginBottom: `calc(-1 * 3.5rem)`,
      height: '200px',
      '::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        zIndex:'-1',
        backgroundImage: 'url(https://conductor.nd.edu/stylesheets/themes/ndt/v3/images/hdr-main-building-800.jpg)',
        backgroundRepeat: 'repeat',
      },
    }} >
      <Heading sx={{ width: '500px', mt: '4rem', ml: '5vw' }} as='h1' variant='pageTitle'>{title}</Heading>
    </div>

  )
}

NDBrandTitleHeader.propTypes = {
  variant: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

NDBrandTitleHeader.defaultProps = {
  variant: 'default',
}

export default NDBrandTitleHeader
