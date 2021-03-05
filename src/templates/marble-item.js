import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import CollectionLayout from '@ndlib/gatsby-theme-marble/src/components/Pages/MarbleItem/CollectionLayout'
import ItemLayout from '@ndlib/gatsby-theme-marble/src/components/Pages/MarbleItem/ItemLayout'
import queryString from 'query-string'
import Layout from '../components/layouts/Default'
import Seo from '@ndlib/gatsby-theme-marble/src/components/Shared/Seo'
import ReturnToSearch from '@ndlib/gatsby-theme-marble/src/components/Shared/ReturnToSearch'

export const MarbleItemPage = ({ data, location }) => {
  // use ?debug=true to render graphQL data at end of page
  const { debug } = queryString.parse(location.search)
  const { marbleItem, allMarbleFile } = data

  return (
    <Layout location={location} title={marbleItem.title}>
      <Seo
        data={data}
        location={location}
      />
      <ReturnToSearch location={location} />
      {
        marbleItem.display === 'collection' ? (
          <CollectionLayout
            location={location}
            marbleItem={marbleItem}
          />
        ) : (
          <ItemLayout
            location={location}
            marbleItem={marbleItem}
            allMarbleFile={allMarbleFile}
          />
        )
      }
      {
        debug ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : null
      }
    </Layout>
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
