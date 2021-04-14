/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Heading } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { I18nextProvider } from 'react-i18next'
import i18next from '@ndlib/gatsby-theme-marble/src/i18n'
import NDBrandLayout from '../components/sharedComponents/NDBrandLayout'
import NDBrandSection from '../components/sharedComponents/NDBrandSection'

import Card from '@ndlib/gatsby-theme-marble/src/components/Shared/Card'
import Seo from '@ndlib/gatsby-theme-marble/src/components/Shared/Seo'
import CardGroup from '@ndlib/gatsby-theme-marble/src/components/Shared/CardGroup'
import { DISPLAY_LIST } from '@ndlib/gatsby-theme-marble/src/store/actions/displayActions'

const Browse = ({ data, location }) => {
  const { allMarkdownRemark } = data
  const browseLinks = allMarkdownRemark.edges.map(item => {
    return (<Card
      key={item.node.frontmatter.marbleId}
      label={item.node.frontmatter.title}
      image={item.node.frontmatter.thumbnail}
      target={item.node.frontmatter.slug}
    >{item.node.frontmatter.summary}</Card>)
  })
  return (
    <NDBrandLayout
      location={location}
      pageHeader={<div sx={{
        height: '100px',
        '::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          zIndex:'-1',
          backgroundImage: 'url(https://conductor.nd.edu/stylesheets/themes/ndt/v3/images/hdr-main-building-800.jpg)',
          backgroundRepeat: 'repeat',
        },
      }} />}
    >
      <Seo
        data={data}
        location={location}
      />

      <I18nextProvider i18n={i18next}>
        <NDBrandSection>
          <Heading as='h2'>Themes</Heading>
          <CardGroup defaultDisplay={DISPLAY_LIST} toggleGroup='browse-page'>
            {browseLinks}
          </CardGroup>
        </NDBrandSection>
      </I18nextProvider>
    </NDBrandLayout>
  )
}

Browse.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}
export default Browse

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "essay"}}}, sort: {fields: frontmatter___sort}) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            thumbnail
            slug
            summary
          }
        }
      }
    }
  }

`