/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Heading } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { I18nextProvider } from 'react-i18next'
import i18next from '@ndlib/gatsby-theme-marble/src/i18n'
import InquisitionLayout from '../components/InquisitionLayout'
import NDBrandSection from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Section'
import NDBrandBreadcrumbs from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Breadcrumbs'

import InquisitionLeftNav from '../components/InquisitionLeftNav'
import NDBrandSectionLeftNav from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Section/LeftNav'

import Card from '@ndlib/gatsby-theme-marble/src/components/Shared/Card'
import Seo from '@ndlib/gatsby-theme-marble/src/components/Shared/Seo'
import CardGroup from '@ndlib/gatsby-theme-marble/src/components/Shared/CardGroup'
import Html from '@ndlib/gatsby-theme-marble/src/components/Shared/Html'
import { DISPLAY_LIST } from '@ndlib/gatsby-theme-marble/src/store/actions/displayActions'

const Browse = ({ data, location }) => {
  const { allMarkdownRemark } = data

  const browseLinks = allMarkdownRemark.edges.map(item => {
    return (<Card
      key={item.node.frontmatter.marbleId}
      label={item.node.frontmatter.title}
      image={item.node.frontmatter.thumbnail}
      target={item.node.frontmatter.slug}
    ><Html html={item.node.html} /></Card>)
  })
  return (
    <InquisitionLayout
      location={location}
    >
      <Seo
        data={data}
        location={location}
      />

      <I18nextProvider i18n={i18next}>
        <NDBrandSectionLeftNav location={location}>
          <InquisitionLeftNav location={location} />
          <NDBrandSection variant='fullBleedWithSidebar'>
            <NDBrandBreadcrumbs
              currentPageTitle='Themes'
              breadcrumbs={[]}
            />
            <Heading as='h1' variant='pageTitle'>Themes</Heading>
            <CardGroup defaultDisplay={DISPLAY_LIST} toggleGroup='browse-page'>
              {browseLinks}
            </CardGroup>
          </NDBrandSection>
        </NDBrandSectionLeftNav location={location}>
      </I18nextProvider>

    </InquisitionLayout>
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
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "theme"}}}, sort: {fields: frontmatter___sort}) {
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
    menusJson(id: {eq: "historyEssays"}) {
      id
      label
      items {
        id
        label
        link
        icon
        selectedPatterns
      }
    }
  }

`
