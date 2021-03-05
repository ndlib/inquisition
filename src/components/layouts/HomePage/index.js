/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, BaseStyles, NavLink, Box, Grid, Image, Flex, Container } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { withI18nTranslation } from 'i18n/withI18nTranslation'
import NDBrandNavigation from '../../sharedComponents/NDBrandNavigation'
import SearchBox from '@ndlib/gatsby-theme-marble/src/components/Shared/SearchBox'
import App from '../../siteapp'
import FooterWrapper from '../../sharedComponents/FooterWrapper'
import headerLogo from '@ndlib/gatsby-theme-marble/src/assets/logos/rbsc-logo-2.svg'
import theme from '../../../gatsby-plugin-theme-ui'
import sx from './sx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ClickableRBSCLogoWhite from '../../sharedComponents/ClickableRBSCLogoWhite'

export const query = graphql`
  query {
    file(relativePath: { eq: "banner.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        gatsbyImageData(
          width: 1600
          height: 330
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP, AVIF]
        )      }
    }
  }
`

export const Layout = ({
  children,
  location,
  title,
}) => {
  const { file } = useStaticQuery(query)
  const image = getImage(file)
  return (
    <div sx={theme.styles.Layout}>
      <App location={location}>
        <NDBrandNavigation location={location} topLeftLogo={<ClickableRBSCLogoWhite />}>
          <div sx={sx.headerWrapper}>
            <GatsbyImage image={image} alt=''loading='eager' />
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
          </div>
        </NDBrandNavigation>
        <BaseStyles>
          <main sx={theme.styles.Main}>
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
