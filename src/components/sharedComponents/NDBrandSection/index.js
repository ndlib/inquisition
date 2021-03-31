/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import { jsx, Grid, Box } from 'theme-ui'

export const NDBrandSection = ({ location, variant, children }) => {
  return (
    <Grid as='section' variant={`sections.${variant}`} sx={{ gridGap: '2rem', marginLeft: 'auto', marginRight: 'auto' }}>
      {children}
    </Grid>
  )
}

NDBrandSection.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
}

NDBrandSection.defaultProps = {
  variant: 'default',
}

export default NDBrandSection
