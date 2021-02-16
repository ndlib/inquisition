/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, BaseStyles } from 'theme-ui'
import PropTypes from 'prop-types'
import { withI18nTranslation } from 'i18n/withI18nTranslation'
import SmallHeaderWrapper from '../../sharedComponents/SmallHeaderWrapper'
import FooterWrapper from '../../sharedComponents/FooterWrapper'
import Menu from 'components/Shared/Menu'
import { Link } from 'gatsby'
import App from '../../siteapp'
import ReturnToSearch from 'components/Internal/ReturnToSearch'
import theme from '../../../gatsby-plugin-theme-ui'

export const Layout = ({
  title, // page title to be placed inside main
  children,
  location,
}) => {
  return (
    <div sx={theme.layout}>
      <App location={location}>
        <SmallHeaderWrapper location={location} menuObject={Menu}>
          <div>
            <h1><Link to='/'>Inquisitio</Link></h1>
          </div>
        </SmallHeaderWrapper>

        <main id='mainContent' sx={theme.main}>
          <ReturnToSearch location={location} />
          <article>
            {title ? <BaseStyles><h1>{title}</h1></BaseStyles> : null}
            {children}
          </article>
        </main>

        <FooterWrapper location={location}>
          <div>Footer!</div>
        </FooterWrapper>
      </App>
    </div>
  )
}

Layout.propTypes = {
  title: PropTypes.node,
  noPadding: PropTypes.bool,
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
  requireLogin: PropTypes.bool,
}

Layout.defaultProps = {
  requireLogin: false,
}

export default withI18nTranslation(Layout)
