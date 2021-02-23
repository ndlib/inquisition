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
  console.log(data)
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
            <Link to={data.markdownRemark.frontmatter.slug + '/essay'}>Read More</Link>
          </section>
          <section>
            <h2>Featured Sources</h2>
            <SearchBase defaultSearch={customQueryBuilder(data.markdownRemark.frontmatter.marbleTitle)}>
              <SearchResults defaultDisplay='list' hitsPerPage={3} showPagination={false} showHeader={false} />
            </SearchBase>
            <Link to={`/search?documentcategory[0]=${data.markdownRemark.frontmatter.marbleTitle}`}>See all {data.markdownRemark.frontmatter.title} in the collection.</Link>
          </section>
        </Column>
        <Column>
          <ButtonLink
            target={`/search?documentcategory[0]=${data.markdownRemark.frontmatter.marbleTitle}`}
            title={`See all ${data.markdownRemark.frontmatter.title} in the collection.`} />

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
        thumbnail
        marbleId
        marbleTitle
        summary
        author
        citationYear
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
