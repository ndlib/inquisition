/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import typy from 'typy'
import { jsx, Flex, Paragraph } from 'theme-ui'
import Menu from '@ndlib/gatsby-theme-marble/src/components/Shared/Menu'
import Link from '@ndlib/gatsby-theme-marble/src/components/Shared/Link'
import ClickableNDLogoWhite from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Logos/ClickableNDLogoWhite'
import NDBrandSection from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Section'
import ClickableRBSCLogoWhite from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Logos/ClickableRBSCLogoWhite'

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

export const FooterWrapper = ({ location }) => {
  const { menusJson } = useStaticQuery(menuQuery)
  const menu = typy(menusJson, 'items').safeArray
  const sx = {
    px: '5vw',
    py: '3rem',
    color: 'white',
    backgroundColor: 'primary',
    '& p': {
      fontSize: 3,
    },
    '& a': {
      color: 'white',
    },
    img: {
      margin: '0px',
    },
  }
  return (
    <div>
      <NDBrandSection location={location} variant='fullBleedLight' sx={{ py: '3rem', mb: 0, justifyContent: 'center' }}>
        <Paragraph sx={{ maxWidth: '65rem' }}>
          For more information about the collection, for appointments to view items for research purposes, or for rights and reproductions,
          please email us at <Link to='mailto:rarebooks@nd.edu'>rarebooks@nd.edu</Link> or visit <Link to='https://rarebooks.library.nd.edu/using/'>our website</Link>.
        </Paragraph>
      </NDBrandSection>
      <Flex as='footer' sx={sx}>
        <Flex sx={{ width: '25%', justifyContent: 'center' }}>
          <div>
            <ClickableRBSCLogoWhite />
            <address sx={{ py: '1rem' }}>
          © 2020 University of Notre Dame <br />
            Notre Dame, IN 46556 USA
            </address>
            <Link to='https://library.nd.edu/contact-us#rbsc'>Contact Us</Link> <br />
            <Link to='https://www.nd.edu/about/accessibility/'>Accessability</Link>
          </div>
        </Flex>
        <Flex sx={{ justifyContent: 'center', width: '50%' }}>
          <Menu variant='footer' location={location} items={menu} />
        </Flex>
        <Flex sx={{ width: '25%', justifyContent: 'center' }}>
          <ClickableNDLogoWhite />
        </Flex>
      </Flex>
    </div>
  )
}

FooterWrapper.propTypes = {
  logo: PropTypes.node,
  location: PropTypes.object.isRequired,
}

export default FooterWrapper
