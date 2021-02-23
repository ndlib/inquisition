/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, BaseStyles } from 'theme-ui'
import PropTypes from 'prop-types'
import { withI18nTranslation } from 'i18n/withI18nTranslation'
import SmallHeaderWrapper from '../../sharedComponents/SmallHeaderWrapper'
import FooterWrapper from '../../sharedComponents/FooterWrapper'
import { Link } from 'gatsby'
import App from '../../siteapp'
import ReturnToSearch from 'components/Internal/ReturnToSearch'
import theme from '../../../gatsby-plugin-theme-ui'
import SearchBox from '@ndlib/gatsby-theme-marble/src/components/Shared/SearchBox'

export const Layout = ({
  title, // page title to be placed inside main
  children,
  location,
}) => {
  return (
    <div sx={theme.styles.Layout}>
      <BaseStyles>
        <App location={location}>
          <SmallHeaderWrapper location={location}>
            <div>
              <h1><Link to='/'>Inquisitio</Link></h1>
              <SearchBox boxLabel='Search the Collection' />

            </div>
          </SmallHeaderWrapper>

          <main id='mainContent' sx={theme.styles.Main}>
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
      </BaseStyles>
    </div>
  )
}

Layout.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

Layout.defaultProps = {
  title: null,
}

export default withI18nTranslation(Layout)
