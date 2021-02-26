/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { I18nextProvider } from 'react-i18next'
import i18next from '@ndlib/gatsby-theme-marble/src/i18n'
import Layout from '../components/layouts/HomePage'
import ButtonLink from '../components/ButtonLink'
import Seo from '@ndlib/gatsby-theme-marble/src/components/Internal/Seo'
import Column from 'components/Shared/Column'
import MultiColumn from 'components/Shared/MultiColumn'
import collectionImage from '../assets/images/collection.jpg'
import essayImage from '../assets/images/essays.jpg'

const sx = {
  topContent: {
    display: 'inline-block',
    textAlign: 'center',
    width: '80%',
    margin: 'auto',
  },
  topContentContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
  },
}

const Home = ({ data, location }) => {
  const { markdownRemark } = data
  const topSx = {
    backgroundImage: `url(${collectionImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '400px',
    display: 'flex',
    justifyContent: 'baseline',
    textAlign: 'center',
    alignItems: 'center',
    position: 'relative',
  }
  const bottomSx = {
    backgroundImage: `url(${essayImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '400px',
    display: 'flex',
    justifyContent: 'baseline',
    textAlign: 'center',
    alignItems: 'center',
    position: 'relative',
  }
  const buttonSx = {
    position: 'absolute',
    bottom: '20px',
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
          <MultiColumn columns='2'>
            <Column>
              <div sx={sx.topContentContainer}>
                <div sx={sx.topContent} dangerouslySetInnerHTML={{ __html: markdownRemark.frontmatter.contentTop }} />
              </div>
            </Column>
            <Column>
              <div sx={topSx}>
                <div sx={buttonSx}>
                  <ButtonLink target='/browse' title='Browse the Collection' />
                </div>
              </div>
            </Column>
          </MultiColumn>
          <MultiColumn columns='3'>
            <Column colSpan='1'>
              <div sx={bottomSx}>
                <div sx={buttonSx}>
                  <ButtonLink target='/essays' title='Essays' />
                </div>
              </div>
            </Column>
            <Column colSpan='2'>
              <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
            </Column>
          </MultiColumn>
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
  }
`
