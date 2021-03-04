/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import { jsx, Grid, Box } from 'theme-ui'
import Menu from '@ndlib/gatsby-theme-marble/src/components/Shared/Menu'
import sx from './sx'
import theme from '../../../gatsby-plugin-theme-ui'
import ndLogo from '@ndlib/gatsby-theme-marble/src/assets/logos/ND_mark_white.svg'
// import ClickableNDLogo from '../ClickableNDLogo'

export const FooterWrapper = ({ location, children }) => {
  return (
    <footer sx={theme.styles.Footer}>
      <Grid columns={[3, '33% 34% 33%']}>
        <Box>
          {children}
        </Box>
        <Box>
          <Menu menu='footer' />
        </Box>
        <Box>
          <ClickableNDLogo />
        </Box>
      </Grid>
    </footer>
  )
}

FooterWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default FooterWrapper
