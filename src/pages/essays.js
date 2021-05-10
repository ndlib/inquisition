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

const Essays = ({ data, location }) => {
  const { allMarkdownRemark } = data
  const browseLinks = allMarkdownRemark.edges.map(item => {
    return (<Card
      key={item.node.frontmatter.essayTitle}
      label={item.node.frontmatter.essayTitle}
      image={item.node.frontmatter.thumbnail}
      target={item.node.frontmatter.slug + '/essay'}
    >
      {item.node.frontmatter.pullQuote }
    </Card>)
  })
  return (
    <NDBrandLayout
      location={location}
    >
      <Seo
        data={data}
        location={location}
      />
      <I18nextProvider i18n={i18next}>
        <NDBrandSection>
          <Heading as='h2'>Essays</Heading>
          <CardGroup defaultDisplay={DISPLAY_LIST} toggleGroup='essays-page'>
            {browseLinks}
          </CardGroup>
        </NDBrandSection>
      </I18nextProvider>
    </NDBrandLayout>
  )
}

Essays.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}
export default Essays

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
            essayTitle
            summary
            thumbnail
            slug
            summary
          }
        }
      }
    }
  }

`
