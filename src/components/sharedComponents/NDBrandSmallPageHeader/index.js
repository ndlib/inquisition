/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import { jsx, Heading } from 'theme-ui'

export const NDBrandSmallPageHeader = ({ location, variant, title }) => {
  const gutterWidth = '5vw'

  return (
    <div id='page-header' variant={`pageHeaders.${variant}`} sx={{
      position: 'relative',
      display: 'grid',
      gridTemplateRows: '[header-start] 5rem [title-start] auto [title-end lede-start] auto [lede-end] 3.5rem [header-end]',
      gridTemplateColumns: `[screen-start] ${gutterWidth} [container-start title-start] 1fr [title-end image-start] 2fr [image-end container-end] ${gutterWidth} [screen-end]`,
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
        gridRow: 'header-start/title-end',
      },
    }}>
      <Heading as='h1' variant='pageTitle' sx={{ gridColumn: 'title', gridRow: 'title', alignSelf: 'flex-end' }}>
        {title}
      </Heading>
      <div sx={{
        gridRow: 'title-start/header-end',
        gridColumn: 'image-start/screen-end',
      }}>
      Img
      </div>
    </div>
  )
}

NDBrandSmallPageHeader.propTypes = {
  variant: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  title: PropTypes.string,
}

NDBrandSmallPageHeader.defaultProps = {
  variant: 'default',
}

export default NDBrandSmallPageHeader
