/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Grid, Box, Flex } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import queryString from 'query-string'
import Layout from '../components/layouts/Default'
import Seo from '@ndlib/gatsby-theme-marble/src/components/Internal/Seo'
import Card from 'components/Shared/Card'
import InquisitionButtonLink from '../components/InquisitionButtonLink'
import DisplayViewToggle from '@ndlib/gatsby-theme-marble/src/components/Internal/DisplayViewToggle'
import Menu from '@ndlib/gatsby-theme-marble/src/components/Shared/Menu'

export const EssayPage = ({ data, location }) => {
  // use ?debug=true to render graphQL data at end of page
  const { debug } = queryString.parse(location.search)
  const { markdownRemark } = data

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
      <Grid columns={[2, '67% 33%']}>
        <Box>
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

          <Flex sx={{ justifyContent: 'center', '& button': { marginTop: '25px' } }}>
            <InquisitionButtonLink target={`/search?documentcategory[0]=${markdownRemark.frontmatter.marbleTitle}`} title={`Search all sources`} />
          </Flex>
        </Box>
        <Box>
          <Menu menu='browse' />
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
  }
`
