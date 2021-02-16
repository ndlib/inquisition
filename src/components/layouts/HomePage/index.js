import React from 'react'
import PropTypes from 'prop-types'
import { Layout as ThemeLayout } from 'theme-ui'
import { withI18nTranslation } from 'i18n/withI18nTranslation'
import LargeHeaderWrapper from '../../sharedComponents/LargeHeaderWrapper'
import SearchBox from 'components/Shared/SearchBox'
import Menu from 'components/Shared/Menu'
import { Link } from 'gatsby'
import App from '../../siteapp'
import FooterWrapper from '../../sharedComponents/FooterWrapper'

export const Layout = ({
  children,
  location,
}) => {
  return (
    <ThemeLayout>
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
    </ThemeLayout>
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
