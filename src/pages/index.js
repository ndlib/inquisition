/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import typy from 'typy'
import { I18nextProvider } from 'react-i18next'
import i18next from '@ndlib/gatsby-theme-marble/src/i18n'
import Layout from '../components/layouts/HomePage'
import Card from '@ndlib/gatsby-theme-marble/src/components/Shared/Card'
import Seo from '@ndlib/gatsby-theme-marble/src/components/Internal/Seo'
import Column from 'components/Shared/Column'
import MultiColumn from 'components/Shared/MultiColumn'
const sx = {
  topContent: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    height: '300px',
  },
}

const Home = ({ data, location }) => {
  const { allMarbleItem } = data

  return (
    <Layout
      location={location}
    >
      <Seo
        data={data}
        location={location}
      />
      <I18nextProvider i18n={i18next}>
        <section>
          <MultiColumn columns='2'>
            <Column>
              <div sx={sx.topContent}>
                <div>The materials featured on this website are from the University of Notre Dame&apos;s Harley L. McDevitt Inquisition Collection. The collection consists of several hundred items, from printed volumes to unique manuscripts and images, all bearing some relationship to the general theme of &quot;inquisition.&quot;</div>
              </div>
            </Column>
            <Column>
              <Card
                key={allMarbleItem.nodes[0]}
                target='/item/MSHLAT0090_EAD'
                image={typy(allMarbleItem.nodes[0], 'childrenMarbleFile[0].iiif.thumbnail').safeString}
              >
                <Link to='/item/MSHLAT0090_EAD'>Browse the Collection</Link>
              </Card>
            </Column>
          </MultiColumn>
          <MultiColumn columns='3'>
            <Column colSpan='1'>
              <Card
                key={allMarbleItem.nodes[1]}
                target='/essays'
                image={typy(allMarbleItem.nodes[1], 'childrenMarbleFile[0].iiif.thumbnail').safeString}
                type={allMarbleItem.nodes[1].display}
              >
                <Link to='/essays'>Essays</Link>
              </Card>
            </Column>
            <Column colSpan='2'>
              <p>
              This website is intended as a resource for students and researchers interested in histories of inquisitions worldwide. Though primarily focused on the Spanish inquisitions of the fifteenth to nineteenth centuries, attention is also paid to medieval inquisitions as well as to Portuguese, Roman and various New World inquisitions that existed from the sixteenth century onwards.
              </p>
              <p>
              Thematic introductory essays present various types of documents generated by and around these religious tribunals with references given for further reading. Examples of selected documents discussed in the essays are also provided to give viewers a virtual "hands-on" experience of examining such materials in their original format. Overall the goal is to stimulate and facilitate further exploration of inquisition history by familiarizing new generations with its extremely rich yet challenging documentary legacy.
              </p>
            </Column>
          </MultiColumn>
        </section>
        <section>
          <h2>Additional Resources</h2>
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
    allMarbleItem(filter: {marbleId: {in: [
    "aspace_8177830828c061f66a16bb593fa13af1",
    "aspace_ded16ebf7e599898bfefc48a7baf732e"
  ]}}) {
      nodes {
        title
        marbleId
        slug
        display
        childrenMarbleFile {
          iiif {
            thumbnail
          }
          fileType
        }
        metadata {
          label
          type
          value
        }
      }
    }
  }

`
