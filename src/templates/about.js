import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import queryString from 'query-string'
import Layout from '../components/layouts/Default'
import Seo from '@ndlib/gatsby-theme-marble/src/components/Internal/Seo'
import Column from 'components/Shared/Column'
import MultiColumn from 'components/Shared/MultiColumn'

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
      <MultiColumn columns='3'>
        <Column colSpan='2'>
          <section>
            <div>{data.markdownRemark.frontmatter.summary}</div>
          </section>
          <section>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          </section>
        </Column>
        <Column>
          <section>
            <Link to='/search'>See all {data.markdownRemark.frontmatter.title} in the collection.</Link>
          </section>
          <section>
            <h2>Featured Sources</h2>
          </section>
        </Column>
      </MultiColumn>
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
