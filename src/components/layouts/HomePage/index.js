/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { withI18nTranslation } from 'i18n/withI18nTranslation'
import LargeHeaderWrapper from '../../sharedComponents/LargeHeaderWrapper'
import SearchBox from 'components/Shared/SearchBox'
import { Link } from 'gatsby'
import App from '../../siteapp'
import FooterWrapper from '../../sharedComponents/FooterWrapper'
import theme from '../../../gatsby-plugin-theme-ui'
import HeroBackground from '../HeroBackground'
import sx from './sx'

export const Layout = ({
  children,
  location,
}) => {
  return (
    <div sx={theme.styles.Layout}>
      <App location={location}>
        <LargeHeaderWrapper location={location}>
          <HeroBackground />
          <div sx={sx.searchContainer}>
            <div sx={sx.searchBox}>
              <SearchBox />
            </div>
          </div>
          <div sx={sx.titleContainer}>
            <div sx={sx.titleBox}>
              <h1><Link to='/'>Inquisitio</Link></h1>
              <blockquote sx={sx.headingBlockquote}>
              manuscript and print sources for the study of Inquisition history
              </blockquote>
            </div>
          </div>
        </LargeHeaderWrapper>
        <main sx={theme.styles.Main}>
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
