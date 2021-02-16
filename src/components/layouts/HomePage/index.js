/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { withI18nTranslation } from 'i18n/withI18nTranslation'
import LargeHeaderWrapper from '../../sharedComponents/LargeHeaderWrapper'
import SearchBox from 'components/Shared/SearchBox'
import Menu from 'components/Shared/Menu'
import { Link } from 'gatsby'
import App from '../../siteapp'
import FooterWrapper from '../../sharedComponents/FooterWrapper'
import theme from '../../../gatsby-plugin-theme-ui'

export const Layout = ({
  children,
  location,
}) => {
  return (
    <div sx={theme.layout}>
      <App location={location}>
        <LargeHeaderWrapper location={location} menuObject={Menu}>
          <div>
            <h1><Link to='/'>Inquisitio</Link></h1>
            <SearchBox />
          </div>
        </LargeHeaderWrapper>
        <main>
          {children}
        </main>
        <FooterWrapper location={location}>
          <div>Footer!</div>
        </FooterWrapper>
      </App>
    </div>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

Layout.defaultProps = {
  title: null,
}

export default withI18nTranslation(Layout)
