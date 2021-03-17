/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Grid, Flex, Box } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import typy from 'typy'
import PropTypes from 'prop-types'
import WordMark from 'components/Layout/PageWrapper/NavigationHeader/WordMark'
import Menu from '@ndlib/gatsby-theme-marble/src/components/Shared/Menu'
import sx from './sx'
import ClickableNDLogoWhite from '../ClickableNDLogoWhite'

export const menuQuery = graphql`
  query {
    menusJson(id: {eq: "header"}) {
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

export const NDBrandNavigation = ({ location, children, variant, topLeftLogo }) => {
  const { menusJson } = useStaticQuery(menuQuery)
  const menu = typy(menusJson, 'items').safeArray

  return (
    <header sx={{ variant: variant }}>
      <WordMark />
      {children}
      <div sx={{ display: ['none', 'block', 'block'] }} >
        <Grid columns={[2, '80% 20%']} gap={0} sx={{ height: '100px', position: 'absolute', top: 0, width: '100%' }}>
          <Box sx={{ height: '50px', backgroundColor: 'brandBar', opacity: '0.95', color: 'white', justifyContent: 'center' }}>
            <Flex sx={{ height: '50px', width: '100%', paddingRight: '50px', paddingLeft: '10px', paddingTop: '2px', alignItems: 'center', justifyContent: 'space-between' }}>
              {topLeftLogo}
              <Menu variant='header' items={menu} />
            </Flex>
          </Box>
          <Flex sx={{ width: '320', justifyContent: 'center', alignItems: 'center', backgroundColor: 'brandBar', opacity: '0.95', '& img': { width: '180px' } }}>
            <ClickableNDLogoWhite />
          </Flex>
        </Grid>
        <div sx={sx.triangleTopright} />
      </div>
    </header>
  )
}

NDBrandNavigation.propTpyes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  variant: PropTypes.string,
  topLeftLogo: PropTypes.object,
}

NDBrandNavigation.defaultProps = {
  variant: 'NDBrandNavigation.primary',
  topLeftLogo: null,
}

export default NDBrandNavigation
