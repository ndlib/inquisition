/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Box, Grid, Flex } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { I18nextProvider } from 'react-i18next'
import i18next from '@ndlib/gatsby-theme-marble/src/i18n'
import Layout from '../components/layouts/HomePage'
import ButtonLink from '../components/ButtonLink'
import Seo from '@ndlib/gatsby-theme-marble/src/components/Internal/Seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Home = ({ data, location }) => {
  const { markdownRemark, collectionFile, essaysFile } = data
  const collectionImage = getImage(collectionFile)
  const essaysImage = getImage(essaysFile)

  const buttonSx = {
    position: 'relative',
    bottom: '60px',
    margin: '0 auto',
    width: '100%',
  }

  const additionalResourcesHeader = {
    backgroundColor: '#BA6A71',
    color: 'white !important',
    padding: '10px',
  }

  return (
    <Layout
      location={location}
      title={data.site.siteMetadata.title}
    >
      <Seo
        data={data}
        location={location}
      />
      <I18nextProvider i18n={i18next}>
        <section>
          <Grid columns={[2, '40% 60%']} gap={0} sx={{ }}>
            <Flex sx={{ alignItems: 'center', textAlign: 'center' }}>
              <div dangerouslySetInnerHTML={{ __html: markdownRemark.frontmatter.contentTop }} />
            </Flex>
            <Box sx={{ alignItems: 'center', textAlign: 'center' }}>
              <GatsbyImage image={collectionImage} />
              <div sx={buttonSx}>
                <ButtonLink target='/browse' title='Browse the Collection' />
              </div>
            </Box >
          </Grid>
          <Grid columns={[2, '34% 66%']} gap={0} sx={{ }}>
            <Box sx={{ alignItems: 'center', textAlign: 'center' }}>
              <GatsbyImage image={essaysImage} />
              <div sx={buttonSx}>
                <ButtonLink target='/essays' title='Essays' />
              </div>
            </Box >
            <Box>
              <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
            </Box>
          </Grid>
        </section>
        <section>
          <h2 sx={additionalResourcesHeader}>Additional Resources</h2>
          <p>The bibliographic descriptions and essays found on this site were prepared by Robin Vose, Associate Professor, Department of History at St. Thomas University, Fredericton, New Brunswick, Canada.</p>
          <Link to='/about'>About the Collection and this Digital Project</Link>
          <h3>Additional Resources about the Inquisition</h3>
          <ul>
            <li><Link to='/about'>A Brief History of the Inquisitions</Link></li>
            <li><Link to='/about'>A Timeline of the Inquisitions</Link></li>
            <li><Link to='/about'>Inquisitors-General of the Spanish Inquisition</Link></li>
          </ul>
          <h3>External Resources</h3>
          <ul>
            <li><Link to='/about'>Visiting the Collection and Contact Information</Link></li>
            <li><Link to='/about'>Access to Materials</Link></li>
            <li><Link to='/about'>Hours, Location & Contact Information</Link></li>
          </ul>
        </section>
      </I18nextProvider>
    </Layout>
  )
}

Home.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}
export default Home

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    markdownRemark(frontmatter: {slug: {eq: "/"}}) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        slug
        summary
        contentTop
        contentTopCard {
          link
          image
        }
        contentMiddleCard {
          link
          image
        }
      }
    }
    collectionFile: file(relativePath: { eq: "collection.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        gatsbyImageData(
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )      }
    }
    essaysFile: file(relativePath: { eq: "essays.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        gatsbyImageData(
          width: 300
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )      }
    }
  }
`
