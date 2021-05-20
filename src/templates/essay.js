/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Paragraph, Heading, Divider } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import queryString from 'query-string'
import InquisitionLayout from '../components/InquisitionLayout'
import NDBrandSectionLeftNav from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Section/LeftNav'
import NDBrandSection from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Section'
import NDBrandBreadcrumbs from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Breadcrumbs'
import InquisitionLeftNav from '../components/InquisitionLeftNav'

import Seo from '@ndlib/gatsby-theme-marble/src/components/Shared/Seo'
import Card from '@ndlib/gatsby-theme-marble/src/components/Shared/Card'
import Html from '@ndlib/gatsby-theme-marble/src/components/Shared/Html'

export const EssayPage = ({ data, location }) => {
  // use ?debug=true to render graphQL data at end of page
  const { debug } = queryString.parse(location.search)
  const { markdownRemark } = data

  const featuredItems = markdownRemark.frontmatter.featuredItems.map((item) => {
    return (<Card
      key={item.link}
      label={item.title}
      image={item.thumbnail}
      target={item.link}
    />
    )
  })

  const breadcrumbs = []
  if (markdownRemark.frontmatter.themeSlug) {
    breadcrumbs.push({ url: '/themes', title: 'Themes' })
    breadcrumbs.push({ url: '/' + markdownRemark.frontmatter.themeSlug, title: markdownRemark.frontmatter.themeTitle })
  }

  return (
    <InquisitionLayout
      location={location}
    >
      <Seo
        data={data}
        location={location}
      />
      {
        debug ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : null
      }
      <NDBrandSectionLeftNav location={location}>
        <InquisitionLeftNav location={location} />
        <NDBrandSection variant='defaultWithSidebar'>
          <NDBrandBreadcrumbs
            currentPageTitle={markdownRemark.frontmatter.title}
            breadcrumbs={breadcrumbs}
          />
          <Heading as='h1' variant='pageTitle'>{markdownRemark.frontmatter.title}</Heading>
          <Html html={markdownRemark.html} />
          <Divider />
          <Paragraph>To cite this essay: </Paragraph>
          <Paragraph>
            {markdownRemark.frontmatter.author}. &quot;{markdownRemark.frontmatter.title}.&quot;
            <em>Hesburgh Libraries of Notre Dame, Department of Rare Books and Special Collections</em>. University of Notre Dame,
            {markdownRemark.frontmatter.citationYear}.&lt;https://inquisition.library.nd.edu/{markdownRemark.frontmatter.slug}&gt;
          </Paragraph>
        </NDBrandSection>
      </NDBrandSectionLeftNav location={location}>
    </InquisitionLayout>
  )
}
EssayPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default EssayPage

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        marbleTitle
        essayTitle
        thumbnail
        slug
        summary
        author
        citationYear
        themeTitle
        themeSlug
        featuredItems {
          title
          link
          thumbnail
        }
      }
    }
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "theme"}}}, sort: {fields: frontmatter___sort}) {
      edges {
        node {
          id
          frontmatter {
            title
            marbleId
            slug
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
