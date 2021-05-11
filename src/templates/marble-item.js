/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Grid, Box, Heading } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ItemLayout from '@ndlib/gatsby-theme-marble/src/components/Shared/MarbleItem/ItemLayout'
import queryString from 'query-string'
import Seo from '@ndlib/gatsby-theme-marble/src/components/Shared/Seo'
import ReturnToSearch from '@ndlib/gatsby-theme-marble/src/components/Shared/ReturnToSearch'
import NDBrandLayout from '../components/sharedComponents/NDBrandLayout'
import NDBrandSection from '../components/sharedComponents/NDBrandSection'
import NDBrandEmptyPageHeader from '../components/sharedComponents/NDBrandEmptyPageHeader'
import NDBrandBreadcrumbs from '../components/sharedComponents/NDBrandBreadcrumbs'
import InquisitionLeftNav from '../components/InquisitionLeftNav'
import typy from 'typy'

export const MarbleItemPage = ({ data, location }) => {
  // use ?debug=true to render graphQL data at end of page
  const { debug } = queryString.parse(location.search)
  const { marbleItem, allMarbleFile } = data

  return (
    <NDBrandLayout location={location} pageHeader={<NDBrandEmptyPageHeader location={location} />}>
      <Seo
        data={data}
        location={location}
      />
      <Grid sx={{ ml: '5vw', mr: '5vw' }} columns={['100% 0%', '22vw 68vw', '22vw 68vw']}>
        <Box sx={{ mt: '5rem' }}>
          <InquisitionLeftNav location={location} currentPageTitle={typy(marbleItem, 'marbleParent.title').safeString} />
        </Box>
        <NDBrandSection sx={{ pl: '2rem' }}>

          <ReturnToSearch location={location} />
          <Heading as='h1' variant='pageTitle'>{marbleItem.title}</Heading>
          <ItemLayout
            location={location}
            marbleItem={marbleItem}
            allMarbleFile={allMarbleFile}
          />
          {
            debug ? (
              <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : null
          }
        </NDBrandSection>
      </Grid>
    </NDBrandLayout>
  )
}
MarbleItemPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default MarbleItemPage

export const query = graphql`
  query($slug: String!) {
    marbleItem( slug: { eq: $slug } ) {
      id
      slug
      marbleId
      display
      title
      description
      iiifUri
      partiallyDigitized
      metadata {
        label
        urlField
        value
        type
      }
      marbleParent {
        title
        slug
        childrenMarbleItem {
          title
          slug
          childrenMarbleFile {
            fileType
            iiif {
              thumbnail
            }
          }
        }
      }
      childrenMarbleItem {
        title
        slug
        childrenMarbleFile {
          file
          fileType
          iiif {
            thumbnail
            service
            default
          }
        }
        description
        iiifUri
        marbleId
      }
      childrenMarbleFile {
        id
        name
        title
        file
        fileType
        iiif {
          thumbnail
          service
          default
        }
      }
      copyrightRestricted
      citation
    }
    allMarbleFile(
      filter: {marbleParent: {slug: {eq: $slug}}, fileType: {eq: "image"}},
      sort: {fields: sequence, order: ASC},
      limit: 6
    ) {
      nodes {
        sequence
        iiif {
          service
          default
          thumbnail
        }
        local {
          publicURL
          childImageSharp {
            fixed(width: 125, height: 125) {
              src
            }
          }
        }
      }
    }
  }
`
