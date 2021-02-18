import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import queryString from 'query-string'
import Layout from '../components/layouts/Default'
import Seo from '@ndlib/gatsby-theme-marble/src/components/Internal/Seo'

export const MarbleItemPage = ({ data, location }) => {
  // use ?debug=true to render graphQL data at end of page
  const { debug } = queryString.parse(location.search)
  return (
    <Layout location={location} title={data.markdownRemark.frontmatter.title}>
      <Seo
        data={data}
        location={location}
      />
      <section>
        <div>{data.markdownRemark.frontmatter.summary}</div>
      </section>
      <section>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </section>
      <section>
        <hr />
        <p>To cite this essay: </p>
        <p>
          {data.markdownRemark.frontmatter.author}. &quot;{data.markdownRemark.frontmatter.title}.&quot;
          <em>Hesburgh Libraries of Notre Dame, Department of Rare Books and Special Collections</em>. University of Notre Dame,
          {data.markdownRemark.frontmatter.citationYear}.&lt;https://inquisition.library.nd.edu/{data.markdownRemark.frontmatter.slug}&gt;
        </p>
      </section>
      {
        debug ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : null
      }
    </Layout>
  )
}
MarbleItemPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default MarbleItemPage

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        slug
        summary
        author
        featuredItems
        citationYear
      }
    }
  }
`
