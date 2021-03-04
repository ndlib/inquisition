/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, NavLink, Box, Grid, Image, Flex } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'
import typy from 'typy'
import PropTypes from 'prop-types'
import ndLogo from '@ndlib/gatsby-theme-marble/src/assets/logos/ND_mark_white.svg'
import WordMark from 'components/Layout/PageWrapper/NavigationHeader/WordMark'
import sx from './sx'
import theme from '../../../gatsby-plugin-theme-ui'
import { StaticImage } from 'gatsby-plugin-image'

export const menuQuery = graphql`
  query {
    menusJson(id: {eq: "top"}) {
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

export const NDBrandNavigation = ({ location, children, logoTop, variant }) => {
  const { menusJson } = useStaticQuery(menuQuery)
  const menu = typy(menusJson, 'items').safeArray
  if (theme.styles.NDBrandNavigationBar.backgroundColor) {
    sx.triangleTopright.borderTopColor = theme.styles.NDBrandNavigationBar.backgroundColor
  }
  return (
    <header sx={{ variant: variant }}>
      <WordMark />
      {children}
      <div sx={{ display: ['none', 'block', 'block'] }} >
        <Grid columns={[2, '80% 20%']} gap={0} sx={{ height: '100px', position: 'absolute', top: 0, width: '100%' }}>
          <Grid columns={[2, '1fr 1fr']} gap={15} sx={{ height: '50px', backgroundColor: 'brandBar', opacity: '0.9', color: 'white' }}>
            <Flex sx={{ alignItems: 'center', height: '50px', paddingLeft: '10px' }}>
              <Image
                sx={{ width: '180px' }}
                src={logoTop}
                alt='Rare Books & Special Collections, Hesburgh Libraries'
              />
            </Flex>
            <Flex as='nav' sx={{ alignItems: 'end', height: '50px', justifyContent: 'end' }}>
              {menu.map(l => {
                return (
                  <Link
                    sx={{ variant: 'links.topnav' }}
                    to={l.link}
                    key={l.id}
                  >{l.label}
                  </Link>)
              })}
            </Flex>
          </Grid>
          <Flex sx={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'brandBar', opacity: '0.9' }}>
            <a href='https://nd.edu'>
              <Image
                src={ndLogo}
                sx={sx.ndLogo}
                alt='University of Notre Dame'
              />
            </a>
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
  logoTop: PropTypes.string,
  variant: PropTypes.string,
}

NDBrandNavigation.defaultProps = {
  variant: 'NDBrandNavigation.primary',
}

export default NDBrandNavigation
