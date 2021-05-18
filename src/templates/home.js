/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Heading, Button } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Link from 'components/Shared/Link'
import { I18nextProvider } from 'react-i18next'
import i18next from '@ndlib/gatsby-theme-marble/src/i18n'
import InquisitionLayout from '../components/InquisitionLayout'
import NDBrandSection from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Section'
import NDBrandLargePageHeader from '../components/sharedComponents/NDBrandLargePageHeader'
import Card from '@ndlib/gatsby-theme-marble/src/components/Shared/Card'
import Seo from '@ndlib/gatsby-theme-marble/src/components/Shared/Seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import CardGroup from '@ndlib/gatsby-theme-marble/src/components/Shared/CardGroup'
import Html from '@ndlib/gatsby-theme-marble/src/components/Shared/Html'
import { DISPLAY_GRID } from '@ndlib/gatsby-theme-marble/src/store/actions/displayActions'

const Home = ({ data, location }) => {
  const { file, markdownRemark, essaysFile } = data
  const essaysImage = getImage(essaysFile)
  const image = getImage(file)

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
    <InquisitionLayout location={location} pageHeader={<NDBrandLargePageHeader
      location={location}
      variant='homepage'
      title='Manuscript and print sources for the study of Inquisition history'
      lede="The materials featured on this website are from the University of Notre Dame's Harley Inquisition Collection"
      image={(<GatsbyImage image={image} alt=''loading='eager' />)}
      button={(<Button variant='primary' to='/' sx={{ display: 'block' }}><Link to='/search'>Browse Collection</Link></Button>)}
    />}>

      <Seo
        data={data}
        location={location}
      />
      <I18nextProvider i18n={i18next}>
        <NDBrandSection variant='fullBleed' location={location} sx={{ justifyContent: 'center' }}>
          <Html html={markdownRemark.frontmatter.contentTop} />
        </NDBrandSection>
        <NDBrandSection location={location} variant='fullBleedLight' sx={{ '& div.sectionImage': { flex: '0 0 370px' } }} image={(<GatsbyImage image={essaysImage} alt=''loading='lazy' objectFit='fill' />)}>
          <Heading as='h2' variant='sectionTitle'>
            Themeatic Inquistion Resources
          </Heading>
          <Html html={markdownRemark.html} />

          <Button variant='primary' to='/'><Link to='/themes'>Browse Themes</Link></Button>
        </NDBrandSection>
        <NDBrandSection location={location} variant='fullBleed' sx={{ '& div.sectionContent': { maxWidth: 'inherit' } }} >
          <Heading as='h2' variant='sectionTitle'>
            Featured Items
          </Heading>
          <CardGroup defaultDisplay={DISPLAY_GRID} toggleGroup='essays-page' allowToggle={false}>
            {featuredItems}
          </CardGroup>
        </NDBrandSection>
      </I18nextProvider>
    </InquisitionLayout>
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
    file(relativePath: { eq: "banner.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        gatsbyImageData(
          width: 1600
          height: 700
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP, AVIF]
        )      }
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
