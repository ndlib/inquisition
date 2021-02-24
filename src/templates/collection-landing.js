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
import Card from 'components/Shared/Card'
import ButtonLink from '../components/ButtonLink'
import DisplayViewToggle from '@ndlib/gatsby-theme-marble/src/components/Internal/DisplayViewToggle'

export const EssayPage = ({ data, location }) => {
  // use ?debug=true to render graphQL data at end of page
  const { debug } = queryString.parse(location.search)
  const { allMarkdownRemark, markdownRemark } = data
  const sx = {
    searchAllButtonContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '25px',
    },
  }
  const browseLinks = allMarkdownRemark.edges.map(item => {
    return (<li key={item.node.frontmatter.marbleId}><Link to={item.node.frontmatter.slug}>{item.node.frontmatter.title}</Link></li>)
  })

  const featuredItems = markdownRemark.frontmatter.featuredItems.map((item) => {
    return (<Card
      key={item.link}
      label={item.title}
      image={item.thumbnail}
      target={item.link} />
    )
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
            <p>
              {markdownRemark.frontmatter.summary}
            </p>

            <Link to={markdownRemark.frontmatter.slug + '/essay'}>{`Read Essay: "${markdownRemark.frontmatter.essayTitle}"`}</Link>
          </section>
          <section>
            <h2>Featured Sources</h2>
            <DisplayViewToggle defaultDisplay='list'>
              {featuredItems}
            </DisplayViewToggle>
          </section>

          <div sx={sx.searchAllButtonContainer}>
            <ButtonLink target={`/search?documentcategory[0]=${markdownRemark.frontmatter.marbleTitle}`} title={`Search all sources`} />
          </div>

        </Column>
        <Column>
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
        featuredItems {
          title
          link
          thumbnail
        }
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
