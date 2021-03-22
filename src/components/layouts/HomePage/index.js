/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, BaseStyles, Flex, Container } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { withI18nTranslation } from 'i18n/withI18nTranslation'
import NDBrandNavigation from '../../sharedComponents/NDBrandNavigation'
import SearchBox from '@ndlib/gatsby-theme-marble/src/components/Shared/SearchBox'
import App from '../../siteapp'
import FooterWrapper from '../../sharedComponents/FooterWrapper'
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
  // save backgroundColor "#d8c8c8"
  return (
    <Container>
      <App location={location}>
        <NDBrandNavigation location={location} topLeftLogo={<ClickableRBSCLogoWhite />}>
          <div sx={sx.headerWrapper}>
            <Flex sx={{ width: '100%', borderBottom: '1px solid #6A4422', boxShadow: '5px 0px 5px #432e21', backgroundColor: '#c2a397', height: '330px', justifyContent: 'center', '& picture': { borderRight: '3px solid rgb(92 73 49 / 50%)', borderLeft: '3px solid rgb(92 73 49 / 50%)' } }}>
              <GatsbyImage image={image} alt=''loading='eager' />
            </Flex>
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
          <div>
            <ClickableRBSCLogoWhite />
            <p>
              <address>
            © 2020 University of Notre Dame <br />
              Notre Dame, IN 46556 USA
              </address>

              <a href='https://library.nd.edu/contact-us#rbsc'>Contact Us</a> <br />
              <a href='https://www.nd.edu/about/accessibility/'>Accessability</a>
            </p>
          </div>
        </FooterWrapper>
      </App>
    </Container>
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
