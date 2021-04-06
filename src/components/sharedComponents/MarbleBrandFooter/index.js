/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import typy from 'typy'
import { jsx, Flex, Box } from 'theme-ui'
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

export const FooterWrapper = ({ location, logo }) => {
  const { menusJson } = useStaticQuery(menuQuery)
  const menu = typy(menusJson, 'items').safeArray

  return (
    <Flex as='footer' sx={theme.styles.Footer}>
      <Flex sx={{ width: '25%', justifyContent: 'center' }}>
        <div>
          {logo}
          <p>
            <address>
        © 2020 University of Notre Dame <br />
          Notre Dame, IN 46556 USA
            </address>

            <a href='https://library.nd.edu/contact-us#rbsc'>Contact Us</a> <br />
            <a href='https://www.nd.edu/about/accessibility/'>Accessability</a>
          </p>
        </div>
      </Flex>
      <Flex sx={{ justifyContent: 'center', width: '50%' }}>
        <Menu variant='footer' items={menu} />
      </Flex>
      <Flex sx={{ width: '25%', justifyContent: 'center' }}>
        <ClickableNDLogoWhite />
      </Flex>
    </Flex>
  )
}

FooterWrapper.propTypes = {
  logo: PropTypes.node,
  location: PropTypes.object.isRequired,
}

export default FooterWrapper
