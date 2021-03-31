/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import { jsx, Box } from 'theme-ui'

export const NDBrandSectionContent = ({ location, variant, children }) => {
  return (
    <Box as='div' variant={`sectionsContent.${variant}`} sx={{ maxWidth: '65rem', marginLeft: 'auto', marginRight: 'auto', alignItems: 'center' }}>
      {children}
    </Box>
  )
}

NDBrandSectionContent.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
}

NDBrandSectionContent.defaultProps = {
  variant: 'default',
}

export default NDBrandSectionContent
