/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import queryString from 'query-string'
import Layout from '../components/layouts/Default'
import Seo from '@ndlib/gatsby-theme-marble/src/components/Internal/Seo'
import Column from 'components/Shared/Column'
import MultiColumn from 'components/Shared/MultiColumn'
import SearchBase from '@ndlib/gatsby-theme-marble/src/components/Shared/SearchBase'
import SearchResults from '@ndlib/gatsby-theme-marble/src/components/Shared/SearchTools/SearchResults'
import ButtonLink from '../components/ButtonLink'

export const EssayPage = ({ data, location }) => {
  // use ?debug=true to render graphQL data at end of page
  const { debug } = queryString.parse(location.search)
  const { allMarkdownRemark, markdownRemark } = data

  const browseLinks = allMarkdownRemark.edges.map(item => {
    console.log(item)
    return (<li key={item.node.frontmatter.marbleId}><Link to={item.node.frontmatter.slug}>{item.node.frontmatter.title}</Link></li>)
  })
  return (
    <Layout location={location} title={markdownRemark.frontmatter.title}>
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
            <div>{markdownRemark.frontmatter.summary}</div>
            <ButtonLink
              target={`/search?documentcategory[0]=${markdownRemark.frontmatter.marbleTitle}`}
              title={`See all ${markdownRemark.frontmatter.title} in the collection.`} />
          </section>
          <section>
            <h2>Featured Sources</h2>
            <SearchBase defaultSearch={customQueryBuilder(markdownRemark.frontmatter.marbleTitle)}>
              <SearchResults defaultDisplay='list' hitsPerPage={3} showPagination={false} showHeader={false} />
            </SearchBase>
          </section>
        </Column>
        <Column>
          <img src={markdownRemark.frontmatter.thumbnail} alt='' />
          <ButtonLink target={markdownRemark.frontmatter.slug + '/essay'} title={`Essay: "${markdownRemark.frontmatter.essayTitle}"`} />
          <nav>
            <h3>Browse</h3>
            <ul>
              {browseLinks}
            </ul>
          </nav>
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
        essayTitle
        slug
        thumbnail
        marbleId
        marbleTitle
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
            title
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
