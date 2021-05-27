/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Heading } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import queryString from 'query-string'
import InquisitionLayout from '../components/InquisitionLayout'
import NDBrandSection from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Section'
import NDBrandBreadcrumbs from '@ndlib/gatsby-theme-marble/src/components/Shared/NDBrand/Breadcrumbs'
import Seo from '@ndlib/gatsby-theme-marble/src/components/Shared/Seo'
import Html from '@ndlib/gatsby-theme-marble/src/components/Shared/Html'

const EssayPage = ({ data, location }) => {
  // use ?debug=true to render graphQL data at end of page
  const { debug } = queryString.parse(location.search)

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
      <NDBrandSection sx={{ pl: '2rem' }}>
        <NDBrandBreadcrumbs
          currentPageTitle='About'
          breadcrumbs={[]}
        />
        <Heading variant='pageTitle' as='h1'>{data.markdownRemark.frontmatter.title}</Heading>
        <section>
          <Html html={data.markdownRemark.frontmatter.summary} />
        </section>
        <section>
          <Html html={data.markdownRemark.html} />
        </section>
      </NDBrandSection>
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
        slug
        summary
        author
        citationYear
      }
    }
  }
`
