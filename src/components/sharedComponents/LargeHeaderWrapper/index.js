/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, NavLink, Box, Grid, Image, Flex } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import typy from 'typy'
import PropTypes from 'prop-types'
import ndLogo from '@ndlib/gatsby-theme-marble/src/assets/logos/ND_mark_white.svg'
import WordMark from 'components/Layout/PageWrapper/NavigationHeader/WordMark'
import sx from './sx'
import theme from '../../../gatsby-plugin-theme-ui'

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

export const LargeHeaderWrapper = ({ location, children, logoTop }) => {
  const { menusJson } = useStaticQuery(menuQuery)
  const menu = typy(menusJson, 'items').safeArray
  if (theme.styles.NDBrandNavigationBar.backgroundColor) {
    sx.triangleTopright.borderTopColor = theme.styles.NDBrandNavigationBar.backgroundColor
  }
  return (
    <header sx={{}}>
      <WordMark />
      {children}
      <div sx={{ display: ['none', 'block', 'block'] }} >
        <Grid columns={[2, '80% 20%']} gap={0} sx={{ height: '100px', position: 'absolute', top: 0, width: '100%' }}>
          <Grid columns={[2, '1fr 1fr']} gap={15} sx={{ height: '50px', ...theme.styles.NDBrandNavigationBar }}>
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
                  <NavLink
                    variant='topnav'
                    sx={{ variant: 'links.nav' }}
                    href={l.link}
                    key={l.id}
                    px={3}
                    py={3}
                  >{l.label}
                  </NavLink>)
              })}
            </Flex>
          </Grid>
          <Flex sx={{ justifyContent: 'center', alignItems: 'center', ...theme.styles.NDBrandNavigationBar }}>
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

LargeHeaderWrapper.propTpyes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  logoTop: PropTypes.string,
}

export default LargeHeaderWrapper
