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
import theme from '../../../gatsby-plugin-theme-ui'
import SearchBox from '@ndlib/gatsby-theme-marble/src/components/Shared/SearchBox'
import HeroBackground from '../HeroBackground'
import headerLogo from '@ndlib/gatsby-theme-marble/src/assets/logos/rbsc-logo.svg'
import sx from './sx'

export const Layout = ({
  title, // page title to be placed inside main
  children,
  location,
}) => {
  return (
    <div sx={theme.styles.Layout}>
      <App location={location}>
        <SmallHeaderWrapper location={location} logoTop={headerLogo}>
          <HeroBackground />
          <div>
            <div sx={sx.titleContainer}>
              <div sx={sx.titleBox}>
                <h1 sx={sx.title}>Inquisitio</h1>
                <blockquote sx={sx.headingBlockquote}>
                manuscript and print sources for the study of Inquisition history
                </blockquote>
              </div>
            </div>
            <div sx={sx.searchContainer}>
              <div sx={sx.searchBox}>
                <SearchBox location={location} boxLabel='Search Complete Collection' />
              </div>
            </div>

          </div>
        </SmallHeaderWrapper>
        <main id='mainContent' sx={theme.styles.Main}>
          <BaseStyles>
            <h1>{title}</h1>
            <article>
              {children}
            </article>
          </BaseStyles>
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
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

Layout.defaultProps = {
  title: null,
}

export default withI18nTranslation(Layout)
