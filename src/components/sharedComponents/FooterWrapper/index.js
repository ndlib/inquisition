/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import typy from 'typy'
import { jsx, Grid, Box } from 'theme-ui'
import Menu from '@ndlib/gatsby-theme-marble/src/components/Shared/Menu'
import theme from '../../../gatsby-plugin-theme-ui'
import ClickableNDLogoWhite from '../ClickableNDLogoWhite'

export const menuQuery = graphql`
  query {
    menusJson(id: {eq: "footer"}) {
      id
      label
      items {
        id
        label
        link
      }
    }
  }
`

export const FooterWrapper = ({ location, children }) => {
  const { menusJson } = useStaticQuery(menuQuery)
  const menu = typy(menusJson, 'items').safeArray

  return (
    <footer sx={theme.styles.Footer}>
      <Grid columns={[3, '33% 34% 33%']}>
        <Box>
          {children}
        </Box>
        <Box>
          <Menu variant='footer' items={menu} />
        </Box>
        <Box sx={{ '& img': { width: '180px' } }}>
          <ClickableNDLogoWhite />
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
