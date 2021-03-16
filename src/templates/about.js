/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Grid, Box } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import queryString from 'query-string'
import Layout from '../components/layouts/Default'
import Seo from '@ndlib/gatsby-theme-marble/src/components/Shared/Seo'

export const EssayPage = ({ data, location }) => {
  // use ?debug=true to render graphQL data at end of page
  const { debug } = queryString.parse(location.search)

  return (
    <Layout location={location} title={data.markdownRemark.frontmatter.title}>
      <Seo
        data={data}
        location={location}
      />
      {
        debug ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : null
      }
      <Grid columns={[2, '67% 33%']}>
        <Box>
          <section>
            <div>{data.markdownRemark.frontmatter.summary}</div>
          </section>
          <section>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          </section>
        </Box>
        <Box />
      </Grid>
    </Layout>
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
