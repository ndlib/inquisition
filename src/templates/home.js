/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Heading, Button } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { I18nextProvider } from 'react-i18next'
import i18next from '@ndlib/gatsby-theme-marble/src/i18n'
import NDBrandLayout from '../components/sharedComponents/NDBrandLayout'
import NDBrandSection from '../components/sharedComponents/NDBrandSection'
import NDBrandLargePageHeader from '../components/sharedComponents/NDBrandLargePageHeader'
import Card from '@ndlib/gatsby-theme-marble/src/components/Shared/Card'
import Seo from '@ndlib/gatsby-theme-marble/src/components/Shared/Seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import CardGroup from '@ndlib/gatsby-theme-marble/src/components/Shared/CardGroup'
import { DISPLAY_GRID } from '@ndlib/gatsby-theme-marble/src/store/actions/displayActions'

const Home = ({ data, location }) => {
  const { file, markdownRemark, collectionFile, essaysFile } = data
  const essaysImage = getImage(essaysFile)
  const image = getImage(file)

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
    <NDBrandLayout location={location} pageHeader={<NDBrandLargePageHeader
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
        <NDBrandSection>
          <p dangerouslySetInnerHTML={{ __html: markdownRemark.frontmatter.contentTop }} />
        </NDBrandSection>
        <NDBrandSection variant='fullBleedLight' sx={{ '& div.sectionImage': { flex: '0 0 370px' } }} image={(<GatsbyImage image={essaysImage} alt=''loading='lazy' objectFit='fill' />)}>
          <Heading as='h2' variant='sectionTitle'>
                  Themeatic Inquistion Resources
          </Heading>
          <p dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />

          <Button variant='primary' to='/'><Link to='/search'>Browse Themes</Link></Button>
        </NDBrandSection>
        <NDBrandSection variant='fullBleed' sx={{ '& div.sectionContent': { maxWidth: 'inherit' } }} >
          <Heading as='h2' variant='sectionTitle'>
                Featured Items
          </Heading>
          <CardGroup defaultDisplay={DISPLAY_GRID} toggleGroup='essays-page' allowToggle={false}>
            {featuredItems}
          </CardGroup>
        </NDBrandSection>

        <NDBrandSection>
          <Heading as='h2' variant='sectionTitle'>
          Additional Resources
          </Heading>
          <ul sx={{ '& li': { py: '3px' }, variant: 'links.vertical' }}>
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
        </NDBrandSection>
      </I18nextProvider>
    </NDBrandLayout>
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
