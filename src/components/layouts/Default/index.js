/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, BaseStyles } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { withI18nTranslation } from 'i18n/withI18nTranslation'
import LargeHeaderWrapper from '../../sharedComponents/LargeHeaderWrapper'
import FooterWrapper from '../../sharedComponents/FooterWrapper'
import App from '../../siteapp'
import theme from '../../../gatsby-plugin-theme-ui'
import SearchBox from '@ndlib/gatsby-theme-marble/src/components/Shared/SearchBox'
import headerLogo from '@ndlib/gatsby-theme-marble/src/assets/logos/rbsc-logo.svg'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import sx from './sx'

export const query = graphql`
  query {
    file(relativePath: { eq: "banner.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        gatsbyImageData(
          width: 1600
          height: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )      }
    }
  }
`
export const Layout = ({
  title, // page title to be placed inside main
  children,
  location,
  hideSearch,
}) => {
  const { file } = useStaticQuery(query)
  const image = getImage(file)
  return (
    <div sx={theme.styles.Layout}>
      <App location={location}>
        <LargeHeaderWrapper location={location} logoTop={headerLogo}>
          <div sx={sx.headerWrapper}>
            <GatsbyImage image={image} alt='' />

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
                  {(!hideSearch) ? (<SearchBox location={location} boxLabel='Search Complete Collection' />) : null }
                </div>
              </div>
            </div>
          </div>
        </LargeHeaderWrapper>
        <BaseStyles>
          <main id='mainContent' sx={theme.styles.Main}>
            <h1>{title}</h1>
            <article>
              {children}
            </article>
          </main>
        </BaseStyles>

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
  hideSearch: PropTypes.bool,
}

Layout.defaultProps = {
  title: null,
  hideSearch: false,
}

export default withI18nTranslation(Layout)
