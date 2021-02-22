import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import queryString from 'query-string'
import Layout from '../components/layouts/Default'
import Card from '@ndlib/gatsby-theme-marble/src/components/Shared/Card'
import Seo from '@ndlib/gatsby-theme-marble/src/components/Internal/Seo'
import Column from 'components/Shared/Column'
import MultiColumn from 'components/Shared/MultiColumn'

export const EssayPage = ({ data, location }) => {
  // use ?debug=true to render graphQL data at end of page
  const { debug } = queryString.parse(location.search)
  const featuredItems = data.markdownRemark.frontmatter.featuredItems.map(item => {
    return (<Card
      key={item.link}
      target={item.link}
      image={item.image}
      label={item.title}
    />)
  })
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
          <section>
            <hr />
            <p>To cite this essay: </p>
            <p>
              {data.markdownRemark.frontmatter.author}. &quot;{data.markdownRemark.frontmatter.title}.&quot;
              <em>Hesburgh Libraries of Notre Dame, Department of Rare Books and Special Collections</em>. University of Notre Dame,
              {data.markdownRemark.frontmatter.citationYear}.&lt;https://inquisition.library.nd.edu/{data.markdownRemark.frontmatter.slug}&gt;
            </p>
          </section>
        </Column>
        <Column>
          <section>
            <Link to='/search'>See all {data.markdownRemark.frontmatter.title} in the collection.</Link>
          </section>
          <section>
            <h2>Featured Sources</h2>
            {featuredItems}
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
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        slug
        summary
        author
        featuredItems {
          title
          link
          image
        }
        citationYear
      }
    }
  }
`
