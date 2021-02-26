/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, BaseStyles } from 'theme-ui'
import PropTypes from 'prop-types'
import { withI18nTranslation } from 'i18n/withI18nTranslation'
import LargeHeaderWrapper from '../../sharedComponents/LargeHeaderWrapper'
import SearchBox from '@ndlib/gatsby-theme-marble/src/components/Shared/SearchBox'
import App from '../../siteapp'
import { Link } from 'gatsby'
import FooterWrapper from '../../sharedComponents/FooterWrapper'
import headerLogo from '@ndlib/gatsby-theme-marble/src/assets/logos/rbsc-logo.svg'
import theme from '../../../gatsby-plugin-theme-ui'
import HeroBackground from '../HeroBackground'
import sx from './sx'

export const Layout = ({
  children,
  location,
  title,
}) => {
  const homeMainStyles = theme.styles.Main
  homeMainStyles['marginTop'] = '40px'

  return (
    <div sx={theme.styles.Layout}>
      <App location={location}>
        <LargeHeaderWrapper location={location} logoTop={headerLogo}>
          <HeroBackground />
          <div sx={sx.searchContainer}>
            <div sx={sx.searchBox}>
              <SearchBox location={location} boxLabel='Search Complete Collection' />
            </div>
          </div>
          <div sx={sx.titleContainer}>
            <div sx={sx.titleBox}>
              <h1 sx={sx.title}>{title}</h1>
              <blockquote sx={sx.headingBlockquote}>
                manuscript and print sources for the study of Inquisition history
              </blockquote>
            </div>
          </div>
        </LargeHeaderWrapper>
        <BaseStyles>
          <main sx={homeMainStyles}>
            {children}
          </main>
        </BaseStyles>
        <FooterWrapper location={location}>
          <a href='https://rarebooks.library.nd.edu'>
            <img
              src={headerLogo}
              sx={{}}
              alt='Rare Books & Special Collections, Hesburgh Libraries'
            /></a>
          <p>
            © 2020 University of Notre Dame
            Notre Dame, IN 46556 USA

          </p>

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
