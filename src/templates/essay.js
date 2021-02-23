import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import queryString from 'query-string'
import Layout from '../components/layouts/Default'
import Seo from '@ndlib/gatsby-theme-marble/src/components/Internal/Seo'
import Column from 'components/Shared/Column'
import MultiColumn from 'components/Shared/MultiColumn'
import ButtonLink from '../components/ButtonLink'
import SearchBase from '@ndlib/gatsby-theme-marble/src/components/Shared/SearchBase'
import SearchResults from '@ndlib/gatsby-theme-marble/src/components/Shared/SearchTools/SearchResults'

export const EssayPage = ({ data, location }) => {
  // use ?debug=true to render graphQL data at end of page
  const { debug } = queryString.parse(location.search)
  const { allMarkdownRemark, markdownRemark } = data

  const browseLinks = allMarkdownRemark.edges.map(item => {
    return (<li key={item.node.frontmatter.marbleId}><Link to={item.node.frontmatter.slug}>{item.node.frontmatter.essayTitle}</Link></li>)
  })

  return (
    <Layout location={location} title={markdownRemark.frontmatter.essayTitle}>
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
            <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
          </section>
          <section>
            <hr />
            <p>To cite this essay: </p>
            <p>
              {markdownRemark.frontmatter.author}. &quot;{markdownRemark.frontmatter.title}.&quot;
              <em>Hesburgh Libraries of Notre Dame, Department of Rare Books and Special Collections</em>. University of Notre Dame,
              {markdownRemark.frontmatter.citationYear}.&lt;https://inquisition.library.nd.edu/{markdownRemark.frontmatter.slug}&gt;
            </p>
          </section>
        </Column>
        <Column>
          <section>
            <ButtonLink
              target={`/search?documentcategory[0]=${markdownRemark.frontmatter.marbleTitle}`}
              title={`See all ${markdownRemark.frontmatter.title} sources in the collection.`} />
          </section>
          <section>
            <nav>
              <h2>More Essays</h2>
              <ul>
                {browseLinks}
              </ul>
            </nav>
          </section>
          <section>
            <h2>Featured Sources</h2>
            <SearchBase defaultSearch={customQueryBuilder(markdownRemark.frontmatter.marbleTitle)}>
              <SearchResults defaultDisplay='grid' hitsPerPage={3} showPagination={false} showHeader={false} />
            </SearchBase>
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
        marbleTitle
        essayTitle
        thumbnail
        slug
        summary
        author
        citationYear
      }
    }
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "essay"}}}, sort: {fields: frontmatter___sort}) {
      edges {
        node {
          id
          frontmatter {
            essayTitle
            marbleId
            slug
          }
        }
      }
    }
  }
`
const customQueryBuilder = (keyword) => {
  return {
    term: {
      'parent.keyword': keyword,
    },
  }
}
