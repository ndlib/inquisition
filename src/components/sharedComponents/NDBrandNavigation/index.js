/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Grid, Flex } from 'theme-ui'
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
          <Grid columns={[2, '1fr 1fr']} gap={15} sx={{ height: '50px', backgroundColor: 'brandBar', opacity: '0.95', color: 'white' }}>
            <Flex sx={{ height: '50px', paddingLeft: '50px', paddingTop: '2px' }}>
              {topLeftLogo}
            </Flex>
            <Flex sx={{ height: '50px', justifyContent: 'center', alignItems: 'center' }}>
              <Menu variant='header' items={menu} />
            </Flex>
          </Grid>
          <Flex sx={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'brandBar', opacity: '0.95', '& img': { width: '180px' } }}>
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
