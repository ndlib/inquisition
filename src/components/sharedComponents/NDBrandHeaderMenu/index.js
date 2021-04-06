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

export const NDBrandHeaderMenu = ({ location, children, variant, topLeftLogo }) => {
  const { menusJson } = useStaticQuery(menuQuery)
  const menu = typy(menusJson, 'items').safeArray

  return (
    null
  )
}

NDBrandHeaderMenu.propTpyes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  variant: PropTypes.string,
  topLeftLogo: PropTypes.object,
}

NDBrandHeaderMenu.defaultProps = {
  variant: 'NDBrandNavigation.primary',
  topLeftLogo: null,
}

export default NDBrandHeaderMenu
