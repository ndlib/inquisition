/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, Grid, Box, Flex, Heading } from 'theme-ui'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import queryString from 'query-string'
import NDBrandLayout from '../components/sharedComponents/NDBrandLayout'
import NDBrandSection from '../components/sharedComponents/NDBrandSection'

import Seo from '@ndlib/gatsby-theme-marble/src/components/Shared/Seo'
import Card from 'components/Shared/Card'
import InquisitionButtonLink from '../components/InquisitionButtonLink'
import CardGroup from '@ndlib/gatsby-theme-marble/src/components/Shared/CardGroup'
import Menu from '@ndlib/gatsby-theme-marble/src/components/Shared/Menu'
import { DISPLAY_LIST } from '@ndlib/gatsby-theme-marble/src/store/actions/displayActions'

export const EssayPage = ({ data, location }) => {
  // use ?debug=true to render graphQL data at end of page
  const { debug } = queryString.parse(location.search)
  const { markdownRemark, allMarkdownRemark } = data

  const menuItems = allMarkdownRemark.edges.map(l => {
    return { id: l.node.frontmatter.title, label: l.node.frontmatter.title, link: l.node.frontmatter.slug }
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
    <NDBrandLayout location={location} title={markdownRemark.frontmatter.title}>
      <Seo
        data={data}
        location={location}
      />
      {
        debug ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : null
      }
      <Grid columns={['100% 0%', '67% 33%', '67% 33%']}>
        <NDBrandSection>
          <Heading as='h1'>{markdownRemark.frontmatter.title}</Heading>
          <p>
            {markdownRemark.frontmatter.summary}
          </p>

          <Link to={markdownRemark.frontmatter.slug + '/essay'}>{`Read Essay: "${markdownRemark.frontmatter.essayTitle}"`}</Link>

          <Heading as='h2'>Featured Sources</Heading>
          <CardGroup defaultDisplay={DISPLAY_LIST} toggleGroup='collection-landing'>
            {featuredItems}
          </CardGroup>
          <Flex sx={{ justifyContent: 'center', '& button': { marginTop: '25px' } }}>
            <InquisitionButtonLink target={`/search?documentcategory[0]=${markdownRemark.frontmatter.marbleTitle}`} title={`Search all sources`} />
          </Flex>

        </NDBrandSection>
        <Box>
          <Menu variant='vertical' items={menuItems} label='Categories' />
        </Box>
      </Grid>
    </NDBrandLayout>
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
