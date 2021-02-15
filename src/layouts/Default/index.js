import React from 'react'
import PropTypes from 'prop-types'
import { Layout as ThemeLayout } from 'theme-ui'
import { withI18nTranslation } from 'i18n/withI18nTranslation'
import PageContent from 'components/Layout/PageContent'
import SmallHeaderWrapper from '../../sharedComponents/SmallHeaderWrapper'
import FooterWrapper from '../../sharedComponents/FooterWrapper'
import Menu from 'components/Shared/Menu'
import App from '../../app'

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
            <h1>Inquisitio</h1>
          </div>
        </SmallHeaderWrapper>

        <PageContent
          title={title}
          location={location}
        >
          {children}
        </PageContent>
        <FooterWrapper>
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
