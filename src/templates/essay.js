/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Box, Grid, Heading } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import queryString from 'query-string'
import NDBrandLayout from '../components/sharedComponents/NDBrandLayout'
import NDBrandSection from '../components/sharedComponents/NDBrandSection'
import NDBrandEmptyPageHeader from '../components/sharedComponents/NDBrandEmptyPageHeader'
import NDBrandBreadcrumbs from '../components/sharedComponents/NDBrandBreadcrumbs'
import InquisitionLeftNav from '../components/InquisitionLeftNav'

import Seo from '@ndlib/gatsby-theme-marble/src/components/Shared/Seo'
import Card from '@ndlib/gatsby-theme-marble/src/components/Shared/Card'

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
    <NDBrandLayout location={location} pageHeader={<NDBrandEmptyPageHeader location={location} />}>
      <Seo
        data={data}
        location={location}
      />
      {
        debug ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : null
      }
      <Grid sx={{ ml: '5vw', mr: '5vw' }} columns={['100% 0%', '22vw 68vw', '22vw 68vw']}>
        <Box sx={{ mt: '5rem' }}>
          <InquisitionLeftNav location={location} />
        </Box>
        <Box>
          <NDBrandSection sx={{ pl: '2rem' }}>
            <NDBrandBreadcrumbs
              currentPageTitle={markdownRemark.frontmatter.title}
              breadcrumbs={breadcrumbs}
            />
            <Heading as='h1' variant='pageTitle'>{markdownRemark.frontmatter.title}</Heading>
            <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
            <hr />
            <p>To cite this essay: </p>
            <p>
              {markdownRemark.frontmatter.author}. &quot;{markdownRemark.frontmatter.title}.&quot;
              <em>Hesburgh Libraries of Notre Dame, Department of Rare Books and Special Collections</em>. University of Notre Dame,
              {markdownRemark.frontmatter.citationYear}.&lt;https://inquisition.library.nd.edu/{markdownRemark.frontmatter.slug}&gt;
            </p>
          </NDBrandSection>
        </Box>
      </Grid>
    </NDBrandLayout>
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
