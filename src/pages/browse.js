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
    <Layout
      location={location}
      title='Browse'
    >
      <Seo
        data={data}
        location={location}
      />
      <I18nextProvider i18n={i18next}>
        <section>
          <CardGroup defaultDisplay={DISPLAY_LIST} toggleGroup='browse-page'>
            {browseLinks}
          </CardGroup>
        </section>
      </I18nextProvider>
    </Layout>
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
