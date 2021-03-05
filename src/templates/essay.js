/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Box, Grid, Flex } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import queryString from 'query-string'
import Layout from '../components/layouts/Default'
import Seo from '@ndlib/gatsby-theme-marble/src/components/Internal/Seo'
import Card from 'components/Internal/Card'
import InquisitionButtonLink from '../components/InquisitionButtonLink'
import Menu from '@ndlib/gatsby-theme-marble/src/components/Internal/Menu'

export const EssayPage = ({ data, location }) => {
  // use ?debug=true to render graphQL data at end of page
  const { debug } = queryString.parse(location.search)
  const { markdownRemark } = data

  const featuredItems = markdownRemark.frontmatter.featuredItems.map((item) => {
    return (<Card
      key={item.link}
      label={item.title}
      image={item.thumbnail}
      target={item.link}
      variant='card.secondary'
    />
    )
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
      <Grid columns={[2, '67% 33%']}>
        <Box>
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
        </Box>
        <Box>
          <section>
            <Menu menu='essays' />
          </section>
          <section>
            <h2>Featured Sources</h2>
            {featuredItems}
          </section>
          <section>
            <Flex sx={{ justifyContent: 'center', '& button': { marginTop: '25px' } }}>
              <InquisitionButtonLink
                target={`/search?documentcategory[0]=${markdownRemark.frontmatter.marbleTitle}`}
                title={`View all sources`} />
            </Flex>
          </section>

        </Box>
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
        marbleTitle
        essayTitle
        thumbnail
        slug
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
  }
`
