/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { I18nextProvider } from 'react-i18next'
import i18next from '@ndlib/gatsby-theme-marble/src/i18n'
import Layout from '../components/layouts/Default'
import Card from '@ndlib/gatsby-theme-marble/src/components/Shared/Card'
import Seo from '@ndlib/gatsby-theme-marble/src/components/Internal/Seo'
import DisplayViewToggle from '@ndlib/gatsby-theme-marble/src/components/Internal/DisplayViewToggle'

const Essays = ({ data, location }) => {
  const { allMarkdownRemark } = data
  const browseLinks = allMarkdownRemark.edges.map(item => {
    return (<Card
      key={item.node.frontmatter.marbleId}
      label={item.node.frontmatter.essayTitle}
      image={item.node.frontmatter.thumbnail}
      target={item.node.frontmatter.slug + '/essay'}
    >
      {item.node.frontmatter.pullQuote }
    </Card>)
  })
  return (
    <Layout
      location={location}
      title='Essays'
    >
      <Seo
        data={data}
        location={location}
      />
      <I18nextProvider i18n={i18next}>
        <section>
          <DisplayViewToggle defaultDisplay='list'>
            {browseLinks}
          </DisplayViewToggle>
        </section>
      </I18nextProvider>
    </Layout>
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
            pullQuote
            thumbnail
            slug
            summary
          }
        }
      }
    }
  }

`
