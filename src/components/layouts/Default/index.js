import React from 'react'
import PropTypes from 'prop-types'
import { Layout as ThemeLayout } from 'theme-ui'
import { withI18nTranslation } from 'i18n/withI18nTranslation'
import SmallHeaderWrapper from '../../sharedComponents/SmallHeaderWrapper'
import FooterWrapper from '../../sharedComponents/FooterWrapper'
import Menu from 'components/Shared/Menu'
import { Link } from 'gatsby'
import App from '../../siteapp'
import ArticleContentWrapper from '../../sharedComponents/ArticleContentWrapper'

export const Layout = ({
  title, // page title to be placed inside main
  children,
  location,
}) => {
  return (
    <ThemeLayout>
      <App location={location}>
        <SmallHeaderWrapper location={location} menuObject={Menu}>
          <div>
            <h1><Link to='/'>Inquisitio</Link></h1>
          </div>
        </SmallHeaderWrapper>

        <ArticleContentWrapper
          title={title}
          location={location}
        >
          {children}
        </ArticleContentWrapper>
        <FooterWrapper location={location}>
          <div>Footer!</div>
        </FooterWrapper>
      </App>
    </ThemeLayout>
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
