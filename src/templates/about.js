/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Grid, Box, Heading } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import queryString from 'query-string'
import NDBrandLayout from '../components/sharedComponents/NDBrandLayout'
import NDBrandSection from '../components/sharedComponents/NDBrandSection'
import Seo from '@ndlib/gatsby-theme-marble/src/components/Shared/Seo'

export const EssayPage = ({ data, location }) => {
  // use ?debug=true to render graphQL data at end of page
  const { debug } = queryString.parse(location.search)

  return (
    <NDBrandLayout location={location}>
      <Seo
        data={data}
        location={location}
      />
      {
        debug ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : null
      }
      <NDBrandSection>
        <Heading as='h1'>{data.markdownRemark.frontmatter.title}</Heading>
        <section>
          <div>{data.markdownRemark.frontmatter.summary}</div>
        </section>
        <section>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </section>
      </NDBrandSection>
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
        slug
        summary
        author
        citationYear
      }
    }
  }
`
