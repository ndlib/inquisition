/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Box, Grid, Flex, Text } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { I18nextProvider } from 'react-i18next'
import i18next from '@ndlib/gatsby-theme-marble/src/i18n'
import Layout from '../components/layouts/HomePage'
import Card from '@ndlib/gatsby-theme-marble/src/components/Shared/Card'
import Seo from '@ndlib/gatsby-theme-marble/src/components/Shared/Seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import CardGroup from '@ndlib/gatsby-theme-marble/src/components/Shared/CardGroup'
import { DISPLAY_GRID } from '@ndlib/gatsby-theme-marble/src/store/actions/displayActions'

const Home = ({ data, location }) => {
  const { markdownRemark, collectionFile, essaysFile } = data
  const collectionImage = getImage(collectionFile)
  const essaysImage = getImage(essaysFile)

  const buttonSx = {
    margin: '0 auto',
    width: '100%',
  }

  const featuredItems = markdownRemark.frontmatter.featuredItems.map((item) => {
    return (<Card
      key={item.link}
      label={item.title}
      image={item.thumbnail}
      target={item.link}
    />
    )
  })

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
          <Flex sx={{ flexWrap: 'wrap' }}>
            <div sx={{ width: ['100%', '810px'], px: '20px' }}>
              <p dangerouslySetInnerHTML={{ __html: markdownRemark.frontmatter.contentTop }} />
              <Flex sx={buttonSx}>
                <Link to='/search'>Browse the Collection</Link>
              </Flex>
            </div>
            <div sx={{ width: '200px', display: ['none', 'block', 'block'] }}>
              <GatsbyImage image={collectionImage} alt='' loading='eager' />
            </div>
          </Flex>
          <Flex sx={{ py: '25px', flexWrap: 'wrap' }}>
            <div sx={{ alignItems: 'center', textAlign: 'center', width: ['100%', '200px'] }}>
              <GatsbyImage image={essaysImage} alt='' loading='lazy' />
            </div>
            <div sx={{ px: '20px', width: ['100%', '810px'] }}>
              <h2>Themeatic Inquistion Resources</h2>
              <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
              <div sx={buttonSx}>
                <Link to='/browse'>Browse Inquisition Themes</Link>
              </div>
            </div>
          </Flex>
        </section>
        <section>
          <Box sx={{ backgroundColor: 'gray.0' }}>
            <h2 sx={{ paddingTop: '10px', paddingLeft: '10px' }}>Featured Items</h2>
            <CardGroup defaultDisplay={DISPLAY_GRID} toggleGroup='essays-page' allowToggle={false}>
              {featuredItems}
            </CardGroup>
          </Box>
        </section>
        <section>

          <h2>Additional Resources</h2>
          <ul sx={{ '& li': { py: '3px' } }}>
            <li><Link to='/about'>A Brief History of the Inquisitions</Link></li>
            <li><Link to='/about'>A Timeline of the Inquisitions</Link></li>
            <li><Link to='/about'>Inquisitors-General of the Spanish Inquisition</Link></li>
            <li><Link to='/about'>Introduction to Inquisitorial Manuals</Link></li>
            <li><Link to='/about'>Introduction to inquisition trial transcipts and records</Link></li>
            <li><Link to='/about'>Introduction to the next section titile</Link></li>
            <li><Link to='/about'>Introduction to the next section titile</Link></li>
            <li><Link to='/about'>Introduction to the next section titile</Link></li>
          </ul>

          <p>
                For more information about the collection, for appointments to view items for research purposes, or for rights and reproductions,
                please email us at <a href='mailto:rarebooks@nd.edu'>rarebooks@nd.edu</a> or visit <a href='https://rarebooks.library.nd.edu/using/'>our website</a>.
          </p>

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
        featuredItems {
          title
          link
          thumbnail
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
